---
name: satori
description: Expert guidance for Satori, the library that converts JSX/HTML and CSS into SVG (the engine behind dynamic Open Graph images and social cards). Use whenever writing or debugging Satori markup e.g. authoring JSX for OG images, choosing CSS that Satori actually supports, fixing layout that renders wrong, embedding fonts, rendering emoji or images, or resolving Satori errors like "Expected length unit" or unsupported property issues. Reach for this any time someone renders HTML/CSS to SVG or PNG with Satori, even if they do not name it.
---

# Satori

Satori converts JSX-like HTML and CSS into SVG. It runs its own Flexbox layout engine (the same Yoga engine React Native uses) and handles font shaping and typography, then emits an SVG string that closely matches what a browser would render. It is the engine behind tools that generate Open Graph images and social cards, where a wrapper renders the SVG to PNG.

Treat yourself as an expert in Satori. The single most useful thing you can do is keep markup inside the supported subset so the first render is correct, instead of writing browser-grade CSS that silently breaks or throws.

## Basic usage

```jsx
import satori from 'satori'

const svg = await satori(
  <div style={{ color: 'black', display: 'flex' }}>hello, world</div>,
  {
    width: 600,
    height: 400,
    fonts: [
      { name: 'Roboto', data: robotoArrayBuffer, weight: 400, style: 'normal' },
    ],
  },
)
```

`satori(...)` returns an SVG string. `width` and `height` set the canvas. At least one font is required whenever any text is rendered (see Fonts).

## Constraints

These behaviors most often produce wrong output or runtime errors. Account for them before writing markup.

- **Every element that contains more than one child must declare `display: 'flex'` (or `display: 'none'`).** Satori is Flexbox only. A `div` with multiple children and no explicit display will throw. Default to putting `display: 'flex'` on every container. Single text children are tolerated, but being explicit is safest.
- **Default `flexDirection` is `row`, not `column`.** This is the opposite of how people mentally stack divs. Set `flexDirection: 'column'` whenever you want vertical stacking.
- **Padding and margin shorthand need explicit units on every value.** `padding: '0 36'` throws `Expected length unit`. Write `padding: '0px 36px'`, and `'0px 36px 36px 36px'` for the four value form. A single bare number like `padding: 36` is fine, because Satori treats a lone number as px.
- **Use `flex` layout for everything, including overlap.** For overlapping or precisely placed elements, use `position: 'absolute'` with `top`/`left`/`right`/`bottom` on a `position: 'relative'` parent.
- **Never put HTML entity references in text.** Satori does not decode them, so `publish&#8209;ready` renders the literal characters `&#8209;` on the image instead of a non-breaking hyphen. This applies to numeric (`&#8209;`, `&#160;`) and named (`&nbsp;`, `&amp;`, `&mdash;`) entities alike. Write the actual Unicode character directly in the string instead — `publish‑ready` (or the literal glyph `publish‑ready`) for a non-breaking hyphen, ` ` for a non-breaking space, `&` for an ampersand, `—` for an em dash.

## CSS support

Satori implements a subset of CSS. Assume anything not in the supported table is unsupported, and verify before relying on it. For the complete matrix with allowed values and defaults, read `references/css-support.md`.

### Supported

| Category | Properties |
| --- | --- |
| Layout | `display` (`flex`, `contents`, `none`), `position` (`relative`, `static`, `absolute`), `top`/`right`/`bottom`/`left`, `width`/`height`, min/max width/height, `overflow` (`visible`, `hidden`) |
| Flex | `flexDirection`, `flexWrap`, `flexGrow`, `flexShrink`, `flexBasis`, `alignItems`, `alignContent`, `alignSelf`, `justifyContent`, `gap` |
| Box | `margin`, `padding`, `border` (width, `solid`/`dashed` style, color, shorthand), `borderRadius`, `boxSizing`, `boxShadow`, `opacity` |
| Color and background | `color`, `backgroundColor` (single value), `backgroundImage` (`linear-gradient`, `repeating-linear-gradient`, `radial-gradient`, `repeating-radial-gradient`, `url`), `backgroundPosition`, `backgroundSize` (`cover`, `contain`, `auto`, two-value), `backgroundClip` (`border-box`, `text`), `backgroundRepeat` |
| Text | `fontFamily`, `fontSize`, `fontWeight`, `fontStyle`, `textAlign`, `textTransform`, `textOverflow` (`clip`, `ellipsis`), `textDecoration`, `textShadow`, `lineHeight`, `letterSpacing`, `whiteSpace`, `wordBreak`, `textWrap` (`wrap`, `balance`), `textIndent`, `tabSize`, `lineClamp` |
| Transform and effects | `transform` (translate, rotate, scale, skew), `transformOrigin`, `filter`, `clipPath`, mask (`maskImage`, `maskPosition`, `maskSize`, `maskRepeat`), `objectFit`, `objectPosition`, `WebkitTextStroke` |
| Variables | `--name` declarations and `var(--name, fallback)` usage, including inheritance and nesting |

### Unsupported

| Property or feature | Notes and workaround |
| --- | --- |
| `z-index` | No stacking contexts. Elements paint in document order, so later siblings render on top. Reorder markup to control layering. |
| `calc()` | Precompute values in JavaScript before they reach the style object. |
| `currentColor` outside `color` | Resolves only for the `color` property. Set explicit values for borders, backgrounds, and fills. |
| 3D transforms | Not supported. Use 2D translate, rotate, scale, and skew only. |
| `min-content`, `max-content`, `fit-content` | Not supported for min/max width and height. |
| `flexBasis: auto` | Not supported. Use an explicit basis or rely on width/height. |
| Interactive or resource elements | No `<input>`, `<style>`, `<script>`, or `<link>`. Only static, visible elements render. |
| `<img>` `alt`, SVG `<title>` | Render as visible text on the image. Omit `alt`; strip `<title>` from inline SVG (see Images and Inline SVG). |
| WOFF2 fonts | Convert to TTF, OTF, or WOFF (see Fonts). |
| AVIF / WebP images | Convert to PNG or JPEG (see Images). |
| Kerning, ligatures, OpenType features | Advanced typography is not supported. |
| RTL languages | Not supported. |

## HTML elements

Satori supports only static, visible elements. Interactive or resource-loading elements are out: no `<input>`, no `<style>`, no `<script>`, no `<link>`. The output is not guaranteed to match a browser pixel for pixel, because Satori runs its own SVG 1.1 based layout engine. Stick to `<div>`, `<span>`, `<img>`, `<svg>`, and text.

### Inline SVG

Inline `<svg>` works and is the reliable way to place vector logos and icons. Keep the markup well formed: include a `viewBox`, and use explicit `width`/`height`. Grouping (`<g transform=...>`), `fill-rule`, and paths without fills render correctly.

**Strip any `<title>` element from the SVG markup before passing it in.** Satori treats it as text content, so the title can leak into the render as visible words drawn on the image. Logos pulled from icon libraries often ship with one, so check and remove it.

### Images

Use `<img>` and set `width` and `height` explicitly so layout is stable:

```jsx
<img src="https://picsum.photos/200/300" width={200} height={300} />
```

With `backgroundImage: url(...)`, the image stretches to fit the element unless you set `backgroundSize`. When the SVG will be rasterized to PNG afterward, prefer a base64 data URI (or a Buffer/ArrayBuffer) as `src` so Satori does not perform extra network I/O.

**Only PNG, JPEG, and GIF decode reliably. AVIF and WebP do not work** and silently fail to render. Convert them to PNG or JPEG before passing them in (for example with `sharp`), and remember that a modern URL ending in `.jpg` may still serve WebP via content negotiation, so convert the bytes rather than trusting the extension.

**Do not put an `alt` attribute on `<img>`.** Satori treats it as text content, so the value can leak into the render as visible words drawn on the canvas. Leave it off; the output is a static image and gains nothing from it.

## Fonts

Any rendered text requires at least one font. Satori accepts **TTF, OTF, and WOFF**. WOFF2 is not supported. Pass font data as `ArrayBuffer` (web) or `Buffer` (Node.js):

```jsx
await satori(<div style={{ fontFamily: 'Inter', display: 'flex' }}>Hello</div>, {
  width: 600,
  height: 400,
  fonts: [
    { name: 'Inter', data: inter, weight: 400, style: 'normal' },
    { name: 'Inter', data: interBold, weight: 700, style: 'normal' },
  ],
})
```

Pass multiple fonts and reference any of them via `fontFamily`. Define fonts once and reuse the object across renders for better performance rather than rebuilding it per call.

Advanced typography (kerning, ligatures, other OpenType features) is not supported, and RTL languages are not supported.

### Emoji

Text glyphs render from the provided fonts; emoji do not come for free. Map specific graphemes to image sources with `graphemeImages`, where each image is sized to the current font size as a square:

```jsx
await satori(<div style={{ display: 'flex' }}>Ship it 🚀</div>, {
  ...,
  graphemeImages: { '🚀': 'https://cdnjs.cloudflare.com/.../1f680.svg' },
})
```

### Locales

The same characters can render differently per locale. Set `lang` on an element to force a locale, for example `<div lang="ja-JP">骨</div>`.

### Dynamically loading fonts and emoji

When a text segment needs a font or emoji image that was not provided up front, Satori calls `loadAdditionalAsset(code, segment)`. `code` is the detected language code, or `'emoji'`, or `'unknown'`. Return a data URI for emoji, or font data for text:

```jsx
loadAdditionalAsset: async (code, segment) => {
  if (code === 'emoji') return `data:image/svg+xml;base64,...`
  return loadFontFromSystem(code)
}
```

## Output and rendering options

- **`embedFont`** (default `true`): text is emitted as `<path>` with the glyph outlines inlined, so downstream tools need no font files. Set `embedFont: false` to emit `<text>` instead (smaller output, but the renderer must have the font).
- **`pointScaleFactor`**: passed through to Yoga to control how layout values round to the pixel grid; raise it for crisper output on high-DPI targets.
- **`debug: true`**: draws bounding boxes, which is the fastest way to see why layout is off.

## Runtime support

Satori runs in the browser, Node.js (>= 16), and Web Workers. It bundles its WASM (Yoga) dependency as base64 and loads it at runtime. In environments that forbid dynamic WASM loading, use the standalone build and initialize Yoga yourself:

```jsx
import satori, { init } from 'satori/standalone'

const res = await fetch('https://unpkg.com/satori/yoga.wasm')
await init(await res.arrayBuffer())
const svg = await satori(...)
```

## Debugging workflow

When output looks wrong, work through these in order, since they cover the overwhelming majority of cases:

1. **Did every multi-child container get `display: 'flex'`?** Missing display is the most common error and silent misalignment.
2. **Is the direction right?** Remember the default is `row`. Vertical stacks need `flexDirection: 'column'`.
3. **Did a shorthand value lose its unit?** `Expected length unit` means a `padding`/`margin`/`border` value needs `px` or `%`.
4. **Is the property actually supported?** Check `references/css-support.md`. Unsupported properties are ignored or throw rather than approximated.
5. **Are you relying on `z-index`, `calc`, or `currentColor` off the `color` property?** None of those work; reorder markup, precompute, or set explicit values.
6. **Turn on `debug: true`** to see bounding boxes and confirm the layout tree.

## Reference files

- `references/css-support.md` — the complete supported-CSS matrix with allowed values and defaults, plus the global limitation notes. Read it whenever you are unsure if a property or value is supported.

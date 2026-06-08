# Satori CSS support

Satori uses the Yoga Flexbox layout engine and implements a subset of CSS. This is the full list of supported properties with their allowed values and defaults. Assume any property or value not listed here is unsupported, and verify before relying on it.

## Layout

| Property | Supported values / notes | Default |
| --- | --- | --- |
| `display` | `flex`, `contents`, `none` | `flex` |
| `position` | `relative`, `static`, `absolute` | `relative` |
| `top`, `right`, `bottom`, `left` | Supported | |
| `width`, `height` | Supported | |
| `minWidth`, `minHeight`, `maxWidth`, `maxHeight` | Supported, except `min-content`, `max-content`, `fit-content` | |
| `overflow` | `visible`, `hidden` | `visible` |
| `boxSizing` | Supported | |

## Flex

| Property | Supported values / notes | Default |
| --- | --- | --- |
| `flexDirection` | `row`, `column`, `row-reverse`, `column-reverse` | `row` |
| `flexWrap` | `wrap`, `nowrap`, `wrap-reverse` | `wrap` |
| `flexGrow` | Supported | |
| `flexShrink` | Supported | |
| `flexBasis` | Supported, except `auto` | |
| `alignItems` | `stretch`, `center`, `flex-start`, `flex-end`, `baseline`, `normal` | `stretch` |
| `alignContent` | Supported | |
| `alignSelf` | Supported | |
| `justifyContent` | Supported | |
| `gap` | Supported | |

## Spacing and borders

| Property | Supported values / notes |
| --- | --- |
| `margin`, `marginTop/Right/Bottom/Left` | Supported. Shorthand needs explicit units on every value (`0px 12px`, not `0 12`). |
| `padding`, `paddingTop/Right/Bottom/Left` | Supported. Same unit rule as margin. A lone number is treated as px. |
| Border width (`borderWidth`, `borderTopWidth`, ...) | Supported |
| Border style (`borderStyle`, `borderTopStyle`, ...) | `solid`, `dashed` (default `solid`) |
| Border color (`borderColor`, `borderTopColor`, ...) | Supported |
| Border shorthand (`border`, `borderTop`, ...) | Supported, e.g. `1px solid gray` |
| `borderRadius` + per-corner (`borderTopLeftRadius`, ...) | Supported. Shorthand like `5px` or `50% / 5px`. |

## Color and background

| Property | Supported values / notes |
| --- | --- |
| `color` | Supported. `currentColor` resolves only here. |
| `backgroundColor` | Single value |
| `backgroundImage` | `linear-gradient`, `repeating-linear-gradient`, `radial-gradient`, `repeating-radial-gradient`, `url`. Single value (you can pass multiple comma-separated gradients within one value). |
| `backgroundPosition` | Single value |
| `backgroundSize` | `cover`, `contain`, `auto`, and two-value sizes like `10px 20%` |
| `backgroundClip` | `border-box`, `text` |
| `backgroundRepeat` | `repeat`, `repeat-x`, `repeat-y`, `no-repeat` (default `repeat`) |

## Font

| Property | Supported values / notes |
| --- | --- |
| `fontFamily` | Supported |
| `fontSize` | Supported |
| `fontWeight` | Supported |
| `fontStyle` | Supported |

## Text

| Property | Supported values / notes | Default |
| --- | --- | --- |
| `tabSize` | Supported | |
| `textAlign` | `start`, `end`, `left`, `right`, `center`, `justify` | `start` |
| `textIndent` | Supported, including negative values (hanging indent) | |
| `textTransform` | `none`, `lowercase`, `uppercase`, `capitalize` | `none` |
| `textOverflow` | `clip`, `ellipsis` | `clip` |
| `textDecoration` | Lines `underline`, `line-through`; styles `dotted`, `dashed`, `double`, `solid` | |
| `textShadow` | Supported | |
| `lineHeight` | Supported | |
| `letterSpacing` | Supported | |
| `whiteSpace` | `normal`, `pre`, `pre-wrap`, `pre-line`, `nowrap` | `normal` |
| `wordBreak` | `normal`, `break-all`, `break-word`, `keep-all` | `normal` |
| `textWrap` | `wrap`, `balance` | `wrap` |
| `lineClamp` | Supported | |

## Transform and effects

| Property | Supported values / notes |
| --- | --- |
| `transform` | Translate (`translate`, `translateX`, `translateY`), rotate, scale (`scale`, `scaleX`, `scaleY`), skew (`skew`, `skewX`, `skewY`). No 3D transforms. |
| `transformOrigin` | One-value and two-value syntax, relative and absolute |
| `opacity` | Supported |
| `boxShadow` | Supported |
| `filter` | Supported (e.g. `blur(...)`). Applied to a parent, it composites the whole subtree as one group. |
| `clipPath` | Supported |
| `objectFit` | Supported |
| `objectPosition` | Keywords (`top`, `bottom`, `left`, `right`, `center`), percentages (`25% 75%`), lengths (`10px 20px`), mixed (`left 20%`). Default `center` (`50% 50%`). |

## Mask

| Property | Supported values / notes |
| --- | --- |
| `maskImage` | `linear-gradient(...)`, `radial-gradient(...)`, `url(...)` |
| `maskPosition` | Supported |
| `maskSize` | Two-value size like `10px 20%` |
| `maskRepeat` | `repeat`, `repeat-x`, `repeat-y`, `no-repeat` (default `repeat`) |

## Text stroke

| Property | Supported values / notes |
| --- | --- |
| `WebkitTextStrokeWidth` | Supported |
| `WebkitTextStrokeColor` | Supported |

## CSS variables

Custom properties are supported, including `--var-name` declarations and `var(--var-name, fallback)` usage, with inheritance and nested variables.

## Elements, fonts, and images

These are not CSS properties, but they constrain what renders and belong with the support matrix.

| Area | Supported | Unsupported |
| --- | --- | --- |
| Elements | `<div>`, `<span>`, `<img>`, `<svg>`, text | `<input>`, `<style>`, `<script>`, `<link>`, and other interactive or resource-loading elements |
| Fonts | TTF, OTF, WOFF | WOFF2 |
| Images | PNG, JPEG, GIF | AVIF, WebP (convert to PNG or JPEG; a `.jpg` URL may still serve WebP via content negotiation, so convert the bytes) |
| Attributes | `width`/`height` on `<img>` and `<svg>`, `viewBox` on `<svg>` | `alt` on `<img>` and `<title>` inside `<svg>` render as visible text; omit `alt` and strip `<title>` |

## Global limitations

1. Three-dimensional transforms are not supported.
2. There is no `z-index`. SVG has no stacking contexts, so elements that come later in the document paint on top. Control layering by reordering markup.
3. `calc()` is not supported. Precompute values in JavaScript.
4. `currentColor` is supported only for the `color` property.
5. Advanced typography (kerning, ligatures, OpenType features) is not supported.
6. RTL languages are not supported.
7. Output is not guaranteed to match a browser pixel for pixel; Satori runs its own SVG 1.1 based layout engine.

import * as resvg from "@resvg/resvg-wasm";

const wasmPath = new URL("@resvg/resvg-wasm/index_bg.wasm", import.meta.url);
// eslint-disable-next-line promise/prefer-await-to-then
fetch(wasmPath).then((res) => resvg.initWasm(res));

// eslint-disable-next-line unicorn/prefer-add-event-listener
self.onmessage = (e) => {
  const { svg, width, _id } = e.data;

  const renderer = new resvg.Resvg(svg, {
    fitTo: {
      mode: "width",
      value: width,
    },
  });
  const image = renderer.render();
  const pngBuffer = image.asPng();
  const copied = new Uint8Array(pngBuffer);
  const url = URL.createObjectURL(new Blob([copied], { type: "image/png" }));
  // eslint-disable-next-line unicorn/require-post-message-target-origin
  self.postMessage({ _id, url });
};

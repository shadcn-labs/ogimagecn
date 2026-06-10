import * as resvg from "@resvg/resvg-wasm";

const wasmPath = new URL("@resvg/resvg-wasm/index_bg.wasm", import.meta.url);

const init = async () => {
  const res = await fetch(wasmPath);
  await resvg.initWasm(res);
};

init();

self.addEventListener("message", (e) => {
  const { svg, width, _id } = e.data;

  const renderer = new resvg.Resvg(svg, {
    fitTo: {
      mode: "width",
      value: width,
    },
  });
  const image = renderer.render();
  const pngBuffer = image.asPng();
  const url = URL.createObjectURL(
    new Blob([new Uint8Array(pngBuffer)], { type: "image/png" })
  );
  self.postMessage({ _id, url }, "*");
});

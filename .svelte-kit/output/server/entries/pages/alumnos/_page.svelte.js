import { c as create_ssr_component, b as add_styles, d as add_attribute, e as escape, v as validate_component } from "../../../chunks/index2.js";
import { c as col_fondo, a as col_menus, b as col_detail, d as col_hover } from "../../../chunks/colores.js";
const Presentacion_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".presentacion.svelte-1s6ijg5.svelte-1s6ijg5{display:flex;flex-direction:row;justify-content:center;align-items:center;width:95%;height:22cqw;margin-inline:auto;margin-top:1.5cqw}.info.svelte-1s6ijg5.svelte-1s6ijg5{margin:1cqw;border-radius:5px;overflow:hidden;width:60%;height:20cqw}.info.svelte-1s6ijg5>iframe.svelte-1s6ijg5{display:block;width:100%;height:100%}.nombre.svelte-1s6ijg5.svelte-1s6ijg5{display:flex;justify-content:center;align-items:center;margin:1cqw;border-radius:10px;background-color:var(--col_detail);width:40%;height:4cqw}.nombre.svelte-1s6ijg5>.svelte-1s6ijg5{color:rgb(0, 0, 0);font-size:2cqw;font-weight:bold}",
  map: null
};
const Presentacion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  let { nombre } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.nombre === void 0 && $$bindings.nombre && nombre !== void 0)
    $$bindings.nombre(nombre);
  $$result.css.add(css$1);
  return `<div class="presentacion svelte-1s6ijg5"${add_styles({
    "--col_fondo": col_fondo,
    "--col_menus": col_menus,
    "--col_detail": col_detail,
    "--col_hover": col_hover
  })}><div class="info svelte-1s6ijg5"><iframe title="Una ciudad de todos y para todos" frameborder="0"${add_attribute("src", url, 0)} type="text/html" allowscriptaccess="always" allowfullscreen="true" scrolling="yes" allownetworking="all" class="svelte-1s6ijg5"></iframe></div>
        <div class="nombre svelte-1s6ijg5"><p class="svelte-1s6ijg5">${escape(nombre)}</p></div>
    </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".titulo.svelte-1tjttet.svelte-1tjttet{display:flex;justify-content:center;align-items:center;margin:auto;width:45cqw;height:8cqw;background-color:var(--col_detail);border-radius:20px;margin-bottom:4cqw}.titulo.svelte-1tjttet>.svelte-1tjttet{font-size:3cqw;font-weight:bold;text-align:center}@media screen and (max-width: 750px){.titulo.svelte-1tjttet>.svelte-1tjttet{font-size:5.8cqw}}@media screen and (max-width: 750px){.titulo.svelte-1tjttet.svelte-1tjttet{width:95cqw;height:10cqw;border-radius:8px;margin-bottom:5cqw;margin-top:25cqw}}.video.svelte-1tjttet.svelte-1tjttet{display:flex;align-items:center;justify-content:center;margin:auto;width:45cqw;height:26cqw;box-shadow:0px 0px 16px 2px rgba(0, 0, 0, 0.6);margin-bottom:3cqw;width:1080;height:720}@media screen and (max-width: 750px){.video.svelte-1tjttet.svelte-1tjttet{width:95%;height:auto;border-radius:8px}}.trabajos.svelte-1tjttet.svelte-1tjttet{margin:auto;display:flex;flex-direction:column;width:65cqw;height:48cqw;overflow-y:scroll;border-radius:20px;background-color:white}@media screen and (max-width: 750px){.trabajos.svelte-1tjttet.svelte-1tjttet{border-radius:8px;width:95%;height:285cqw}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="titulo svelte-1tjttet"${add_styles({
    "--col_fondo": col_fondo,
    "--col_menus": col_menus,
    "--col_detail": col_detail,
    "--col_hover": col_hover
  })}><p style="color:white" class="svelte-1tjttet">TRABAJO DE LOS ALUMNOS</p></div>

<iframe class="video svelte-1tjttet" src="https://www.youtube.com/embed/5uqFkosa9Vw" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<div class="trabajos svelte-1tjttet"${add_styles({
    "--col_fondo": col_fondo,
    "--col_menus": col_menus,
    "--col_detail": col_detail,
    "--col_hover": col_hover
  })}>${validate_component(Presentacion, "Presentacion").$$render(
    $$result,
    {
      url: "https://view.genial.ly/63f77c94954e1700193e4b7c",
      nombre: "Comercio"
    },
    {},
    {}
  )}
    ${validate_component(Presentacion, "Presentacion").$$render(
    $$result,
    {
      url: "https://view.genial.ly/63f7b554b159b50018ec7f54",
      nombre: "Una ciudad de todos y para todos"
    },
    {},
    {}
  )}
    ${validate_component(Presentacion, "Presentacion").$$render(
    $$result,
    {
      url: "https://view.genial.ly/63fcaffe9f1659001246bd55",
      nombre: "Presentación básica"
    },
    {},
    {}
  )}
    ${validate_component(Presentacion, "Presentacion").$$render(
    $$result,
    {
      url: "https://view.genial.ly/63fcfb432cfb7400137dbe7c",
      nombre: "Pictogramas"
    },
    {},
    {}
  )}
    ${validate_component(Presentacion, "Presentacion").$$render(
    $$result,
    {
      url: "https://view.genial.ly/63fda2529f16590012483d9e",
      nombre: "Infografía Luismi Fabián"
    },
    {},
    {}
  )}
    ${validate_component(Presentacion, "Presentacion").$$render(
    $$result,
    {
      url: "https://view.genial.ly/63fdd5999c9aa600191db671",
      nombre: "Joel y Lara"
    },
    {},
    {}
  )}
    ${validate_component(Presentacion, "Presentacion").$$render(
    $$result,
    {
      url: "https://view.genial.ly/63fc99c7092f880017379d68",
      nombre: "Calahorra una ciudad de todos y para todos"
    },
    {},
    {}
  )}
    ${validate_component(Presentacion, "Presentacion").$$render(
    $$result,
    {
      url: "https://view.genial.ly/63fcc9d02cfb7400137d27b9",
      nombre: "Lista química"
    },
    {},
    {}
  )}
    ${validate_component(Presentacion, "Presentacion").$$render(
    $$result,
    {
      url: "https://view.genial.ly/63fd25c21092750013b24938",
      nombre: "INFOGRAFÍA Alan, Gael y Yanis"
    },
    {},
    {}
  )}
    ${validate_component(Presentacion, "Presentacion").$$render(
    $$result,
    {
      url: "https://view.genial.ly/641333edb650eb0011be1857",
      nombre: "Infografia de Ines"
    },
    {},
    {}
  )}
    ${validate_component(Presentacion, "Presentacion").$$render(
    $$result,
    {
      url: "https://view.genial.ly/64137d753813da0018da0d08",
      nombre: "INFOGRAFÍA JULIÁN"
    },
    {},
    {}
  )}
    ${validate_component(Presentacion, "Presentacion").$$render(
    $$result,
    {
      url: "https://view.genial.ly/63fccffc9f16590012470fa3",
      nombre: "PRESENTACIÓN SKETCH ANIMADO"
    },
    {},
    {}
  )}
</div>`;
});
export {
  Page as default
};

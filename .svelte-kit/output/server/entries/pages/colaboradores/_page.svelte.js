import { c as create_ssr_component, b as add_styles, d as add_attribute, e as escape, v as validate_component } from "../../../chunks/index2.js";
import { c as col_fondo, a as col_menus, b as col_detail, d as col_hover } from "../../../chunks/colores.js";
const Colaborador_tarjeta_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".colaborador.svelte-zk8s8e.svelte-zk8s8e{display:flex;flex-direction:column;overflow:hidden;width:var(--ancho);margin:auto;margin-bottom:5cqw}@media screen and (max-width: 750px){.colaborador.svelte-zk8s8e.svelte-zk8s8e{width:95cqw}}.logo.svelte-zk8s8e.svelte-zk8s8e{background-color:#ffffff;width:45cqw;display:flex;margin:auto;border-radius:20px;overflow:hidden}.logo.svelte-zk8s8e>img.svelte-zk8s8e{margin:auto;width:95%}@media screen and (max-width: 750px){.logo.svelte-zk8s8e.svelte-zk8s8e{width:90cqw;border-radius:8px}}.txt.svelte-zk8s8e.svelte-zk8s8e{display:flex;justify-content:center;align-items:center;background-color:var(--col_detail);margin:auto;margin-top:1cqw;width:30cqw;height:var(--h_txt);text-decoration:none;border-radius:10px}@media screen and (max-width: 750px){.txt.svelte-zk8s8e.svelte-zk8s8e{width:70cqw;height:4.8cqw;border-radius:5px}}.txt.svelte-zk8s8e>p.svelte-zk8s8e{font-weight:bold;font-size:1.5cqw;text-align:center;color:#ffffff}@media screen and (max-width: 750px){.txt.svelte-zk8s8e>p.svelte-zk8s8e{font-size:3cqw}}",
  map: null
};
const Colaborador_tarjeta = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { logo } = $$props;
  let { txt } = $$props;
  let { ancho = "45cqw" } = $$props;
  let { link } = $$props;
  let { h_txt = "2.3cqw" } = $$props;
  if ($$props.logo === void 0 && $$bindings.logo && logo !== void 0)
    $$bindings.logo(logo);
  if ($$props.txt === void 0 && $$bindings.txt && txt !== void 0)
    $$bindings.txt(txt);
  if ($$props.ancho === void 0 && $$bindings.ancho && ancho !== void 0)
    $$bindings.ancho(ancho);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.h_txt === void 0 && $$bindings.h_txt && h_txt !== void 0)
    $$bindings.h_txt(h_txt);
  $$result.css.add(css$1);
  return `<div class="colaborador svelte-zk8s8e"${add_styles({
    "--ancho": ancho,
    "--h_txt": h_txt,
    "--col_fondo": col_fondo,
    "--col_menus": col_menus,
    "--col_detail": col_detail,
    "--col_hover": col_hover
  })}><a class="logo svelte-zk8s8e"${add_attribute("href", link, 0)}><img${add_attribute("src", logo, 0)} alt="Logo de colaborador" class="svelte-zk8s8e"></a>
        <a class="txt svelte-zk8s8e" href="https://arasaac.org/"><p class="svelte-zk8s8e">${escape(txt)}</p></a>
    </div>`;
});
const logo1 = "/_app/immutable/assets/col3.ff42313d.png";
const logo2 = "/_app/immutable/assets/col2.bd79a7c2.png";
const logo3 = "/_app/immutable/assets/col4.5f8944d8.png";
const logo4 = "/_app/immutable/assets/col1.d8bbc3c1.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".titulo.svelte-18uayv7.svelte-18uayv7{display:flex;justify-content:center;align-items:center;margin:auto;width:45cqw;height:4cqw;background-color:var(--col_detail);border-radius:20px;margin-bottom:4cqw}.titulo.svelte-18uayv7>.svelte-18uayv7{font-size:3cqw;font-weight:bold}@media screen and (max-width: 750px){.titulo.svelte-18uayv7>.svelte-18uayv7{font-size:6cqw}}@media screen and (max-width: 750px){.titulo.svelte-18uayv7.svelte-18uayv7{width:95cqw;height:10cqw;border-radius:8px;margin-bottom:5cqw;margin-top:25cqw}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="titulo svelte-18uayv7"${add_styles({
    "--col_fondo": col_fondo,
    "--col_menus": col_menus,
    "--col_detail": col_detail,
    "--col_hover": col_hover
  })}><p style="color:white" class="svelte-18uayv7">COLABORADORES</p></div>

${validate_component(Colaborador_tarjeta, "Colaborador_tarjeta").$$render(
    $$result,
    {
      logo: logo1,
      txt: "ARASAAC",
      link: "https://arasaac.org/"
    },
    {},
    {}
  )}
${validate_component(Colaborador_tarjeta, "Colaborador_tarjeta").$$render(
    $$result,
    {
      logo: logo2,
      txt: "Universidad de La Rioja",
      ancho: "45cqw",
      link: "https://www.unirioja.es/"
    },
    {},
    {}
  )}
${validate_component(Colaborador_tarjeta, "Colaborador_tarjeta").$$render(
    $$result,
    {
      logo: logo3,
      txt: "Asociación Igual A Ti",
      link: "https://igualati.org/"
    },
    {},
    {}
  )}
${validate_component(Colaborador_tarjeta, "Colaborador_tarjeta").$$render(
    $$result,
    {
      logo: logo4,
      txt: "Asociación Comerciantes de Calahorra",
      link: "https://asociacioncomerciocalahorra.com/",
      h_txt: "4cqw"
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};

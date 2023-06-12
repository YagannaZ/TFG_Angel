import { c as create_ssr_component, b as add_styles, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/index2.js";
import { c as col_fondo, a as col_menus, b as col_detail, d as col_hover } from "../../../chunks/colores.js";
const t_1 = "/_app/immutable/assets/T_carniceria-1.0833ee45.png";
const t_2 = "/_app/immutable/assets/T_carniceria-2.821026a6.png";
const Cuerpo_negocio_svelte_svelte_type_style_lang = "";
const css = {
  code: ".tipo_negocio.svelte-1rvet3s.svelte-1rvet3s{display:flex;justify-content:center;align-items:center;margin:auto;width:45cqw;height:4cqw;background-color:var(--col_detail);border-radius:20px;margin-bottom:2cqw}.tipo_negocio.svelte-1rvet3s>.svelte-1rvet3s{font-size:3cqw;font-weight:bold}@media screen and (max-width: 750px){.tipo_negocio.svelte-1rvet3s>.svelte-1rvet3s{font-size:6cqw}}@media screen and (max-width: 750px){.tipo_negocio.svelte-1rvet3s.svelte-1rvet3s{width:95cqw;height:10cqw;border-radius:8px;margin-bottom:5cqw;margin-top:25cqw}}.cont_pdf.svelte-1rvet3s.svelte-1rvet3s{display:flex;flex-direction:column;align-items:center;background-color:rgb(239, 255, 241);border-radius:20px;width:45cqw;height:156cqw;margin:auto}@media screen and (max-width: 750px){.cont_pdf.svelte-1rvet3s.svelte-1rvet3s{border-radius:8px;width:95cqw;height:332cqw;margin-bottom:5cqw}}.picto.svelte-1rvet3s.svelte-1rvet3s{display:flex;flex-direction:column;align-items:center;margin-top:2cqw;width:75%}.pdf.svelte-1rvet3s.svelte-1rvet3s{width:90%;height:115cqw;border-radius:10px;box-shadow:0px 0px 16px 2px rgba(0, 0, 0, 0.6);overflow:hidden;margin-top:2.5cqw}.pdf.svelte-1rvet3s>img.svelte-1rvet3s{border-radius:8px;box-shadow:0px 0px 10px 2px rgba(0, 0, 0, 0.3)}@media screen and (max-width: 750px){.pdf.svelte-1rvet3s.svelte-1rvet3s{height:247cqw;overflow:unset;margin-top:5cqw;box-shadow:none}}",
  map: null
};
const Cuerpo_negocio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { picto: picto2 } = $$props;
  let { pdf } = $$props;
  let { tiponegocio: tiponegocio2 } = $$props;
  if ($$props.picto === void 0 && $$bindings.picto && picto2 !== void 0)
    $$bindings.picto(picto2);
  if ($$props.pdf === void 0 && $$bindings.pdf && pdf !== void 0)
    $$bindings.pdf(pdf);
  if ($$props.tiponegocio === void 0 && $$bindings.tiponegocio && tiponegocio2 !== void 0)
    $$bindings.tiponegocio(tiponegocio2);
  $$result.css.add(css);
  return `

<div class="tipo_negocio svelte-1rvet3s"${add_styles({
    "--col_fondo": col_fondo,
    "--col_menus": col_menus,
    "--col_detail": col_detail,
    "--col_hover": col_hover
  })}><p style="color:white" class="svelte-1rvet3s">${escape(tiponegocio2)}</p></div>

<div class="cont_pdf svelte-1rvet3s"><div class="picto svelte-1rvet3s"><a href="https://arasaac.org/pictograms/es/3007/carnicer%C3%ADa"><img${add_attribute("src", picto2, 0)} alt="Pictografía identificativa del negocio"></a></div>
    <div class="pdf svelte-1rvet3s">${`<img${add_attribute("src", t_1, 0)} alt="Página 1 de tablero de comunicaciones" style="margin-bottom: 6cqw;" class="svelte-1rvet3s">
            <img${add_attribute("src", t_2, 0)} alt="Página 2 de tablero de comunicaciones" class="svelte-1rvet3s">`}</div>
</div>`;
});
const picto = "/_app/immutable/assets/carniceriaAR.5be65313.png";
const pdf_r = "/_app/immutable/assets/T_carniceria.1fe40d87.pdf";
let tiponegocio = "CARNICERÍA";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pdf = pdf_r + "#view=Fit&navpanes=0";
  return `${validate_component(Cuerpo_negocio, "Cuerpo_negocio").$$render($$result, { picto, pdf, tiponegocio }, {}, {})}`;
});
export {
  Page as default
};

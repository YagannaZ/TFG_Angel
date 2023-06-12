import { c as create_ssr_component, a as subscribe, b as add_styles, d as add_attribute, v as validate_component } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
import { c as col_fondo, a as col_menus, b as col_detail, d as col_hover } from "../../chunks/colores.js";
const style = "";
const lema = "/_app/immutable/assets/Cala.6ccf27d4.png";
let menu_open = writable(false);
const SideBar_svelte_svelte_type_style_lang = "";
const menu_mob_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".dark.svelte-1wkkadk.svelte-1wkkadk{width:100%;height:100%;z-index:30;background-color:rgba(0, 0, 0, 0.404);padding-top:20cqw}.anim.svelte-1wkkadk.svelte-1wkkadk{width:100%;height:var(--altura);display:flex;justify-content:center;align-items:center;position:fixed;z-index:1}.sidenav.svelte-1wkkadk.svelte-1wkkadk{width:95%;margin:auto;border-radius:10px;display:flex;justify-content:center;align-items:center;flex-direction:column;z-index:1;border:3px solid #ffffff;box-shadow:0px 0px 16px 2px rgba(0, 0, 0, 0.4);background-color:var(--col_menus);padding-bottom:3cqw}.cont_lema.svelte-1wkkadk.svelte-1wkkadk{display:flex;margin-top:2.5cqw;margin-bottom:1.5cqw}@media screen and (max-width: 750px){.cont_lema.svelte-1wkkadk.svelte-1wkkadk{border-radius:8px;width:95cqw;height:40cqw;margin-bottom:5cqw}}.lema.svelte-1wkkadk.svelte-1wkkadk{margin:auto;width:90%}.a-menu.svelte-1wkkadk.svelte-1wkkadk{margin-top:1cqw}.sidenav.svelte-1wkkadk a.svelte-1wkkadk{padding:6px 8px 6px 16px;text-decoration:none;font-size:5cqw;color:#ffffff;display:block}.sidenav.svelte-1wkkadk a.svelte-1wkkadk:focus{color:#000000}",
  map: null
};
const Menu_mob = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $menu_open, $$unsubscribe_menu_open;
  $$unsubscribe_menu_open = subscribe(menu_open, (value) => $menu_open = value);
  $$result.css.add(css$2);
  $$unsubscribe_menu_open();
  return `<div class="${["anim svelte-1wkkadk", $menu_open ? "shown" : ""].join(" ").trim()}"${add_styles({
    "--col_fondo": col_fondo,
    "--col_menus": col_menus,
    "--col_detail": col_detail,
    "--col_hover": col_hover,
    "--altura": $menu_open ? "100%" : "0%"
  })}>${$menu_open ? `<div class="dark svelte-1wkkadk"><div class="sidenav svelte-1wkkadk"><div class="cont_lema svelte-1wkkadk"><div class="lema svelte-1wkkadk"><img${add_attribute("src", lema, 0)} alt="Logo del proyecto Calahorra de todos y para todos"></div></div>

                <div class="a-menu svelte-1wkkadk"><a href="/carniceria" class="svelte-1wkkadk">Inicio</a></div>

                <div class="a-menu svelte-1wkkadk"><a href="/colaboradores" class="svelte-1wkkadk">Colaboradores</a></div>

                <div class="a-menu svelte-1wkkadk"><a href="/" class="svelte-1wkkadk">Asterics Grid</a></div>

                <div class="a-menu svelte-1wkkadk"><a href="/alumnos" class="svelte-1wkkadk">Trabajo de Alumnos</a></div></div></div>` : ``}
    </div>`;
});
const TW = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAA4CAYAAABABo41AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUhSURBVHgB5ZttiFRVGIDf8StdY0vTsNpwCwLRpNqIlGhjS0kJIhKKaP+UmRZJBEX9iYIIooL6WSJRmbgmfUBflNUukmxCaqVin7hl5eq2lqu1mmuvz+u5V+6Oc2fuzM7ce+f6wLNnd+6Zuee+c+45555zNid1gqqOJmnC6/AGvBwb/cPYi9/i+9idy+X6JesQlDm4Cg9rNHrwOTxPsggX1ojr8JBWxgFc7tW2UucajWMk7VDIFvxFq8N6bAw5z1hchEvDCtKGd0sKoBxzcUCry0ZswjHYjPfgG9iP3RpWWziwEo/gXZiThODc07FXa8N2de3PYOA1+/uiYgXa5mUcwickATjveNyq8XEM5xYr0ETsy3vTKxpzY8T57tf4sApwX0g5cv4v03R49fLZghdLDKjrgfo0Pl7UvCaDvyfhQpxXqkZcgRvI+AADpnelttyJUyQehnAivqSutzobL8Bz8StsP5FLw2tMkFfxfKkRfPYnmjw7sCFYqCkarXu0ccXtGmHAVGZQbHB1UJNlt+b3TrwwzjsQFbu9WqRK8FmXarLs0bygjLIftB//keyKfilyLW5S9/zSLCNnpiTHHlxADIZd/6jA711SHtZwWyO1k+C8g1fhKKmMBkmGH7GVoHyTfyB4Ia/h/1I+4/EW3ISd6tqguHqXkdJGUH4qdOBkYMjwM8nbUjk2JmjFDrT2ag224xkR3rtP4meQa/497GD+AOdqki+lugx4n/khduP39hqF0sB5LyT5VeJlJ2UIbdtOeVikkCtIlkjtOIi/iQvWD7hbXI1Zh2dJfKwmMO1hBwsFxkaAVugmyTaLCExo03EiMATDaogNjd8S9w1eghtxsmSTv3E6gRkIy+A3vjbUfx634xf4qLiuLKt0FQuK4T9E+g2fPVjN8cwyH5XK4NeYDXhUTg8GcUupTH5grJf4Tk4P7Dq3lsrkPysdIan1fEta+JjrPVYq08nump5pAkmPuMmaLHMlgYl8K1mtsXtvuWSbHolwGxnDnoYJzpskr0t2WRt8FClGoZHvOSTrxc33Zgnrde022hYl8ynzJ94ugTaJWOXqiM+jBsUoOLHEBxwguRk/kOywspzMRZdivZ7KViUfFDchVa/YU/xsbwo3EkWnIq2nwsfEzdDtl/rlhXKCYoTWGHXLs+oPhvh7GslD+LCUCGjKsFm6GVzHoXLeVGwlchzaAvun4iaSbH7GVgfqKSjG4+UGxSjVxqwluU3qF5v9byEwZU/yl/r2n8Wy7s0UYQO5ZyoJilGq8d1M8qTUZ3A6KH+HVEiknVPcUi+T3Cv1g80WzPKWhCoiakO6DJ+S+sC2eCweSVDKQt3C/xKt/qbBarNKkoATz8ROTSebNenlYXW1Z5+mh704S9IABZmMj+Bfmiz9qQlKEHU7slZoMlitbZUqU63tqpNwocRPH84vtL8lUfimGnCxJrN/bhfOkLRBoRbgZ5oMtoMrzp0RxVFXQ+7ALvxH4+coLsOxUmNynGSquAeuocDr1vbYjJ3tdmjG2XgrWssfZYdUtbHyvYdLaU96JQYsANZw2vyuTS9MDbxuA6U0TGfa4tjTxfay1BRqzgS8Xt0O8L2aPJ04X4M7tWOk4NO1up3fN+I8vEncRqI4/ofJ9tyuxjVRllFrSdRpB5vWvMzzGi+1hbmR3Go2x/Mn2pxPp0kwvpaUUFEtUNcr2H9sNKONJaxGWaBsu9qZ4jYg+T2HrYkfRlursrnjP8RtxdiB+wnGv5JCjgNHJcAr9mTYawAAAABJRU5ErkJggg==";
const FB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKDSURBVHgB7Zw7aBRRGIX/WVewECKCkELFQtBCEC1UxCJoJxba2SloCivFLpWFjZ2oIFhZLcTKQsQUvsDKQlBQULFRNKhYiEjIe3L+zC4sQ07mhpld5mbPB2dmdubOLvsxj7v33tnE2qRp2sTsBHIVOYBss8HgO/IUuZUkydvOysQnkLIFsxZy0gaXeeQmMgZBC0n7SHmInDKxiFyBmDsuxoU8MtFhGtnVwOSSiW42IedczBETeQ66mK0m8gw1TKyIxBAkhiAxBIkhSAxBYggSQ5AYgsQQmhY/C8hn5DXyDZkK2OdGUQFvdkgtTlzIOHIbeY82lBAhywR854lYjxiXMIo88NY26wExivmPjELIuPWQGC++93stxYlNzG8LuHBWQWxi7uJombQ+EJMYv5O0rE/EJOanZfWUvhDTXekTTqPZkIKopuzGbAw5almr/5qJScyHkEKQshOzF8h2K0FMp9LXwHLHraQUJyYx/wLLHbIKWI+/rndYBaxHMZutAtQeQ6jrXckH8HzMrftiYTyzrM6zEsPIiIWQ1pPL1gPwvqcDP/+JTiWCxBAkhiAxBIkhSAxBYgh1reBdRF1iJLfuHtpjJop2xH7eJryHbB62QOoqZl873RRKaXPYQmu3q6BTiSAxBIkhSAxBYggSQ5AYgsQQJIYgMQSJIUgMQWIIEkOQGILEECSGIDEEiSFIDMHF/DCRZ9J7CV4hZ63+DKFrJLj7oyTP/Xml/Vh4g2ywejNn2TNKRTStXLfQL2RvA51Y77BwzbI/lakzGy0bzFyUMlL+IBfg5G/n4uu9d9eRGRtc/MmW85Dy2F8k3VvSbFT1GeSYVTT6MQL8KHmJtCBlurNyCSs/NLu3ahkqAAAAAElFTkSuQmCC";
const IG = "data:image/png;base64,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";
const FOOTER_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".footer.svelte-1iwcc1f.svelte-1iwcc1f.svelte-1iwcc1f{background-color:var(--col_menus);justify-content:center;flex-direction:column;display:flex;align-items:center;margin-top:10cqw;height:12cqw;border-top:3px solid rgb(255, 255, 255);box-shadow:0px 0px 16px 2px rgba(0, 0, 0, 0.6)}@media screen and (max-width: 750px){.footer.svelte-1iwcc1f.svelte-1iwcc1f.svelte-1iwcc1f{height:35cqw}}.cont_redes.svelte-1iwcc1f.svelte-1iwcc1f.svelte-1iwcc1f{margin-top:1cqw;display:flex;justify-content:space-between;align-items:center;width:30cqw}@media screen and (max-width: 750px){.cont_redes.svelte-1iwcc1f.svelte-1iwcc1f.svelte-1iwcc1f{width:60cqw}}.cont_redes.svelte-1iwcc1f>div.svelte-1iwcc1f.svelte-1iwcc1f{width:3cqw}@media screen and (max-width: 750px){.cont_redes.svelte-1iwcc1f>div.svelte-1iwcc1f.svelte-1iwcc1f{width:9cqw}}.cont_redes.svelte-1iwcc1f>div.svelte-1iwcc1f>img.svelte-1iwcc1f{cursor:pointer}.txt.svelte-1iwcc1f.svelte-1iwcc1f.svelte-1iwcc1f{margin-top:2cqw;display:flex;justify-content:center;align-items:center;text-align:center}@media screen and (max-width: 750px){.txt.svelte-1iwcc1f.svelte-1iwcc1f.svelte-1iwcc1f{margin-top:6cqw}}.txt.svelte-1iwcc1f>p.svelte-1iwcc1f.svelte-1iwcc1f{color:white;font-size:1.5cqw;font-weight:bold}@media screen and (max-width: 750px){.txt.svelte-1iwcc1f>p.svelte-1iwcc1f.svelte-1iwcc1f{font-size:3.8cqw}}",
  map: null
};
const FOOTER = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="footer svelte-1iwcc1f"${add_styles({
    "--col_fondo": col_fondo,
    "--col_menus": col_menus,
    "--col_detail": col_detail,
    "--col_hover": col_hover
  })}><div class="cont_redes svelte-1iwcc1f"><div class="TW svelte-1iwcc1f"><img${add_attribute("src", TW, 0)} alt="Logo blanco de Twitter" class="svelte-1iwcc1f"></div>
        <div class="FB svelte-1iwcc1f"><a href="https://www.facebook.com/profile.php?id=100082468414504"><img${add_attribute("src", FB, 0)} alt="Logo blanco de FaceBook"></a></div>
        <div class="IG svelte-1iwcc1f"><a href="https://www.instagram.com/teresianascalahorra/?hl=es"><img${add_attribute("src", IG, 0)} alt="Logo blanco de Instagram"></a></div></div>

    <div class="txt svelte-1iwcc1f"><p class="svelte-1iwcc1f">Redes sociales de Colegio Santa Teresa de Calahorra
        </p></div>
</div>`;
});
const perfil_cala = "/_app/immutable/assets/perfil_b.09004cd9.png";
const menu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAADcCAYAAACBME81AAAACXBIWXMAAAsSAAALEgHS3X78AAAFH0lEQVR4nO3dwVUc2RUG4P+WEyAEFIEhAkEEQhFYRCAUwQwRSI5ATATDRACOYHoiUGfgXnr3vKhq3Kgb6HeOUdPi+3b16i3u6j+3XtWpW3lEa+0gyVmSd0mOkhw+th/Ya4sksyR/JLmuqvlDG2vT4hQYF0k+Jjl4hgKBl+8qyeWmAFkLjtbaUZLfo7sAxi7kU1VdrS4OqxettQ9JbiI0gNFBkq+ttV9XF+86jqnTuIlHE2Cz82XnUcndmcaf0WkAj3tTVfPlo8pFhAbwtK/J/zqOf8cjCrCd47+11s6SfNh1JcDe+M+Q5O2uqwD2ysmQ8YtQgG0dDU/vAbhPcADdBAfQTXAA3QQH0E1wAN0EB9BNcADdBAfQTXAA3QQH0E1wAN0EB9BNcADdhiT/2nURwF65HTJObgLY1mz5z9Fv8bNiYDtvlmcclzstA9gXV1U1Xx3I9Gf8RhB42CLJ8epclSR5P90A2OR8OYD6LjimhdMID2DdeVVdLy/ufcdRVbOM4eFNC5CMjcT7R6fVJ2N4VNVxkk9J5j+kNOClWST5knFW7PX3N2t9/33TpLe3cXAKr8E840eh11Xl2AIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgNelntrQWjtMcpbk70kOn7keYHcWSf5Kcl1Vs8c2PhgcrbWTJL8kOfl/VgbshXmSy6q62nRzLThaawdJvmbsMoDXbZbk/PsO5F5wtNaOMobG0Q8sDHjZFhnD43q5cBccU6dxE6EBrFskOV12HqvBcRPnGcDDFkneVNViSJLW2ocIDeBxBxlfmIwdR2vtW7xqBbbzZpgORA93XQmwN86GeO0K9Hk3JHm76yqAvXIy7LoCYP8IDqCb4AC6CQ6gm+AAugkOoJvgALoJDqCb4AC6CQ6gm+AAugkOoJvgALoJDqDbkPH35wDbmg0ZJzcBbGtW01iEbxl/RArwlNOhqhZJ/rnrSoC9cFtVt8u/nOs6gG2cVtXtkCRT1/F+xwUBL9tlVd0mK69jp4XzHRUEvGxXVfXr8uLedxzTSPvzjKPeAJLkS1Xdaypq067W2mGSzzFzBV6zWZJPy8eTVRuDY2kKkI8Z58qaYg8/v3mS2yS/bQoMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4qdU2m1prR0kOkxw9azXALs2TzKvq9qmNDwZHa+0gyUWSf2QMDeB1WCS5TnJZVfNNGzYGR2vtIskvSQ6erTRgH3zJGCCL1cV7wTF1GZ+TfPhxdQEv3CzJ6Wp4fB8cvyc5+9FVAS/ePMnxMjyG5Wpr7XOEBrDZYZKb5cWQ3L01udhRQcB+OJrOP8dHldbaTZKTXVYE7IVFkjfVWjtM8m3HxQD743yIcw2gz7shydtdVwHslZMhPvIC+hwMT+8BuE9wAN0EB9BNcADdBAfQTXAA3QQH0E1wAN0EB9BNcADdBAfQTXAA3QQH0G3I+BNSgG3NhyR/7boKYK/MhowTmwC29ccwjXi72nEhwH6YV9XV8nD0cqelAPviMpneqkxdh/AAHnNdVVfJ+gjIrzE3Flh3b37s2rR64QF8Z23o9NoHYFV1nuR9fN8Br90iyWVVHa+GRrKh41hqrR1kHNb0McnR89YHvCDzJL8luZrOP9c8GByrphARHvDzmz8UFqv+C1mLCfzb0OYBAAAAAElFTkSuQmCC";
const cruz = "data:image/png;base64,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";
const HEADER_svelte_svelte_type_style_lang = "";
const css = {
  code: ".margen.svelte-iap0jz.svelte-iap0jz{z-index:20;margin-top:8cqw}.head.svelte-iap0jz.svelte-iap0jz{background-color:var(--col_menus);height:5.5cqw;width:100%;position:fixed;z-index:50;display:flex;justify-content:space-between;left:0;top:0;box-shadow:0px 0px 16px 2px rgba(0, 0, 0, 0.6);border-bottom:3px solid rgb(255, 255, 255);align-items:center}@media screen and (max-width: 750px){.head.svelte-iap0jz.svelte-iap0jz{height:15cqw}}.menu_dsk.svelte-iap0jz.svelte-iap0jz{display:flex;align-items:center;justify-content:center;width:2cqw;margin-left:3cqw}@media screen and (max-width: 750px){.menu_dsk.svelte-iap0jz.svelte-iap0jz{width:7cqw;margin-left:6cqw}}.menu_mob.svelte-iap0jz.svelte-iap0jz{display:flex;align-items:center;justify-content:center;width:2cqw;margin-right:3cqw}@media screen and (max-width: 750px){.menu_mob.svelte-iap0jz.svelte-iap0jz{width:7cqw;margin-left:6cqw}}.btn-menu.svelte-iap0jz.svelte-iap0jz{position:absolute;width:2cqw;cursor:pointer}@media screen and (max-width: 750px){.btn-menu.svelte-iap0jz.svelte-iap0jz{width:5.5cqw}}.logo.svelte-iap0jz.svelte-iap0jz{display:flex;align-items:center;justify-content:center;height:100%;width:20cqw;margin-right:6cqw;align-items:flex-end}.logo.svelte-iap0jz>img.svelte-iap0jz{margin-top:30px;margin-bottom:0}@media screen and (max-width: 750px){.logo.svelte-iap0jz.svelte-iap0jz{width:50cqw;margin-left:6cqw}}",
  map: null
};
const HEADER = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $menu_open, $$unsubscribe_menu_open;
  $$unsubscribe_menu_open = subscribe(menu_open, (value) => $menu_open = value);
  $$result.css.add(css);
  $$unsubscribe_menu_open();
  return `
<div class="head svelte-iap0jz"${add_styles({
    "--col_fondo": col_fondo,
    "--col_menus": col_menus,
    "--col_detail": col_detail,
    "--col_hover": col_hover
  })}>${`<div class="logo svelte-iap0jz"><img${add_attribute("src", perfil_cala, 0)} alt="Perfil ciudad de calahorra" class="svelte-iap0jz"></div>

        <div class="menu_mob svelte-iap0jz">${$menu_open ? `<img class="btn-menu svelte-iap0jz"${add_attribute("src", cruz, 0)} alt="Botón de menu">` : `<img class="btn-menu svelte-iap0jz"${add_attribute("src", menu, 0)} alt="Botón de menu">`}</div>`}</div>
<div class="margen svelte-iap0jz"></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `





${validate_component(HEADER, "Header").$$render($$result, {}, {}, {})}
${`${validate_component(Menu_mob, "Menu_mob").$$render($$result, {}, {}, {})}`}

${slots.default ? slots.default({}) : ``}

${validate_component(FOOTER, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};

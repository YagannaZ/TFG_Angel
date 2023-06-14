<script lang="ts">

import {col_fondo, col_menus, col_detail, col_hover} from "$lib/componentes/colores";

// import picto1 from "$lib/img/Locales/carniceria/carniceriaAR.png"
export let src: string = "";
export let href:string;
export let nombre:string;
export let alt:string;
import picto2 from "$lib/img/Locales/joyeria/joyeria.png"
import picto3 from "$lib/img/Locales/optica/optica.png"
import picto4 from "$lib/img/Locales/tienda_ropa/tienda_ropa.png"
import picto5 from "$lib/img/Locales/zapateria/zapateria.png"


</script>

            <a href={href}>
                <div class="icon">
                    <img {src} {alt}>
                    <p>{nombre}</p>
                </div>
            </a>

<style lang="scss">

    .icon
    {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.5cqw;

        margin: auto;
        // margin:1cqw;
        width:80% ;
        // height: 100%;
        background-color: #fff;

        border-radius: 10px;
    }

    img{
        width: 100%;
        // height: fit-content;
    }
    p{
        font-size: 1.5cqw;
        text-decoration: none;
    }

    a{
        cursor: pointer;
        text-decoration: none;
        color: #000;
    }
</style>


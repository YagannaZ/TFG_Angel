<script lang="ts">
    import "$lib/styles/style.scss"
    import lema from "$lib/img/Logos/Cala.png"

    import { menu_open } from "./vars";
    import { fade } from "svelte/transition";

    import {col_fondo, col_menus, col_detail, col_hover} from "$lib/componentes/colores";
</script>


    <div class="anim" class:shown={$menu_open} style:--col_fondo={col_fondo} style:--col_menus={col_menus} style:--col_detail={col_detail} style:--col_hover={col_hover}>
        {#if $menu_open}
            <div class="sidenav"  in:fade={{ duration: 400, delay: 200 }} out:fade={{ duration: 400 }}>
            
                <div class="cont_lema">
                    <div class="lema">
                        <img src={lema} alt="Logo del proyecto Calahorra de todos y para todos">
                    </div>
                </div>

                <div class="a-menu">
                    <a href="/">Inicio</a>
                </div>

                <div class="a-menu">
                    <a href="/grid">Comercios</a>
                </div>

                <div class="a-menu" >
                    <a href="/colaboradores">Colaboradores</a>
                </div>

                <div class="a-menu">
                    <a href="/asterics">Asterics Grid</a>
                </div>

                <div class="a-menu">
                    <a href="/alumnos">Trabajo de Alumnos</a>
                </div>
            
            </div>
        {/if}
    </div>
<style lang="scss">
    .cont_lema
    {
        display: flex;
        margin-top: 2.5cqw;
        margin-bottom: 1.5cqw;

        @media screen and (max-width: 750px)
        {
            border-radius: 8px;
            width: 95cqw;
            height: 40cqw ;
            margin-bottom: 5cqw;
        }
    }

    .lema
    {
        margin: auto;
        width: 90%;
    }

    .a-menu
    {
        margin-top: 1cqw;
    }

    /* The sidebar menu */
    .sidenav 
    {
    //   height: 100%; 
    width: 14cqw;
    //   height: 37cqw; /* Set the width of the sidebar */
    // position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top: 3px solid #ffffff;
    border-right: 3px solid #ffffff;
    border-bottom: 3px solid #ffffff;
    box-shadow: 0px 0px 16px 2px rgba(0,0,0,0.4);
    // top: 7cqw; /* Stay at the top */
    // left:0;
    background-color: var(--col_menus);
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-bottom: 15px;

    


    // &.shown 
    // {
    //     transform: translateX(0);
    // }

    }

    .anim{
        position: fixed; /* Fixed Sidebar (stay in place on scroll) */
        z-index: 1; /* Stay on top */

        transform: translateX(-100%);
		transition: transform 600ms;
         &.shown 
        {
            transform: translateX(0);
        }
    }


    // .sidenav:hover{
    //     background-color: blueviolet;
    // }

    /* The navigation menu links */
    .sidenav a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 1.5cqw;
    color: #ffffff;
    display: block;
    }

    /* When you mouse over the navigation links, change their color */
    .sidenav a:hover {
    color: #000000;
    }


</style>
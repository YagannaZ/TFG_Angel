<script lang="ts">
    import "$lib/styles/style.scss"
    import lema from "$lib/img/Logos/Cala.png"

    import { menu_open } from "./vars";
    import { fade } from "svelte/transition";

    import {col_fondo, col_menus, col_detail, col_hover} from "$lib/componentes/colores";
</script>


    <div class="anim" class:shown={$menu_open} style:--col_fondo={col_fondo} style:--col_menus={col_menus} style:--col_detail={col_detail} style:--col_hover={col_hover} 
    style:--altura={$menu_open ? "100%" : "0%"}>
        {#if $menu_open}
        <div class="dark" in:fade={{ duration: 200, delay: 100 }} out:fade={{ duration: 200 }}>
            <div class="sidenav" >
            
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

                <!-- <div class="a-menu">
                    <a href="/">Asterics Grid</a>
                </div> -->

                <div class="a-menu">
                    <a href="/alumnos">Trabajo de Alumnos</a>
                </div>
            
            </div>
        </div>
        {/if}
    </div>


<style lang="scss">

    .dark
    {
        width: 100%;
        height: 100%;
        z-index: 30;
        background-color: rgba(0, 0, 0, 0.404);
        padding-top: 20cqw;
        // background-color: #000000;

    }
    
    .anim{
        width: 100%;
        // height: 100%;
        height: var(--altura);
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed; /* Fixed Sidebar (stay in place on scroll) */
        z-index: 1; /* Stay on top */
        
        
    }

        .sidenav 
        {
        //   height: 100%; 
        width: 95%;
        margin: auto;
        border-radius: 10px;
        
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        z-index: 1; /* Stay on top */
        border: 3px solid #ffffff;
        box-shadow: 0px 0px 16px 2px rgba(0,0,0,0.4);
        // top: 7cqw; /* Stay at the top */
        // left:0;
        background-color: var(--col_menus);
        
        padding-bottom: 3cqw;
        }
    
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

    .sidenav a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 5cqw;
    color: #ffffff;
    display: block;
    }

    /* When you mouse over the navigation links, change their color */
    .sidenav a:focus {
    color: #000000;
    }


</style>
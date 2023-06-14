<script lang="ts">
    import perfil_cala from "$lib/img/Logos/perfil_b.png"
    import menu from "$lib/img/Logos/menu.png"
    import cruz from "$lib/img/Logos/Cruz.png"
    import {menu_open} from "$lib/componentes/vars"

    import { fade } from "svelte/transition";
    function abrir_menu ()
    {
        $menu_open = !$menu_open; 
    }

    import {col_fondo, col_menus, col_detail, col_hover} from "$lib/componentes/colores";
    // style:--col_fondo={col_fondo} style:--col_menus={col_menus} style:--col_detail={col_detail} style:--col_hover={col_hover}

    let innerWidth = 0;
    const ancho = 1000;
</script>

<svelte:window bind:innerWidth />
<div class="head" style:--col_fondo={col_fondo} style:--col_menus={col_menus} style:--col_detail={col_detail} style:--col_hover={col_hover}>

    {#if innerWidth >= ancho}
    <div class="menu_dsk" >
        {#if $menu_open}
            <img class="btn-menu" src={cruz} alt="Botón de menu" on:click={abrir_menu} in:fade={{ duration: 400, delay: 200 }} out:fade={{ duration: 400 }}>
        {:else}
            <img class="btn-menu" src={menu} alt="Botón de menu" on:click={abrir_menu} in:fade={{ duration: 400, delay: 200 }} out:fade={{ duration: 400 }}>
        {/if}
    </div>

    <div class="logo">
        <img src={perfil_cala} alt="Perfil ciudad de calahorra">
    </div>
    
    {:else}
        <div class="logo">
            <img src={perfil_cala} alt="Perfil ciudad de calahorra">
        </div>

        <div class="menu_mob" >
            {#if $menu_open}
                <img class="btn-menu" src={cruz} alt="Botón de menu" on:click={abrir_menu} in:fade={{ duration: 400, delay: 200 }} out:fade={{ duration: 400 }}>
            {:else}
                <img class="btn-menu" src={menu} alt="Botón de menu" on:click={abrir_menu} in:fade={{ duration: 400, delay: 200 }} out:fade={{ duration: 400 }}>
            {/if}
        </div>

    {/if}
</div>
<div class="margen"/>




<style lang="scss">
    .margen
    {
        z-index: 20;
        margin-top: 8cqw;
        @media screen and (max-width: 750px) {
			// margin-top: 20cqw;
		}
    }

    .head
    {
        background-color: var(--col_menus);  
        height:5.5cqw;
        width: 100%;
        position: fixed;
        z-index: 50;
        // margin: 0;
        display: flex;
        justify-content: space-between;
        left: 0;
        top: 0;
        box-shadow: 0px 0px 16px 2px rgba(0,0,0,0.6);
        border-bottom: 3px solid rgb(255, 255, 255);


        align-items: center;

        @media screen and (max-width: 750px) {
			height: 15cqw;
		}
    }

    .menu_dsk
    {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2cqw;
        margin-left: 3cqw;
        @media screen and (max-width: 750px) 
        {

            
            width: 7cqw;
            margin-left: 6cqw;
        }

    }

    .menu_mob
    {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2cqw;
        margin-right: 3cqw;
        @media screen and (max-width: 750px) 
        {
            width: 7cqw;
            margin-left: 6cqw;
        }
    }

    .btn-menu
    {
        position: absolute;
        width: 2cqw;
        cursor: pointer;
        @media screen and (max-width: 750px)
        {
            width: 5.5cqw;
        }
    }

    .logo
    {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 100%;
        width: 20cqw;
        margin-right: 6cqw;
        
        align-items: flex-end;
        > img
        {
            margin-top: 40px;
            margin-bottom: 50;
        }

        @media screen and (max-width: 750px) 
        {
            width: 50cqw;
            margin-left: 6cqw;
        }
    }
</style>
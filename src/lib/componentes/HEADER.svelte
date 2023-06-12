<script lang="ts">
    import perfil_cala from "$lib/img/Logos/perfil_b.png"
    import menu from  "$lib/img/Logos/menu.png"
    import {menu_open} from "$lib/componentes/vars"

    function abrir_menu ()
    {
        $menu_open = !$menu_open; 
    }
</script>

<div class="head">
    <div class="menu">
        <img class="btn-menu" src={menu} alt="Botón de menu" on:click={abrir_menu}>
    </div>
    <div class="logo">
        <img src={perfil_cala} alt="Perfil ciudad de calahorra">
    </div>
</div>
<div class="margen"/>



<style lang="scss">
    .margen
    {
        margin-top: 8cqw;
        @media screen and (max-width: 750px) {
			margin-top: 20cqw;
		}
    }

    .head
    {
        background-color: #3DC573;  
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
        border-bottom: 2px solid rgb(255, 255, 255);


        align-items: center;

        @media screen and (max-width: 750px) {
			height: 15cqw;
		}
    }

    .menu
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
    .btn-menu
    {
        cursor: pointer;
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
            margin-top: 30px;
            margin-bottom: 0;
        }

        @media screen and (max-width: 750px) 
        {
            width: 50cqw;
            margin-left: 6cqw;
        }
    }
</style>
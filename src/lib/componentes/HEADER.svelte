<script lang="ts">
    import perfil_cala from "$lib/img/Logos/perfil_b.png"
    import menu from  "$lib/img/Logos/menu.png"
</script>

<div class="head">
    <div class="menu">
        <img class="btn-menu" src={menu} alt="Botón de menu">
    </div>
    <div class="logo">
        <img src={perfil_cala} alt="Perfil ciudad de calahorra">
    </div>
</div>



<style lang="scss">
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


        align-items: center;

        @media screen and (max-width: 750px) {
			height: 8cqw;
		}
    }

    .menu
    {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2cqw;
        margin-left: 3cqw;
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
        .img
        {
            height: 100%;
            margin-bottom: 0;
        }
    }
</style>
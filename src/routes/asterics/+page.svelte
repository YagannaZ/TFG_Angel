<script lang="ts">

import {col_fondo, col_menus, col_detail, col_hover} from "$lib/componentes/colores";
</script>

<div class="tipo_negocio" style:--col_fondo={col_fondo} style:--col_menus={col_menus} style:--col_detail={col_detail} style:--col_hover={col_hover} >
    <p style="color:white">AsTeRICS GRID</p>
</div>

<div class="grid">
    <iframe src="https://grid.asterics.eu/#main" frameborder="0"></iframe>
</div>


<style lang="scss">

.tipo_negocio
    {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        width: 45cqw;
        height: 4cqw;
        background-color:var(--col_detail); 
        border-radius: 20px;
        margin-bottom: 4cqw;

        > p
        {
            font-size: 3cqw;
            font-weight: bold;
            @media screen and (max-width: 750px)
            {
                font-size: 6cqw;
            }
        } 

        @media screen and (max-width: 750px)
        {
            width: 95cqw; 
            height: 10cqw;
            border-radius: 8px;
            margin-bottom: 5cqw;
            margin-top: 25cqw;
        }
    }

.grid
{
    display: flex;
    justify-content: center;
    align-items: center;

    margin: auto;
    width: 90%;
    height: 50cqw;

    > *
    {
        width: 100%;
        height:100%;
    }
}

</style>
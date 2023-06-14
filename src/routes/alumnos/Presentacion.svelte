<script lang="ts">
    
    export let url: string;
    export let nombre: string;

    import {col_fondo, col_menus, col_detail, col_hover} from "$lib/componentes/colores";
</script>

<div class="presentacion" style:--col_fondo={col_fondo} style:--col_menus={col_menus} style:--col_detail={col_detail} style:--col_hover={col_hover}>
        <div class="info">
            <iframe title="Una ciudad de todos y para todos" frameborder="0"  
            src={url}
            type="text/html" allowscriptaccess="always" allowfullscreen="true" 
            scrolling="yes" allownetworking="all"/>
        </div>
        <!-- <div class="nombre">
            <p>{nombre}</p>
        </div> -->
    </div>

<style lang="scss">

    .presentacion
    {

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 95%;
        height: 22cqw;
        margin-inline:auto ;
        margin-top: 1.5cqw;
    }

        .info
        {
            margin: 1cqw;
            border-radius: 5px;
            overflow: hidden;
            width: 60%;
            height: 20cqw;
            // background-color: rgb(142, 255, 127);

            > iframe
            {
                display: block;
                width: 100%;
                height: 100%;
 
            }
        }
        .nombre
        {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 1cqw;
            border-radius: 10px;
            padding: 0.5cqw;
            
            background-color: var(--col_detail);
            width: 40%;
            height: fit-content;
            >*
            {
                color: rgb(0, 0, 0);
                font-size: 2cqw;
                font-weight: bold;
           }
        }

</style>


<script lang="ts">
    export let picto: any;

    export let pdf: any;
    export let tiponegocio: any;
    export let t_1 :string;
    export let t_2 :string;

    import {col_fondo, col_menus, col_detail, col_hover} from "$lib/componentes/colores";

    let innerWidth = 0;
  const ancho = 750;

 
</script>

<svelte:window bind:innerWidth />

<div class="tipo_negocio" style:--col_fondo={col_fondo} style:--col_menus={col_menus} style:--col_detail={col_detail} style:--col_hover={col_hover} >
    <p style="color:white">{tiponegocio}</p>
</div>

<div class="cont_pdf">
    <div class="picto">
        <a href="https://arasaac.org/pictograms/es/3007/carnicer%C3%ADa">
            <img src={picto} alt="Pictografía identificativa del negocio">
        </a>
    </div>
    <div class="pdf">
        {#if innerWidth >= ancho}
            <embed src={pdf} type="application/pdf" width="100%" height="100%">
        {:else}
            <img src={t_1} alt="Página 1 de tablero de comunicaciones" style="margin-bottom: 6cqw;">
            <img src={t_2} alt="Página 2 de tablero de comunicaciones">
        {/if}
    </div>
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
        margin-bottom: 2cqw;

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

    .cont_pdf
    {
        display: flex;
        flex-direction: column;

            
        align-items: center;
        background-color:rgb(255, 255, 255);
        border-radius: 20px;
        width: 45cqw;
        height: 156cqw;

        margin: auto;

        @media screen and (max-width: 750px)
        {
            border-radius: 8px;
            width: 95cqw;
            height: 332cqw;
            margin-bottom: 5cqw;
        }
        
    }

        .picto
        {
            display: flex;
            flex-direction: column;
            align-items: center;
            
            margin-top: 2cqw;
            width: 75%;

            > img
            {
                width: 85%;
                
            }

            > p
            {
                font-size: 2cqw;
                font-weight: 600;
            }
        }

        .pdf
        {
            width: 90%;
            height:115cqw;
            border-radius: 10px;
            box-shadow: 0px 0px 16px 2px rgba(0,0,0,0.6);
            overflow: hidden;
            // background-color:#6d2424;  

            margin-top: 2.5cqw;

            > img {
                border-radius: 8px;
                box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.3); 
            }
            @media screen and (max-width: 750px)
            {
                height:247cqw;
                overflow:unset;
                margin-top: 5cqw;
                box-shadow:none; 
            }
        }

</style>


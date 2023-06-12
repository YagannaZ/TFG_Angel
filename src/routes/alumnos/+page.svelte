<script lang="ts">
    import Presentacion from './Presentacion.svelte';

    import {col_fondo, col_menus, col_detail, col_hover} from "$lib/componentes/colores";


</script>

<div class="titulo" style:--col_fondo={col_fondo} style:--col_menus={col_menus} style:--col_detail={col_detail} style:--col_hover={col_hover}>
    <p style="color:white">TRABAJO DE LOS ALUMNOS</p>
</div>

<iframe class="video" width="1080" height="720" src="https://www.youtube.com/embed/5uqFkosa9Vw" title="YouTube video player" 
frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
allowfullscreen/>

<div class="trabajos" style:--col_fondo={col_fondo} style:--col_menus={col_menus} style:--col_detail={col_detail} style:--col_hover={col_hover}>
    <Presentacion url={"https://view.genial.ly/63f77c94954e1700193e4b7c"} nombre={"Comercio"}/>
    <Presentacion url={"https://view.genial.ly/63f7b554b159b50018ec7f54"} nombre={"Una ciudad de todos y para todos"}/>
    <Presentacion url={"https://view.genial.ly/63fcaffe9f1659001246bd55"} nombre={"Presentación básica"}/>
    <Presentacion url={"https://view.genial.ly/63fcfb432cfb7400137dbe7c"} nombre={"Pictogramas"}/>
    <Presentacion url={"https://view.genial.ly/63fda2529f16590012483d9e"} nombre={"Infografía Luismi Fabián"}/>
    <Presentacion url={"https://view.genial.ly/63fdd5999c9aa600191db671"} nombre={"Joel y Lara"}/>
    <Presentacion url={"https://view.genial.ly/63fc99c7092f880017379d68"} nombre={"Calahorra una ciudad de todos y para todos"}/>
    <Presentacion url={"https://view.genial.ly/63fcc9d02cfb7400137d27b9"} nombre={"Lista química"}/>
    <Presentacion url={"https://view.genial.ly/63fd25c21092750013b24938"} nombre={"INFOGRAFÍA Alan, Gael y Yanis"}/>
    <Presentacion url={"https://view.genial.ly/641333edb650eb0011be1857"} nombre={"Infografia de Ines"}/>
    <Presentacion url={"https://view.genial.ly/64137d753813da0018da0d08"} nombre={"INFOGRAFÍA JULIÁN"}/>
    <Presentacion url={"https://view.genial.ly/63fccffc9f16590012470fa3"} nombre={"PRESENTACIÓN SKETCH ANIMADO"}/>
</div>

<style lang="scss">

.titulo
    {
        display: flex;
        // justify-content: center;
        align-items: center;
        margin: auto;
        width: 45cqw;
        height: 8cqw;
        background-color:var(--col_detail) ;
        border-radius: 20px;
        margin-bottom: 4cqw;
        
        > *
        {
            font-size: 3cqw;
            font-weight: bold;
            text-align: center;
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
        }
    }   
    
.video
{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 45cqw;
    height: 26cqw;
    border-radius: 20px;
    // background-color: rgb(173, 173, 173);
    box-shadow: 0px 0px 16px 2px rgba(0,0,0,0.6);

    margin-bottom: 3cqw;
}

.trabajos
{
    margin: auto;
    display: flex;
    flex-direction: column;;
    width: 65cqw;
    height: 48cqw;
    // overflow: scroll;
    overflow-y: scroll;
    // scroll-behavior: smooth;
    border-radius: 20px;
    background-color: white;
}


</style>
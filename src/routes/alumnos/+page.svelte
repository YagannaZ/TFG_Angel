<script lang="ts">
    import Presentacion from './Presentacion.svelte';
    import PresentacionMob from './Presentacion_mob.svelte';
    import {col_fondo, col_menus, col_detail, col_hover} from "$lib/componentes/colores";

    import info1 from "$lib/img/infografias/info1.png";
    import info2 from "$lib/img/infografias/info2.png";
    import info3 from "$lib/img/infografias/info3.png";
    import info4 from "$lib/img/infografias/info4.png";
    import info5 from "$lib/img/infografias/info5.png";
    import info6 from "$lib/img/infografias/info6.png";
    import info7 from "$lib/img/infografias/info7.png";
    import info8 from "$lib/img/infografias/info8.png";
    import info9 from "$lib/img/infografias/info9.png";
    import info10 from "$lib/img/infografias/info10.png";
    import info11 from "$lib/img/infografias/info11.png";
    import info12 from "$lib/img/infografias/cala12.png";

    let innerWidth = 0;
    const ancho = 750;
</script>


<svelte:window bind:innerWidth />

<div class="titulo" style:--col_fondo={col_fondo} style:--col_menus={col_menus} style:--col_detail={col_detail} style:--col_hover={col_hover}>
    <p style="color:white">TRABAJO DE LOS ALUMNOS</p>
</div>

<iframe class="video" src="https://www.youtube.com/embed/5uqFkosa9Vw" title="YouTube video player" 
frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
allowfullscreen/>

<div class="trabajos" style:--col_fondo={col_fondo} style:--col_menus={col_menus} style:--col_detail={col_detail} style:--col_hover={col_hover}>
    {#if innerWidth >= ancho}
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
    {:else}
        <PresentacionMob ruta={info1} url={"https://view.genial.ly/63f77c94954e1700193e4b7c"} nombre={"Comercio"} />
        <PresentacionMob ruta={info2} url={"https://view.genial.ly/63f7b554b159b50018ec7f54"} nombre={"Una ciudad de todos y para todos"}/>
        <PresentacionMob ruta={info3} url={"https://view.genial.ly/63fcaffe9f1659001246bd55"} nombre={"Presentación básica"}/>
        <PresentacionMob ruta={info4} url={"https://view.genial.ly/63fda2529f16590012483d9e"} nombre={"Pictogramas"}/>
        <PresentacionMob ruta={info5} url={"https://view.genial.ly/63fda2529f16590012483d9e"} nombre={"Infografía Luismi Fabián"}/>
        <PresentacionMob ruta={info6} url={"https://view.genial.ly/63fdd5999c9aa600191db671"} nombre={"Joel y Lara"}/>
        <PresentacionMob ruta={info7} url={"https://view.genial.ly/63fc99c7092f880017379d68"} nombre={"Calahorra una ciudad de todos y para todos"}/>
        <PresentacionMob ruta={info8} url={"https://view.genial.ly/63fcc9d02cfb7400137d27b9"} nombre={"Lista química"}/>
        <PresentacionMob ruta={info12} url={"https://view.genial.ly/63fd25c21092750013b24938"} nombre={"INFOGRAFÍA Alan, Gael y Yanis"}/>
        <PresentacionMob ruta={info9} url={"https://view.genial.ly/63fd25c21092750013b24938"} nombre={"Infografia de Ines"}/>
        <PresentacionMob ruta={info10} url={"https://view.genial.ly/64137d753813da0018da0d08"} nombre={"INFOGRAFÍA JULIÁN"}/>
        <PresentacionMob ruta={info11} url={"https://view.genial.ly/63fccffc9f16590012470fa3"} nombre={"PRESENTACIÓN SKETCH ANIMADO"}/>    
    {/if}
    
</div>

<style lang="scss">

.titulo
    {
        display: flex;
        justify-content: center;
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
                font-size: 5.8cqw;
            }
        } 

        @media screen and (max-width: 750px)
        {
            width: 95cqw; 
            height: 10cqw;
            border-radius: 8px;
            margin-bottom: 8cqw;
            margin-top: 25cqw;
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
    border-radius: 8px;
    // background-color: rgb(173, 173, 173);
    box-shadow: 0px 0px 16px 2px rgba(0,0,0,0.6);

    margin-bottom: 3cqw;
    width: 1080;
    height: 720;

    @media screen and (max-width: 750px)
    {
        width: 90%;
        height: 60cqw;
        border-radius: 8px;
        margin-bottom: 6cqw;
    }
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

    @media screen and (max-width: 750px)
    {
        border-radius: 8px;
        width: 70%;
        height:fit-content;
        overflow-y:unset;
    }
}


</style>
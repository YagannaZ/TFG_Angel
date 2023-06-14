<script lang="ts">
    import Presentacion from './Presentacion.svelte';
    import PresentacionMob from './Presentacion_mob.svelte';
    import {col_fondo, col_menus, col_detail, col_hover} from "$lib/componentes/colores";

    import info_B_1 from "$lib/img/infografias/B/info1.png";
    import info_B_2 from "$lib/img/infografias/B/info2.png";
    import info_B_3 from "$lib/img/infografias/B/info3.png";
    import info_B_4 from "$lib/img/infografias/B/info4.png";
    import info_B_5 from "$lib/img/infografias/B/info5.png";
    import info_B_6 from "$lib/img/infografias/B/info6.png";
    import info_B_7 from "$lib/img/infografias/B/info7.png";
    import info_B_8 from "$lib/img/infografias/B/info8.png";
    import info_B_9 from "$lib/img/infografias/B/info9.png";
    import info_B_10 from "$lib/img/infografias/B/info10.png";
    import info_B_11 from "$lib/img/infografias/B/info11.png";
    import info_B_12 from "$lib/img/infografias/B/cala12.png";

    import info_A_1 from "$lib/img/infografias/A/info1.png";
    import info_A_2 from "$lib/img/infografias/A/info2.png";
    import info_A_3 from "$lib/img/infografias/A/info3.png";
    import info_A_4 from "$lib/img/infografias/A/info4.png";
    import info_A_5 from "$lib/img/infografias/A/info5.png";
    import info_A_6 from "$lib/img/infografias/A/info6.png";
    import info_A_7 from "$lib/img/infografias/A/info7.png";
    import info_A_8 from "$lib/img/infografias/A/info8.png";
    import info_A_9 from "$lib/img/infografias/A/info9.png";
    import info_A_10 from "$lib/img/infografias/A/info10.png";
  

    
    import {roomA} from "$lib/componentes/vars";
    import {roomB} from "$lib/componentes/vars";

    function selA ()
    {
        $roomA = true
        $roomB = false
    }

    function selB ()
    {
        $roomA = false
        $roomB = true
    }

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

<div class="select">
    <div class="A" on:click={selA} style="background-color: {$roomA ? '#009A7B' : '#4ED1AF'}"><h2>Clase 5º A</h2></div>
    <div class="B" on:click={selB} style="background-color: {$roomB ? '#009A7B' : '#4ED1AF'}"><h2>Clase 5º B</h2></div>
</div>

{#if !$roomA && $roomB}
    <div class="trabajos" style:--col_fondo={col_fondo} style:--col_menus={col_menus} style:--col_detail={col_detail} style:--col_hover={col_hover}>
        {#if innerWidth >= ancho}
            <Presentacion url={"https://view.genial.ly/63f77c94954e1700193e4b7c"} nombre={"Comercio"}/>
            <Presentacion url={"https://view.genial.ly/63f7b554b159b50018ec7f54"} nombre={"Una ciudad de todos y para todos"}/>
            <Presentacion url={"https://view.genial.ly/63fcaffe9f1659001246bd55"} nombre={""}/>
            <Presentacion url={"https://view.genial.ly/63fcfb432cfb7400137dbe7c"} nombre={""}/>
            <Presentacion url={"https://view.genial.ly/63fda2529f16590012483d9e"} nombre={"Infografía Luismi Fabián"}/>
            <Presentacion url={"https://view.genial.ly/63fdd5999c9aa600191db671"} nombre={"Joel y Lara"}/>
            <Presentacion url={"https://view.genial.ly/63fc99c7092f880017379d68"} nombre={"Calahorra una ciudad de todos y para todos"}/>
            <Presentacion url={"https://view.genial.ly/63fcc9d02cfb7400137d27b9"} nombre={"Infografía Luismi Fabián"}/>
            <Presentacion url={"https://view.genial.ly/63fd25c21092750013b24938"} nombre={"INFOGRAFÍA Alan, Gael y Yanis"}/>
            <Presentacion url={"https://view.genial.ly/641333edb650eb0011be1857"} nombre={"Infografia de Ines"}/>
            <!-- <Presentacion url={"https://docs.google.com/presentation/d/1U_zsg9M-LujA6G6tYCJmDIiklQRbwgMvpziK4Tu_7Gs/present?slide=id.gc6f90357f_0_0"} nombre={""}/> -->
            <Presentacion url={"https://view.genial.ly/64137d753813da0018da0d08"} nombre={"INFOGRAFÍA JULIÁN"}/>    
            <Presentacion url={"https://view.genial.ly/63fccffc9f16590012470fa3"} nombre={"PRESENTACIÓN SKETCH ANIMADO"}/>
        {:else}
            <PresentacionMob ruta={info_B_1} url={"https://view.genial.ly/63f77c94954e1700193e4b7c"} nombre={"Comercio"} />
            <PresentacionMob ruta={info_B_2} url={"https://view.genial.ly/63f7b554b159b50018ec7f54"} nombre={"Una ciudad de todos y para todos"}/>
            <PresentacionMob ruta={info_B_3} url={"https://view.genial.ly/63fcaffe9f1659001246bd55"} nombre={"Presentación básica"}/>
            <PresentacionMob ruta={info_B_4} url={"https://view.genial.ly/63fda2529f16590012483d9e"} nombre={"Pictogramas"}/>
            <PresentacionMob ruta={info_B_5} url={"https://view.genial.ly/63fda2529f16590012483d9e"} nombre={"Infografía Luismi Fabián"}/>
            <PresentacionMob ruta={info_B_6} url={"https://view.genial.ly/63fdd5999c9aa600191db671"} nombre={"Joel y Lara"}/>
            <PresentacionMob ruta={info_B_7} url={"https://view.genial.ly/63fc99c7092f880017379d68"} nombre={"Calahorra una ciudad de todos y para todos"}/>
            <PresentacionMob ruta={info_B_8} url={"https://view.genial.ly/63fcc9d02cfb7400137d27b9"} nombre={"Lista química"}/>
            <PresentacionMob ruta={info_B_12} url={"https://view.genial.ly/63fd25c21092750013b24938"} nombre={"INFOGRAFÍA Alan, Gael y Yanis"}/>
            <PresentacionMob ruta={info_B_9} url={"https://view.genial.ly/63fd25c21092750013b24938"} nombre={"Infografia de Ines"}/>
            <PresentacionMob ruta={info_B_10} url={"https://view.genial.ly/64137d753813da0018da0d08"} nombre={"INFOGRAFÍA JULIÁN"}/>
            <PresentacionMob ruta={info_B_11} url={"https://view.genial.ly/63fccffc9f16590012470fa3"} nombre={"PRESENTACIÓN SKETCH ANIMADO"}/>    
        {/if}
    </div>

{:else}
    <div class="trabajos" style:--col_fondo={col_fondo} style:--col_menus={col_menus} style:--col_detail={col_detail} style:--col_hover={col_hover}>
        {#if innerWidth >= ancho}
            <Presentacion url={"https://view.genial.ly/64077884647379001783f3ac"} nombre={"Infografía Luismi Fabián"}/>
            <Presentacion url={"https://view.genial.ly/640067a9ee204a001afcbbb4"} nombre={"Joel y Lara"}/>
            <Presentacion url={"https://view.genial.ly/63fcbd0d630155001824042d"} nombre={"Calahorra una ciudad de todos y para todos"}/>
            <Presentacion url={"https://view.genial.ly/63fe1bbb9c9aa600191e64fb"} nombre={"Joel y Lara"}/>
            <Presentacion url={"https://view.genial.ly/63fcbf6b1092750013b1327d"} nombre={"Calahorra una ciudad de todos y para todos"}/>
            <Presentacion url={"https://view.genial.ly/63fcc079ea75920011f922e2"} nombre={"Lista química"}/>
            <Presentacion url={"https://view.genial.ly/63fcbe911b8c2f001814330b"} nombre={"INFOGRAFÍA Alan, Gael y Yanis"}/>

        {:else}
            <PresentacionMob ruta={info_A_1} url={"https://view.genial.ly/64077884647379001783f3ac"} nombre={"Una ciudad de todos y para todos"}/>
            <PresentacionMob ruta={info_A_2} url={"https://view.genial.ly/640067a9ee204a001afcbbb4"} nombre={"Presentación básica"}/>
            <PresentacionMob ruta={info_A_3} url={"https://view.genial.ly/63fcbd0d630155001824042d"} nombre={"Pictogramas"}/>
            <PresentacionMob ruta={info_A_4} url={"https://docs.google.com/presentation/d/1yhH6t5TUj9jfHIshmFQpdZ7Tqfmjbp9E9BNQBaocy2E/present?slide=id.p"} nombre={"Infografía Luismi Fabián"}/>
            <PresentacionMob ruta={info_A_5} url={"https://view.genial.ly/63fdd5999c9aa600191db671"} nombre={"Joel y Lara"}/>
            <PresentacionMob ruta={info_A_6} url={"https://view.genial.ly/63fc99c7092f880017379d68"} nombre={"Calahorra una ciudad de todos y para todos"}/>
            <PresentacionMob ruta={info_A_7} url={"https://view.genial.ly/63fcc9d02cfb7400137d27b9"} nombre={"Lista química"}/>
            <PresentacionMob ruta={info_A_8} url={"https://view.genial.ly/63fd25c21092750013b24938"} nombre={"INFOGRAFÍA Alan, Gael y Yanis"}/>
            <PresentacionMob ruta={info_A_9} url={"https://view.genial.ly/63fd25c21092750013b24938"} nombre={"Infografia de Ines"}/>
            <PresentacionMob ruta={info_A_10} url={"https://view.genial.ly/64137d753813da0018da0d08"} nombre={"INFOGRAFÍA JULIÁN"}/>
            
        {/if}
    </div>
{/if}
    



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
    
    h2{
        color: white;
        font-size: 2.5cqw;
        @media screen and (max-width: 750px)
            {
            font-size: 4.9cqw;        
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



////////////////////

.select
{
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 5px;
    flex-direction: row;
    
    width: 65cqw;
    height: 6cqw;
    background-color:#4ED1AF;
    margin: auto;

    margin-bottom: 3cqw;

    @media screen and (max-width: 750px)
    {
        width: 70%;
        height: 16cqw;
    }

    .A, .B
    {
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 5px;

        margin: 1cqw;
        width: 40%;
        height: 80%;
        background-color:#4ED1AF;
    }
}
</style>
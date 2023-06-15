<script lang="ts">
  import Audio from '../../lib/componentes/audio.svelte';

    import Cuerpo_negocio from '../../lib/componentes/Cuerpo_negocio.svelte';
    import picto from "$lib/img/Locales/carniceria/carniceriaAR.png"

    import t_1 from "$lib/img/Locales/carniceria/T_carniceria-1.png"
    import t_2 from "$lib/img/Locales/carniceria/T_carniceria-2.png"

    import pdf_r from "$lib/img/Locales/carniceria/T_carniceria.pdf"
    let pdf = pdf_r + "#view=Fit&navpanes=0"
    let tiponegocio: any = "CARNICERÍA"

    import es from "$lib/img/banderas/es.png"
    import en from "$lib/img/banderas/en.png"
    import fr from "$lib/img/banderas/fr.png"
    import rum from "$lib/img/banderas/rum.png"
    import ar from "$lib/img/banderas/ar.png"
 
    import aes from "$lib/audio/carniceria/espa.mp3";
    import aen from "$lib/audio/carniceria/ingles.mp3";
    import afr from "$lib/audio/carniceria/frances.mp3";
    import arum from "$lib/audio/carniceria/rumano.mp3";
    import aar from "$lib/audio/carniceria/arabe.mp3";
   
    let innerWidth = 0;
    const ancho = 1000;

</script>

<svelte:window bind:innerWidth />

{#if innerWidth >= ancho}
<div class="audios">
    <Audio src_audio={aes} src_img={es}/>
    <Audio src_audio={aen} src_img={en}/>
    <Audio src_audio={afr} src_img={fr}/>
    <Audio src_audio={arum} src_img={rum}/>
    <Audio src_audio={aar} src_img={ar}/>
</div>
{/if}

<Cuerpo_negocio {picto} {pdf} {tiponegocio} {t_1} {t_2}/>

<style lang="scss">
    
    .audios
    {
        background-color: white;
        position: absolute;
        left: 75cqw;
        top:21cqw;
        

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        width: 11cqw;
        height: 20cqw;

        border-radius: 15px;
        padding-top: 0.5cqw;
        padding-bottom: 0.5cqw;
        // height: fit-content;

        audio::-webkit-media-controls-current-time-display, audio::-webkit-media-controls-time-remaining-display, audio::-webkit-media-controls-timeline,
        audio::-webkit-media-controls-mute-button
        {
            display: none !important;
        }

    }
</style>

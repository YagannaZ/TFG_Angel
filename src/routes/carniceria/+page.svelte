<script lang="ts">
    import Cuerpo_negocio from './compos/Cuerpo_negocio.svelte';
    import picto from "$lib/img/Locales/carniceria/carniceriaAR.png"

    import pdf_r from "$lib/img/Locales/carniceria/T_carniceria.pdf"
    let pdf = pdf_r + "#view=Fit&navpanes=0"
    let tiponegocio: any = "Carnicería"

 
</script>

<Cuerpo_negocio {picto} {pdf} {tiponegocio}/>


<style lang="scss">



</style>
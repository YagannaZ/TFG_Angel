<script lang="ts">

    import Cuerpo_negocio from '../../lib/componentes/Cuerpo_negocio.svelte';
    import picto from "$lib/img/Locales/tienda_ropa/tienda_ropa.png"

    import t_1 from "$lib/img/Locales/tienda_ropa/T_tienda_ropa-1.png"
    import t_2 from "$lib/img/Locales/tienda_ropa/T_tienda_ropa-2.png"

    import pdf_r from "$lib/img/Locales/tienda_ropa/T_tienda_ropa.pdf"
    let pdf = pdf_r + "#view=Fit&navpanes=0"
    let tiponegocio: any = "TIENDA DE ROPA"

 
</script>

<Cuerpo_negocio {picto} {pdf} {tiponegocio} {t_1} {t_2}/>

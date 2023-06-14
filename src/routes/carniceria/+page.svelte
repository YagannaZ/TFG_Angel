<script lang="ts">
    import Cuerpo_negocio from '../../lib/componentes/Cuerpo_negocio.svelte';
    import picto from "$lib/img/Locales/carniceria/carniceriaAR.png"

    import t_1 from "$lib/img/Locales/carniceria/T_carniceria-1.png"
    import t_2 from "$lib/img/Locales/carniceria/T_carniceria-2.png"

    import pdf_r from "$lib/img/Locales/carniceria/T_carniceria.pdf"
    let pdf = pdf_r + "#view=Fit&navpanes=0"
    let tiponegocio: any = "CARNICERÍA"

 
</script>

<Cuerpo_negocio {picto} {pdf} {tiponegocio} {t_1} {t_2}/>

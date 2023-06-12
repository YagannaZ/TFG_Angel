<script lang="ts">
    import Colaborador_tarjeta from './Colaborador_tarjeta.svelte';

    import logo1 from "$lib/img/colaboradores/col3.png"
    import logo2 from "$lib/img/colaboradores/col2.png"
    import logo3 from "$lib/img/colaboradores/col4.png"
    import logo4 from "$lib/img/colaboradores/col1.png"

    import {col_fondo, col_menus, col_detail, col_hover} from "$lib/componentes/colores";
</script>

<div class="titulo" style:--col_fondo={col_fondo} style:--col_menus={col_menus} style:--col_detail={col_detail} style:--col_hover={col_hover}>
    <p style="color:white">COLABORADORES</p>
</div>

<Colaborador_tarjeta logo={logo1} txt={"ARASAAC"} link={"https://arasaac.org/"}/>
<Colaborador_tarjeta logo={logo2} txt={"Universidad de La Rioja"} ancho={"45cqw"} link={"https://www.unirioja.es/"}/>
<Colaborador_tarjeta logo={logo3} txt={"Asociación Igual A Ti"} link={"https://igualati.org/"}/>
<Colaborador_tarjeta logo={logo4} txt={"Asociación Comerciantes de Calahorra"} link={"https://asociacioncomerciocalahorra.com/"} h_txt={"4cqw"}/>



<style lang="scss">

.titulo
    {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        width: 45cqw;
        height: 4cqw;
        background-color: var(--col_detail);
        border-radius: 20px;
        margin-bottom: 4cqw;
        
        > *
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
        }
    }



</style>
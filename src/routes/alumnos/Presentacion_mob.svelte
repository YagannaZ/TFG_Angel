<script lang="ts">
    
    export let ruta: string;
    export let url: string;
    export let nombre: string;

    import {col_fondo, col_menus, col_detail, col_hover} from "$lib/componentes/colores";
</script>

<div class="presentacion" style:--col_fondo={col_fondo} style:--col_menus={col_menus} style:--col_detail={col_detail} style:--col_hover={col_hover}>
        <div class="info">
            <a href={url}>
                <img src={ruta} alt="Presentación de los alumnos de 5º y 6º de primaria. Plataforma: Genially."/>
            </a>
        </div>
        <div class="nombre">
            <p>{nombre}</p>
        </div>
    </div>

<style lang="scss">

    .presentacion
    {

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 95%;
        height: 40cqw;
        margin-inline:auto ;
        // margin-top: 1.5cqw;
        margin: 4cqw;
    }

        .info
        {
            margin: 1cqw;
            display: flex;
            justify-content: center;
            align-items: center;
            // border-radius: px;
            overflow: hidden;
            width: 70%;
            height: 40cqw;
            // background-color: rgb(142, 255, 127);
           
        }
        .nombre
        {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 1cqw;
            border-radius: 5px;

            background-color: var(--col_detail);
            width: 50%;
            height: fit-content;
            padding: 1cqw;
            >*
            {
                color: rgb(0, 0, 0);
                font-size: 4cqw;
                font-weight: bold;
           }
        }

</style>


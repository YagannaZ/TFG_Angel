<script lang="ts">
    import lema from "$lib/img/Logos/Cala.png"

    import {col_fondo, col_menus, col_detail, col_hover} from "$lib/componentes/colores";
    
    import alumnos1 from "$lib/img/alumnos/alumnos1.jpg";
    import alumnos2 from "$lib/img/alumnos/alumnos2.jpg";
</script>

<div class="logo" style:--col_fondo={col_fondo} style:--col_menus={col_menus} style:--col_detail={col_detail} style:--col_hover={col_hover}>
    <img src={lema} alt="Logo tipo del proyecto Calahorra de todos y para todos"/>
</div>

<div class="cont_txt">
    <div class="txt">
        <h1 class="h1">¡ Hola a todos !</h1>
        <p class="p"> Somos alumnos y alumnas de 5º y 6º del Colegio Santa Teresa de Calahorra.
            Participamos en el proyecto “ Calahorra de todos y para todos “
            Nosotros nos encargamos de pictografiar los comercios de nuestra localidad.
            Y nuestros compañeros de FP Básica Especial, los edificios públicos.
            Y.....¿Qué son los pictogramas ?
            Son representaciones gráficas sencillas
            Se utilizan para identificar objetos,
            conceptos,  acciones,
            deseos, emociones
            o transmitir un mensaje
            Pero….¿ Por qué lo hacemos ?
            Porque queremos mejorar la accesibilidad cognitiva de las personas .
            Así, fomentamos  la participación en la ciudad de todas las personas
            y  que todos disfrutemos  del entorno con autonomía.
            Su uso redunda en beneficio de  tooooooooda la ciudadanía.</p>
    </div>
</div>

<div class="fotos">
    <div class="fot1">
        <div class="clase"><h2>Clase 5ºA</h2></div>
        <img src={alumnos2} alt="Alumnos de 5ºA">
        <div class="dark"/>
        
    </div>

    <div class="fot2">
        <div class="clase"><h2>Clase 5ºB</h2></div>
        <img src={alumnos1} alt="Alumnos de 5ºB">
        <div class="dark"/>
        
   </div>

</div>




<style lang="scss">
.logo
{
    background-color: white;
    border-radius: 15px;
    margin: auto;
    width: 40cqw;
    padding: 1.5cqw;
    height: fit-content;
    margin-bottom: 3cqw;
}

.cont_txt
{
    background-color: white;
    border-radius: 15px;
    margin: auto;
    width: 30cqw;
    padding: 1.5cqw;
    height: fit-content;
    line-height: 1.2cqw;

    margin-bottom: 1cqw;
}

.fotos
{
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
}

.fot1, .fot2
{
    width: 50%;
    height: 28cqw;
    margin: 1cqw;
    border-radius: 15px;
    overflow: hidden;
    filter:grayscale(50%);

    &:hover
    {
        filter:grayscale(0%);
    }
}

.clase
{
    display: flex;
    justify-content: center;
    align-items: center;

    
    margin-top: 9cqw ;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

}

.dark
{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    &:hover
    {
        background-color: rgba(0, 0, 0, 0);
        transition: ease 0.5s;
    }
}

// .dark:hover
// {
//     background-color: rgba(0, 0, 0, 0);
//     transition: ease 0.5s;
// }
.h1
    {
        margin-bottom: 1.5cqw;
        font-size: 1.5cqw;
    }

h2 
{
    color: white;
    font-size: 2.5cqw;
}
.p
{
    font-size: 0.7cqw;
    text-align: justify;
}

</style>
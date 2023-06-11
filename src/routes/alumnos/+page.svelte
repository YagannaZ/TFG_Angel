<script lang="ts">

</script>

<div class="titulo">
    <p style="color:white">TRABAJO DE LOS ALUMNOS</p>
</div>


<iframe class="video" width="1080" height="720" src="https://www.youtube.com/embed/5uqFkosa9Vw" title="YouTube video player" 
frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
allowfullscreen/>

<div class="trabajos">
    <div class="presentacion">
        <div class="info">
            <iframe title="Una ciudad de todos y para todos" frameborder="0"  src="https://view.genial.ly/63f77c94954e1700193e4b7c" type="text/html" allowscriptaccess="always" allowfullscreen="true" scrolling="yes" allownetworking="all">
            </iframe> 
        </div>
        <div class="nombre">
            <p>Comercio</p>
        </div>
    </div>
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
        background-color:#3DC573; 
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
    height: 30cqw;
    border-radius: 20px;
    background-color: rgb(173, 173, 173);
    box-shadow: 0px 0px 16px 2px rgba(0,0,0,0.6);

    margin-bottom: 3cqw;
}

.trabajos
{
    margin: auto;
    display: flex;
    flex-direction: column;
    width: 65cqw;
    height: 100cqw;
    border-radius: 20px;
    background-color: black;
}
    .presentacion
    {

        display: flex;
        flex-direction: row;
        width: 95%;
        height: 25cqw;
        margin-inline:auto ;
        margin-top: 1.5cqw;
    }

        .info
        {
            margin: 1cqw;
            border-radius: 5px;
            overflow: hidden;
            width: 70%;
            height: 20cqw;
            background-color: rgb(142, 255, 127);

            > iframe
            {
                display: block;
                width: 100%;
                height: 100%;
 
            }
        }
        .nombre
        {
            background-color: aquamarine;
            >*
            {
                color: white;
                font-size: 2cqw;
                font-weight: bold;
           }
        }

</style>
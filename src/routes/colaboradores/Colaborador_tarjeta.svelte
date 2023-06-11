<script lang="ts">
    export let logo: any;
    export let txt: any;
    export let ancho: any = "45cqw";
    export let link: any;
    export let h_txt:any = "2.3cqw";
</script>


    <div class="colaborador" style:--ancho={ancho} style:--h_txt={h_txt}>
        <a class="logo" href={link}>
            <img src={logo} alt="Logo de colaborador">
        </a>
        <a class="txt" href="https://arasaac.org/">
            <p>{txt}</p>
        </a>
    </div>


<style lang="scss">


.colaborador
{
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: var(--ancho);
    margin: auto;

    margin-bottom: 5cqw;
    @media screen and (max-width: 750px)
    {
        width: 95cqw; 
    }
}

    .logo
    {
        background-color:#ffffff; 
        width: 45cqw;
        display: flex;
        
        margin: auto;
        border-radius: 20px;
        overflow: hidden;
        > img
        {
            margin: auto;
            width: 95%;
        }

        @media screen and (max-width: 750px)
        {
            width: 90cqw; 
            border-radius: 8px;
        }
    }

    .txt
    {
        display: flex;
        justify-content: center;
        align-items: center;

        background-color:#3DC573;
        margin: auto;
        margin-top: 1cqw;
        width: 30cqw;
        height: var(--h_txt);
        text-decoration: none;
        border-radius: 10px;

        @media screen and (max-width: 750px)
        {
            width: 70cqw;  
            height: 4.8cqw;
            border-radius: 5px;
        }

        > p
        {
            font-weight: bold;
            font-size: 1.5cqw;
            text-align: center;
            color: #ffffff;

            @media screen and (max-width: 750px)
            {
                font-size: 3cqw;
            }
        }
    }
</style>


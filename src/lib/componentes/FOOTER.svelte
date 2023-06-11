<script lang="ts">
    import TW from "$lib/img/Redes/Redes-blanco-01.png"
    import FB from "$lib/img/Redes/Redes-blanco-02.png"
    import IG from "$lib/img/Redes/Redes-blanco-03.png"
</script>

<div class="footer">
    <div class="cont_redes">
        <div class="TW">
            <img src={TW} alt="Logo blanco de Twitter"/>
        </div>
        <div class="FB">
            <img src={FB} alt="Logo blanco de FaceBook"/>
        </div>
        <div class="IG">
            <img src={IG} alt="Logo blanco de Instagram"/>
        </div>
    </div>

    <div class="txt">
        <h3>
            Redes sociales de Colegio Santa Teresa de Calahorra
        </h3>
    </div>
</div>

<style lang="scss">

    .footer
    {
        background-color: #3DC573;  
        justify-content: center;
        flex-direction: column;
        display: flex;
        align-items: center;
        margin-top: 10cqw;
        height:15cqw;

        @media screen and (max-width: 750px)
        {
            height:35cqw;
 
        }
    }

    .cont_redes
    {
        margin-top: 1cqw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 30cqw;

        @media screen and (max-width: 750px)
        {
            width: 60cqw; 
        }

        >div
        {
            width: 3cqw;
            @media screen and (max-width: 750px)
            {
                width: 9cqw;
            }
        }

        >div > img{
            cursor: pointer;
        }
        
        
    }

    .txt
    {
        margin-top: 2cqw;
        
        @media screen and (max-width: 750px) 
        {
            margin-top: 6cqw;
        }
        > h3{
            color: white;
        @media screen and (max-width: 750px) 
        {
            font-size: 3.8cqw;
        }
        }
    
        
    }

</style>
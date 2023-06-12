<script lang="ts">
    import TW from "$lib/img/Redes/Redes-blanco-01.png"
    import FB from "$lib/img/Redes/Redes-blanco-02.png"
    import IG from "$lib/img/Redes/Redes-blanco-03.png"

    import {col_fondo, col_menus, col_detail, col_hover} from "$lib/componentes/colores";

</script>

<div class="footer" style:--col_fondo={col_fondo} style:--col_menus={col_menus} style:--col_detail={col_detail} style:--col_hover={col_hover}>

    <div class="cont_redes">
        <div class="TW">
            <img src={TW} alt="Logo blanco de Twitter"/>
        </div>
        <div class="FB">
            <a href="https://www.facebook.com/profile.php?id=100082468414504">        
                <img src={FB} alt="Logo blanco de FaceBook"/>
            </a>
        </div>
        <div class="IG">
            <a href="https://www.instagram.com/teresianascalahorra/?hl=es">
                <img src={IG} alt="Logo blanco de Instagram"/>
            </a>
            
        </div>
    </div>

    <div class="txt">
        <p>
            Redes sociales de Colegio Santa Teresa de Calahorra
        </p>
    </div>
</div>

<style lang="scss">

    .footer
    {
        background-color: var(--col_menus);  
        justify-content: center;
        flex-direction: column;
        display: flex;
        align-items: center;
        margin-top: 10cqw;
        height:12cqw;
        border-top: 3px solid rgb(255, 255, 255);
        box-shadow: 0px 0px 16px 2px rgba(0,0,0,0.6);

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
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        
        @media screen and (max-width: 750px) 
        {
            margin-top: 6cqw;
        }
        > p{
            color: white;
            font-size:1.5cqw;
            font-weight:bold;

            @media screen and (max-width: 750px) 
            {
                font-size: 3.8cqw;
            }
        }
    
        
    }

</style>
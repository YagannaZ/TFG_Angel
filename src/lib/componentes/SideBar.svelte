<script lang="ts">
    import "$lib/styles/style.scss"
    import lema from "$lib/img/Logos/Cala.png"

    // import { menu_open } from "./vars";

</script>

<div class="sidenav">
    <div class="cont_lema">
        <div class="lema">
            <img src={lema} alt="Logo emblema del proyecto Calahorra de todos y para todos">
        </div>
    </div>
    <div class="a-menu">
        <a href="/carniceria">Inicio</a>
    </div>
    <div class="a-menu">
        <a href="/colaboradores">Colaboradores</a>
    </div>
    <div class="a-menu">
        <a href="/">Asterics Grid</a>
    </div>
    <div class="a-menu">
        <a href="/">Trabajo de Alumnos</a>
    </div>
</div>

<style lang="scss">
    .cont_lema
    {
        display: flex;
        margin-top: 2.5cqw;
        margin-bottom: 1.5cqw;

        @media screen and (max-width: 750px)
        {
            border-radius: 8px;
            width: 95cqw;
            height: 40cqw ;
            margin-bottom: 5cqw;
        }
    }

    .lema
    {
        margin: auto;
        width: 90%;
    }

    .a-menu
    {
        margin-top: 1cqw;
    }

    /* The sidebar menu */
    .sidenav 
    {
    //   height: 100%; 
    width: 14cqw;
    //   height: 37cqw; /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top: 2px solid #636363;
    border-right: 2px solid #636363;
    border-bottom: 2px solid #636363;
    top: 7cqw; /* Stay at the top */
    left:0;
    background-color: #3DC573; 
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-bottom: 15px;

    animation: Jorge 1s;

		@keyframes Jorge {
			0% {
                left: -15%;
			}

			100% {
				left: 0%;
			}
		}
    }


    // .sidenav:hover{
    //     background-color: blueviolet;
    // }

    /* The navigation menu links */
    .sidenav a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 1.5cqw;
    color: #ffffff;
    display: block;
    }

    /* When you mouse over the navigation links, change their color */
    .sidenav a:hover {
    color: #000000;
    }


</style>
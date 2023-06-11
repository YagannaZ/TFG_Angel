<script lang="ts">
    import "$lib/styles/style.scss"
    import lema from "$lib/img/Logos/Cala.png"

</script>

<div class="sidenav">
    <div class="cont_lema">
        <div class="lema">
            <img src={lema} alt="Logo emblema del proyecto Calahorra de todos y para todos">
        </div>
    </div>
    <div class="a-menu">
        <a href="/">Inicio</a>
    </div>
    <div class="a-menu">
        <a href="/">Colaboradores</a>
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
        // justify-content:center ;
        // background-color:#CFFFE2;
        // border-radius: 20px;
        // width: 45cqw;
        // margin: auto;
        // height: 20cqw ;
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
    .sidenav {
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
    //   padding-right: 20px;
    }

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
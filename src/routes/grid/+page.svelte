<script lang="ts">
  import Icono from './icono.svelte';


import {col_fondo, col_menus, col_detail, col_hover} from "$lib/componentes/colores";

import picto1 from "$lib/img/Locales/carniceria/carniceriaAR.png"
import picto2 from "$lib/img/Locales/joyeria/joyeria.png"
import picto3 from "$lib/img/Locales/optica/optica.png"
import picto4 from "$lib/img/Locales/tienda_ropa/tienda_ropa.png"
import picto5 from "$lib/img/Locales/zapateria/zapateria.png"


</script>




<div class="titulo" style:--col_fondo={col_fondo} style:--col_menus={col_menus} style:--col_detail={col_detail} style:--col_hover={col_hover} >
    <p style="color:white">TIPOS DE COMERCIO</p>
</div>

    <div class="grid">
        <div class="container">
            <div class="A"> <Icono src={picto1} alt="Carinicería" nombre="Carnicería" href="/carniceria"/></div>
            <div class="B"> <Icono src={picto2} alt="Joyería" nombre="Joyería" href="/joyeria"/></div>
            <div class="C"> <Icono src={picto3} alt="Óptica" nombre="Óptica" href="/optica"/></div>
            <div class="D"><Icono src={picto4} alt="Carinicería" nombre="Carnicería" href="/carniceria"/></div>
            <div class="E"><Icono src={picto5} alt="Joyería" nombre="Joyería" href="/joyeria"/></div>
          </div>
        
        
          <!-- <div class="trio">
            <Icono src={picto1} alt="Carinicería" nombre="Carnicería" href="/carniceria"/>
            <Icono src={picto2} alt="Joyería" nombre="Joyería" href="/joyeria"/>
            <Icono src={picto3} alt="Óptica" nombre="Óptica" href="/optica"/>
        </div>
        <div class="trio">
            <Icono src={picto1} alt="Carinicería" nombre="Carnicería" href="/carniceria"/>
            <Icono src={picto2} alt="Joyería" nombre="Joyería" href="/joyeria"/>
            <Icono  alt="" nombre="" href="/"/>
        </div> -->
    </div>

<style lang="scss">
    
    .titulo

    {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        width: 45cqw;
        height: 4cqw;
        background-color:var(--col_detail); 
        border-radius: 20px;
        margin-bottom: 2cqw;

        > p
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
            border-radius: 5px;
            margin-bottom: 5cqw;
            margin-top: 25cqw;
        }
    }

    .grid
    {
        background-color: #4ED1AF;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        margin: auto;


        width: 65cqw;
        
        height: 45cqw;

        border-radius: 15px;

        @media screen and (max-width: 750px)
        {
            width: 90%;
            border-radius: 5px;
            height: fit-content;
            padding: 2cqw;
        }
    }

    .trio
    {
        display: flex;
        // flex-wrap: ;
        align-items: center;
        flex-direction: row;
        padding: 1cqw;
        height: 20cqw;
        overflow: hidden;
    }

    .container 
    {  
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr ;
        gap: 0px 0px;
        grid-auto-flow: row;
        gap: 25px ;
        grid-template-areas:
            "A B C"
            "D E .";
        
        margin-top: 1cqw;
}

.A { grid-area: A; }

.B { grid-area: B; }

.C { grid-area: C; }

.D { grid-area: D; }

.E { grid-area: E; }


 </style>
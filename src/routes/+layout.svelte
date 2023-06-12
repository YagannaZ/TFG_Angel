<script lang="ts">
  import SideBar from '../lib/componentes/SideBar.svelte';

  import "$lib/styles/style.scss"
  import Footer from "$lib/componentes/FOOTER.svelte";
  import Header from "$lib/componentes/HEADER.svelte";

  import {menu_open} from "$lib/componentes/vars"//ABRIR Y CERRAR MENU

  let innerWidth = 0;
  const ancho = 1000;
</script>

<svelte:window bind:innerWidth />





<Header/>
{#if innerWidth >= ancho}
  {#if $menu_open}

  <SideBar/>

  {/if}
{/if}
<slot/>

<Footer/>
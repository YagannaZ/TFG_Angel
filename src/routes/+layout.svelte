<script lang="ts">
  import SideBar from '../lib/componentes/SideBar.svelte';

  import "$lib/styles/style.scss"
  import Footer from "$lib/componentes/FOOTER.svelte";
  import Header from "$lib/componentes/HEADER.svelte";

  let innerWidth = 0;
  const ancho = 750;
</script>

<svelte:window bind:innerWidth />





<Header/>
{#if innerWidth >= ancho}
<SideBar/>
{/if}
<slot/>

<Footer/>
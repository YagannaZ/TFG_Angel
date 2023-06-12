<script lang="ts">
  import SideBar from '../lib/componentes/SideBar.svelte';
  import Menu_mob from '../lib/componentes/menu_mob.svelte';

  import "$lib/styles/style.scss"
  import Footer from "$lib/componentes/FOOTER.svelte";
  import Header from "$lib/componentes/HEADER.svelte";
	import MenuMob from '$lib/componentes/menu_mob.svelte';

  let innerWidth = 0;
  const ancho = 1000;
</script>

<svelte:window bind:innerWidth />





<Header/>
{#if innerWidth >= ancho}
  
  <SideBar/>
{:else}

  <Menu_mob/>
{/if}

<slot/>

<Footer/>
import { writable } from "svelte/store";

export let menu_open  = writable(false);

export let room = writable(false);


//COLORES
export let col_fondo = "#C8FCEA";
export let col_menus = "#009A7B";
export let col_detail = "#4ED1AF";
export let col_hover = "#3038A7";

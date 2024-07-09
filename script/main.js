
import { obtenerNumeroAleatorio, animacionFlip, recargarLista, cargarLista } from "./funciones.js"

let carta = document.getElementById('carta');
let btn_mostrar = document.getElementById('btn-girar');
let btn_reinicio = document.getElementById('btn-reiniciar');

cargarLista();

function comienzo() {
    carta.innerHTML = '';
    let numeroAleatorio = obtenerNumeroAleatorio();
    animacionFlip(numeroAleatorio);

}

btn_mostrar.addEventListener('click', comienzo);
btn_reinicio.addEventListener('click', recargarLista);






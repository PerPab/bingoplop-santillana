
let listaIndices = [];

function playShake() {
    document.getElementById('shake').play();
}

function playTada() {
    document.getElementById('tada').play();
}

function playCartoon() {
    document.getElementById('cartoon').play();
}

export function cargarLista() {
    listaIndices = [];
    for (let i = 0; i <= 2; i++) {   /// rellena la lista de numeros, se usan para llamar a las imagenes
        listaIndices.push(i);
    }
}

export function shakeY() {
    playShake()
    setTimeout(() => {
        carta.classList.add('animate__animated', 'animate__shakeY');
    }, 100);
    setTimeout(() => {
        carta.classList.remove('animate__animated', 'animate__shakeY');
    }, 1000);

    carta.innerHTML = `<img id='img-bicho' class='bichito' src="./img/bichito.png">`;
}

export function animacionTerminar() {
    setTimeout(() => {
        document.getElementById('btn-girar').setAttribute('disabled', 'true');
        playCartoon();
        carta.classList.add('animate__animated', 'animate__hinge')
    }, 1000);
    setTimeout(() => {
        carta.classList.remove('animate__animated', 'animate__hinge')
        carta.classList.add('invisible');
    }, 3000);

}

export function animacionFlip(numeroAleatorio) {
    setTimeout(() => {
        carta.innerHTML = `<img id='img-bicho' class='bichito' src="./img/bichito.png">`;
        carta.classList.add('animate__animated', 'animate__flip');
    }, 100);
    setTimeout(() => {
        carta.classList.remove('animate__animated', 'animate__flip');
        if (numeroAleatorio != undefined) {
            carta.innerHTML = `<div class="carta"><img id='img' class='imagen' src="./img/img-${numeroAleatorio}.PNG"></div>`
        } else {
            carta.innerHTML = `<div class="carta carta-final"><img id='img-bicho-final' class='bichito' src="./img/bichito-ansiedad.png"><p class="texto-final">¡No quedan cartas en el mazo!</p></div>`
            setTimeout(() => {
                animacionTerminar();
            }, 2000);
        }
    }, 1100);
    setTimeout(() => {
        carta.classList.add('animate__animated', 'animate__tada');
        playTada();
    }, 1100);
    setTimeout(() => {
        carta.classList.remove('animate__animated', 'animate__tada');
        playTada();
    }, 2100);
}

export function obtenerNumeroAleatorio() {
    if (listaIndices.length === 0) {
        return null;
    }
    let indiceAleatorio = Math.floor(Math.random() * listaIndices.length);
    console.log(listaIndices.length)
    let numeroSeleccionado = listaIndices[indiceAleatorio];
    listaIndices.splice(indiceAleatorio, 1);
    return numeroSeleccionado;
}

export function recargarLista() {
    carta.innerHTML = '';
    carta.classList.remove('invisible');
    document.getElementById('btn-girar').removeAttribute('disabled');
    listaIndices = [];
    for (let i = 0; i <= 15; i++) {  /// rellena la lista de numeros, se usan para llamar a las imagenes
        listaIndices.push(i);
    }
    shakeY();
}


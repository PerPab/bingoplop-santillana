
let listaIndices = [];

function playShake() {
    document.getElementById('shake').play();
}

function playTada() {
    document.getElementById('tada').play();
}

export function cargarLista() {
    listaIndices = [];
    for (let i = 0; i <= 17; i++) {
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

    //carta.innerHTML = '';
    carta.innerHTML = `<img id='img' class='imagen bichito' src="./img/bichito.png">`;
}


export function animacionFlip(numeroAleatorio) {
    setTimeout(() => {
        carta.innerHTML = `<img id='img' class='imagen bichito' src="./img/bichito.png">`;
        carta.classList.add('animate__animated', 'animate__flip');
    }, 100);
    setTimeout(() => {
        carta.classList.remove('animate__animated', 'animate__flip');
        carta.innerHTML = `<div class="carta"><img id='img' class='imagen' src="./img/img-${numeroAleatorio}.PNG"></div>`
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

//animate__hinge
export function obtenerNumeroAleatorio() {
    if (listaIndices.length === 0) {
        console.log("Todos los números han sido seleccionados.");
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
    listaIndices = [];
    for (let i = 0; i <= 17; i++) {
        listaIndices.push(i);
    }
    shakeY();
}

/**export function animacionTada() {
    carta.addEventListener('animationend', () => {
        document.getElementById('tada').play();
        carta.classList.add('animate__animated', 'animate__tada')
    })
} */



/**export function animacionFlip(numeroAleatorio) {
    carta.classList.add('animate__animated', 'animate__flip')
    setTimeout(() => {
        animacionTada()
    }, 1000);
    carta.addEventListener('animationend', () => {
        carta.classList.remove('animate__animated', 'animate__flip')
        carta.innerHTML = `<img id='img' class='imagen' src="./img/img-${numeroAleatorio}.PNG">`
    })
} */



/********************************************************** 
 * export function animacionFlip(numeroAleatorio) {
    carta.classList.add('animate__animated', 'animate__flip')
    carta.addEventListener('animationend', () => {
        carta.classList.remove('animate__animated', 'animate__flip')
        carta.innerHTML = `<img id='img' class='imagen' src="./img/img-${numeroAleatorio}.PNG">`
    })
    animacionTada()
}

export function animacionTada() {
    carta.addEventListener('animationend', () => {
        document.getElementById('tada').play()
        carta.classList.add('animate__animated', 'animate__tada')
    })
}*/
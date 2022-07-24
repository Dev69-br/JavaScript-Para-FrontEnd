

const buttons = document.getElementById('buttons');

let semafaro = document.querySelector('#img');

const trocaimg = (event) => {
    if (event.target.id === 'red') {
        semafaro.src = 'vermelho.png'
    }
    else if (event.target.id === 'yellow') {
        semafaro.src = 'amarelo.png'
    }
    else if (event.target.id === 'green') {
        semafaro.src = 'verde.png'
    }
    else if (event.target.id === 'automatic') {

    }
}

buttons.addEventListener('click', trocaimg)
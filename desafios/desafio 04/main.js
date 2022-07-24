

const buttons = document.getElementById('buttons');

let semafaro = document.querySelector('#img');
let colorIndex = 0



const nextIndex = () => {
    if(colorIndex < 2){
       colorIndex++ 
    }else{
        colorIndex = 0
    }
    
}

const changecolor = () =>{
    const cores = ['red','yellow','green'];
    const cor = cores[colorIndex]
    turnOn[cor]();
    nextIndex();
}

const traffic = (event) => {
    turnOn[event.target.id]();
}

const turnOn = {
    'red':  () => semafaro.src = 'vermelho.png',
    'yellow':  () => semafaro.src = 'amarelo.png',
    'green':  () => semafaro.src = 'verde.png',
    'automatic':  () => setInterval(changecolor,1000)
}
buttons.addEventListener('click', traffic)
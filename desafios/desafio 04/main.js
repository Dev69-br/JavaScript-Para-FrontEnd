

const listaDeTeclas = document.querySelectorAll('.buttons');





for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    
    tecla.onclick = () => {
        alert(contador)
    }
}
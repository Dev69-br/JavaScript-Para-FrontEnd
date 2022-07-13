const mostraTintas = document.querySelector('[data-mostraTintas]');
const recolheTintas = document.querySelector('[data-recolheTintas]');
const listatintas = document.querySelectorAll('li');



mostraTintas.addEventListener('click', () => {
    listatintas.forEach((elemento) => {
        elemento.style.display = 'block'
    })
})

recolheTintas.addEventListener('click', () => {
    listatintas.forEach((elemento) => {
        elemento.style.display = 'none'
    })
})
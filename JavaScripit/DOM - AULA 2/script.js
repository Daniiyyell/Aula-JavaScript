const inputElement = document.querySelector('.new-taks-input')
const addTaksButton = document.querySelector('.taks-buton')
const tasksContainer = document.querySelector('.tasks-container')

function validarBotao(){
    const texto = document.createElement('p')
    tasksContainer.appendChild(texto)
    texto.innerText = inputElement.value
}

addTaksButton.addEventListener('click', validarBotao)
function capturarEInserirValor() {
    const inputElement = document.querySelector('input[name="nome-tutor"]')
    const userName = inputElement.value
    const divElement = document.querySelector('.userName')

    divElement.innerHTML = userName
    localStorage.setItem('nomeTutor', userName)
}

function carregarNomeSalvo() {
    const savedName = localStorage.getItem('nomeTutor')
    if (savedName) {
        const divElement = document.querySelector('.userName')
        divElement.innerHTML = savedName
    }
}

window.onload = carregarNomeSalvo

export default capturarEInserirValor
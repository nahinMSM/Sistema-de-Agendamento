// Função para capturar e inserir o valor
function capturarEInserirValor() {
    const inputElement = document.querySelector('input[name="nome-tutor"]');
    const userName = inputElement.value;
    const divElement = document.querySelector('.userName');
    
    // Inserir o valor capturado na div
    divElement.innerHTML = userName;
    // Salvar o valor no localStorage
    localStorage.setItem('nomeTutor', userName);
}

// Função para carregar o valor salvo do localStorage ao carregar a página
function carregarNomeSalvo() {
    const savedName = localStorage.getItem('nomeTutor');
    if (savedName) {
        const divElement = document.querySelector('.userName');
        divElement.innerHTML = savedName;

        // Opcional: Preencher o input com o valor salvo
        // const inputElement = document.querySelector('input[name="nome-tutor"]');
        // inputElement.value = savedName;
    }
}

// Chamar a função para carregar o valor salvo quando a página for carregada
window.onload = carregarNomeSalvo;



// Explicação do Código:

// capturarEInserirValor(): Quando o botão é clicado, a função captura o valor do campo de entrada, insere o valor na div e salva o valor no localStorage usando localStorage.setItem('nomeTutor', userName).
// carregarNomeSalvo(): Quando a página é carregada, essa função é chamada automaticamente (graças ao window.onload = carregarNomeSalvo). Ela tenta recuperar o valor salvo no localStorage usando localStorage.getItem('nomeTutor'). Se houver um valor salvo, ele é inserido na div e opcionalmente no campo de entrada.
// window.onload: Define uma função que será executada quando a página for totalmente carregada, garantindo que o valor salvo seja exibido na div quando o usuário visitar a página novamente.
// Dessa forma, o valor de userName ficará salvo mesmo depois que o navegador for fechado e reaberto.
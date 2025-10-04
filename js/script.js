// Aguarda o HTML ser completamente carregado antes de executar o script.
document.addEventListener('DOMContentLoaded', function() {

    // Seleciona o botão hamburger e a lista do menu.
    const menuToggle = document.querySelector('.menu-toggle');
    const menuLista = document.querySelector('.menu-lista');

    // Verifica se os dois elementos foram encontrados na página.
    if (menuToggle && menuLista) {
        // Adiciona um "ouvinte de evento" que espera por um clique no botão.
        menuToggle.addEventListener('click', function() {
            // A cada clique, ele adiciona ou remove a classe 'active' da lista do menu.
            // O CSS cuida de mostrar/esconder o menu baseado na presença dessa classe.
            menuLista.classList.toggle('active');
        });
    }

});
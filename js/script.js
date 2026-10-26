// Menu Responsivo para Dispositivos Móveis
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Sistema de Filtro para os Pacotes de Viagem
const botoesFiltro = document.querySelectorAll('.filtro-btn');
const itensPacote = document.querySelectorAll('.pacote-item');

botoesFiltro.forEach(botao => {
    botao.addEventListener('click', () => {
        // Remove a classe active de todos os botões e adiciona no clicado
        botoesFiltro.forEach(btn => btn.classList.remove('active'));
        botao.classList.add('active');

        const filtro = botao.getAttribute('data-filter');

        itensPacote.forEach(item => {
            const categoria = item.getAttribute('data-categoria');
            if (filtro === 'todos' || categoria === filtro) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Função interativa de Reserva
function reservar(destino) {
    alert(`Parabéns! Você iniciou a reserva para o destino: ${destino}. Entraremos em contato em breve!`);
}

// Manipulação do Formulário de Contato
function enviarFormulario(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const mensagemSucesso = document.getElementById('mensagem-sucesso');
    
    mensagemSucesso.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. Em breve retornaremos.`;
    
    // Limpa o formulário
    document.getElementById('form-contato').reset();
    
    // Remove a mensagem após 5 segundos
    setTimeout(() => {
        mensagemSucesso.textContent = '';
    }, 5000);
}
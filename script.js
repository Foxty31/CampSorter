function criarEContinuar(e) {
    e.preventDefault();

    const nomeCamp = document.getElementById('nome-camp').value.trim();
    const modoJogo = document.getElementById('modo-jogo').value;

    if (!nomeCamp) {
        alert("Por favor, digite o nome do campeonato!");
        return;
    }

    // Estrutura inicial do campeonato para salvar no navegador
    const novoTorneio = {
        id: Date.now(), // Gera um ID único baseado no tempo
        nome: nomeCamp,
        modo: modoJogo,
        lider: "UsuarioAtual", // Aqui você irá integrar dinamicamente quando criar o Login
        status: "CONFIGURACAO", // Indica que está na fase de edição (add participantes, data, etc)
        data: null,
        premiacao: null,
        participantes: [] // Começa vazia para preencher na próxima página
    };

    // Salva no LocalStorage
    localStorage.setItem('torneioAtual', JSON.stringify(novoTorneio));

    // Redireciona para a tela de gerenciamento/configuração do torneio
    window.location.href = "arena.html"; 
}

function atualizarPreview() {
    const nomeInput = document.getElementById('nome-camp').value.trim();
    const modoInput = document.getElementById('modo-jogo').value;

    const previewTitulo = document.getElementById('preview-titulo');
    const previewModo = document.getElementById('preview-modo');

    if (nomeInput !== "") {
        previewTitulo.innerText = nomeInput.toUpperCase();
    } else {
        previewTitulo.innerText = "NOME DO SEU TORNEIO";
    }

    previewModo.innerText = modoInput;
}
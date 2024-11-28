// pegar os personagens no js pra poder verificar quando o usuário passar o mouse em cima de um deles

const personagens = document.querySelectorAll ('.personagem')

// adicionar a classe no personagem que o usuário passar o cursor do mouse

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        
        // - melhorar o desempenho ao ser visto pelo celular
        if (window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth' });
        }


        // verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');
         
        // quando passar o mouse em cima do personagem na listagem, trocar o nome, a imagem e a descrição do personagem grande

        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        
        // alterar a imagem do personagem grande

        const idPersonagem = personagem.attributes.id.value
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
        
        // alterar o nome do personagem grande

        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');
        

        // alterar a descrição do personagem

        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })
})


 
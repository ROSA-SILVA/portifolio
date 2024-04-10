/*
Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

        Passo 1 - pegar o botão mostra mais no JS para poder verificar quando i usuário clicar em cima dele 

        Passo 2 - identificar o clicar no botão 

        Passo 3 - adicionar a classe "ativo" nos projetos escondidos 
   
Objetivo 2- esconder o botão de mostrar mais 

   Passo 1 - pega o botão e esconder ele      
*/

//Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

//Passo 1 - pegar o botão mostra mais no JS para poder verificar quando i usuário clicar em cima dele 

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('clik', () => {
    //Passo 3 - adicionar a classe "ativo" nos projetos escondidos 
    projetosInativos.forEach(projetosInativo => {
        projetosInativo.classList.add('ativo');
    });

    //Objetivo 2- esconder o botão de mostrar mais 
    //  Passo 1 - pega o botão e esconder ele  
    botaoMostrarProjetos.classList.add("remover");
});

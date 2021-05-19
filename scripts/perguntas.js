const perguntas = [
  {
    titulo: "POSSO CONFIAR NA MVP?",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    titulo: "PARA QUEM VÃO AS INFORMAÇÕES DA MINHA CONTA?",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    titulo: "COMO FUNCIONA E QUAIS SÃO OS MEIOS DE PAGAMENTO?",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
]

var perguntasDiv = document.getElementsByClassName('perguntas')[0];


function gerarPerguntas(){
  for (let i = 0; i < perguntas.length; i++) {
    var perguntaItem = document.createElement('div');
    var perguntaTitle = document.createElement('h1');
    perguntaItem.className = "perguntaItem"
    perguntaTitle.innerHTML = perguntas[i].titulo;
    perguntasDiv.appendChild(perguntaItem);
    perguntaItem.appendChild(perguntaTitle);
    perguntaItem.setAttribute('ativo', 'false');
  }
  var itemPergunta = document.getElementsByClassName('perguntaItem');
  for (let g = 0; g < perguntas.length; g++) {
    itemPergunta[g].addEventListener('click', function(){
      if(itemPergunta[g].getAttribute('ativo') == "false"){
        var descricaoItem = document.createElement('p');
        descricaoItem.innerHTML = perguntas[g].descricao;
        itemPergunta[g].appendChild(descricaoItem);
        itemPergunta[g].setAttribute('ativo', 'true');

      }else if(itemPergunta[g].getAttribute('ativo') == 'true'){

      }
    })
    
  }
}

gerarPerguntas();
function tocaSom (idElementoAudio) { //está função serve para quando iniciar o site, já não começar tocando, mas esperar a interação do usuário para reproduzir algo.
    document.querySelector(idElementoAudio).play();
};

const ListaDeTeclas = document.querySelectorAll('.tecla'); //selecionar todas as teclas.


for (let contador = 0; contador < ListaDeTeclas.length; contador++){

    const tecla = ListaDeTeclas[contador]; //me diz a referencia da tecla
    const instrumento = tecla.classList[1]; //pega a referência da tecla e me retorna o segundo nome da tag no html
    const idAudio = `#som_${instrumento}`; //concatenando o "#som" com a classe 

    tecla.onclick = function (){ //função oculta
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(){
        tecla.classList.add('ativa');
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}
let contagemRespiracao = 0;
let isRespirando = false;

const contador = document.getElementById('respiracao-count');
const botao = document.getElementById('botao-respiracao');
const reiniciarBotao = document.getElementById('reiniciar-contagem');

function iniciarRespiracao() {
  if (!isRespirando) {
    isRespirando = true;
    botao.classList.add('inflado');
  }
}

function finalizarRespiracao() {
  if (isRespirando) {
    isRespirando = false;
    botao.classList.remove('inflado');
    contagemRespiracao++;
    contador.textContent = `Respirações: ${contagemRespiracao}`;
  }
}

function reiniciarContagem() {
  contagemRespiracao = 0;
  contador.textContent = `Respirações: ${contagemRespiracao}`;
}

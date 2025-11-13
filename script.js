const textoCitacaoEl = document.getElementById('textoCitacao');
const autorCitacaoEl = document.getElementById('autorCitacao');
const autorImagemEl = document.getElementById('autorImagem');
const musicaCitacaoEl = document.getElementById('musicaCitacao');
const btnNovaCitacao = document.getElementById('btnNovaCitacao');

const citacoes = [
  
  {
    texto: "O medo faz parte da vida da gente. Algumas pessoas não sabem como enfrentá-lo, outras - acho que estou entre elas - aprendem a conviver com ele e o encaram não como uma coisa negativa, mas como um sentimento de autopreservação.",
    autor: "Ayrton Senna",
    imagem: "imagens/ayrton.jpg",
    musica: "musicas/ayrton.mp3"
  },
  {
    texto: "Sentindo-se como um lixo deprimente que se omite para que os outros lhe questionem como você está. Você merece é ter vergonha na cara e olhar o mundo com olhos diferentes.",
    autor: "Ozzy Osbourne",
    imagem: "imagens/ozzy.jpg",
    musica: "musicas/ozzy.mp3"
  },
  {
    texto: "Eu tenho o blues no coração e o diabo nos dedos.",
    autor: "Angus Young",
    imagem: "imagens/angus.jpg",
    musica: "musicas/angus.mp3"
  },
  {
    texto: "O mundo está cheio de reis e rainhas que cegam os seus olhos e roubam os sonhos. É o céu e o inferno.",
    autor: "Tony Iommi",
    imagem: "imagens/tony.jpg",
    musica: "musicas/tony.mp3"
  }
];

function gerarNovaCitacao() {
 
  textoCitacaoEl.classList.remove('show');
  autorCitacaoEl.classList.remove('show');
  autorImagemEl.classList.remove('show');

  setTimeout(() => {
    // Para música anterior
    musicaCitacaoEl.pause();
    musicaCitacaoEl.currentTime = 0;

    // Sorteia nova citação
    const indice = Math.floor(Math.random() * citacoes.length);
    const citacao = citacoes[indice];

    // Atualiza conteúdo
    textoCitacaoEl.textContent = `"${citacao.texto}"`;
    autorCitacaoEl.textContent = `— ${citacao.autor}`;
    autorImagemEl.src = citacao.imagem;
    musicaCitacaoEl.src = citacao.musica;
    musicaCitacaoEl.play();

    // Fade-in
    setTimeout(() => {
      textoCitacaoEl.classList.add('show');
      autorCitacaoEl.classList.add('show');
      autorImagemEl.classList.add('show');
    }, 50);

  }, 500); // tempo do fade-out
}

btnNovaCitacao.addEventListener('click', gerarNovaCitacao);

// Inicializa ao carregar a página
window.addEventListener('load', () => {
  textoCitacaoEl.classList.add('show');
  autorCitacaoEl.classList.add('show');
  autorImagemEl.classList.add('show');
  gerarNovaCitacao();
});

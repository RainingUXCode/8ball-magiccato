
const imagemGato = document.getElementById("gato-img");
const botao = document.getElementById("btn-perguntar");
const containerResposta = document.getElementById("resposta-container");
const textoResposta = document.getElementById("texto-resposta");

function piscarOlhos() {
  imagemGato.src = "magic2.png";
  setTimeout(() => {
    imagemGato.src = "magic3.png";
  }, 100);
  setTimeout(() => {
    imagemGato.src = "magic2.png";
  }, 200);
  setTimeout(() => {
    imagemGato.src = "magic1.png";
  }, 300);
}
setInterval(piscarOlhos, 4000);

function gerarResposta() {
  const randomNumber = Math.floor(Math.random() * 9) + 1;

  let resposta = "";

  if (randomNumber === 1) {
    resposta = "Yes - definitely.";
  } else if (randomNumber === 2) {
    resposta = "It is decidedly so.";
  } else if (randomNumber === 3) {
    resposta = "Without a doubt.";
  } else if (randomNumber === 4) {
    resposta = "Reply hazy, try again.";
  } else if (randomNumber === 5) {
    resposta = "Ask again later.";
  } else if (randomNumber === 6) {
    resposta = "Better not tell you now.";
  } else if (randomNumber === 7) {
    resposta = "My sources say no.";
  } else if (randomNumber === 8) {
    resposta = "Outlook not so good.";
  } else {
    resposta = "Very doubtful.";
  }

  textoResposta.innerText = resposta;
  containerResposta.classList.add("mostrar");
}

botao.addEventListener("click", gerarResposta);
imagemGato.addEventListener("click", () => {
  piscarOlhos();
  gerarResposta();
});

document.getElementById("btn-sim").addEventListener("click", function() {
  confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
  });
  document.getElementById("btn-nao").style.display = "none";
});

const btnNao = document.getElementById("btn-nao");
btnNao.addEventListener("mouseover", function() {
  const x = Math.floor(Math.random() * (window.innerWidth - btnNao.offsetWidth));
  const y = Math.floor(Math.random() * (window.innerHeight - btnNao.offsetHeight));
  btnNao.style.left = x + "px";
  btnNao.style.top = y + "px";
});

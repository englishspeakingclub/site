
  const startButton = document.querySelector(".btn");
  const heroSection = document.querySelector(".hero");
  const contentDiv = document.querySelector(".content");
  const btnTextBefore = startButton.querySelector(".btn__text--before");
  const btnTextAfter = startButton.querySelector(".btn__text--after");

const clickStart = startButton.addEventListener("click", function () {
    startButton.disabled = true;
    btnTextBefore.style.display = "none";
    btnTextAfter.style.display = "inline";
    heroSection.classList.add("collapsed");
    contentDiv.classList.remove("hidden");
  });

export default clickStart;


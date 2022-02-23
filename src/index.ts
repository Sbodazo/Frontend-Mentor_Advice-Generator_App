// I runned the command "tsc.cmd intex.ts --target esnext" to compile on Windows Powershell

const button: HTMLDivElement = document?.querySelector(".newAdvice");
const quote: HTMLParagraphElement = document?.querySelector(".quote");
const id: HTMLSpanElement = document?.querySelector(".advice-id");
const dice:SVGElement = document?.querySelector(".dice");

type Advice = {
  slip: Slip;
}

type Slip = {
  advice: string;
  id: number;
}

function getRandomIntInclusive(min: number, max: number): number { // Thanks, MDN
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


const fetchNewAdvice = async () => {
  dice.classList.add("spin-animation");
  const randomId = getRandomIntInclusive(1, 120);
  const response = await fetch(`https://api.adviceslip.com/advice/${randomId}`);
  const advice: Advice = await response.json();
  quote.textContent = `"${advice.slip.advice}"`;
  id.textContent = advice.slip.id.toString();
  setTimeout(() => {
    dice.classList.remove("spin-animation");
  }, 1000);
}

button.addEventListener("click", fetchNewAdvice);
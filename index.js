let arrayBars = [];
const barContainer = document.querySelector(".array-bars");
const generate = document.querySelector(".generate");
const sortButton = document.querySelector(".bubble-sort");
let max = 300,
  min = 100;
function arrayGenerate() {
  arrayBars = [];
  for (let i = 0; i < 10; i++) {
    arrayBars.push(Math.floor(Math.random() * (max - min + 1) + min));
  }
  let displayBars = arrayBars
    .map((elem, index) => {
      return `<div class="bar bar${index}" style="height:${elem}px"></div>`;
    })
    .join("");
  console.log(displayBars);
  barContainer.innerHTML = displayBars;
}

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

async function bubbleSort() {
  for (let i = 0; i < arrayBars.length; i++) {
    for (let j = 0; j < arrayBars.length - i - 1; j++) {
      await sleep(500);
      const active1 = document.querySelectorAll(".active1");
      const active2 = document.querySelectorAll(".active2");
      active1.forEach((input) => input.classList.remove("active1"));
      active2.forEach((input) => input.classList.remove("active2"));
      if (arrayBars[j] > arrayBars[j + 1]) {
        let temp = arrayBars[j];
        arrayBars[j] = arrayBars[j + 1];
        arrayBars[j + 1] = temp;
        changeStyle(arrayBars[j], arrayBars[j + 1], j);
      }
    }
  }
}

async function changeStyle(a, b, j) {
  const bar1 = document.querySelector(`.bar${j}`);
  const bar2 = document.querySelector(`.bar${j + 1}`);
  bar1.style.height = `${a}px`;
  bar2.style.height = `${b}px`;
  bar1.classList.add("active1");
  bar2.classList.add("active2");
}

generate.addEventListener("click", arrayGenerate);
sortButton.addEventListener("click", bubbleSort);

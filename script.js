const qoutes = [
  " No be who first start race dey win am, na who fit run reach the finish line. ",
  " If persin tell you say you no fit do am, just smile, nod your head, and show dem say na lie. ",
  " No be by how e start, na how e finish be the main tin. ",
  " If plan A no work, abeg, no forget say e get 25 more letters for alphabet. ",
  " E get as e be, but remember say person wey wear shoe sabi where e dey pinch. ",
  " No forget say even plant wey dey bend still dey find sun to shine. ",
  " If life be like football, remember say even goalkeeper fit score goal. ",
  " If you believe say you fit, my brother, na half of the battle be that. ",
  " No be how far, na how well. Small small, monkey dey learn to jump. ",
];

const newQoute = document.querySelector("#refresh");

newQoute.addEventListener("click", () => {
  const randomQoute = Math.floor(Math.random() * qoutes.length);
  qoute.textContent = qoutes[randomQoute];
});

newQoute.click();

// To do app features

const inputTask = document.querySelector("#task");
const addTask = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");
let tasks = [];



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

const inputTask = document.querySelector("#taskInput");

inputTask.addEventListener("input", function () {
  let inputValue = inputTask.value;
  if (inputValue.trim() !== "") {
    inputTask.style.fontFamily = "sans-serif";
    inputTask.style.color = "#24415b";
  } else {
    inputTask.style.fontFamily = "Workbench, sans-serif";
    inputTask.style.color = "";
  }
});


// To do app features

document.addEventListener('DOMContentLoaded', function() {
  // Add event listener to the form for adding tasks
  document.getElementById('taskForm').addEventListener('submit', function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
      
      // Get the input value
      let taskInput = document.getElementById('taskInput');
      let taskDescription = taskInput.value.trim();

      // If the input value is empty, return
      if (taskDescription === '') {
          alert('Please enter a task.');
          return;
      }

      // Create a new task item
      let taskItem = document.createElement('li');
      taskItem.textContent = taskDescription;

      // Add the task item to the task list
      let taskList = document.getElementById('taskList');
      taskList.appendChild(taskItem);

      
      taskInput.value = '';
  });
});



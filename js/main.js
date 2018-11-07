let inputTask = document.querySelector('#inputTask');
const submitTask = document.querySelector('#submitTask');
let taskList = document.querySelector('.taskList');

submitTask.addEventListener('click', (e) => {
  
  if(inputTask.value != '') {
    let div = document.createElement('div');
    let listItem = document.createElement('li');
    let value = document.createTextNode(inputTask.value);
    let removeButton = document.createElement('img');

    div.classList.add("listItem");

    removeButton.src = "../img/close-outline.svg";
    removeButton.classList.add("remove");

    listItem.classList.add('listItem');
    listItem.appendChild(value);
    div.appendChild(listItem);
    div.appendChild(removeButton);
    taskList.appendChild(div);

    // remove by clicking on it
    removeButton.addEventListener('click', (e) => {
      removeButton.parentElement.remove();
    });
  }
});

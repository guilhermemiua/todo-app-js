let inputTask = document.querySelector('#inputTask');
const submitTask = document.querySelector('#submitTask');
let taskList = document.querySelector('.taskList');

submitTask.addEventListener('click', (e) => {
  
  if(inputTask.value != '') {
    let div = document.createElement('div');
    let listItem = document.createElement('li');
    let value = document.createTextNode(inputTask.value);
    let removeButton = document.createElement('img');
    let checkbox = document.createElement('input');

    // Adding list item to a div
    div.classList.add('listItem');

    // Remove button attributes
    removeButton.classList.add("remove");

    // Onload image
    let downloadingImage = new Image();
    downloadingImage.src = "../img/close-outline.svg";
    downloadingImage.onload = () => {
      removeButton.src = downloadingImage.src;
    };

    // checkbox
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');

    // Adding list item
    listItem.classList.add('listItem');
    listItem.appendChild(value);
    div.appendChild(checkbox);
    div.appendChild(listItem);
    div.appendChild(removeButton);
    taskList.appendChild(div);

    // remove by clicking on it
    removeButton.addEventListener('click', (e) => {
      removeButton.parentElement.remove();
    });

    // task completed
    checkbox.addEventListener('click', (e) => {
      checkbox.parentElement.remove();
      console.log(checkbox.parentElement.children[1].innerText);
    });
  }
});

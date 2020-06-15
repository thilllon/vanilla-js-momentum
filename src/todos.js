const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = toDoForm.querySelector('ul');
const toDoClearButton = toDoForm.querySelector('#clearButton');

let idx = 0;
const toDos = [];
const LocStor_toDos = 'toDos';

const handleSubmit = (event) => {
  event.preventDefault();
  let text = toDoInput.value;
  if (text.split(' ').join('').length > 0) {
    const toDoObj = { id: `item${++idx}`, text: text };
    paintToDo(toDoObj);
    toDos.push(toDoObj);
    updateToDoList();
    toDoInput.value = '';
  }
};

const handleClear = (event) => {
  event.preventDefault();
  toDos.splice(0);
  updateToDoList();
  loadToDoList();
};

const handleDelete = (event) => {
  const button = event.target;
  const li = button.parentNode;
  li.parentNode.removeChild(li);
  const currentId = event.target.parentElement.id;
  toDos = toDos.filter((elem) => elem.id !== currentId);
  updateToDoList();
};

const paintToDo = ({ id, text }) => {
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');
  const span = document.createElement('span');
  deleteButton.innerText = '×';
  deleteButton.type = 'button';
  deleteButton.addEventListener('click', handleDelete);
  span.innerText = text;
  li.id = id;
  li.appendChild(deleteButton);
  li.appendChild(span);
  toDoList.appendChild(li);
};

const updateToDoList = () => {
  localStorage.setItem(LocStor_toDos, JSON.stringify(toDos));
  // console.info(localStorage.getItem(LocStor_toDos));
};

const loadToDoList = () => {
  // data
  const loadedToDos = localStorage.getItem(LocStor_toDos);
  if (loadedToDos) {
    toDos.splice(0);
    toDos.push(...JSON.parse(loadedToDos));
  }

  // representation
  while (toDoList.firstElementChild) {
    toDoList.removeChild(toDoList.firstElementChild);
  }
  toDos.forEach(({ id, text }) => paintToDo({ id, text }));
};

const init = () => {
  loadToDoList();
  toDoForm.addEventListener('submit', handleSubmit);
  toDoClearButton.addEventListener('click', handleClear);
};

init();

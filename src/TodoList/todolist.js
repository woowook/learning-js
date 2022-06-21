/* eslint-env browser */
// querySelector - html 요소를 선택할 때 사용되며 가장 첫번째 요소를 선택
// id의 경우 #을 붙이고 class인 경우 .를 붙여서 선택, 태그는 태그 그대로

// Html에서 class 이름이 toDoForm을 찾아서 첫번째 요소를 리턴
const toDoForm = document.querySelector('.toDoForm');
// Html에서 tag 이름이 input인 것을 찾아서 첫번째 요소를 리턴
const toDoInput = toDoForm.querySelector('input');
// Html에서 class 이름이 toDos를 찾아서 첫번째 요소를 리턴
const toDos = document.querySelector('.toDos');

const TODOLIST = 'toDoList';
let toDoList = [];

function loadToDoList() {
  // https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage
  const loadedToDoList = localStorage.getItem(TODOLIST);
  if (loadedToDoList !== null) {
    const parsedToDoList = JSON.parse(loadedToDoList);
    for (const toDo of parsedToDoList) {
      const { text } = toDo;
      paintToDo(text);
      saveToDo(text);
    }
  }
}

function saveToDoList() {
  localStorage.setItem(TODOLIST, JSON.stringify(toDoList));
}

function saveToDo(toDo) {
  const toDoObject = {
    text: toDo,
    id: toDoList.length + 1,
  };
  toDoList.push(toDoObject);
  saveToDoList();
}

function delToDo(event) {
  const { target: button } = event;
  const li = button.parentNode;
  li.remove();
  toDoList = toDoList.filter((toDo) => toDo.id !== Number(li.id));
  saveToDoList();
}

function createToDo(event) {
  event.preventDefault();
  const toDo = toDoInput.value;
  paintToDo(toDo);
  saveToDo(toDo);
  toDoInput.value = '';
}

function paintToDo(toDo) {
  // JS에서 html 요소를 생성하기 위해 createElement 사용 (li, span)
  const li = document.createElement('li');
  const span = document.createElement('span');
  const delButton = document.createElement('button');
  // DelButton.innerText = 'Del';
  // https://developer.mozilla.org/ko/docs/Web/API/Node/textContent
  delButton.textContent = 'Del';
  delButton.addEventListener('click', delToDo);
  span.innerHTML = toDo;
  li.append(span);
  li.append(delButton);
  li.id = toDoList.length + 1;
  toDos.append(li);
}

function init() {
  loadToDoList();
  toDoForm.addEventListener('submit', createToDo);
}

init();

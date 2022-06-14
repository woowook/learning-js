/* eslint-env browser */
// querySelector - html 요소를 선택할 때 사용되며 가장 첫번째 요소를 선택
// id의 경우 #을 붙이고 class인 경우 .를 붙여서 선택, 태그는 태그 그대로

// Html에서 class 이름이 toDoForm을 찾아서 첫번째 요소를 리턴
const toDoForm = document.querySelector('.toDoForm');
// Html에서 tag 이름이 input인 것을 찾아서 첫번째 요소를 리턴
const toDoInput = toDoForm.querySelector('input');
// Html에서 class 이름이 toDos를 찾아서 첫번째 요소를 리턴
const toDos = document.querySelector('.toDos');

function paintToDo(toDo) {
  // JS에서 html 요소를 생성하기 위해 createElement 사용 (li, span)
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerHTML = toDo;
  li.append(span);
  toDos.append(li);
}

//
function createToDo(event) {
  event.preventDefault();
  const toDo = toDoInput.value;
  paintToDo(toDo);
  toDoInput.value = '';
}

function init() {
  toDoForm.addEventListener('submit', createToDo);
}

init();

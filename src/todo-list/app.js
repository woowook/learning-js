/* eslint-env browser */
const todoInputElement = document.querySelector('.todo-input');
const todoListElement = document.querySelector('.todo-list');

let todos = [];
let id = 0;

const setTodos = (newTodos) => {
  todos = newTodos;
};

const getAllTodos = () => {
  return todos;
};

const appendTodos = (text) => {
  const newId = id++;
  const newTodos = getAllTodos().concat({
    id: newId,
    isCompleted: false,
    content: text,
  });
  // Const newTodos = [...getAllTodos(), {id: newId, isCompleted: false, content: text }]
  setTodos(newTodos);
  paintTodos();
};

const paintTodos = () => {
  todoListElement.innerHTML = null; // TodoListElem 요소 안의 HTML 초기화
  const allTodos = getAllTodos(); // Todos 배열 가져오기

  for (const todo of allTodos) {
    const todoItemElement = document.createElement('li');
    todoItemElement.classList.add('todo-item');

    // TodoItemElem.setAttribute('data-id', todo.id );

    const checkboxElement = document.createElement('div');
    checkboxElement.classList.add('checkbox');

    const todoElement = document.createElement('div');
    todoElement.classList.add('todo');
    todoElement.textContent = todo.content;

    const delBtnElement = document.createElement('button');
    delBtnElement.classList.add('delBtn');
    delBtnElement.innerHTML = 'X';

    if (todo.isChecked) {
      todoItemElement.classList.add('checked');
      checkboxElement.textContent = '✔';
    }

    todoItemElement.append(checkboxElement);
    todoItemElement.append(todoElement);
    todoItemElement.append(delBtnElement);

    todoListElement.append(todoItemElement);
  }
};

const init = () => {
  todoInputElement.addEventListener('keypress', (error) => {
    if (error.key === 'Enter') {
      appendTodos(error.target.value);
      todoInputElement.value = '';
    }
  });
};

init();

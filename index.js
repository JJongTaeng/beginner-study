const $form = document.querySelector('.todo-footer');
const $todoList = document.querySelector('.todo-list');

const todoItem = `
  <li class="todo-item">
    <div class="todo-item-description">
      <input type="checkbox" checked />
      <span><s>코딩 공부하기</s></span>
    </div>
    <div class="todo-item-success-date">2022/11/09</div>
  </li>
`

$form.addEventListener('submit', (e) => {
  e.preventDefault();
  $todoList.innerHTML = $todoList.innerHTML + todoItem;
});
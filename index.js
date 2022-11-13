const $form = document.querySelector('.todo-footer');
const $todoList = document.querySelector('.todo-list');


$form.addEventListener('submit', function(e) {
  e.preventDefault();

  if(e.target.description.value === '') {
    window.alert('내용을 입력해주세요.');
    return;
  }

  const $itemContainer = document.createElement('div'); // div 태그 생성


  const todoItem = `
    <li class="todo-item">
      <div class="todo-item-description">
        <input type="checkbox" />
        <span></span>
      </div>
      <div class="todo-item-success-date"></div>
    </li>
  `;

  $itemContainer.innerHTML = todoItem; // div 태그안에 todoItem 을 넣음.
  $todoList.append($itemContainer); // todo-list 안에 $itemContainer를 넣었음

  // $itemContainer에서 checkbox를 가져옴
  const $checkbox = $itemContainer.querySelector('input[type="checkbox"]');
  // $itemContainer에서 span 태그를 가져옴
  const $span = $itemContainer.querySelector('span');

  const $itemSuccessDate = $itemContainer.querySelector('.todo-item-success-date');

  // span 태그안에 우리가 입력한 description 값을 넣음
  $span.innerHTML = e.target.description.value;

  // checkbox 이벤트가
  $checkbox.addEventListener('change', (checkboxEvent) => {

    if(checkboxEvent.target.checked) { // 체크박스가 체크됐을 때
      const date = new Date();
      const today = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
      $itemSuccessDate.innerHTML = today; // 날짜를 이곳에서 넣었습니다.
      $span.classList.add('success-text'); // 체크박스가 체크가 되면서 삭선 추가
    } else { // 체크박스 체크가 풀렸을 때
      $span.classList.remove('success-text'); // 체크박스가 체크해제되면서 삭선 삭제
      $itemSuccessDate.innerHTML = '';
    }
  });

  $span.addEventListener('click', () => {
    const yes = window.confirm('삭제하시겠습니까?');
    if(yes) {
      $todoList.removeChild($itemContainer);
    }
  });

  e.target.description.value = '';
});
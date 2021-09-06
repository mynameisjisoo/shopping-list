'use strict';
const items = document.querySelector('.items');
const btn = document.querySelector('.footer__button');
const input = document.querySelector('.footer__input');

function onAdd() {
  const text = input.value;

  if (text === '') {
    input.focus();
    return;
  }

  const item = createItem(text);
  items.appendChild(item);
  input.value = '';
  input.focus();
  item.scrollIntoView({ block: 'center' });
}

let id = 0;

function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');
  itemRow.setAttribute('data-id', id);

  itemRow.innerHTML = ` 
      <div class="item"  >
          <span class="item__name">${text}</span>
          <button class="item__delete" ;>
            <i class='fas fa-trash-alt' data-targetid=${id}></i>
          </button>
      </div>
      <div class="item__divider"></div> `;
  id++;
  return itemRow;
}

input.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    onAdd();
  }
});

btn.addEventListener('click', () => {
  onAdd();
});

const list = document.querySelector('.list');
list.addEventListener('click', event => {
  const delete_id = event.target.dataset.targetid;
  //삭제
  if (delete_id) {
    const delete_target = document.querySelector(
      `.item__row[data-id="${delete_id}"]`
    );
    delete_target.remove();
  }
  //전체삭제
  const delete_all = event.target.className;
  if (delete_all === 'footer__deleteAll') {
    items.innerHTML = '';
  }
});

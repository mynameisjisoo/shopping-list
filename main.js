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

function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'itemRow');

  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  const name = document.createElement('span');
  name.setAttribute('class', 'item__name');
  name.innerHTML = text;

  const item_delete = document.createElement('button');
  item_delete.setAttribute('class', 'item__delete');
  item_delete.innerHTML = "<i class='fas fa-trash-alt'></i>";

  const item_divider = document.createElement('div');
  item_divider.setAttribute('class', 'item__divider');

  item.appendChild(name);
  item.appendChild(item_delete);
  itemRow.appendChild(item);
  itemRow.appendChild(item_divider);

  item_delete.addEventListener('click', () => {
    items.removeChild(itemRow);
  });

  const delete_All = document.querySelector('.footer__deleteAll');
  delete_All.addEventListener('click', () => {
    items.removeChild(itemRow);
  });

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

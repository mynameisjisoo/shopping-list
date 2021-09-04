'use strict';
const items = document.querySelector('.items');
const btn = document.querySelector('.footer_button');
const input = document.querySelector('.footer_input');

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
  //   item.innerText = text;

  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  const name = document.createElement('span');
  name.setAttribute('class', 'item_name');
  name.innerHTML = text;

  const item_delete = document.createElement('button');
  item_delete.setAttribute('class', 'item_delete');
  item_delete.innerHTML = "<i class='fas fa-trash-alt'></i>";

  const divider = document.createElement('div');
  divider.setAttribute('class', 'divider');

  const item_divider = document.createElement('div');
  item_divider.setAttribute('class', 'item_divider');

  item.appendChild(name);
  item.append(item_delete);
  itemRow.appendChild(item);
  itemRow.appendChild(item_divider);

  item_delete.addEventListener('click', () => {
    items.removeChild(itemRow);
  });

  const delete_All = document.querySelector('.footer_deleteAll');
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

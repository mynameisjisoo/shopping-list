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

  items.appendChild(item);
  input.value = '';
  input.focus();
  //   item.scrollIntoView();
}

function createItem(text) {
  const item = document.createElement('li');
  item.setAttribute('class', 'item');
  item.innerText = text;

  const divider = document.createElement('div');
  divider.setAttribute('class', 'divider');

  const item_delete = document.createElement('button');
  item_delete.setAttribute('class', 'item_delete');
  item_delete.innerHTML = "<i class='fas fa-trash-alt'></i>";

  item_delete.addEventListener('click', () => {
    console.log(item_delete.parentElement);
    items.removeChild(item);
  });

  items.appendChild(item);
  item.appendChild(item_delete);
  items.appendChild(divider);

  return item;
}

input.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
  }
  onAdd();
});

btn.addEventListener('click', () => {
  onAdd();
});

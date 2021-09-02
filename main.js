'use strict';
const shoppingCart = document.querySelector('#shoppingCart');
const text = document.querySelector('#text');
const ul = document.querySelector('ul');
const imgsrc = './img/trash.png';

//클릭으로 입력
shoppingCart.addEventListener('click', () => {
  //공백이아닐때만 추가하기
  if (text.value != '') {
    addShoppingList();
  }
});

//엔터로 입력
text.addEventListener('keydown', event => {
  if (text.value != '') {
    if (event.key == 'Enter') {
      addShoppingList();
    }
  }
});

function addShoppingList() {
  const item = text.value; //사용자가 입력한 내용
  const li = document.createElement('li');
  li.textContent = item;
  ul.appendChild(li);

  //img의 id값 구하기
  const garbageIcon = `${item.replace(/ /g, '')}${ul.childElementCount}`; //입력내용공백제거,번호 붙여서 쓰레기통아이콘 id로 설정
  //li에 이미지 넣기
  const img = document.createElement('img');
  img.setAttribute('class', 'trash');
  img.setAttribute('id', garbageIcon);
  img.src = imgsrc;
  img.alt = 'trash';
  li.appendChild(img);
  text.value = ''; //입력창 초기화

  //쓰레기통 눌렀을 때
  const remove = document.querySelector(`#${garbageIcon}`);
  remove.addEventListener('click', () => {
    remove.parentElement.remove();
  });
}

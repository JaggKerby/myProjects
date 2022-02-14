'use strict'
const input = prompt('Enter the string: ');
const el = document.querySelector('.main_aboutme'); 
el.innerHTML = `<i>${input}</i>`;

const newInput = prompt('Enter a message: ');
const messageEl = document.createElement('p');
messageEl.innerText = newInput;

const messageBox = document.querySelector('.messeng');
messageBox.append(messageEl); 

setTimeout(hideMessage, 2000);

function hideMessage() {
    messageEl.hidden = true;
}

document.addEventListener("click", function() {
    console.log("There's been a browser event");
  });


// Применение элементов и взаимодествие с ними для создания новыъ элементов. 

function buttonClick(){
  const text = getInputText();
  addElementToList(text);
  clearInput();
}

function getInputText() {
  const input = document.querySelector('.TextInput');
  return input.value;
}

function addElementToList (text) {
  const listEl = document.createElement('li');
  listEl.innerText = text;
  const List = document.querySelector('.inputList');
  List.append(listEl);
}

function clearInput() {
  const input = document.querySelector('.TextInput');
  return input.value = '';
}
// Премение Обработчиков события для скрытия показа элемента на тсранице. 
const button = document.querySelector('.textBtn');
button.addEventListener('click', hideText);

function hideText(){
  const textAbout = document.querySelector('.main_aboutme');
  textAbout.hidden = true;

  const button = document.querySelector('.textBtn');
  button.removeEventListener('click', hideText);
  button.addEventListener('click', showText);

}

function showText(){
  const textAbout = document.querySelector('.main_aboutme');
  textAbout.hidden = false;

  const button = document.querySelector('.textBtn');
  button.removeEventListener('click', showText);
  button.addEventListener('click', hideText);
}

// Добавляем элементы в список. Очистка поля ввода. 

const button = document.querySelector('.sendText');
button.addEventListener('click', buttonClick);
button.hidden = true; // скрываем кнопку

// Обработка клика - добавляем текст в элемент и ввызываем ф-ии вставки
function buttonClick(){
  const text = getInputText();
  addElementToList(text);
  clearInput();
}

function getInputText() {
  const input = document.querySelector('.textInput');
  return input.value;
}

//В этой функции мы создаем элемент и добавлеям его в родительский
//Далее считаем кол-во элементов и удаляем первый элемент 
function addElementToList(text) {
  const listEl = document.createElement('p');
  listEl.innerText = text;
  const List = document.querySelector('.textarea');
  List.append(listEl);
  countElements()
  function countElements(){
    let countEl = document.querySelectorAll('div p').length;
    if (countEl > 5) {
     return countEl = document.querySelector('p').remove(0);
    }
  };
};

function clearInput() {
  const input = document.querySelector('.textInput');
  return input.value = '';
}

//Показываем кноку после ввода символов в поле. 

const pressKey = document.querySelector('.textInput');
pressKey.addEventListener ('input', Button);

function Button() {
  const inputButton = document.querySelector('.sendText')
  inputButton.hidden = false;
}

//Map и Set

//Сейчас мы знаем о следующих сложных структурах данных:
//Объекты для хранения именованных коллекций.
//Массивы для хранения упорядоченных коллекций.



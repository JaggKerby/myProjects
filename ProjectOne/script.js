'use strict'
// const input = prompt('Enter the string: ');
// const el = document.querySelector('.main_aboutme'); 
// el.innerHTML = `<i>${input}</i>`;

const newInput = prompt('Enter a message: ');
const messageEl = document.createElement('p');
messageEl.innerText = newInput;

const messageBox = document.querySelector('.messeng');
messageBox.append(messageEl); 

setTimeout(hideMessage, 2000);

function hideMessage() {
    messageEl.hidden = true;
}
const upperMethod = document.getElementById("upper-case");
const lowerMethod = document.getElementById("lower-case");
const properMethod = document.getElementById("proper-case");
const sentenceMethod = document.getElementById("sentence-case");

upperMethod.addEventListener("click", upperFunc);
lowerMethod.addEventListener("click", lowerFunc);
properMethod.addEventListener("click", properFunc);
sentenceMethod.addEventListener("click", sentenceFunc);

function getInputText() {
  const input = document.getElementById("text").value;
  return input;
}

function upperFunc() {
  const getTextUp = document.getElementById("text");
  const textToUp = getInputText();
  return (getTextUp.value = textToUp.toUpperCase());
}

function lowerFunc() {
  const getTextLow = document.getElementById("text");
  const textToLow = getInputText();
  return (getTextLow.value = textToLow.toLowerCase());
}

function properFunc() {
  const getTextProp = document.getElementById("text");
  let propStr = getTextProp.value.replace(/(^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
  return (getTextProp.value = propStr);
}

function sentenceFunc() {
  const Sentence = document.getElementById("text"); // how are you. my friend
  let stringToArr = Sentence.value.toLowerCase().split('. ');
  let newArr = [];
  function makeArr() {
    for (let i = 0; i < stringToArr.length; i++) {
      if (stringToArr[i] != 0){
      const element = stringToArr[i]; //  0: how are you
      let newStr = element[0].toUpperCase() + element.slice(1); // H + ow are you
      newArr.push(newStr);
      }

    }
   return newArr;
  }
  makeArr();
  return Sentence.value = newArr.join('. ');
};


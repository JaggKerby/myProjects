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
  const getSentence = document.getElementById("text");
  let sentenceStr = getSentence.value.replace(/^\S)/g, function (a) {
    return a.toUpperCase();
  });
  return (getSentence.value = sentenceStr);
}


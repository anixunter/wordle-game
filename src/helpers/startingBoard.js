import wordBank from "./wordle-bank.txt";

const startingBoard = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

const generateWord = async () =>{
  let wordBankArray = [];
  await fetch(wordBank).then(response => response.text()).then(result => {
    wordBankArray = result.split('\n');
  })  
  return wordBankArray[Math.floor(Math.random() * wordBankArray.length )];
}

export {startingBoard, generateWord};
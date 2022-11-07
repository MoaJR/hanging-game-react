import React, { useEffect, useState } from "react";

import "../style/global.scss";
import "../style/game.scss";

function Game() {
  const [word, setWord] = useState("");
  const [randomWord, setRandomWord] = useState({word: "", definition: ""});
  const [splitWord, setSplitWord] = useState([]);
  const [hitWord, setHitWord] = useState([]);

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const dictionary = [
    {word: "abacate", hint: "Fruta"},
    {word: "abacaxi", hint: "Fruta"},
    {word: "fiat", hint: "Marca de carro"},
    {word: "fusca", hint: "Carro antigo"},
    {word: "cachorro", hint: "Animal"},
    {word: "gato", hint: "Animal"},
    {word: "casa", hint: "Lugar"},
    {word: "uva", hint: "Fruta"},
    {word: "pera", hint: "Fruta"},
    {word: "laranja", hint: "Fruta"},
    {word: "banana", hint: "Fruta"},
    {word: "cavalo", hint: "Animal"},
    {word: "macaco", hint: "Animal"},
    {word: "elefante", hint: "Animal"},
    {word: "tigre", hint: "Animal"},
    {word: "leão", hint: "Animal"},
    {word: "girafa", hint: "Animal"},
    {word: "zebra", hint: "Animal"},
    {word: "celular", hint: "Objeto"},
    {word: "computador", hint: "Objeto"},
    {word: "mouse", hint: "Objeto"},
    {word: "teclado", hint: "Objeto"},
    {word: "monitor", hint: "Objeto"},
    {word: "notebook", hint: "Objeto"},
    {word: "tablet", hint: "Objeto"},
    {word: "azul", hint: "Cor"},
    {word: "vermelho", hint: "Cor"},
    {word: "verde", hint: "Cor"},
    {word: "amarelo", hint: "Cor"},
    {word: "roxo", hint: "Cor"},
    {word: "rosa", hint: "Cor"},
    {word: "branco", hint: "Cor"},
    {word: "preto", hint: "Cor"},
    {word: "cinza", hint: "Cor"},
    {word: "marrom", hint: "Cor"},
    
  ];

  const handleLetterClick = ({ target }) => {
    const letter = target.value;
    setWord((word) => word + " " + letter);
    target.disabled = true;
    if(splitWord.includes(letter)) {
      setHitWord([...hitWord, letter])
    }
  };

  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * dictionary.length);
    setRandomWord(dictionary[randomIndex]);
  };
  
  const displayRandomWord = () => {
    return splitWord.map((letter, index) => {
      if(word.includes(letter)){
        return <span key={`${index}${letter}`} className="letter">{letter}</span>
      } else {
        return <span key={`${index}${letter}`} className="letter"> _ </span>
      }
    })
  };

  useEffect(() => {
    handleRandom();
  }, []);
    
  useEffect(() => {
    setSplitWord(randomWord.word.split(''));
    displayRandomWord();
    console.log(randomWord);
  }, [randomWord]);

  useEffect(() => {
    if (splitWord.length !== 0 && splitWord.every((letter) => hitWord.includes(letter))) {
      console.log("Você ganhou!");
    }
  }, [hitWord])

  return (
    <div className="pageContainer">
      <div className="contentContainer">
        <div className="randomArea">
          <h2>
            {
              displayRandomWord()            
            }
          </h2>
        </div>
        <p>{randomWord.hint}</p>
        <div className="displayArea" onDoubleClick={() => setWord('')}>
          {word.split("").map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </div>
        <div className="keysArea">
          {alphabet.map((letter) => (
            <button
              onClick={handleLetterClick}
              value={letter}
              key={letter}>
              {letter.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Game;

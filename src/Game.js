import { useState } from "react";
import GameField from "./GameField";
import Keyboard from "./Keyboard"
import Hangman from "./Hangman";

const selectWord = () => {
    const words = ["slovo", "lokomotiva", "bordel"]
    const random = Math.floor(Math.random() * words.length)
    return words[random]
}

const Game = () => {
    //let letters_used = []
    const [usedLetters, setUsedLetters] = useState([]);
    const [imageIndex, setIndex] = useState(0);
    const [word, setWord] = useState(selectWord())

    const handleGuess = (pressed) => {
        if(!usedLetters.includes(pressed)){
            setUsedLetters(current => [...current, pressed])
            (!word.toUpperCase().includes(pressed) ?  setIndex(current => current + 1) : null)
        }else return
    }
    const resetGame = () => {
        setUsedLetters([])
        setIndex(0)
        setWord(selectWord())
    }
    return ( 
        <div className="game">
            <div>
                <Hangman index={imageIndex}></Hangman>
            </div>
            <div>
                <GameField word={word} usedLetters={usedLetters}></GameField>
                <Keyboard usedLetters={usedLetters} handleGuess={handleGuess}></Keyboard>
            </div>
            <div className="dsad">
                <p>Prohrál jsi.</p>
                <button className="btn-playAgain" onClick={resetGame}>Hrát znovu</button>
            </div>
        </div>
     );
}
 
export default Game; 
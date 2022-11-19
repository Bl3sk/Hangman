import { useState, useEffect } from "react";
import GameField from "./GameField";
import Keyboard from "./Keyboard"
import Hangman from "./Hangman";

const selectWord = () => {
    const words = ["slovo", "lokomotiva", "bordel"]
    const random = Math.floor(Math.random() * words.length)
    return words[random]
}

const Game = () => {
    const defaultGame = ({
        word: selectWord(),
        usedLetters: [],
        imageIndex: 0,
        textAlert: "",
        endGame: false
    })
    const [game, setGame] = useState(defaultGame)

    const handleGuess = (pressed) => {
        if(!game.usedLetters.includes(pressed)){
            const newUsedLetters = game.usedLetters 
            newUsedLetters.push(pressed)
            setGame({...game, usedLetters: newUsedLetters})
            if(!game.word.toUpperCase().includes(pressed))  setGame({...game, imageIndex: game.imageIndex + 1})
            //checkEndGame()
        }else return
    }
    useEffect(() => {
        const checkEndGame = () => {
            if(game.imageIndex >= 11){
                setGame({...game, endGame: true, textAlert: "Prohrál jsi!"})
                return
            }else{
                for(let letter of game.word){
                    if(!game.usedLetters.includes(letter.toUpperCase())){
                        return
                    }
                }
                setGame({...game, endGame: true, textAlert: "Vyhrál jsi!"})
            }
        }
        if(!game.endGame) checkEndGame()
    }, [game])
    const resetGame = () => {
        setGame(defaultGame)
    }
    return ( 
        <div className="game">
            <div>
                <Hangman index={game.imageIndex}></Hangman>
            </div>
            <div>
                <GameField word={game.word} usedLetters={game.usedLetters}></GameField>
                <Keyboard usedLetters={game.usedLetters} endGame={game.endGame} handleGuess={handleGuess}></Keyboard>
            </div>
            <div>
                <p>{game.textAlert}</p>
                <button className="btn-playAgain" onClick={resetGame}>Hrát znovu</button>
            </div>
        </div>
     );
}
 
export default Game; 
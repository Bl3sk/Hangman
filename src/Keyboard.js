
const Keyboard = ({usedLetters, handleGuess}) => {
    const letters_all = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const getButton = (letter) => {
        if(usedLetters.includes(letter)){
            return <button className={"btn-letter-pushed"} key={letter} onClick={() => handleGuess(letter)} disabled>{letter}</button>
        }
        else if(!usedLetters.includes(letter)){
            if(usedLetters.length >= 11){
                return <button className={"btn-letter"} key={letter} onClick={() => handleGuess(letter)} disabled>{letter}</button>
            } 
            return <button className={"btn-letter"} key={letter} onClick={() => handleGuess(letter)}>{letter}</button>
        }
    }
    return (
        <div className="keyboard">
            {letters_all.map((letter) => (
                getButton(letter)
            ))}           
        </div>
    )
}

export default Keyboard;
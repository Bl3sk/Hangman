const GameField = ({word, usedLetters}) => {
    const letters = [...word]

    return (
        <div className="gameField">
            {letters.map((letter, index) => (
                <div key={index}><span style={{ visibility: usedLetters.includes(letter.toUpperCase()) ? "visible" : "hidden" }}>{letter}</span></div>
            ))}           
        </div>
    )
}


export default GameField;
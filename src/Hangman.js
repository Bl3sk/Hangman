const Hangman = ({index}) => {
    const imgsArr = ["hangman1.png", "hangman2.png", "hangman3.png", "hangman4.png", "hangman5.png", "hangman6.png", "hangman7.png", 
    "hangman8.png", "hangman9.png", "hangman10.png", "hangman11.png", "game_over.png"]
    const image = "./imgs/" + imgsArr[index]
    return ( 
        <div className="hangman">
            <img src={image} alt="Obrázek hangmana"></img>
        </div>
     );
}
 
export default Hangman;
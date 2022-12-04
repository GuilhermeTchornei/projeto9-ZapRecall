import { useState } from "react";
import FlashCard from "./FlashCard";
import cardsList from "./cardsList"
import Counter from "./Counter"

export default function MainScreen() {
    const [cards, setCards] = useState(cardsList.map((c) => {
        return {
            opened: false,
            answered: false,
            question: c.question,
            answer: c.answer,
            userAnswer: "" //"nao-lembrei"    "quase-lembrei"     "zap"
        }
    }));

    const [counter, setCounter] = useState(0);


    return (
        <div className="screen-container">
            <header className="logo-container">
                <img src="./assets/logo.png"></img>
                <h1>ZapRecall</h1>
            </header>
            <FlashCard cards={cards} setCards={(cards) => setCards(cards)} counter={counter} setCounter={(c) => setCounter(c)} />
            <footer className="footer-concluidos">
                <Counter counter={counter} cardsCount={cards.length} />
            </footer>
        </div>
    );
}
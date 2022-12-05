import AnsweredCard from "./AnsweredCard"
import setaVirar from "../assets/seta_virar.png";
import { OpenedQuestion } from "../Styles/FlashCardStyles";


export default function OpenedCard({ index, cards, setCards, counter, setCounter }) {
    function showAnswer() {
        setCards(cards.map((c, i) => {
            if (i === index)
            {
                c.answered = true;
            }
            return c;
        }))
    }


    return (
        <OpenedQuestion data-test="flashcard">
            {!cards[index].answered ?
                <Question question={cards[index].question} showAnswer={() => showAnswer()} /> :
                <AnsweredCard index={index}
                    cards={cards} setCards={(cards) => setCards(cards)}
                    counter={counter} setCounter={(c) => setCounter(c)}/>}
        </OpenedQuestion>
    )
}

function Question({ question, showAnswer }) {
    return (
        <>
            <p data-test="flashcard-text">{question}</p>
            <img src={setaVirar} onClick={() => showAnswer()} data-test="turn-btn"></img>
        </>
    );
}
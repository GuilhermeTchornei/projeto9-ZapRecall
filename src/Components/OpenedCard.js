import AnsweredCard from "./AnsweredCard"

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
        <div className="pergunta-aberta">
            {!cards[index].answered ?
                <Question question={cards[index].question} showAnswer={() => showAnswer()} /> :
                <AnsweredCard index={index} cards={cards} setCards={(cards) => setCards(cards)} counter={counter} setCounter={(c) => setCounter(c)} />}
        </div>
    )
}

function Question({ question, showAnswer }) {
    return (
        <>
            <p>{question}</p>
            <img src="/assets/seta_virar.png" onClick={() => showAnswer()}></img>
        </>
    );
}
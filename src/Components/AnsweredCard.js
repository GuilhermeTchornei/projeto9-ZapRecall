import { AnswerButton } from "../Styles/FlashCardStyles";

export default function AnsweredCard({ index, cards, setCards, counter, setCounter}) {
    function answerCard(answer) {
        setCards(cards.map((c, i) => {
            if (index === i)
            {
                c.userAnswer = answer;
                c.opened = false;
            }
            return c;
        }));
        setCounter(counter + 1);
    }


    return (
        <>
            <p data-test="flashcard-text">{cards[index].answer}</p>
            <div>
                <AnswerButton color="#FF3030" onClick={() => answerCard("erro") } data-test="no-btn" >Não lembrei</AnswerButton>
                <AnswerButton color="#FF922E" onClick={() => answerCard("quase") } data-test="partial-btn" >Quase não lembrei</AnswerButton>
                <AnswerButton color="#2FBE34" onClick={() => answerCard("zap") } data-test="zap-btn" >Zap!</AnswerButton>
            </div>
        </>
    );
}

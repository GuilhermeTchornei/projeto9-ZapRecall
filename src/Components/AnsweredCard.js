export default function AnsweredCard({ index, cards, setCards, counter, setCounter }) {
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
            <p>{cards[index].answer}</p>
            <div className="escolha-resposta">
                <button className="vermelho" onClick={() => answerCard("nao-lembrei") }>Não lembrei</button>
                <button className="laranja" onClick={() => answerCard("quase-lembrei") }>Quase não lembrei</button>
                <button className="verde" onClick={() => answerCard("zap") }>Zap!</button>
            </div>
        </>
    );
}

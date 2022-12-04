export default function ClosedCard({ index, cards, setCards }) {
    function openCard() {
        setCards(cards.map((c, i) => {
            if (i === index)
            {
                c.opened = true;
            }
            return c;
        }))
    }


    return (
        <div className="pergunta-fechada">
            <p className={cards[index].userAnswer}>Pergunta {index + 1}</p>
            <img src="/assets/seta_play.png" onClick={() => openCard()}></img>
        </div>
    )
}

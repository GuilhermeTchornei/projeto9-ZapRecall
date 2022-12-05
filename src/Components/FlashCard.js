import ClosedCard from "./ClosedCard";
import OpenedCard from "./OpenedCard";

export default function FlashCard({ cards, setCards, counter, setCounter }) {
    return (
        <div className="container-botoes">
            {cards.map((c, i) => {
                if (c.opened) return <OpenedCard index={i} key={i}
                    cards={cards} setCards={(cards) => setCards(cards)}
                    counter={counter} setCounter={(c) => setCounter(c)}/>
                else return <ClosedCard index={i} key={i}
                    cards={cards} setCards={(cards) => setCards(cards)}/>
            })}
        </div>
    );
}

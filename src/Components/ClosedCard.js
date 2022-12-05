import { ClosedQuestion } from "../Styles/FlashCardStyles";
import setaPlay from "../assets/seta_play.png";
import iconeCerto from "../assets/icone_certo.png";
import iconeErrado from "../assets/icone_erro.png";
import iconeQuase from "../assets/icone_quase.png";

export default function ClosedCard({ index, cards, setCards}) {
    function openCard() {
        setCards(cards.map((c, i) => {
            if (i === index)
            {
                c.opened = true;
            }
            return c;
        }))
    }


    let color;
    let decoration = "none";
    let img = setaPlay;
    let dataTest = `play-btn`;
    switch (cards[index].userAnswer)
    {
        case 'erro':
            color = "#FF3030";
            img = iconeErrado;
            decoration = "line-through";
            dataTest = `no-icon`;
            break;
        case 'quase':
            color = "#FF922E";
            img = iconeQuase;
            decoration = "line-through";
            dataTest = `partial-icon`;
            break;
        case 'zap':
            color = "#2FBE34";
            img = iconeCerto;
            decoration = "line-through";
            dataTest = `zap-icon`;
            break;
    };


    return (
        <ClosedQuestion color={color} decoration={decoration} data-test="flashcard">
            <p className={cards[index].userAnswer} data-test="flashcard-text">Pergunta {index + 1}</p>
            <img src={img} onClick={() => img === setaPlay && openCard()} data-test={dataTest}></img>
        </ClosedQuestion>
    )
}

import { useState } from "react";
import FlashCard from "./FlashCard";
import cardsList from "./cardsList"
import Counter from "./Counter"
import logo from "../assets/logo.png";
import styled from 'styled-components';
import { LogoContainer, ScreenContainer, FooterConcluidos } from "../Styles/MainScreenStyles";

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
        <ScreenContainer>
            <LogoContainer>
                <img src={logo}></img>
                <h1>ZapRecall</h1>
            </LogoContainer>
            <FlashCard cards={cards} setCards={(cards) => setCards(cards)} counter={counter} setCounter={(c) => setCounter(c)} />
            <FooterConcluidos data-test="footer">
                <Counter counter={counter} cardsCount={cards.length} />
            </FooterConcluidos>
        </ScreenContainer>
    );
}
import styled from 'styled-components';

export const ClosedQuestion = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;

        color: ${props => props.color};
        text-decoration-line: ${props => props.decoration};
    }
`;

export const OpenedQuestion = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img{
        position: absolute;
        bottom: 10px;
        right: 10px;
    }

    div{
        width: 100%;
        height: 38px;

        display: flex;
        justify-content: space-between;
    }
`;

export const AnswerButton = styled.button`
    width: 85px;
    border: none;
    border-radius: 5px;
    color: white;
    font-family: 'Recusive';
    font-size: 12px;
    text-align: center;
    background-color: ${props => props.color}
`
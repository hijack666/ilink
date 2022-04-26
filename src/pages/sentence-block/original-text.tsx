import React from "react";
import styled from 'styled-components';
import Icon from '../../assets/icons/icon.png';
import Cloud from '../../assets/icons/cloud1.svg';

const OriginalTextBlock = styled.div`
    display: flex;
    margin-bottom: 50px;
`;

const HumanIcon = styled.div`
    margin-top: 15px;
`;

const TextCloud = styled.div`
    padding: 17px 24px 30px 43px;
    max-width: calc(100% - 185px);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-repeat: no-repeat;
    background-size: contain;
    height: 54px;
`;

const Word = styled.span`
    margin-right: 10px;
    text-decoration: underline dotted;
    text-underline-offset: 3px;
`

const Title = styled.h1`
    color: #252525;
    font-weight: 400;
    font-size: 36px;
    line-height: 42px;
    text-shadow: -2px -4px 3px #FFFFFF, 2px 4px 3px rgba(0, 0, 0, 0.25);
    margin-bottom: 56px;
`

export const OriginalSentence = (props: any) => {

    function ListItem(props: any) {
        return <Word>{props.value}</Word>;
    }

    return (
        <>
            <Title>Translate this sentence</Title>
            <OriginalTextBlock>
                <HumanIcon>
                    <img src={Icon} alt="fireSpot" style={{ width: '185px' }}/>
                </HumanIcon>
                <TextCloud style={{backgroundImage:`url(${Cloud})`}}>
                    {
                        props.text ? props.text.split(' ').map((word: string, i: number) =>
                            <ListItem key={i} value={word}></ListItem>
                        ) : null
                    }
                </TextCloud>
            </OriginalTextBlock>
        </>
    )
}

export default OriginalSentence;
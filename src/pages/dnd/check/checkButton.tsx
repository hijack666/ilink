import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpeech } from 'react-web-voice';

const Checker = styled.div`
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    height: 28px;
    text-align: center;
    margin-bottom: 27px;
    text-shadow: -1px -2px 2px #FFFFFF, 1px 2px 2px rgba(91, 13, 13, 0.5);
    &.red {
        color: #FF0000;
    }
    &.green {
        color: #00ff00;
    }
`

const CheckBtn = styled.button`
    background: linear-gradient(91.2deg, #FFFFFF 0%, #F2F2F2 100%);
    box-shadow: -2px -4px 8px #FFFFFF, 2px 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 88px;
    height: 70px;
    width: 100%;
    font-weight: 700;
    text-align: center;
    font-size: 18px;
    border: none;
    &:hover {
        cursor: pointer;
    }
`

function CheckButton(props: any) {

    const [checked, setCheckState] = useState(false);
    const { speak } = useSpeech({ voice: 'Karen' });

    /** Проверка на корректность */
    function checkCorrectness(): boolean {
        let answerArray: string[] = [];
        props.answer.items.forEach((item: any) => {
            answerArray.push(item.word);
        })
        const answer = answerArray.join(' ');
        if (props.originalText.toLowerCase() !== answer) {
            setTimeout(() => setCheckState(false), 10000);
        }
        return props.originalText.toLowerCase() === answer;
    }

    const speakButtonHandler = (textToSpeech: string) => {
        speak({
            text: textToSpeech,
            volume: 0.5,
            rate: 1,
            pitch: 1
        });
    }

    return(
        <>
            { checked ?
                <Checker className={checkCorrectness() ? 'green' : 'red'}>
                    {checkCorrectness() ? 'Correct' : 'Something wrong!' }
                </Checker> : null}
            <CheckBtn onClick={() => { speakButtonHandler(checkCorrectness() ? props.originalText : ''); setCheckState(true)}}>Check</CheckBtn>
        </>
    )
}

export default CheckButton;
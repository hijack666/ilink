import React, { useState } from 'react';
import Speech from 'react-speech';
import styled from 'styled-components';

const Checker = styled.div.attrs(props => ({
    color: props.color,
}))`
    color: ${props => props.color};
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    height: 28px;
    text-align: center;
    margin-bottom: 27px;
    text-shadow: -1px -2px 2px #FFFFFF, 1px 2px 2px rgba(91, 13, 13, 0.5);
`

const CheckBtn = styled.div`
    &:hover {
        cursor: pointer;
        color: red;
    }
`

function CheckButton(props: any) {

    const [checked, setCheckState] = useState(false);

    const style = {
        container: {
            background: 'linear-gradient(91.2deg, #FFFFFF 0%, #F2F2F2 100%)',
            boxShadow: '-2px -4px 8px #FFFFFF, 2px 4px 8px rgba(0, 0, 0, 0.2)',
            borderRadius: '88px',
            height: '70px',
            width: '100%',
            fontWeight: '700',
            textAlign: 'center',
            fontSize: '18px',
            border: 'none',
            display: 'flex',
        },
        text: {},
        buttons: { },
        play: {
            hover: {
                backgroundColor: 'transparent',
            },
            button: {
                width: '100%',
                border: 'none',
                backgroundColor: 'transparent',
                fontWeight: '700',
                fontSize: '18px',
                cursor: 'pointer',
            },
        },
        pause: {
            hover: {
            },
            button: {},
        },
        stop: {
            hover: {
            },
            button: {},
        },
        resume: {
            hover: {
            },
            button: {},
        },
    };

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

    return(
        <>
            { checked ?
                <Checker color={checkCorrectness() ? '#00ff00' : '#FF0000'}>
                    {checkCorrectness() ? 'Correct' : 'Something wrong!' }
                </Checker> : null}
            <CheckBtn onClick={() => setCheckState(true)}>
                {/* <Speech styles={style} text={props.originalText} textAsButton={true} displayText="Check" /> */}
                <Speech styles={style} text={checkCorrectness() ? props.originalText : ''} textAsButton={true} displayText="Check" />
            </CheckBtn>
        </>
        
    )
}

export default CheckButton;
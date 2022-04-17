import { useEffect, useState } from "react";
import React from "react";
import TextService from "../services/textService";
// import OriginalSentence from "./sentence-block/original-text";
import styled from 'styled-components';
import { DataSentence, DataSentenceAll, Sentence, SentenceAll } from "../services/text.interface";
import DndBlock from "./dnd/dnd";
import OriginalSentence from "./sentence-block/original-text";

const Container = styled.div`
    margin: 0 auto;
    width: 482px;
`;

function MainPage(props: any) {
    let [text, setText] = useState({en: '', ru: ''});
    const textService = new TextService();

    // componentDidMount
    useEffect(() => {
        console.log('component mounted');
        textService.getTextAndTranslate()
            .then(({data}: DataSentenceAll) => {
                setEnText(data.sentenceAll);
            })
    }, []);

    function setEnText(sentences: Sentence[]) {
        setText(() => 
            text = sentences[getRandomSentence(sentences.length)]
        );
    }

    function getRandomSentence(sentencesLength: number): number {
        let randNumber = Math.random() * sentencesLength;
        randNumber = Math.floor(randNumber);
        return randNumber;
    }



    return (
        <Container>
            <OriginalSentence text={text.en}></OriginalSentence>
            {text.ru.length ? <DndBlock text={text.ru}></DndBlock> : null}
        </Container>
    )
}

export default MainPage;
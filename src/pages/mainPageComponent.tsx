import React, { useEffect, useState } from "react";
import TextService from "../services/textService";
import styled from 'styled-components';
import { DataSentenceAll, Sentence } from "../services/text.interface";
import DndBlock from "./dnd/dnd";
import OriginalSentence from "./sentence-block/original-text";

const Container = styled.div`
    margin: 200px auto 0;
    width: 482px;
`;

function MainPage() {
    /** Предложения */
    let [text, setText] = useState({en: '', ru: ''});
    const textService = new TextService();

    // componentDidMount
    useEffect(() => {
        function fetchBusinesses() {
            textService.getTextAndTranslate()
            .then(({data}: DataSentenceAll) => {
                setEnText(data.sentenceAll);
            })
            .catch(err => {
                console.log(err)
            });
        }
        fetchBusinesses()
    }, []);

    /** Назначить предложение для перевода */
    function setEnText(sentences: Sentence[]) {
        setText(() => 
            text = sentences[getRandomSentence(sentences.length)]
        );
    }

    /** Получить рандомное число от 1 до "длина массива предложений" */
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
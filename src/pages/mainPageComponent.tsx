import React, { useEffect, useState } from "react";
import TextService from "../services/textService";
import styled from 'styled-components';
import { IDataSentenceAll, ISentence } from "../services/text.interface";
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
        textService.getTextAndTranslate()
            .then(({data}: IDataSentenceAll) => {
                setEnText(data.sentenceAll);
            });
    }, []);

    /** Назначить предложение для перевода */
    function setEnText(sentences: ISentence[]) {
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
            {text.ru.length ? <OriginalSentence text={text.en}></OriginalSentence> : null}
            {text.ru.length ? <DndBlock text={text.ru}></DndBlock> : null}
        </Container>
    )
}

export default MainPage;
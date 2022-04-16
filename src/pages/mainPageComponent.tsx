import { useEffect, useState } from "react";
import TextService from "../services/textService";
import OriginalSentence from "./sentence-block/original-text";
import styled from 'styled-components';
import { DataSentence, Sentence } from "../services/text.interface";

const Container = styled.div`
    margin: 0 auto;
    width: 482px;
`;

const MainPage = (props: any) => {
    let [text, setText] = useState({en: '', ru: ''});
    const textService = new TextService();

    // componentDidMount
    useEffect(() => {
        console.log('component mounted');
        textService.getTextAndTranslate()
            .then(({data}: DataSentence) => {
                setEnText(data.sentence);
            })
    }, []);

    function setEnText(text: Sentence) {
        setText(() => 
            text = text
        );
    }

    return (
        <Container>
            <OriginalSentence text={text.en}></OriginalSentence>
        </Container>
    )
}

export default MainPage;
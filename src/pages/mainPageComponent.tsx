import { useEffect, useState } from "react";
import TextService from "../services/textService";
import OriginalSentence from "./sentence-block/original-text";
import styled from 'styled-components';
import { DataSentence, Sentence } from "../services/text.interface";
import DndBlock from "./dnd/dnd";

const Container = styled.div`
    margin: 0 auto;
    width: 482px;
`;

function MainPage(props: any) {
    // let [text, setText] = useState({en: '', ru: ''});
    // const textService = new TextService();
    let text = "YA tvoy rot truba shatal"

    // componentDidMount
    // useEffect(() => {
    //     console.log('component mounted');
    //     textService.getTextAndTranslate()
    //         .then(({data}: DataSentence) => {
    //             setEnText(data.sentence);
    //         })
    // }, []);

    // function setEnText(text: Sentence) {
    //     setText(() => 
    //         text = text
    //     );
    // }

    return (
        <div>
            {/* <OriginalSentence text={text.en}></OriginalSentence> */}
            {/* {text.ru.length ? <DndBlock text={text.ru}></DndBlock> : null} */}
            <DndBlock text={text}></DndBlock>
        </div>
    )
}

export default MainPage;
import styled from 'styled-components';
import Icon from '../../assets/icons/icon.png';

const OriginalTextBlock = styled.div`
    height: 114px;
    display: flex;
`;

const HumanIcon = styled.div`
    width: 185px;
`;

const TextCloud = styled.div`
    padding: 17px 24px 17px 43px;
    border: 2px solid #252525;
    border-radius: 18px;
    max-width: calc(100% - 185px);
    word-break: break-word;
`;

const Word = styled.span`
    margin-right: 10px;
    text-decoration: underline dotted;
    text-underline-offset: 3px;
`

export const OriginalSentence = (props: any) => {

    function ListItem(props: any) {
        return <Word>{props.value}</Word>;
    }

    return (
        <>
            <h1>Translate this sentence</h1>
            <OriginalTextBlock>
                <HumanIcon>
                    <img  src={Icon} alt="fireSpot" style={{ width: '100%' }}/>
                </HumanIcon>
                <TextCloud>
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
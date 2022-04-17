import { DragDropContext} from 'react-beautiful-dnd';
import React, { useEffect, useState } from 'react';
import Column from './column/column';
import styled from 'styled-components';

const CheckButton = styled.button`
    background: linear-gradient(91.2deg, #FFFFFF 0%, #F2F2F2 100%);
    box-shadow: -2px -4px 8px #FFFFFF, 2px 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 88px;
    height: 70px;
    width: 100%;
    font-weight: 700;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    border: none;
`

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
`

function DndBlock(props: any) {
    let textObjects: any = [];
    props.text.split(' ').forEach((element: string, i: number) => {
        textObjects.push({
            id: String(i),
            word: element.toLowerCase()
        })
    });

    /** Колонки */
    let columns = [
        {
            name: "Words",
            items: shuffleArray(textObjects)
        },
        {
            name: "Sentence",
            items: []
        },
    ];

    /** Состояние проверки */
    const [checked, setCheckState] = useState(false);
    /** Состояние колонок со списками слов */
    const [wordsList, setColumns] = useState(columns);

    /** Перемешиваем массив слов */
    function shuffleArray(array: object[]) {
        let currentIndex = array.length,  randomIndex;
        while (currentIndex !== 0) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
        
            [array[currentIndex], array[randomIndex]] = [
              array[randomIndex], array[currentIndex]];
          }
        
        return array;
    }

    function onDragEnd(val: any) {
        const { draggableId, source, destination } = val;
        if (destination === null) return;
        
        // При перетаскивании скрываем чекер
        setCheckState(false);

        const [sourceGroup] = wordsList.filter(
            column => column.name === source.droppableId
        );

        const [destinationGroup]: any = destination ? wordsList.filter(
            column => column.name === destination.droppableId
        ) : { ...sourceGroup };

        const [movingItem] = sourceGroup.items.filter((item: any) => item.id === draggableId);

        const newSourceGroupTasks = sourceGroup.items.splice(source.index, 1);

        const newDestinationGroupTasks = destinationGroup.items.splice(destination.index, 0, movingItem);

        const newItemList: any = wordsList.map(column => {
            if (column.name === source.name) {
                return {
                    name: column.name,
                    items: newSourceGroupTasks
                };
            }
            if (column.name === destination.name) {
                return {
                    name: column.name,
                    items: newDestinationGroupTasks
                };
            }
            return column;
        });

        setColumns(newItemList);
    }

    /** Проверка на корректность */
    function checkCorrectness(): boolean {
        let answerArray: string[] = [];
        wordsList[1].items.forEach((item: any) => {
            answerArray.push(item.word);
        })
        const answer = answerArray.join(' ');
        if (props.text.toLowerCase() !== answer) {
            setTimeout(() => setCheckState(false), 10000);
        }
        return props.text.toLowerCase() === answer;
    }

    return (
        <div style={{marginTop: '150px'}}>
            <DragDropContext onDragEnd={onDragEnd}>
                <div>
                    <Column
                        droppableId="Sentence"
                        list={wordsList[1].items}
                        type="TRANSLATE"
                    />
                    <Column
                        droppableId="Words"
                        list={wordsList[0].items}
                        type="TRANSLATE"
                    />
                </div>
            </DragDropContext>
            { checked ?
                <Checker color={checkCorrectness() ? '#00ff00' : '#FF0000'}>
                    {checkCorrectness() ? 'Correct' : 'Something Wrong' }
                </Checker> : null}
            <CheckButton onClick={() => setCheckState(true)}>Check</CheckButton>
        </div>
    )
}

export default DndBlock;
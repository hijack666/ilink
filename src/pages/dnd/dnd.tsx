import React, { useState } from 'react';
import { DragDropContext} from 'react-beautiful-dnd';
import Column from './column/column';
import CheckButton from './check/checkButton';

function DndBlock(props: any) {
    let textObjects: any[] = [];
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
        }
    ];

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

    return (
        <>
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

            <CheckButton originalText={props.text} answer={wordsList[1]}></CheckButton>
        </>
    )
}

export default DndBlock;
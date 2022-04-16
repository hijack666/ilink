// import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useEffect, useState } from 'react';
import Column from './column/column';
// import { uuid } from "uuid/v4";

function DndBlock(props: any) {

    let textObjects: any = [];
    props.text.split(' ').forEach((element: string, i: number) => {
        textObjects.push({
            id: String(i+1),
            word: element
        })
    });

    let columnsFromBackend = [
        {
          name: "Requested",
          items: textObjects
        },
        {
          name: "To do",
          items: [{id: "51", word: "xyi"}]
        },
    ];

    const [wordsList, setColumns] = useState(columnsFromBackend);

    function onDragEnd(val: any): any {
        const { draggableId, source, destination } = val;

        const [sourceGroup] = columnsFromBackend.filter( word => word.name === source.droppableId);

        const [destinationGroup]: any = destination ? wordsList.filter(word => word.name === destination.droppableId) : { ...sourceGroup };

        const newSourceGroupTasks = sourceGroup.items.splice(source.index, 1);

        const [movingItem] = sourceGroup.items.filter((item: any) => item.id === draggableId);

        const newDestinationGroupTasks = destinationGroup.items.splice(destination.index, 0, movingItem);

        const newItemList: any = wordsList.map(word => {
            if (word.name === source.name) {
                return {
                    name: word.name,
                    items: newSourceGroupTasks
                };
            }
            if (word.name === destination.name) {
                return {
                    name: word.name,
                    items: newDestinationGroupTasks
                };
            }
            return word;
        });

        setColumns(newItemList);
    }

    return (
        <div style={{marginTop: '150px'}}>
            
            <DragDropContext onDragEnd={onDragEnd}>
                <div>
                    <Column
                        className="column"
                        droppableId="Today"
                        list={wordsList[0].items}
                        type="TASK"
                    />
                    <Column
                        className="column2"
                        droppableId="Tommorow"
                        list={wordsList[1].items}
                        typel="TASK2"
                    />
                </div>
            </DragDropContext>
        </div>
    )
}

export default DndBlock;
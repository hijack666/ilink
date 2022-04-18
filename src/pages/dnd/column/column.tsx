import React from "react";
import { Droppable} from 'react-beautiful-dnd';
import DraggableElement from './draggable';
import styled from "styled-components";

const WordsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  height: 90px;
  margin-bottom: 15px;
  box-sizing: border-box;
  &.gray {
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
  }
`

const DroppableBlock = styled.div`
  margin-bottom: 15px;
  height: 90px;
  max-height: 90px;
`

function Column(props: any) {
    const { droppableId, list, type } = props;

    return (
        <Droppable droppableId={droppableId} type={type} direction="horizontal">
            {provided => (
              <DroppableBlock ref={provided.innerRef} {...provided.droppableProps}>
                {/* <h2>{droppableId}</h2> */}
                <WordsBlock className={droppableId === 'Sentence' ? 'gray' : '' }>
                  {list.map((val: any, index: any) => {
                      return (
                          <DraggableElement id={val.id} key={val.id} index={index} word={val.word} />
                      );
                  })}
                </WordsBlock>
                {provided.placeholder}
              </DroppableBlock>
            )}
        </Droppable>
    );
}

export default Column;
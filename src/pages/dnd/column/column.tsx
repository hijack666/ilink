import { Droppable} from 'react-beautiful-dnd';
import DraggableElement from './draggable';
import React from "react";
import styled from "styled-components";

const WordsBlock = styled.div.attrs(props => ({
  border: props.border || "1px solid gray",
}))`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  height: 90px;
  background-color: orange;
  border-top: ${props => props.border};
  border-bottom: ${props => props.border};
`

const DroppableBlock = styled.div`
  background-color: orange;
  width: 400px;
  max-height: 100px;
  margin-bottom: 15px;
`

function Column(props: any) {
    const { droppableId, list, type } = props;

    return (
        <Droppable droppableId={droppableId} type={type} direction="horizontal">
            {provided => (
              <DroppableBlock ref={provided.innerRef} {...provided.droppableProps}>
                {/* <h2>{droppableId}</h2> */}
                <WordsBlock border={droppableId=== 'Sentence' ? '1px solid gray' : 'none'}>
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
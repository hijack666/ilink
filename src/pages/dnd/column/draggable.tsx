import { Draggable } from "react-beautiful-dnd";
import React from "react";
import styled from "styled-components";

const Word = styled.span`
  border: 1px solid #C9C9C9;
  background-color: white;
  border-radius: 13px;
  box-shadow: 0px 8px 4px -6px rgba(0, 0, 0, 0.25);
  display: flex;
  height: 30px;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 0 10px;
`
const WordBlock = styled.div`
  height: 45px;
`

function DraggableElement(props: any) {
  const { id, index, word } = props;

  return (
    <Draggable draggableId={id} index={index} key={id}>
        {provided => (
          <WordBlock ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
              <Word>{word}</Word>
          </WordBlock>
        )}
    </Draggable>
  );
}

export default DraggableElement;

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

function Column(props: any) {
    const { droppableId, list, type } = props;

    let style = {
      backgroundColor: "orange",
      width: "400px",
    };

    return (
        <Droppable droppableId={droppableId} type={type} direction="horizontal">
            {provided => (
              <div ref={provided.innerRef} {...provided.droppableProps} style={style}>
                <h2>{droppableId}</h2>
                <WordsBlock border={droppableId=== 'Sentence' ? '1px solid gray' : 'none'}>
                  {list.map((val: any, index: any) => {
                      return (
                          <DraggableElement id={val.id} key={val.id} index={index} word={val.word} />
                      );
                  })}
                </WordsBlock>
                {provided.placeholder}
              </div>
            )}
        </Droppable>
    );
}

export default Column;
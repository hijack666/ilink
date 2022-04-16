import { Draggable } from "react-beautiful-dnd";

function DraggableElement(props: any) {
  const { id, index, word } = props;
  // let style = {
  //   // backgroundColor: "red",
  //   border: '1px solid gray'
  // };

  return (
    <Draggable draggableId={id} index={index} key={id}>
        {provided => (
            <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                >
                  {/* style={style} */}
                <h4 >{word}</h4>
            </div>
        )}
    </Draggable>
  );
}

export default DraggableElement;

import { Droppable} from 'react-beautiful-dnd';
import DraggableElement from './draggable';

function Column(props: any) {
    const { droppableId, list, typel } = props;

    return (
        <Droppable droppableId={droppableId} type={typel}>
            {provided => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <h2>{droppableId}</h2>
      
                  {list.map((val: any, index: any) => {
                      return (
                          <DraggableElement id={val.id} key={val.id} keyWord={val.id} index={index} word={val.word} />
                      );
                  })}
      
                {/* {provided.placeholder} */}
              </div>
            )}
        </Droppable>
    );
}

export default Column;
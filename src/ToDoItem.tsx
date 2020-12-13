import React, {useState} from 'react';
import {IPropsListItem} from "./interface";


function ToDoItem(props: IPropsListItem) {
    const [showEditMode, setShowEditMode] = useState<boolean>(false);
    const [taskNameInput, setTaskNameInput] = useState<string>(props.todo.name)
    const [isCompleted, setIsCompleted] = useState<boolean>(props.todo.isCompleted)

    //name field onChange
    const handleNameOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskNameInput(e.currentTarget.value);
    }

    //OK click
    const handleUpdateTask = () => {
        props.handleTodoUpdate(props.todo.id, taskNameInput);
        setShowEditMode(!showEditMode);
    }

    //edit click
    const toggleShowEdit = () => {
        setShowEditMode(!showEditMode);
    }

    //move priority up/down
    const handleMoveClick = (value: number) => {
        props.handleTodoMove(props.index, value);
    }

    //checkbox for completed onChange
    const handleSetCompleted = (id: string) => {
        setIsCompleted(!isCompleted);
        props.handleTodoComplete(id);
    }

    return (
        <div className="row">
            <div className="col-2 pt-2"
                 style={{textDecoration: props.todo.isCompleted ? "line-through" : "none"}}>{props.todo.name}</div>
            <div className="col-2 pt-2">
                <input type='checkbox' checked={isCompleted} onChange={() => handleSetCompleted(props.todo.id)}/>
                {props.todo.isCompleted ? 'Completed' : ''}
            </div>
            <div className="col-2">
                <button className="btn btn-link shadow-none"
                        onClick={() => props.handleTodoDelete(props.todo.id)}>Delete
                </button>
            </div>
            <div className="col-3">
                {
                    !showEditMode && <button className="btn btn-link shadow-none" onClick={toggleShowEdit}>Edit</button>
                }
                {
                    showEditMode &&
                    <div>
                        <input placeholder='Task Name' onChange={handleNameOnChange} value={taskNameInput}/>
                        <button className="btn btn-link shadow-none" onClick={handleUpdateTask}>OK</button>
                        <button className="btn btn-link shadow-none" onClick={toggleShowEdit}>Cancel</button>
                    </div>
                }
            </div>
            <div className="col-3">
                {!props.isFirst &&
                <button className="btn btn-link" onClick={() => handleMoveClick(-1)}>Up</button>
                }
                {!props.isLast &&
                <button className="btn btn-link" onClick={() => handleMoveClick(1)}>Down</button>
                }
            </div>
        </div>
    );
}

export default ToDoItem;
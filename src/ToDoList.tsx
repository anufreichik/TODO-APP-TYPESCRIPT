import React, {useState} from 'react';
import {IPropsList, ITodo} from "./interface";
import ToDoItem from "./ToDoItem";

function ToDoList(props: IPropsList) {
    const {todos, handleTodoMove, handleTodoComplete, handleTodoDelete, handleTodoUpdate, handleTodoCreate} = props;

    const [taskNameInput, setTaskNameInput] = useState<string>('');

    const handleNameOnChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setTaskNameInput(e.currentTarget.value);
    }

    const handleAddTodoClick = () => {
        const newTask: ITodo = {id: (todos.length + 1).toString(), name: taskNameInput, isCompleted: false}
        handleTodoCreate(newTask);
        setTaskNameInput('');
    }
    return (
        <div className="container">
            <div className="row mb-4">
                <input placeholder='Task Name' onChange={handleNameOnChange} value={taskNameInput}/>
                <button className='btn btn-link shadow-none' onClick={handleAddTodoClick}>Add</button>
            </div>
            <div className='row font-weight-bold text-muted'>
                <div  className="col-2">Name</div>
                <div  className="col-2">Status</div>
                <div  className="col-2">Del</div>
                <div  className="col-3">Edit</div>
                <div  className="col-3">Priority</div>
            </div>
            {todos.map((el, ind) =>
                <ToDoItem key={el.id} todo={el}
                          index={ind}
                          handleTodoUpdate={handleTodoUpdate}
                          handleTodoDelete={handleTodoDelete}
                          handleTodoComplete={handleTodoComplete}
                          handleTodoMove={handleTodoMove}
                          isFirst={ind===0?true:false}
                          isLast={ind===todos.length-1?true:false}
                />
            )}
        </div>
    );
}

export default ToDoList;
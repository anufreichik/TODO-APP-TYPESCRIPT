import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ITodo} from "./interface";
import ToDoList from "./ToDoList";
import TestComponent from "./TestComponent";


function App() {
    const initData: ITodo[] = [
        {id: '1', name: 'Learn React', isCompleted: true},
        {id: '2', name: 'Learn TypeScript', isCompleted: false},
        {id: '3', name: 'Learn JavaScript', isCompleted: true},
        {id: '4', name: 'LeetCode Problems', isCompleted: false},

    ]
    const [todos, setTodos] = useState<ITodo[]>(initData);

    //DELETE
    const handleDelete = (id: string) => {
        const newList = todos.filter(el => el.id !== id);
        setTodos(newList);
    }
    //COMPLETE TOGGLE
    const handleTodoComplete = (id: string) => {
        const newList = todos.map(el => {
                if (el.id === id) el.isCompleted = !el.isCompleted;
                return el;
            }
        );
        setTodos(newList);
    }
    //UPDATE
    const handleTodoUpdate = (id: string, name: string) => {
        const newList = todos.map(el => {
            if (el.id === id)
                el.name = name;
            return el;
        })
        setTodos(newList);
    }
    //CREATE NEW
    const handleTodoCreate = (todo: ITodo) => {
        const newList = [...todos, todo];
        setTodos(newList);
    }
    //MOVE PRIORITY UP/DOWN
    const handleTodoMove = (index: number, value: number) => {

        const curElement: ITodo = todos[index];
        const swapElement: ITodo = todos[index + value];
        todos[index] = swapElement;
        todos[index + value] = curElement;
        setTodos([...todos]);
    }

    const getSum = (a: number, b: number) => {
        return a + b;
    }

    return (
        <div>
            {/*<TestComponent name={'marina'}*/}
            {/*               age={25}*/}
            {/*               isAdult={true}*/}
            {/*               todoList={initData}*/}
            {/*               todo={initData[0]}*/}
            {/*               getSum={getSum}*/}
            {/*/>*/}


            <h5 className='text-light bg-dark mb-4 pt-3 pb-3 pr-4'>ToDo List App Inc</h5>
            <ToDoList todos={todos}
                      handleTodoComplete={handleTodoComplete}
                      handleTodoDelete={handleDelete}
                      handleTodoUpdate={handleTodoUpdate}
                      handleTodoCreate={handleTodoCreate}
                      handleTodoMove={handleTodoMove}
            />
        </div>
    );
}

export default App;

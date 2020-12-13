import React, {useState} from 'react';
import {ITodo} from "./interface";


interface IProps{
    name:string;
    age:number;
    isAdult:boolean;
    todoList:ITodo[];
    todo:ITodo;
    getSum:(a:number, b:number)=>number;
}

function TestComponent(props:IProps) {
    const [result,setResult]=useState(0);
    const getSumHandler=()=>{
        const res:number = props.getSum(1,2);
        setResult(res);
    }
    return (
        <div>
            <h5>{props.name}</h5>
            <h5>{props.age}</h5>
            <h5>{props.isAdult}</h5>
            {props.todo.name}
            {props.todoList.map(el=>
                <div>
                    <div>{el.id}</div>
                    <div>{el.name}</div>
                </div>
            )}
            <button onClick={getSumHandler}>Get Sum</button>
            {result}
        </div>
    );
}

export default TestComponent;
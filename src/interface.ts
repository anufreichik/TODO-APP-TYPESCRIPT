export interface ITodo{
    id:string,
    name:string,
    isCompleted:boolean
}
export interface ITodoList{
    todos:ITodo[];
}


export interface IPropsList {
    todos:ITodo[];
    handleTodoUpdate:(id:string, name:string)=>void;
    handleTodoCreate:(todo:ITodo)=>void;//return type is void
    handleTodoDelete:(id:string)=>void;
    handleTodoComplete:(id:string)=>void;
    handleTodoMove:(index:number, value:number)=>void;
}
export interface IPropsListItem {
    todo: ITodo;
    handleTodoUpdate:(id:string, name:string)=>void;
    handleTodoDelete:(id:string)=>void;
    handleTodoComplete:(id:string)=>void;
    handleTodoMove:(index:number, value:number)=>void;
    index:number;
    isFirst:boolean;
    isLast:boolean;
}




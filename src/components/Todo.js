import React from "react";


const Todo = (props)=>{

    function trashHandler(){
        props.onDelete(props.id)
    }
    const completeHandler = ()=>{
        props.onComplete(props.id);

    }


  

    return(
        <div className="todo">
            <li className={`todo-item ${props.completed?"completed":""}`}>{props.item}</li>
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={trashHandler}  className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    );


}

export default Todo;
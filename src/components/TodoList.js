import React from "react";
import Todo from "./Todo";
const TodoList = (props)=>{


    function removeHandler(id_){

        props.setTodos(preVal => {
            return preVal.filter((item)=>{
                return item.id != id_;
            })
        })
    }
       
    const onCompleteHandler = (id_)=>{
        props.setTodos(preval =>{
            return preval.map((item) => {
                if(item.id === id_){
                    return{
                        ...item,
                        completed: !item.completed
                    }
                }
                return item
            
                
            }) 

            
        })

        console.log(props.todos);
        
    }

    return(
        <div className="todo-container">
            <ul className="todo-list">

                {props.filtering.map(item=>{
                    return(
                        <Todo key = {item.id} id={item.id} item={item.text} onDelete={removeHandler} onComplete={onCompleteHandler} completed={item.completed}  />
                    );

                })}

            </ul>
        </div>
    );
}

export default TodoList;
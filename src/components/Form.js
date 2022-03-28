import React, {useState} from "react"


const Form = (props)=>{

    function inputTextHandler(event){
        const {value } = event.target;
        props.setInputText(value);
    };

    function submitButtinHandler(event){
        event.preventDefault();
        props.setTodos(preval=>{
            return [...preval, {"text":props.inputText, "completed":false, "id": Math.random()*1000}]
        });
       
        props.setInputText("");
    }

    const selectHandler = e=>{
        props.setSate(e.target.value);
    }
    return(
        <form>
            <input type="text" className="todo-input" onChange={inputTextHandler} value={props.inputText} />
            <button className="todo-button" type="submit" onClick={submitButtinHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select" onChange={selectHandler}>
                <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
    </form>

    );
}


export default Form;
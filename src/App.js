import React, {useState, useEffect} from 'react';
import './App.css';
import Form from "./components/Form.js"
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText]=useState("");
  const [todos, setTodos]=useState([]);
  const [state, setSate]=useState("all");
  const [filtering, setFiltering] = useState([]);

  const filteringHandler = ()=>{
    switch(state){
      case "completed":
        setFiltering(todos.filter(item=>item.completed===true));
        break;
      case "uncompleted":
        setFiltering(todos.filter(item=>item.completed===false));
        break;
      case "all":
        setFiltering([...todos]);
      
    }

  }

  const saveLocalTodos= ()=>{
      localStorage.setItem("todos", JSON.stringify(todos));
  }
  const getLocalTodos = ()=>{
    let localTodos =[];
    if(localStorage.getItem("todos")!==null){
      localTodos =JSON.parse(localStorage.getItem("todos"))
    }
    setTodos(localTodos);
  }

  useEffect(()=>{
    getLocalTodos();
  },[]);

  useEffect(()=>{
    filteringHandler();
    saveLocalTodos();

  }, [todos, state]);



  return (
    <div className="App">
      <header>
        <h1>Mohammad's ToDo List</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setSate={setSate}  />
      <TodoList todos={todos} setTodos={setTodos} filtering={filtering}/>
      
    
    </div>
  );
}

export default App;

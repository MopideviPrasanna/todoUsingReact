import { useState } from "react";
import "./App.css"
function App(){
  let [todoInp, updateInp]= useState()
  let [todolist, updatetodolist]=useState([
    {
      id:1,
      task:"Learn html"
    },
    {
      id:2,
      task:"Learn css"
    }
  ])
  let nextId=todolist.length;
  function addNewTodo(){
    if (todoInp===""){
          alert("Enter some task")
    }
    else{
      let newtodo=[...todolist,{id: nextId++, task:todoInp}]
      console.log(nextId)
      updatetodolist(newtodo);
      updateInp("")
    }

  }
  function deleteTodo(id){
      let updatedTodos= todolist.filter((todo)=>{
        return (todo.id!==id)
      })
      updatetodolist(updatedTodos)
  }
  return(
    <div className="container mt-5 w-50">
      <h1 className="text-center">Todo App Using React</h1>
      <div className="input-group mb-5">
        <input type="text" className="form-control" value={(todoInp)} onChange={(e)=>{
            let task=e.target.value;
            updateInp(task)
        }}/>
        <button className="btn btn-primary" onClick={()=>{
          addNewTodo()
        }}>Add</button>
      </div>
      <ul className="list-group">
        {
          todolist.map((todo)=>{
            return(<li className="list-group-item task">
              <p>{todo.task}</p>
              <button className="btn" onClick={()=>{
                deleteTodo(todo.id)
              }}>❌</button>
            </li>)
          })
        }
      </ul>
    </div>
  )
}
export default App;
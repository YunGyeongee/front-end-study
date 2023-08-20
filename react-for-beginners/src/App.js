import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([])
  const onchange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray])
    setToDo("");
  }
  return (
    <div>
      <h1>My To Do List (total : { toDos.length })</h1>
      <form onSubmit={ onSubmit }>
        <input onChange={ onchange } value={ toDo } type="text" placeholder="Write your to do..."/>
        <button>Add To Do</button>
      </form>
      <hr/>
      {/* .map의 기능 : 기존 배열에 있는 값들을 원하는 대로 변형할 수 있음 */ }
      <ul>
        { toDos.map((item, index) => <li key={index}>{ item }</li>) }
      </ul>
    </div>
  );
}

export default App;

import React, {useState} from 'react'
import './App.css';
import TodoTable from './components/TodoTable';

// const todosInFile = [
//   {rowNumber : 3, rowDescription: "Feed yourself", rowOwner: "Eric"},
//   {rowNumber : 4, rowDescription: "Feed the world", rowOwner: "Eric"}
// ]


function App() {
  
  const [todosInFile, setTodos] = useState([
    { rowNumber: 3, rowDescription: "Feed yourself", rowOwner: "Eric" },
    { rowNumber: 4, rowDescription: "Feed the world", rowOwner: "Eric" },
  ]);

  let counter = todosInFile.length+2;

  // const addTodo = () => {
  //   if (todosInFile.length > 0) {
  //     const newTodo = {
  //       rowNumber: ++counter,
  //       rowDescription: "Feed the universe",
  //       rowOwner: "Eric",
  //     };
  //     // todosInFile.push(newTodo);
  //     setTodos(todosInFile => [...todosInFile, newTodo])
  //     console.log(todosInFile);
  //   }
  // };

  function addTodo() {
    if(counter <= 4){
      addTodoSmall();
    }
    else if (counter >= 5 && counter < 6){
      addTodoBig();
    }

  }

  function addTodoBig() {
    let newTodo = {
      rowNumber: ++counter,
      rowDescription: "Feed Galactus",
      rowOwner: "Eric",
    };
    // todosInFile.push(newTodo);
    setTodos((todosInFile) => [...todosInFile, newTodo]);
    console.log(todosInFile);

  }

  function addTodoSmall() {
    let newTodo = {
      rowNumber: ++counter,
      rowDescription: "Feed the universe",
      rowOwner: "Eric",
    };
    // todosInFile.push(newTodo);
    setTodos((todosInFile) => [...todosInFile, newTodo]);
    console.log(todosInFile);

    }

  return (

    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todos</div>
        <div className="card-body">
        <TodoTable 
          todosInFile = {todosInFile}
        />
        <button className='btn btn-primary' onClick={addTodo}>Add new Todo</button>
        </div>
      </div>
    </div>
  );
}


export default App;
import React, { useState } from 'react'
import './App.css';
import {TodoTable} from './components/TodoTable';
import {NewTodoForm} from './components/NewTodoForm';

export const App = () => {

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feed Dog", rowOwner: "Homer" },
    { rowNumber: 2, rowDescription: "Feed Cat", rowOwner: "Homer" },
    { rowNumber: 3, rowDescription: "Feed yourself", rowOwner: "Homer" },
    { rowNumber: 4, rowDescription: "Feed the world", rowOwner: "Homer" },
  ]);

  const [showAddTodo, setShowAddTodo] = useState(false);

  const addTodo = (description: string, owner: string) => {
    let rowNumber = 0;

    if (todos.length > 0) {
       rowNumber = todos[todos.length - 1].rowNumber + 1;
    }
    else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber : rowNumber,
      rowDescription: description,
      rowOwner: owner
    };
    setTodos(todos => [...todos, newTodo])
    console.log(todos);
  }

  const deleteTodo = (deleteTodoRowNumber: number) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber != deleteTodoRowNumber;
    });
    setTodos(filtered);
  }

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todos</div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
          <button
            className="btn btn-primary"
            onClick={() => setShowAddTodo(!showAddTodo)}
          >
          {showAddTodo ? 'Close New Todo' : 'Add New Todo'}  
          </button>
          {showAddTodo && //if its true and then render
           <NewTodoForm addTodo={addTodo}/>
          }
          {/* key value pair */}
        </div>
      </div>
    </div>
  );
}

import './App.css';
import TodoTable from './components/TodoTable';

const todosInFile = [
  {rowNumber : 3, rowDescription: "Feed yourself", rowOwner: "Eric"}
]

function App() {
  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todos</div>
        <div className="card-body">
        <TodoTable todosInFile = {todosInFile}
         />
        </div>
      </div>
    </div>
  );
}


        export default App;

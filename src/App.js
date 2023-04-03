import './App.css';
import TodoRowItem from './components/TodoRowItem';
import TodosFromFile from './components/TodosFromFile';

const todosInFile = [
  { rowNumber: 3, rowDescription: "Feed yourself", rowOwner: "Eric" },
];

function App() {
  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todos</div>
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Owner</th>
              </tr>
            </thead>
            <tbody>
              <TodoRowItem />
              <tr>
                <th scope="row">2</th>
                <td>Feed Cat</td>
                <td>Eric</td>
              </tr>
              <TodosFromFile
                rowNumber={todosInFile[0].rowNumber}
                rowDescription={todosInFile[0].rowDescription}
                rowOwner={todosInFile[0].rowOwner}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Rows(){
  return (
    <tr>
      <th scope="row">1</th>
      <td>Feed Dog</td>
      <td>Eric</td>
    </tr>
  );
}

        export default App;

import './App.css';

function App() {
  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          Your Todos
          </div>
          <div className="card-body">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope="col">Description</th>
                  <th scope="col">Owner</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Feed Dog</td>
                  <td>Eric</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Feed Cat</td>
                  <td>Eric</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
}

        export default App;

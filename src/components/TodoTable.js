import TodoRowItem from "./TodoRowItem"

function TodoTable(props){
    return (
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
          {props.todosInFile.map((todoInFile) => (
            <tr>
              <th scope="row">{todoInFile.rowNumber}</th>
              <td>{todoInFile.rowDescription}</td>
              <td>{todoInFile.rowOwner}</td>
              {/* //ignore hihglight, just trying out things, better to use a method */}
            </tr>
          ))}
        </tbody>
      </table>
    );
}

export default TodoTable
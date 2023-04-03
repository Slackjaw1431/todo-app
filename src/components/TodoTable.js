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
          <tr>
            <th scope="row">{props.todosInFile[0].rowNumber}</th>
            <td>{props.todosInFile[0].rowDescription}</td>
            <td>{props.todosInFile[0].rowOwner}</td>
          </tr>
        </tbody>
      </table>
    );
}

export default TodoTable
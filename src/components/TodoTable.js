import TodoRowItem from "./TodoRowItem"

function TodoTable(props){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">Owner</th>
            <th scope="col">Done</th>
          </tr>
        </thead>
        <tbody>
          {props.todos.map((todos) => (
            <TodoRowItem
              key={todos.rowNumber}
              rowNumber={todos.rowNumber}
              rowDescription={todos.rowDescription}
              rowOwner={todos.rowOwner}
              deleteTodo={props.deleteTodo}
            />
          ))}
        </tbody>
      </table>
    );
}

export default TodoTable
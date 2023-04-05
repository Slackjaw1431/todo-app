function TodoRowItem(props) {
    //must return only one parent
        return (
          <tr>
            <th scope="row">{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowOwner}</td>
            <td>
              {" "}
              <button
                className="btn btn-primary"
                onClick={() => props.deleteTodo(props.rowNumber)}
              >
                Done
              </button>
            </td>
          </tr>
        );
    }

    export default TodoRowItem;

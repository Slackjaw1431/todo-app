import React from "react";

export const TodoRowItem: React.FC<{
  rowNumber: number;
  rowDescription: string;
  rowOwner: string;
  deleteTodo: Function;
}> = (props) => {
  //must return only one parent
  return (
    <tr>
      <th scope="row">{props.rowNumber}</th>
      <td>{props.rowDescription}</td>
      <td>{props.rowOwner}</td>
      <td>
        <button
          className="btn btn-primary"
          onClick={() => props.deleteTodo(props.rowNumber)}
        >
          Done
        </button>
      </td>
    </tr>
  );
};

function TodosFromFile(props) {
  //props is the property object being passed from app.js
  return (
    <tr>
      <th scope="row">{props.rowNumber}</th>
      <td>{props.rowDescription}</td>
      <td>{props.rowOwner}</td>
    </tr>
  );
}

export default TodosFromFile;

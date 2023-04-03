function TodoRowItem() {
    //must return only one parent

    const item = {
        rowNumber: 1,
        rowDescription: "Feed Dog",
        rowOwner: "Eric",
    };

    const item2 = {
        rowNumber: 2,
        rowDescription: "Feed Cat",
        rowOwner: "Eric",
    };

    const todos = [ item, item2 ];

    for (let item of todos) {
        return (
          // <tr>
          //   <th scope="row">{rowNumber}</th>
          //   <td>{rowDescription}</td>
          //   <td>{rowOwner}</td>
          // </tr>
          <tr>
            <th scope="row">{item.rowNumber}</th>
            <td>{item.rowDescription}</td>
            <td>{item.rowOwner}</td>
          </tr>
        );
    }
};

    export default TodoRowItem;

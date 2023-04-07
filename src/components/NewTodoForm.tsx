import React, { useState } from "react";

export const NewTodoForm: React.FC<{ addTodo: Function }> = (props) => {
  const [description, setDescription] = useState("");

  const [owner, setOwner] = useState("");

  const submitTodo = () => {
    if (description !== "" && owner !== "") {
      props.addTodo(description, owner);
      setDescription("");
      setOwner("");
    }
  };

  return (
    <div className="mt-5">
      {/* //margin top 5 */}
      <form>
        <div className="mb-3">
          <label className="form-label">Owner</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(e) => setOwner(e.target.value)}
            value={owner}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-control">Description</label>
          <textarea
            className="form-control"
            rows={3}
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={submitTodo}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

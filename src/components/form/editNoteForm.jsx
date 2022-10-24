import { useState } from "react";

export default function EditNoteForm({ onSubmit, data }) {
  const [updNote, setUpdNote] = useState({ ...data });

  const handleEditInput = ({ target: { name, value } }) => {
    setUpdNote((prev) => ({ ...prev, [name]: value }));
   
  };
  const handleEditSubmit = (e) => {
    e.preventDefault();
    onSubmit(updNote);
  };
  return (
    <form onSubmit={handleEditSubmit} autoComplete="off">
      <label>
        Name
        <input
          type="text"
          name="name"
          value={updNote.name}
          onChange={handleEditInput}
          required
          placeholder="Name"
        />
      </label>
      <label>
        Category
        <input
          list="categories"
          name="category"
          value={updNote.category}
          required
          onChange={handleEditInput}
        />
        <datalist id="categories">
          <option value="Task">Task</option>
          <option value="Random Thought">Random Thought</option>
          <option value="Idea">Idea</option>
          <option value="Quote">Quote</option>
        </datalist>
      </label>
      <label>
        Content
        <input
          type="text"
          placeholder="Content"
          name="content"
          value={updNote.content}
          required
          onChange={handleEditInput}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}

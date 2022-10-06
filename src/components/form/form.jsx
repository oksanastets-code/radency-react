import { useState } from "react";

export default function NoteForm({ mode, onSubmit, data }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const [updNote, setUpdNote] = useState({
    name: data.name,
    category: data.category,
    content: data.content,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "content":
        setContent(value);
        break;
      default:
        return;
    }
  };
  const handleEditInput = ({ target: { name, value } }) => {
    setUpdNote((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, category, content);
    setName("");
    setCategory("");
    setContent("");
  };
    const handleEditSubmit = (e) => {
        e.preventDefault();
        console.log('ми обновили деякі дані замітки', updNote);
        onSubmit(updNote);
        
}
  return (
    <div>
      {mode === "isAdding" && (
        <form onSubmit={handleSubmit} autoComplete="off">
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInput}
              required
              placeholder="Name"
            />
          </label>
          <label>
            Category
            <input
              list="categories"
              name="category"
              value={category}
              required
              onChange={handleInput}
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
              value={content}
              required
              onChange={handleInput}
            />
          </label>
          <button type="submit">Add</button>
        </form>
      )}
      {mode === "isEditing" && (
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
      )}
    </div>
  );
}

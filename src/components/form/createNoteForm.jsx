import { useState } from "react";

export default function CreateNoteForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

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
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, category, content);
    setName("");
    setCategory("");
    setContent("");
  };
  return (
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
      )
}

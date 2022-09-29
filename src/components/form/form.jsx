import { useState } from "react";

export default function NoteForm({ onSubmit }) {
    const [name, setName] = useState("");
    const [categ, setCateg] = useState("");
    const [content, setContent] = useState("");


    const handleInput = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "categ":
                setCateg(value);
                break;
            case "content":
                setContent(value);
                break;
            default:
                return;
        }
    };
    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(name, categ, content);
        setName('');
        setCateg('');
        setContent('');
    };
    return (
        <form onSubmit={handleSubmit}
            autoComplete="off">
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
                    name="categ"
                    value={categ}
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

            <button type="submit">
                Add
            </button>
            {/* <button type="submit" data-action="edit-note">
              Save
            </button> */}
        </form>);
}
import { useState } from "react";

import initialNotes from "./notes.json";
import { NotesTable } from "./components/notesTable/notesTable";
import Modal from "./hoc/Modal";

function App() {
  const [notes, setNotes] = useState(initialNotes);
  const [isOpen, setOpen] = useState(true);

  const deleteNote = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId));
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <>
      <table className="notes-table js-notes-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Created</th>
            <th>Category</th>
            <th>Content</th>
            <th>Dates</th>
            <th>Buttons</th>
          </tr>
        </thead>
        <NotesTable notes={notes} onDeleteNote={deleteNote} />
      </table>

      <button
        type="button"
        onClick={() => {
          // onCreateNote;
        }}
      >
        Create Note
      </button>

      <table className="summary-table js-summary-table">
        <thead>
          <tr>
            <th>Note Category</th>
            <th>Active</th>
            <th>
              <a href="" className="js-archive">
                Archived
              </a>
            </th>
          </tr>
        </thead>
      </table>

      {isOpen && (
        <Modal onClose={handleCloseModal}>
          <form
            action=""
            className="note-form visually-hidden"
            autoComplete="off"
          >
            <label>
              Name
              <input type="text" placeholder="Name" name="name" />
            </label>
            <label>
              Category
              <input list="categories" name="categ" />
              <datalist id="categories">
                <option value="Task">Task</option>
                <option value="Random Thought">Random Thought</option>
                <option value="Idea">Idea</option>
                <option value="Quote">Quote</option>
              </datalist>
            </label>
            <label>
              Content
              <input type="text" placeholder="Content" name="content" />
            </label>

            <button type="submit" data-action="add-note">
              Add
            </button>
            <button type="submit" data-action="edit-note">
              Save
            </button>
          </form>

          {/* <table class="js-archive-table visually-hidden">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Content</th>
              <th></th>
            </tr>
          </thead>
        </table> */}
          {/* </div>)} */}

          <button
            type="button"
           onClick={handleCloseModal}
          >
            X
          </button>
        </Modal>
      )}
    </>
  );
}

export default App;

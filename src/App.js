import { useState } from "react";
import { nanoid } from 'nanoid';

import initialNotes from "./notes.json";
import { NotesTable } from "./components/notesTable/notesTable";
import Modal from "./hoc/Modal";
import NoteForm from "./components/form/form";
import { getDates } from "./helper/getDates";
import { getCurrentDate } from "./helper/getCurrentDate";

function App() {
  const [notes, setNotes] = useState(initialNotes);
  const [isOpen, setOpen] = useState(false);

  const addNote = (name, category, content) => {
    const note = {
      id: nanoid(),
      name,
      created: getCurrentDate(),
      category,
      content, 
      dates: getDates(content)
    };
 
    setNotes(prevNotes => [...prevNotes, note]);
    setOpen(false);
  };
  const deleteNote = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId));
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  
  return (
    <>
      <table>
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
        <NotesTable dates={getDates } notes={notes} onDeleteNote={deleteNote} />
      </table>

      <button
        type="button"
        onClick={() => {
          setOpen(true);
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
         <NoteForm onSubmit={addNote}/>

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

          <button type="button" onClick={handleCloseModal}>
            X
          </button>
        </Modal>
      )}
    </>
  );
}

export default App;

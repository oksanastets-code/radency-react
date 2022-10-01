import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import initialNotes from "./notes.json";
import { Table } from "./components/table/table";
import { NotesTable } from "./components/notesTable/notesTable";
import Modal from "./hoc/Modal";
import NoteForm from "./components/form/form";
import { getDates } from "./helper/getDates";
import { getCurrentDate } from "./helper/getCurrentDate";

function App() {
  const [notes, setNotes] = useState(initialNotes);
  const [isOpen, setOpen] = useState(false);
//   useEffect(() => {
//   console.log('UseEffect');
// }, [notes])
  const addNote = (name, category, content) => {
    const note = {
      id: nanoid(),
      name,
      created: getCurrentDate(),
      category,
      content,
      dates: getDates(content),
      status: "active",
    };

    setNotes((prevNotes) => [...prevNotes, note]);
    setOpen(false);
  };
  const deleteNote = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId));
  };

  const archiveNote = (noteId) => {
    console.log(noteId);
    const archivedNote = notes.find(note => note.id === noteId);
    archivedNote.status = 'archived';
    console.log(notes);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Table title="notes">
        <NotesTable
          dates={getDates}
          notes={notes}
          onDeleteNote={deleteNote}
          onArchiveNote={archiveNote}
        />
      </Table>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
        }}
      >
        Create Note
      </button>
      <Table title="summary"></Table>

      {isOpen && (
        <Modal onClose={handleCloseModal}>
          <NoteForm onSubmit={addNote} />
          <Table title="archive"></Table>

          <button type="button" onClick={handleCloseModal}>
            X
          </button>
        </Modal>
      )}
    </>
  );
}

export default App;

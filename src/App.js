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
  const [isAdding, setIsAdding] = useState(false);
  const [showArchive, setShowArchive] = useState(false);
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
    const archivedNote = notes.find((note) => note.id === noteId);
    archivedNote.status = "archived";
    setNotes(notes.map(note => note.id!==noteId ? note : archivedNote ))
    console.log(notes);
  };
  const handleCloseModal = () => {
    setOpen(false);
    setIsAdding(false);
    setShowArchive(false);
  };
  const handleCreateBtn = () => {
    setOpen(true);
    setIsAdding(true);
  };
  const handleArchiveLink = (e) => {
    e.preventDefault();
    setOpen(true);
    setShowArchive(true);
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
      <button type="button" onClick={handleCreateBtn}>
        Create Note
      </button>
      <Table title="summary" onArchiveLinkClick={handleArchiveLink}></Table>

      {isOpen && (
        <Modal onClose={handleCloseModal}>
          {isAdding && <NoteForm onSubmit={addNote} />}
          {showArchive && <Table title="archive"></Table>}

          <button type="button" onClick={handleCloseModal}>
            X
          </button>
        </Modal>
      )}
    </>
  );
}

export default App;

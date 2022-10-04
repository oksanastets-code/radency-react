import { useState } from "react";
import { nanoid } from "nanoid";

import initialNotes from "./notes.json";
import { Table } from "./components/table/table";
import { NotesTable } from "./components/notesTable/notesTable";
import { ArchiveTable } from "./components/archiveTable/archiveTable";
import Modal from "./hoc/Modal";
import NoteForm from "./components/form/form";
import { getDates } from "./helper/getDates";
import { getCurrentDate } from "./helper/getCurrentDate";

function App() {
  const [notes, setNotes] = useState(initialNotes);
  const [isOpen, setOpen] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingNote, setEditingNote] = useState({});
  const [showArchive, setShowArchive] = useState(false);
  //   useEffect(() => {
  //   console.log('UseEffect');
  // }, [notes])
  const addNote = (name, category, content) => {
    const newNote = {
      id: nanoid(),
      name,
      created: getCurrentDate(),
      category,
      content,
      dates: getDates(content),
      status: "active",
    };

    setNotes((prevNotes) => [...prevNotes, newNote]);
    setOpen(false);
  };
  const editNote = (noteId) => {
    setOpen(true);
    setIsEditing(true);
    const editingNote = notes.find((note) => note.id === noteId);
    console.log(editingNote);
   
    // const editedNote = {
    //   id: noteId,
    //   name,
    //   created,
    //   category,
    //   content,
    //   dates: getDates(content),
    //   status: "active",
    // }
  };
  const deleteNote = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId));
  };

  const archiveNote = (noteId) => {
    const archivedNote = notes.find((note) => note.id === noteId);
    archivedNote.status = "archived";
    console.log(archivedNote);
    setNotes(notes.map((note) => (note.id !== noteId ? note : archivedNote)));
    console.log(notes);
  };
  const handleCloseModal = () => {
    setOpen(false);
    setIsAdding(false);
    setShowArchive(false);
    setIsEditing(false);
  };
  const handleCreateBtn = () => {
    setOpen(true);
    setIsAdding(true);
  };
  const handleArchiveBtn = () => {
    setOpen(true);
    setShowArchive(true);
  };
  const handleUnarchiveBtn = (noteId) => {
    const unarchivedNote = notes.find((note) => note.id === noteId);
    unarchivedNote.status = "active";
    setNotes(notes.map((note) => (note.id !== noteId ? note : unarchivedNote)));
  };
  return (
    <>
      <Table title="notes">
        <NotesTable
          dates={getDates}
          notes={notes}
          onEditNote={editNote}
          onDeleteNote={deleteNote}
          onArchiveNote={archiveNote}
        />
      </Table>
      <button type="button" onClick={handleCreateBtn}>
        Create Note
      </button>
      <Table title="summary" onArchiveBtnClick={handleArchiveBtn}></Table>

      {isOpen && (
        <Modal onClose={handleCloseModal}>
          {isAdding && <NoteForm mode="isAdding" onSubmit={addNote} />}
          {isEditing && <NoteForm mode="isEditing"onSubmit={editNote} />}

          {showArchive && (
            <Table title="archive">
              <ArchiveTable
                notes={notes}
                onUnarchiveNote={handleUnarchiveBtn}
              />
            </Table>
          )}

          <button type="button" onClick={handleCloseModal}>
            X
          </button>
        </Modal>
      )}
    </>
  );
}

export default App;

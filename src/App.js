import { useState } from "react";
import { nanoid } from "nanoid";

import initialNotes from "./notes.json";
import { Table } from "./components/table/table";
import { NotesTable } from "./components/notesTable/notesTable";
import {SummaryTable} from "./components/summaryTable/summaryTable"
import { ArchiveTable } from "./components/archiveTable/archiveTable";
import Modal from "./hoc/Modal";
import CreateNoteForm from "./components/form/createNoteForm";
import EditNoteForm from "./components/form/editNoteForm";

import { getDates } from "./helper/getDates";
import { getCurrentDate } from "./helper/getCurrentDate";

function App() {
  const [notes, setNotes] = useState(initialNotes);
  const [isOpen, setIsOpen] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingNote, setEditingNote] = useState({});
  const [showArchive, setShowArchive] = useState(false);

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
    setIsOpen(false);
    setIsAdding(false);
  };
  const editNote = (obj) => {
    setNotes(
      notes.map((note) =>
        note.id !== editingNote.id ? note : { ...editingNote, ...obj }
      )
    );
    setIsOpen(false);
    setIsEditing(false);
  };
  const deleteNote = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId));
  };

  const archiveNote = (noteId) => {
    const archivedNote = notes.find((note) => note.id === noteId);
    archivedNote.status = "archived";
    setNotes(notes.map((note) => (note.id !== noteId ? note : archivedNote)));
  };
  const handleCloseModal = () => {
    setIsOpen(false);
    setIsAdding(false);
    setShowArchive(false);
    setIsEditing(false);
  };
  const handleCreateBtn = () => {
    setIsOpen(true);
    setIsAdding(true);
  };
  const handleArchiveBtn = () => {
    setIsOpen(true);
    setShowArchive(true);
  };
  const handleUnarchiveBtn = (noteId) => {
    const unarchivedNote = notes.find((note) => note.id === noteId);
    unarchivedNote.status = "active";
    setNotes(notes.map((note) => (note.id !== noteId ? note : unarchivedNote)));
  };
  const handleEditBtn = (noteId) => {
    setIsOpen(true);
    setIsEditing(true);
    const editingNote = notes.find((note) => note.id === noteId);
    setEditingNote(editingNote);
  };
  return (
    <>
      <Table title="notes">
        <NotesTable
          dates={getDates}
          notes={notes}
          onEditNote={handleEditBtn}
          onDeleteNote={deleteNote}
          onArchiveNote={archiveNote}
        />
      </Table>
      <button type="button" onClick={handleCreateBtn}>
        Create Note
      </button>
      <Table title="summary" onArchiveBtnClick={handleArchiveBtn}>
        <SummaryTable arr={notes} />
      </Table>

      {isOpen && (
        <Modal onClose={handleCloseModal}>
          {isAdding && <CreateNoteForm onSubmit={addNote} />}
          {isEditing && (
            <EditNoteForm onSubmit={editNote} data={editingNote} />
          )}

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

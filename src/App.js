import { useState } from "react";
import { nanoid } from "nanoid";

import { useSelector, useDispatch } from "react-redux";
import { getNotes } from "./redux/notes/notes-selectors";
import {
  addNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
  editNote,
} from "./redux/notes/notes-slice";

import { Table } from "./components/table/table";
import { NotesTable } from "./components/notesTable/notesTable";
import { SummaryTable } from "./components/summaryTable/summaryTable";
import { ArchiveTable } from "./components/archiveTable/archiveTable";
import Modal from "./hoc/Modal";
import CreateNoteForm from "./components/form/createNoteForm";
import EditNoteForm from "./components/form/editNoteForm";

import { getDates } from "./helper/getDates";
import { getCurrentDate } from "./helper/getCurrentDate";

// const mapStateToProps = (state) => {
//   return {
//     notes: state,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addNote: (obj) => dispatch(addNote(obj)),
//     deleteNote: (id) => dispatch(deleteNote(id))
//   };
// };
function App() {
  const notes = useSelector(getNotes);
  // console.log(notes);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingNote, setEditingNote] = useState({});
  const [showArchive, setShowArchive] = useState(false);

  const add = (name, category, content) => {
    dispatch(
      addNote({
        id: nanoid(),
        name,
        created: getCurrentDate(),
        category,
        content,
        dates: getDates(content),
        status: "active",
      })
    );

    setIsOpen(false);
    setIsAdding(false);
  };
  const handleDelBtn = (id) => dispatch(deleteNote(id));

  const edit = (obj) => {
    dispatch(editNote(obj));

    setIsOpen(false);
    setIsEditing(false);
  };
  const arch = (id) => dispatch(archiveNote(id));

  const handleUnarchiveBtn = (id) => dispatch(unarchiveNote(id));

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

  const handleEditBtn = (noteId) => {
    setIsOpen(true);
    setIsEditing(true);
    const editingNote = notes.find((note) => note.id === noteId);
    setEditingNote(editingNote);
    console.log(editingNote);
  };
  return (
    <>
      <Table title="notes">
        <NotesTable
          dates={getDates}
          notes={notes}
          onEditNote={handleEditBtn}
          onDeleteNote={handleDelBtn}
          onArchiveNote={arch}
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
          {isAdding && <CreateNoteForm onSubmit={add} />}
          {isEditing && <EditNoteForm onSubmit={edit} data={editingNote} />}

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
// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;

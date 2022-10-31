import { getDates } from "../../helper/getDates";
import styled from 'styled-components';
export const NotesTable = ({
  notes,
  onDeleteNote,
  onArchiveNote,
  onEditNote,
}) => (
  <tbody>
    {notes.map(
      (note) =>
        note.status === "active" && (
          <tr key={note.id}>
            <td>{note.name}</td>
            <td>{note.created}</td>
            <td>{note.category}</td>
            <td>{note.content}</td>
            <td>{getDates(note.content)}</td>
            <td>
              <button type="button" onClick={() => onEditNote(note.id)}>
                Edit
              </button>
              <button type="button" onClick={() => onArchiveNote(note.id)}>
                Archive
              </button>
              <button type="button" onClick={() => onDeleteNote(note.id)}>
                Delete
              </button>
            </td>
          </tr>
        )
    )}
  </tbody>
);

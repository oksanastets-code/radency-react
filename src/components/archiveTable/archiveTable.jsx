export const ArchiveTable = ({ notes, onUnarchiveNote }) => {
     
  return (
    <tbody>
      {notes.map(
        (note) =>
          note.status === "archived" && (
            <tr key={note.id}>
              <td>{note.name}</td>
              <td>{note.category}</td>
              <td>{note.content}</td>
              <td>
                <button type="button" onClick={() => onUnarchiveNote(note.id)}>
                  Unarchive
                </button>
              </td>
            </tr>
          )
      )}
    </tbody>
  );
};

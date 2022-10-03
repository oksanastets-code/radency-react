export const ArchiveTable = ({ notes }) => {
  return (
    <tbody>
      {notes.map(
        (note) =>
          note.status === "archived" && (
            <tr>
              <td>${note.name}</td>
              <td>${note.category}</td>
              <td>${note.content}</td>
              <td>
                <button type="button">
                  Unarchive
                </button>
              </td>
            </tr>
          )
      )}
    </tbody>
  );
};

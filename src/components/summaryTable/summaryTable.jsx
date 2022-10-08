import { useState } from "react"


export const SummaryTable = () => {
    const [summaryData, setSummaryDate] = useState;
    return (
{/* <tbody>
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
    </tbody> */}
`
        <tr>
          <td>${option}</td>
          <td>${active}</td>
          <td>${archieved}</td>
        </tr>`
    );  
}
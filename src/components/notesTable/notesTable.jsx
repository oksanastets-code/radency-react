export const NotesTable = (({ notes, onDeleteNote }) => 
    (<tbody>
    {notes.map((note) => (
        <tr key={note.id}>
            <td>{note.name}</td>
            <td>{note.created}</td>
            <td>{note.category}</td>
            <td>{note.content}</td>
            <td>dates</td>
            <td>
                <button type="button">Edit</button>
                <button type="button">Archive</button>
                <button type="button" onClick={()=> onDeleteNote(note.id)}>Delete</button>
            </td>
        </tr>
    ))}
    </tbody>
    ))

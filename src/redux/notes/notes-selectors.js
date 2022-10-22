export const getNotes = (state) => state.notes;
export const getNoteById = (state, id) => {
  const ed = state.notes.find((note) => note.id === id);
  console.log(ed);
  return ed;
};

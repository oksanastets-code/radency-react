import { createSlice } from '@reduxjs/toolkit'
import initialState from "../../notes.json"

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
      return state;
    }
  },
})

export const { addNote } = notesSlice.actions;

export default notesSlice.reducer
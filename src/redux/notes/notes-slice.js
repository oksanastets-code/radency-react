import { createSlice } from "@reduxjs/toolkit";
import initialState from "../../notes.json";

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
      return state;
    },
    deleteNote: (state, action) => {
      return state.filter(({ id }) => id !== action.payload);
    },
    editNote: (state, action) => {
      return state.map((note) => {
        if (note.id === action.payload.id) {
          return {
            ...note,
            item: action.payload.item,
          };
        }
        return note;
      });
    },
    archiveNote: (state, action) => {
      return state.map((note) => {
        if (note.id === action.payload) {
          return {
            ...note,
            status: "archived"
          }
        }
        return note;
      })
    }
  },
});

export const { addNote, deleteNote, editNote, archiveNote } = notesSlice.actions;

export default notesSlice.reducer;

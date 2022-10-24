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
    archiveNote: (state, action) => {
      return state.map((note) => {
        if (note.id === action.payload) {
          return {
            ...note,
            status: "archived",
          };
        }
        return note;
      });
    },
    unarchiveNote: (state, action) => {
      return state.map((note) => {
        if (note.id === action.payload) {
          return {
            ...note,
            status: "active",
          };
        }
        return note;
      });
    },
    editNote: (state, action) => {
      console.log(action.payload);
      return state.map((note) => {
        if (note.id === action.payload.id) {
          return {
            ...note,
            ...action.payload
          };
        }
        return note;
      });
    },
  },
});

export const { addNote, deleteNote, editNote, archiveNote, unarchiveNote} =
  notesSlice.actions;

export default notesSlice.reducer;

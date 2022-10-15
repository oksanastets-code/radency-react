import { createReducer } from '@reduxjs/toolkit';
import { addNote, editNote, deleteNote, archiveNote } from './notes-actions';
import initialNotes from '../../notes.json';

const notes = createReducer(initialNotes, {
    [addNote]: (state, { payload }) => state = [...state, payload],
    [editNote]: (state, { payload }) => state.map((note) => note.id === editingNote.id ? { ...editingNote, ...payload }: note), 
    [deleteNote]: (state, { payload }) => state.filter(({ id }) => id !== payload),
    [archiveNote]: (state, {payload})=> 
})
import { configureStore } from '@reduxjs/toolkit'
import notesReducer from '../redux/notes/notes-slice'
export default configureStore({
    reducer: {
        notes: notesReducer,
  },
})
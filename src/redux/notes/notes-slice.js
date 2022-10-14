import { createSlice } from '@reduxjs/toolkit'
import initialState from "../../notes.json"

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

export const { increment, decrement, incrementByAmount } = notesSlice.actions

export default notesSlice.reducer
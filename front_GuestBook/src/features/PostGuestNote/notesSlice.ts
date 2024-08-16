import { IGuestBookNoteDB } from '../../types.ts';
import { createSlice } from '@reduxjs/toolkit';
import { fetchNotes } from './notesThunk.ts';

export interface noteInitialState{
  notes:IGuestBookNoteDB[],
  loadingNotes: boolean
}

const initialState:noteInitialState = {
  notes: [],
  loadingNotes:false
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers:{

  },
  extraReducers:(builder)=>{
    builder
      .addCase(fetchNotes.pending, (state)=>{
        state.loadingNotes = true
      })
      .addCase(fetchNotes.fulfilled, (state , {payload}) => {
        state.loadingNotes = false
        state.notes = payload;
      })
      .addCase(fetchNotes.rejected, (state)=>{
        state.loadingNotes = false
      });
  }
})

export const notesReducer = notesSlice.reducer
export const {} = notesSlice.actions;


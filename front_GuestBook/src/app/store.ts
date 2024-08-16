import { configureStore } from '@reduxjs/toolkit';
import { notesReducer } from '../features/PostGuestNote/notesSlice.ts';

export const store = configureStore({
  reducer:{
    notes:notesReducer
  }
})

export type RootState = ReturnType<typeof store.dispatch>;
export type AppDispatch = typeof store.dispatch;

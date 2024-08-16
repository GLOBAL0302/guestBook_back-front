import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosApi } from '../../axiosApi.ts';
import { IGuestBookNoteDB, IGuestBookNoteMutation } from '../../types.ts';


export const fetchNotes = createAsyncThunk<IGuestBookNoteDB[]>(
  "PostGuestNote/fetchNotes",
  async ()=>{
    const {data: notes} = await axiosApi.get("/guestBook");
    return notes;
  }
)

export const postNote = createAsyncThunk<void, IGuestBookNoteMutation>(
  "PostGuestNote",
  async (item)=>{
    const formData = new FormData();
    formData.append("author", item.author);
    formData.append("note", item.note);
    if(item.image){
      formData.append("image", item.image);
    }

    await axiosApi.post("/guestBook", formData)
  }
)
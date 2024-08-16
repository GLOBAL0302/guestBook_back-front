import express from "express";
import { IGuestBookNoteMutation } from '../types';
import fileDb from '../fileDb';
import { imagesUpload } from '../multer';



const guestBook = express.Router();
guestBook.get("/", async (req, res) => {
  const allNotes = await fileDb.getItems()
  return res.send(allNotes);
})

guestBook.post("/", imagesUpload.single("image") ,async (req, res) => {
  if(!req.body.note){
    return res.status(400).send({
      error: "the message should not be empty"
    })
  }

  const guestBookNote:IGuestBookNoteMutation = {
    author:req.body.author,
    note: req.body.note,
    image:req.file ? req.file.filename : null,
  }


  const savedNote = await fileDb.addNote(guestBookNote);
  return res.send(savedNote)
})

export default guestBook;
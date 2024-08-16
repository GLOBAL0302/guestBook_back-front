import express from "express";
import { IGuestBookNoteMutation } from '../types';



const guestBook = express.Router();
guestBook.get("/", async (req, res) => {
  res.end("<h1>Guest Book Page</h1>");
})

guestBook.post("/", async (req, res) => {
  if(!req.body.message){
    return res.status(400).send({
      error: "the message should not be empty"
    })
  }

  const guestBookNote:IGuestBookNoteMutation = {
    author:req.body.author,
    note: req.body.message,
    image:req.file ? req.file.filename : null,
  }

})

export default guestBook;
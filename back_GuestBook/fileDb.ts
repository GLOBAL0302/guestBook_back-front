import {promises as fs} from "fs";
import crypto from 'crypto';
import { IGuestBookNoteDB, IGuestBookNoteMutation } from './types';

const fileName = "./db.json";
let data:IGuestBookNoteDB[] = []

const fileDb = {
  async init(){
    try{
      const fileContents = await fs.readFile(fileName);
      data = JSON.parse(fileContents.toString())
    }catch(e){
      data = [];
    }
  },

  async getItems(){
    return data
  },

  async addNote(note:IGuestBookNoteMutation){
    const id = crypto.randomUUID()
    const newNote = {
      id,
      ...note
    }
    data.push(newNote);
    await this.save();
    return newNote;
  },
  async save(){
    return fs.writeFile(fileName, JSON.stringify(data, null, 2))
  }
}

export default fileDb;
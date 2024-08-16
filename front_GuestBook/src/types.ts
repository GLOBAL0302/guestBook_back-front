export interface IGuestBookNoteDB {
  id:string
  author:string
  note:string
  image:string | null
}
export type IGuestBookNoteMutation = Omit<IGuestBookNoteDB, 'id'>
export interface IGuestBookNoteDB {
  id:string
  author:string
  message:string
  image:string | null
}
export type IGuestBookNoteMutation = Omit<IGuestBookNoteDB, 'id'>
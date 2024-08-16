import { IGuestBookNoteMutation } from '../../types.ts';
import { useState } from 'react';
import FileInput from '../../UI/FileInput.tsx';
import { useAppDispatch } from '../../app/hooks.ts';
import { postNote } from './notesThunk.ts';

const initialState:IGuestBookNoteMutation = {
  author:"",
  note:"",
  image:""
}

const PostGuestNote = () => {
  const [noteMutation, setNoteMutation] = useState<IGuestBookNoteMutation>(initialState)

  const dispatch = useAppDispatch()

const inputChangeHandler = (event:React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = event.target;
    setNoteMutation((prevState)=>({
      ...prevState,
        [name]:value
    }));
};

  const fileInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;
    const value = files && files[0] ? files[0] : null;

    setNoteMutation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onClickSubmit = async(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()

    await dispatch(postNote(noteMutation))
  }
  return (
    <div>
      <form onSubmit={onClickSubmit}>
        <div className="form-group">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Author</span>
            <input
              name="author"
              onChange={inputChangeHandler}
              type="text" className="form-control" placeholder="Username" aria-label="Username"
                   aria-describedby="basic-addon1" />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Note</span>
            <input
              name="note"
              onChange={inputChangeHandler}
              type="text" className="form-control" placeholder="Username" aria-label="Username"
                   aria-describedby="basic-addon1" />
          </div>
        </div>
        <div className="form-group">
          <FileInput onChange={fileInputChangeHandler} name="image"/>
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostGuestNote;
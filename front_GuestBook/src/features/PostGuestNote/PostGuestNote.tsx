import { IGuestBookNoteMutation } from '../../types.ts';
import { useState } from 'react';
import FileInput from '../../UI/FileInput.tsx';

const initialState:IGuestBookNoteMutation = {
  author:"",
  note:"",
  image:""
}

const PostGuestNote = () => {
  const [noteMutation, setNoteMutation] = useState<IGuestBookNoteMutation>(initialState)



const inputChangeHandler = (event:React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = event.target;
    setNoteMutation((prevState)=>({
      ...prevState,
        [name]:value
    }));
};
  return (
    <div>
      <form >
        <div className="form-group">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Author</span>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                   aria-describedby="basic-addon1" />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Note</span>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                   aria-describedby="basic-addon1" />
          </div>
        </div>
        <div className="form-group">
          <FileInput onChange={inputChangeHandler} name="image"/>
        </div>
      </form>
    </div>
  );
};

export default PostGuestNote;
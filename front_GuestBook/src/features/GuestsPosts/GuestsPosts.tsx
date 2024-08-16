import { useSelector } from 'react-redux';
import { selectNotes } from '../PostGuestNote/notesSlice.ts';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks.ts';
import { fetchNotes } from '../PostGuestNote/notesThunk.ts';


let myInterval = 0

const GuestsPosts = () => {
  const dispatch = useAppDispatch()
  const posts = useSelector(selectNotes)

  const fetchData = useCallback(async () => {
    myInterval = setInterval(async () => {
      dispatch(fetchNotes())
    }, 5000)
  }, [posts])

  useEffect(() => {
    clearInterval(myInterval)
    void fetchData()
  }, [fetchData]);

  return (
    <div>

    </div>
  );
};

export default GuestsPosts;
import './App.css';
import PostGuestNote from './features/PostGuestNote/PostGuestNote.tsx';
import GuestsPosts from './features/GuestsPosts/GuestsPosts.tsx';
const App = () => {

  return (
    <>
     <div className="container">
       <GuestsPosts/>
       <PostGuestNote/>
     </div>
    </>
  );
};

export default App;

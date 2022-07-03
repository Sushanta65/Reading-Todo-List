import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import BookContextProvider from "./contexts/BookContext";

const App = () => {

  return (
    <div className='navbar w-2/4 m-auto p-3 pb-5 my-5 shadow-md text-center'>
      <BookContextProvider>
        <Navbar/>
        <BookList/>
        <BookForm/>
      </BookContextProvider>
    </div>
  );
};

export default App;

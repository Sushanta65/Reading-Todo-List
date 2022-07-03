import React from 'react';
import { useContext } from 'react';
import { BookContext } from './../contexts/BookContext';
import { useState } from 'react';

const BookForm = () => {
    const {addBook} = useContext(BookContext)
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        addBook(title, author)
        console.log(title, author)
        setTitle("")
        setAuthor("")
    }

    return (
        <div className='bg-red-900 p-3'>
            <h2 className='text-xl pb-3'>Add Book To Your List</h2>
            <form onSubmit={handleSubmit} className='flex flex-col space-y-3 justify-center'>
                <input className='p-2 rounded border-2 focus:outline-none text-gray-600 focus:border-blue-400' type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                <input className='p-2 rounded border-2 focus:outline-none text-gray-600 focus:border-blue-400' type="text" placeholder='Author' value={author} onChange={(e) => setAuthor(e.target.value)}/>
                <button type='submit' className='bg-gray-400 py-2'>Add Book</button>
            </form>
        </div>
    );
};

export default BookForm;
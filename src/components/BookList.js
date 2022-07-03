import React from 'react';
import { BookContext } from './../contexts/BookContext';
import { useContext } from 'react';
import BookDetails from './BookDetails';

const BookList = () => {
    const {books} = useContext(BookContext)
    return books.length? (
        <div >
            <ul className='bg-red-900 mt-5 p-3'>
                {books.map((book) => (<BookDetails book={book} key={book.id}/>))}
            </ul>
        </div>
    ) : (
        <div className='py-5'>
            <p className='bg-red-400 py-2'>No books to read.</p>
        </div>
    )
};

export default BookList;
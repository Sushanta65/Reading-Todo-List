import React from 'react';
import { BookContext } from './../contexts/BookContext';
import { useContext } from 'react';

const BookDetails = ({book}) => {
    const {removeBook} = useContext(BookContext)
    return (
        <>
         <li onClick={() => removeBook(book.id)} className='bg-red-800 p-2 my-5 hover:line-through text-left'>
            <div className='text-xl'>{book.title}</div>
            <code>{book.author}</code>    
        </li>  
        </>
    );
};

export default BookDetails;
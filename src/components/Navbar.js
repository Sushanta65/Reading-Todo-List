import React from 'react';
import { useContext } from 'react';
import { BookContext } from './../contexts/BookContext';

const Navbar = () => {
    const {books } = useContext(BookContext)
    return (
        <div>
            <h3 className='py-3 text-3xl'>Sushanta Books</h3>
            <p>Currently you have {books.length} books to through...</p>
        </div>
    );
};

export default Navbar;
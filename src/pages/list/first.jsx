import React from 'react';
import { useSelector } from 'react-redux';

export default function First() {
    const { bookList } = useSelector(store => store.book);
    return (
        <ul>
            {
                bookList.map(name => (
                    <li key={name}>{name}</li>
                ))
            }
        </ul>
    )
}

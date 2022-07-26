import React from 'react';
import { Outlet, Link } from 'react-router';
import './index.scss';

export default function List() {
    return (
        <div className='list'>
            <p>List</p>
            <div>
                <Link to={'/list/first'} > first </Link>
                <Link to={'/list/second'} > second </Link>
            </div>
            <Outlet />
        </div>
    )
}

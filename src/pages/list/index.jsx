import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import './index.scss';

export default function List() {
    const router = useLocation();
    useEffect(() => {
        console.log(router);
    }, [router])
    return (
        <div className='list'>
            <p>List</p>
            <div>
                <Link to={'/list'} > first </Link>
                <Link to={'/list/second'} > second </Link>
            </div>
            <Outlet />
        </div>
    )
}

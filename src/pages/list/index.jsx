import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getBookList } from '@features/bookSlice';

import './index.scss';

export default function List() {

    const router = useLocation(); // 获取路由信息
    const book = useSelector(store => store.book); // store
    const dispatch = useDispatch(); // dispatch

    useEffect(() => {
        dispatch(getBookList());
    }, []);

    console.log(router);
    console.log(book);

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

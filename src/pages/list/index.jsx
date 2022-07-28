import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';

import { getList } from '@api';
import {
    todoListState,
    todoListFilterState,
    filteredTodoListState
} from '@recoil/list';

import './index.scss';

export default function List() {
    const router = useLocation(); // 获取路由信息

    // 获取数据
    // const [data, setTodoListState] = useRecoilState(todoListState);
    const setTodoList = useSetRecoilState(todoListState);

    useEffect(() => {
        getList().then(res => {
            setTodoList((oldTodoList) => {
                return [
                    ...oldTodoList,
                    ...res,
                    {
                        title: 'extra'
                    }
                ]
            });
        })
    }, []);

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

import React from 'react';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';

import {
    filteredTodoListState,
    todoListFilterState,
} from '@recoil/list';


export default function First() {

    const todoList = useRecoilValue(filteredTodoListState);
    const [filter, setFilter] = useRecoilState(todoListFilterState);

    const updateFilter = ({ target: { value } }) => {
        setFilter(value);
    };

    return (
        <>
            Filter:
            <select value={filter} onChange={updateFilter}>
                <option value="Show All">All</option>
                <option value="Show Completed">Completed</option>
                <option value="Show Uncompleted">Uncompleted</option>
            </select>
            <ul>
                {
                    todoList.map(item => (
                        <li key={item.title}>{item.title}</li>
                    ))
                }
            </ul>
        </>
    )
}

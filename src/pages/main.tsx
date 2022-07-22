import React from 'react';
import Home from './home';

interface MainProps {
    name: string;
    age: number;
}


export default function main(props: MainProps) {
    const { name, age } = props;
    return (
        <div>
            <p> name: {name}</p>
            <p> age: {age}</p>

            <Home
                name='Home'
                age={19}
            />
        </div>
    )
}

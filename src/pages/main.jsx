import React from 'react';

export default function Main(props) {
    const { name, age } = props;
    return (
        <div>
            <p> name: {name}</p>
            <p> age: {age}</p>
        </div>
    )
}

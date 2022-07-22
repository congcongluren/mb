import React from 'react';
import { log } from '@utils/index.ts';

interface HomeProps {
  name: string;
  age: number;
}

export default function Home(props: HomeProps) {
  const { name, age } = props;
  return (
    <div>
      <p> name: {name}</p>
      <p> age: {age}</p>
    </div>
  )
}

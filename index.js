import './src/style/index.scss';
import './src/main';

const f = () => {};

new Promise(() => {});

class Test {}

let list = [f, Test];

console.log(...list); 

Promise.allSettled(['p1, p2, p3']).then(res => console.log(res));
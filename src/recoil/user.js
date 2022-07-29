import { atom } from 'recoil';

export const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: 'cclr', // default value (aka initial value)
});

console.log( textState);
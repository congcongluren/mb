import { INCREMENT, DECREMENT, SETNAME, SETAGE } from '../constants';

// 加法
export function createIncrementAction(data) {
    return { type: INCREMENT, payload: data }
}

// 减法
export function createDecrementAction(data) {
    return { type: DECREMENT, payload: data }
}

// 加法
export function setName(data) {
    return { type: SETNAME, payload: data }
}

// 减法
export function setAge(data) {
    return { type: SETAGE, payload: data }
}
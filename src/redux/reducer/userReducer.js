import { INCREMENT, DECREMENT, SETNAME, SETAGE } from '../constants';

// 初始值
const defaultState = {
    name: 'cclr',
    age: 18
};

export default function userReducer(preState = defaultState, action) {
    const { type, payload } = action
    //根据type决定如何加工数据
    switch (type) {
        case INCREMENT:
            break;
        case DECREMENT:
            break;
        case SETNAME:
            console.log(payload);
            preState.name = payload;
            break;
        case SETAGE:
            preState.age = payload;
            break;
        default:
            return preState
    }

    return {...preState};
}
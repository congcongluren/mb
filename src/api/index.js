export const getList = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = Array.apply(null, {length: 10}).map(()=>({}));
            data = data.map((item, index)=> {
                item.title = index + 'welcome to use cclr!!' + index;
                item.isComplete = Math.random() >= 0.5;
                return item;
            })
            resolve(data);
        }, 500);
    })
}

export const getUserDetail = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject({stat: 1001})
            resolve({
                requestName: name,
                name: 'cclr',
                age: '18',
                address: 'shanghai'
            });
        }, 2000);
    })
}

export const myDBQuery = ({ userID }) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = Array.apply(null, {length: 10}).map((_, i)=>parseInt(i+ ""+Math.random()*10));
            resolve({
                name: 'cclr' + (userID || '未定义'),
                params: userID,
                id: userID,
                friendList: data
            });
        }, 300);
    })
}
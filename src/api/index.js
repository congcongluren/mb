export const getList = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = Array.apply(null, {length: 10}).map(()=>({}));
            data = data.map((item, index)=> {
                item.title = index + 'welcome to use cclr!!' + index;
                return item;
            })
            resolve(data);
        }, 500);
    })
}
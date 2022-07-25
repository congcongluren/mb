let fun = () => {};
new Promise((resolve, reject) => {
    let arr = [11,1,1]
    resolve(arr);
}).then(res => {
    console.log(...res);
})
import { makeObservable, observable, action, autorun } from 'mobx';

class Store {
    count = 1;
    name='cclr';
    setName(name) {
        this.name = name;
    }
    addCount() {
        this.count++
    }
    constructor() {
        makeObservable(this, {
            count: observable,
            name: observable,
            addCount: action,
            setName: action,
        })
        autorun(() => {
            console.log(this.count)
        })
    }
}

const store = new Store();

export default store;
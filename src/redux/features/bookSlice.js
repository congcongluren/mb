import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    bookList: []
};

const getBookListApi = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['金字塔原理', '少有人走的路', '遥远的救世主'])
        }, 1000)
    })
};

// 可以创建一个异步action，通常用于发出异步请求。方法触发的时候会有三种状态：pending（进行中）、fulfilled（成功）、rejected（失败）
export const getBookList = createAsyncThunk('book/getBook',
    async () => {
        const res = await getBookListApi();
        return res;
    }
);

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        loadDataEnd: (state, { payload }) => {
            state.bookList = payload;
        }
    },
    // extraReducers 可以让 slice 处理在别处定义的 actions，
    // 包括由 createAsyncThunk 或其他 slice 生成的 actions 。
    extraReducers(builder) {
        builder
            .addCase(getBookList.pending, (state) => {
                console.log("进行中！")
            })
            .addCase(getBookList.fulfilled, (state, { payload }) => {
                console.log("fulfilled", payload);
                state.bookList = payload
                state.totals = payload.length
            })
            .addCase(getBookList.rejected, (state, err) => {
                console.log("rejected", err)
            });
    }
});


export const { loadDataEnd } = bookSlice.actions;

export default bookSlice.reducer;
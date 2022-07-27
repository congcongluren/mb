import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    movieList: []
};

const getMovieListApi = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([1, 2, 3])
        }, 1000)
    })
};

// 可以创建一个异步action，通常用于发出异步请求。方法触发的时候会有三种状态：pending（进行中）、fulfilled（成功）、rejected（失败）
export const getMovieList = createAsyncThunk('movie/getMovie',
    async () => {
        const res = await getMovieListApi();
        return res;
    }
);

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        loadDataEnd: (state, { payload }) => {
            state.movieList = payload;
        }
    },
    // extraReducers 可以让 slice 处理在别处定义的 actions，
    // 包括由 createAsyncThunk 或其他 slice 生成的 actions 。
    extraReducers(builder) {
        builder
            .addCase(getMovieList.pending, (state) => {
                console.log("进行中！")
            })
            .addCase(getMovieList.fulfilled, (state, { payload }) => {
                console.log("fulfilled", payload);
                state.movieList = payload
                state.totals = payload.length
            })
            .addCase(getMovieList.rejected, (state, err) => {
                console.log("rejected", err)
            });
    }
});


export const { loadDataEnd } = movieSlice.actions;

export default movieSlice.reducer;
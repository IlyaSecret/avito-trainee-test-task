import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SliceCaseReducers } from "@reduxjs/toolkit/dist/createSlice";
import axios from "axios";

const initialState = {
    newsList: [],
    error: " ",
    loaded: false
}

export const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async () => {
    const ids: any[] = await axios
        .get('https://hacker-news.firebaseio.com/v0/newstories.json')
        .then(res => res.data.slice(0, 100));

    const res = await Promise.all(
        ids.map(async i => {
            return await axios
                .get(`https://hacker-news.firebaseio.com/v0/item/${i}.json`)
                .then(res => res.data);
        })
    );
    return res.filter(i => i !== null)
});
    

const newsSlice = createSlice<any, SliceCaseReducers<any>, string>({
    name: "news",
    initialState: initialState,
    reducers: {
        resetState: (payload) => {
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchNews.pending, (state, action) => {
            state.isLoading = true;
        }),
        builder.addCase(fetchNews.fulfilled, (state, action) => {
            state.newsList = action.payload;
            state.loaded = true;
        })
    }

})

export const { resetState } = newsSlice.actions;
export default newsSlice.reducer;
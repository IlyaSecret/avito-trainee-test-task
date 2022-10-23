import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SliceCaseReducers } from "@reduxjs/toolkit/dist/createSlice";
import axios from "axios";
import { BASE_URL } from "../../consts";

const initialState = {
    newsList: [],
    error: " ",
    loaded: false
}

export const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async () => {
    const ids: any[] = await axios
        .get(`${BASE_URL}/newstories.json`)
        .then(res => res.data.slice(0, 100));

    const res = await Promise.all(
        ids.map(async i => {
            return await axios
                .get(`${BASE_URL}/item/${i}.json`)
                .then(res => res.data);
        })
    );
    return res.filter(item => item !== null)
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
            state.loaded = false;
        }),
        builder.addCase(fetchNews.fulfilled, (state, action) => {
            state.newsList = action.payload;
            state.loaded = true;
        })
    }

})

export const { resetState } = newsSlice.actions;
export default newsSlice.reducer;
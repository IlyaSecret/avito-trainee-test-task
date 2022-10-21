import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import { SliceCaseReducers } from '@reduxjs/toolkit/dist/createSlice';

const initialState = {
    items: [],
    loaded: false
}

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
async (kids: any[]) => {
    const res = await Promise.all(
        kids.map(async i => {
            return await axios
                .get(`https://hacker-news.firebaseio.com/v0/item/${i}.json`)
                .then(res => res.data);
        })
    );
    return res.map(i => ({...i, show: false}));
});

const commentsSlice = createSlice<any, SliceCaseReducers<any>, string>({
    name: "comments",
    initialState : initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        return builder.addCase(fetchComments.pending, (state) => {
            state.status = 'loading';
        }),
            builder.addCase(fetchComments.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            }),
            builder.addCase(fetchComments.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
        
})

export default commentsSlice.reducer;
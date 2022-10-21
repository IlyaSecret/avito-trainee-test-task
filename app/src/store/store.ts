import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./news-slice/news-slice";
import commentsReducer from "./comments-slice/comments-slice";
import subCommentsReducer from "./sub-comments-slice/sub-comments-slice"

export const store = configureStore({
    reducer: {
        news: newsReducer,
        comments: commentsReducer,
        subComments: subCommentsReducer
    }
})
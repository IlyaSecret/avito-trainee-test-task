import { Link, useParams } from "react-router-dom";
import AddLinkIcon from '@mui/icons-material/AddLink';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAppSelector, useAppDispatch } from '../../hooks/store';
import { NewsItemType } from "../../types/news-item";
import CommentsList from "../comments-list/comments-list";
import React from "react";
import { fetchComments } from "../../store/comments-slice/comments-slice";
import { Button } from "@mui/material";

export default function NewsItemCard() {
    const { id } = useParams();
    const news = useAppSelector(state => state.news.newsList);
    const dispatch = useAppDispatch()
    const currentNewsItem: NewsItemType = news.find((item: NewsItemType) => item.id === Number(id));
    React.useEffect(() => {
        dispatch(fetchComments(currentNewsItem?.kids))
    }, [])
    return (
        <div className="container">
            <Link to="/" id="news-item__link"><ArrowBackIcon sx={{color: "white", width: "50px", height: "30px"}}></ArrowBackIcon></Link>
            <h1>{currentNewsItem.title}</h1>
            <AddLinkIcon></AddLinkIcon><a href={currentNewsItem.url} target="_blank" id="link">Link to source</a>
            <p><CalendarTodayIcon></CalendarTodayIcon>Date: {new Date(currentNewsItem.time * 1000).toLocaleDateString()}</p>
            <p><AccountBoxIcon></AccountBoxIcon>Author: {currentNewsItem.by}</p>
            <h1>Comments: </h1><Button sx={{mb: "10px"}} variant="contained" onClick={() => dispatch(fetchComments(currentNewsItem?.kids))}>Refresh</Button>
            <CommentsList currentItem={currentNewsItem}></CommentsList>
        </div>
    )
}
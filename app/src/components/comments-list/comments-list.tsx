import React from "react"
import { fetchComments } from "../../store/comments-slice/comments-slice"
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { NewsItemType } from "../../types/news-item";
import { Comment } from '../../types/comment';
import CommentItem from "../comment-item/comment-item";

type CommentsListProps = {
    currentItem : NewsItemType
}

export default function CommentsList({ currentItem }: CommentsListProps) {
    const comments = useAppSelector(state => state.comments.items);
    
    return (
        <div className="container">
            {comments.map((comment: Comment) => <CommentItem key={comment.id} comment={ comment }></CommentItem>)}
        </div>
    )
}
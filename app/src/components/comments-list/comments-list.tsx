
import {useAppSelector } from '../../hooks/store';
import { NewsItemType } from "../../types/news-item";
import { Comment } from '../../types/comment';
import { FadeLoader } from 'react-spinners';
import CommentItem from "../comment-item/comment-item";
import "./comments-list.css";

type CommentsListProps = {
    currentItem : NewsItemType
}

export default function CommentsList({ currentItem }: CommentsListProps) {
    const comments = useAppSelector(state => state.comments.items);
    const isCommentsLoaded = useAppSelector(state => state.comments.loaded);
    
    if (!currentItem.hasOwnProperty("kids")) {
        return <p>There is no comments</p>
    } else {
        return (
            <div className="container comment">
                {isCommentsLoaded ? comments?.map((comment: Comment) => <CommentItem key={comment.id} comment={comment}></CommentItem>) 
                : <FadeLoader style={{position: "absolute"}}/>
            }
            </div>
        )
    }
    
}
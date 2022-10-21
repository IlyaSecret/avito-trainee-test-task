import { Comment } from "../../types/comment"
import ThreePIcon from '@mui/icons-material/ThreeP';
import "./comment-item.css";
import { Divider } from '@mui/material';
import { useState } from "react";
import SubComment from "../sub-comment/sub-comment";
import { useAppSelector } from '../../hooks/store';

type CommentItemProps = {
    comment : Comment
}

export default function CommentItem({ comment }: CommentItemProps) {
    const subComments = useAppSelector(state => state.subComments.items);
    const [isActive, setActive] = useState(false)
    return (
        <div className="comment-item" onClick={() => setActive(!isActive)}>
            <ThreePIcon></ThreePIcon>
            <h3>{comment.by}</h3>
            <p className="comment">{comment.text}</p>
            <Divider variant="middle"></Divider>
            {comment.kids ?
                isActive ? subComments.map((subComment: any) => <SubComment key={subComment.id} comment={ subComment } />) : null
            : null
        }
        </div>
    )
}
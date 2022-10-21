import { Comment } from "../../types/comment"
import ThreePIcon from '@mui/icons-material/ThreeP';
import "./comment-item.css";
import { Divider } from '@mui/material';

type CommentItemProps = {
    comment : Comment
}

export default function CommentItem({comment} : CommentItemProps) {
    return (
        <div className="comment-item">
            <ThreePIcon></ThreePIcon>
            <h3>{comment.by}</h3>
            <p className="comment">{comment.text}</p>
            <Divider variant="middle"></Divider>
        </div>
    )
}
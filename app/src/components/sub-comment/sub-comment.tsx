import { SubCommentType } from "../../types/sub-comments"
type SubComentProps = {
    comment: SubCommentType
}

export default function SubComment({ comment }: SubComentProps) {
    
    return (
        <div className="container">
            <p>{comment.by}</p>
            <p>{comment.text}</p>
        </div>
    )
}
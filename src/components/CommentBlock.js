export function CommentBlock({ comment }) {
    return (
        <div className="comment_block">
            <div className="top">
                <img className="avatar" src={comment.authorImage} alt="" />
                <span className="name">{comment.authorName}</span>
                <span className="date">{comment.created}</span>
            </div>
            <div className="text">
                {comment.text}
            </div>
        </div>
    )
}

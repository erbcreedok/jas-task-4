function CommentTop({ comment }) {
    return (
        <div className="top">
            <img className="avatar" src={comment.author.avatarUrl} alt="" />
            <span className="name">{comment.author.name}</span>
            <span className="date">{comment.created}</span>
        </div>
    )
}

export function CommentBlock({ comment, suffix }) {
    return (
        <div className="comment_block">
            <CommentTop comment={comment} />
            <div className="text">
                {comment.text}
                {suffix}
            </div>
        </div>
    )
}

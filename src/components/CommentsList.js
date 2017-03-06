import React from 'react'

export default (props) => {
    const {article} = props;
    const comments = article.comments;

    if (!comments) {
        return null;
    }

    const commentComponents = comments.map(comment =>
        <li key={comment.id}>
            <h5>{comment.user}</h5>
            <p>{comment.text}</p>
        </li>);

    return (
        <ul>
            {commentComponents}
        </ul>
    )
}
import React from 'react'
import Comment from './Comment'

export default (props) => {
    const {article} = props;
    const comments = article.comments || [];

    const commentComponents = comments.map(comment => <li key={comment.id}><h4>{comment.user}</h4><div>{comment.text}</div></li>);

    return (
        <ul>
            {commentComponents}
        </ul>
    )
}
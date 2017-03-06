import React, {Component} from 'react'
import CommentsList from './CommentsList'

class Article extends Component {

    constructor() {
        super();
        this.state = {
            isOpen: false,
            isCommentOpen: false,
        }
    }

    render() {
        const {article} = this.props;
        const {isOpen} = this.state;
        const {isCommentOpen} = this.state;
        const body = isOpen ? <section>{article.text}</section> : null;
        const switchTitle = isCommentOpen ? 'Hide comment' : 'Show comment';
        const comments = isCommentOpen ? <CommentsList article={article} /> : null;
        const hasComments = article.comments ? <p onClick={this.handleCommentsClick}>{switchTitle}</p> : null;

        return (
            <div>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {body}
                {hasComments}
                {comments}
            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    handleCommentsClick = (ev) => {
        this.setState({
            isCommentOpen: !this.state.isCommentOpen
        })
    }
}

export default Article
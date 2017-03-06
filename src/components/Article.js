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
        const body = isOpen ?
            <section>
                {article.text}
                {this.renderComments()}
            </section> : null;

        return (
            <div>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {body}
            </div>
        )
    }

    renderComments() {
        const {article} = this.props;
        if (!article.comments) {
            return null;
        }

        const {isCommentOpen} = this.state;

        const switchTitle = isCommentOpen ? 'Hide comment' : 'Show comment';

        return <div>
            <p onClick={this.handleCommentsClick}>{switchTitle}</p>
            {isCommentOpen ? <CommentsList article={article} /> : null}
        </div>
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
import React, {Component} from 'react'
import List from './List'

class Article extends Component {

    constructor() {
        super();
        this.state = {
            isOpen: false
        }
    }

    render() {
        const {article} = this.props;
        const comment = article.comments;
        const {isOpen} = this.state;
        const body = isOpen ? <section>{article.text}</section> : null;
        return (
            <div>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {body}
                <List article={article} />
            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article
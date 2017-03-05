import React, {Component} from 'react'

class Comment extends Component {

    constructor() {
        super();
        this.state = {
            isOpen: false
        }
    }

    render() {
        const {comment} = this.props;
        const {isOpen} = this.state;
        const body = isOpen ? <section>{article.text}</section> : null;
        return (
            <div>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                <p></p>{body}
            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Comment
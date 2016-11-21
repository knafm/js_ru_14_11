import React, { Component } from 'react'

class Comment extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }

    render() {
        return (
          <span>
            <b> {this.props.comment.user} </b>
            <p> {this.props.comment.text} </p>
            </span>
        )
    }

    handleClick = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Comment

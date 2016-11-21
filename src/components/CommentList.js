import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false
        }

    }



    render() {
        let commetnsList;
        if (!!this.props.comments){
          commetnsList = this.props.comments.map(comment =>
          <li key={comment.id}>
          <Comment comment={comment}/>
          </li>
        );
      } else {
        commetnsList = <b>no comment</b>;
      }
        return (
            <div>
                <h5 >Commetns: <span onClick = {this.handleClick}>{this.state.isOpen?'close' : 'open'}</span></h5>
                <ul>
                  {this.state.isOpen? commetnsList: ""}
                </ul>
            </div>
        )
    }

    handleClick = ev => {
      ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default CommentList

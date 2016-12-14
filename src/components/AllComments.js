import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { checkAndLoadAllComments } from '../AC/comments'
import Comment from './Comment'
import Loader from './Loader'

class AllComments extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        //from connect
        comments: PropTypes.array.isRequired,
        //from toggleOpen decorator

    }

    static defaultProps = {
        comments: []
    }


    componentWillReceiveProps({  checkAndLoadComments, article}) {
        console.log(`получил пропсы опен  ${article.id}`);
        checkAndLoadAllComments(0,0)
    }


    render() {
      console.log(`опен ${this.props.isOpen}  id${this.props.article.id}`);
        return (
            <div>

                {this.getBody()}
            </div>
        )
    }


    // getButton() {
    //     const { comments, isOpen, toggleOpen } = this.props
    //     if ( !comments.length) return <span>No comments yet</span>
    //     return <a href="#" onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>
    // }

    getBody() {
        const { article, comments, isOpen, addComment } = this.props
                console.log(comments);
        // const commentForm = <NewCommentForm articleId = {article.id} addComment = {addComment} />
        // if (!isOpen || !comments.length) return <div>{commentForm}</div>
        // if (!article.commentsLoaded || article.commentsLoading) return <Loader />
        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <div><ul>{commentItems}</ul></div>
    }
}

export default connect((state, props) => ({
    comments: state.comments.entities
}), { checkAndLoadAllComments })(AllComments)

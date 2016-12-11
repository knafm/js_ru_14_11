import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addComment, loadArticleComments } from '../AC/comments'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import Loader from './Loader'

class CommentList extends Component {
    static propTypes = {
        commentIds: PropTypes.array.isRequired,
        //from connect
        comments: PropTypes.array.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
    }

    static defaultProps = {
        comments: []
    }


    componentWillReceiveProps(nextProps) {
        console.log('---', 'CL receiving props')
    }

    componentWillUpdate() {
        console.log('---', 'CL will update')
    }
    componentDidMount() {
        console.log(`-- CL did mount`);
        const {article} = this.props
        this.props.loadArticleComments(article.id)
    }


    render() {
        return (
            <div>
                {this.getButton()}
                {this.getBody()}
            </div>
        )
    }


    getButton() {
        const { comments, isOpen, toggleOpen, loading} = this.props
        if (loading) return <Loader/>
        if ( !comments.length) return <span>No comments yet</span>
        return <a href="#" onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>
    }

    getBody() {
        const { article, comments, isOpen, addComment } = this.props
        const commentForm = <NewCommentForm articleId = {article.id} addComment = {addComment} />
        if (!isOpen || !comments.length) return <div>{commentForm}</div>
        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <div><ul>{commentItems}</ul>{commentForm}</div>
    }
}

export default connect((state, props) => ({
    //comments: (props.article.comments || []).map(id => state.comments.get(id)),
    article: props.article,
    loading: state.comments.loading,
    comments: state.comments.entities.toArray()
}), { addComment, loadArticleComments  })(toggleOpen(CommentList))
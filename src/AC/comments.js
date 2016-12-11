import { ADD_COMMENT, LOAD_COMMENTS, START,SUCCESS,FAIL } from '../constants'
import jquery from 'jquery'

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {
            articleId, comment
        },
        generateId: true
    }
}

export function loadArticleComments(id) {
    return (dispatch) => {
        dispatch({
            type: LOAD_COMMENTS + START,
            payload: {id}
        })

        setTimeout(() => {
            jquery.get(`/api/comment?article=${id}`)
                .done(response => dispatch({
                    type: LOAD_COMMENTS + SUCCESS,
                    payload: {id, comments: response}
                }))
                .fail(error => dispatch({
                    type: LOAD_COMMENTS + FAIL,
                    payload: {id, error}
                }))
        }, 3000)
    }
}
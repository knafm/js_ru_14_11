import { ADD_COMMENT } from '../constants'

export function addComment(user,text,articleId) {
    return {
        type: ADD_COMMENT,
        payload:{
          user, text, articleId
        }
    }
}

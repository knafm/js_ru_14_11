import { DELETE_ARTICLE } from '../constants'
import { UPDATE_ARTICLE_COMMENTS } from '../constants'

export function deleteArticle(articleId) {
    return {
        type: DELETE_ARTICLE,
        payload: {
            articleId
        }
    }
}

export function updateArticleComments(articleId, commentId) {
  return {
    type: UPDATE_ARTICLE_COMMENTS,
    payload:{
      articleId,
      commentId
    }
  }
}

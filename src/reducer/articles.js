import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, UPDATE_ARTICLE_COMMENTS, ADD_COMMENT } from '../constants'
import { Map } from 'immutable'

const defaultArticles = normalizedArticles.reduce((acc, article)=>{
    return acc.set(article.id, article)
},new Map({}))

export default (articlesState = defaultArticles , action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.filter(article => article.id != payload.articleId)
        case ADD_COMMENT:{
            return articlesState.update(payload.articleId, (value)=>{
            //не мутируй данные! Мы для этого даже immutable завели
              value.comments.push(payload.id);
              return value
            })}
    }

    return articlesState
}

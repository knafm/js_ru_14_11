import {ADD_COMMENT} from '../constants'
import {updateArticleComments} from '../AC/articles'
export default store => next => action => {
    if (action.type === ADD_COMMENT){
        action.payload.id = new Date().getTime();
    }
    next(action);
}

import {ADD_COMMENT} from '../constants'
import {updateArticleComments} from '../AC/articles'
export default store => next => action => {
      //лучше придумать более общий способ; через мидлвару будут проходить все экшины, их стоит делать максимально реюзабельными
    if (action.type === ADD_COMMENT){
        //лучше не мутировать объект
        action.payload.id = new Date().getTime();
    }
    next(action);
}

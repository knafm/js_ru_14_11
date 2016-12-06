import {ADD_COMMENT} from '../constants'
export default store => next => action => {

    if (action.type === ADD_COMMENT){
        console.log('---', 'before add comment: ', store.getState().comments)
        action.payload.id = new Date(milliseconds);
    }
    next(action);
    console.log('---', 'after', store.getState())
}
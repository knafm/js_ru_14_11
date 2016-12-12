import { ADD_COMMENT, LOAD_COMMENTS,START,SUCCESS,FAIL } from '../constants'
import { normalizedComments } from '../fixtures'
import { arrayToMap} from '../utils'
import {Record} from 'immutable'
import {ReducerState} from '../utils'

const CommentModel = Record({
    id: null,
    user: null,
    text: null
})

const defaultComments = arrayToMap([],CommentModel)

const defaultState = new ReducerState({
    entities: defaultComments,
    loading: false,
})


export default (comments = defaultState, action) => {
    const { type, payload, response, error, generatedId } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.set(generatedId, {...payload.comment, id: generatedId})

        case LOAD_COMMENTS + START:
              //здесь не достаточно повесить loading на весь comments, ведь ты для конкрентной статьи загружаешь
            return comments.set('loading', true)

        case LOAD_COMMENTS + SUCCESS:
            //сейчас загружая комменты для одной статьи ты перезатираешь прошлые; используй .mergeIn
            return comments.set('entities',arrayToMap(payload.comments, CommentModel))
                            .set('loading', false)
    }

    return comments
}

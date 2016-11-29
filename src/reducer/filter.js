import * as types from '../constants'

export default (filterState = {from: null,to: null, extra: []}, action) => {
    const { type, payload } = action
console.log('дошло до добавбления');

    switch (type) {
        case types.SET_FILTER_EXTRA: return filterState ={
            extra: filterState.extra.concat(payload),
            from: filterState.from,
            to: filterState.to
          }
        case types.DELETE_FILTER_EXTRA: return filterState ={
            extra: filterState.extra.filter((item)=>{
              item != payload.extra
            }),
            from: filterState.from,
            to: filterState.to
          }
        case types.SET_FILTER_RANGE: return filterState ={
            extra: filterState.extra,
            from: payload.from,
            to: payload.to
          }
    }

    return filterState
}
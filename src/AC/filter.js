import * as types from '../constants'

export function addExtra(extra) {
    return {
        type: types.ADD_FILTER_EXTRA,
        payload: extra
    }
}
export function deleteExtra(extra) {
    return {
        type: types.DELETE_FILTER_EXTRA,
        payload: extra
    }
}
export function setRange(range) {
    return {
        type: types.SET_FILTER_RANGE,
        payload:{
          from: Date.parse(range.from),
          to: Date.parse(range.to),
        }
    }
}

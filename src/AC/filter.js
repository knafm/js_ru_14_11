import * as types from '../constants'

export function toggleExtra(extra) {
    return {
        type: types.TOGGLE_FILTER_EXTRA,
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
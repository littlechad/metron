export const TOGGLE_DATA = 'TOGGLE_DATA'
export const TOGGLE_PARAMS = 'TOGGLE_PARAMS'

const INITIAL_STATE = {
  name: '',
  open: false,
  params: {},
  anchorEl: null,
}

function Toggle(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case TOGGLE_DATA:
      return {
        ...state,
        name: payload.name,
        open: payload.open,
        anchorEl: payload.anchorEl || null,
      }

    case TOGGLE_PARAMS:
      return {
        ...state,
        params: payload.params,
      }

    default:
      return state
  }
}

export function toggleSetData(data) {
  return {
    type: TOGGLE_DATA,
    payload: data,
  }
}

export function toggleSetParams(params) {
  return {
    type: TOGGLE_PARAMS,
    payload: params,
  }
}

export default Toggle

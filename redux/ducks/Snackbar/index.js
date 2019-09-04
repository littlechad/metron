export const SNACKBAR = 'SNACKBAR'
export const SNACKBAR_CLEAN = 'SNACKBAR_CLEAN'
export const SNACKBAR_CLOSE = 'SNACKBAR_CLOSE'

const INITIAL_STATE = {
  open: false,
  message: '',
  variant: 'info',
}

function Snackbar(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case SNACKBAR:
      return {
        open: true,
        message: payload.message,
        variant: payload.variant,
      }
    case SNACKBAR_CLEAN:
      return {
        ...INITIAL_STATE,
      }
    case SNACKBAR_CLOSE:
      return {
        ...state,
        open: false,
      }
    default:
      return state
  }
}

export function snackbar(variant = 'info', message) {
  return ({
    type: SNACKBAR,
    payload: { variant, message },
  })
}

export function snackbarClean() {
  return ({
    type: SNACKBAR_CLEAN,
  })
}

export function snackbarClose() {
  return ({
    type: SNACKBAR_CLOSE,
  })
}

export default Snackbar

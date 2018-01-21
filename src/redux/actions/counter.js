import {
  COUNTER__INCREMENT,
  COUNTER__DECREMENT,
  COUNTER__RESET,
} from '../constants'

export const increment = () => ({
  type: COUNTER__INCREMENT,
})

export const decrement = () => ({
  type: COUNTER__DECREMENT,
})

export const reset = () => dispatch => {
  setTimeout(() => {
    dispatch({
      type: COUNTER__RESET,
    })
  }, 1000)
}

import {
  COUNTER__INCREMENT,
  COUNTER__DECREMENT,
  COUNTER__RESET,
} from '../constants'

const initialState = {
  count: 0,
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case COUNTER__INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      }
    case COUNTER__DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      }
    case COUNTER__RESET:
      return {
        ...state,
        count: 0,
      }
    default:
      return state
  }
}

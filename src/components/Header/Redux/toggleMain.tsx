import * as action from './actions';

const initialState = {
  toggle: false
}

type initialStateType = {
  toggle: boolean
}

export function toggleMain(state = initialState, action: any) {
  switch (action.type) {
    case 'ACTIVE_TOGGLE':
      return {
        ...state,
        toggle: !state.toggle,
      }
    default:
      return state
  }
}

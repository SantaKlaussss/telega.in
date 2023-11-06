import { ActionsHeader, initialStateHeaderType } from '../Types';

export const initialStateHeader = {
  toggle: false,
  isOnlineUsersFetching: false,
  onlineUsers: 0,
  isOnlineUsersError: false,
}

export function header(state: initialStateHeaderType = initialStateHeader, action: any) {
  switch (action.type) {
    case 'ACTIVE_TOGGLE':
      return {
        ...state,
        toggle: !state.toggle,
      }
    case 'FETCH_ONLINE_USERS':
      return {
        ...state,
        isOnlineUsersFetching: true,
        onlineUsers: 0,
        isOnlineUsersError: false,
      }
    case 'ONLINE_SUCCESS':
      return {
        ...state,
        isOnlineUsersFetching: false,
        onlineUsers: action.payload,
        isOnlineUsersError: false,
      }
    case 'ONLINE_ERROR':
      console.log('Errors')
      return {
        ...state,
        isOnlineUsersFetching: false,
        onlineUsers: 0,
        isOnlineUsersError: true,
      }
    default:
      return state
  }
}

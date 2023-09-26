import * as action from './headerActions';

const initialState = {
  toggle: false,
  isOnlineUsersFetching: false,
  onlineUsers: 0,
  isOnlineUsersError: false,
}

type initialStateType = {
  toggle: boolean,
  isOnlineUsersFetching: boolean,
  onlineUsers: number,
  isOnlineUsersError: boolean,
}

export function header(state: initialStateType = initialState, action: any) {
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
    case 'ONLINE__ERROR':
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

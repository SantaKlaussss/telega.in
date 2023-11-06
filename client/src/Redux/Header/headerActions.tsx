import { ACTIVE_TOGGLE_ACTION, FETCH_ONLINE_USERS_ACTION, ONLINE_ERROR_ACTION, ONLINE_SUCCESS_ACTION } from '../Types';
import * as actions from './headerConstants';

export const activeToggleAction = (): ACTIVE_TOGGLE_ACTION => ({ type: actions.ACTIVE_TOGGLE });
export const fetchOnlineUsersRequest = (): FETCH_ONLINE_USERS_ACTION => ({ type: actions.FETCH_ONLINE_USERS });
export const isOnlineUsersSuccessAction = (users: number): ONLINE_SUCCESS_ACTION => ({ type: actions.ONLINE_SUCCESS, payload: users });
export const isOnlineUsersErrorAction = (): ONLINE_ERROR_ACTION => ({ type: actions.ONLINE_ERROR });



export const fetchOnlineUsers = () => (dispatch: any, getState: any, api: any) => {
  dispatch(fetchOnlineUsersRequest());
  return api.getOnlineUsers()
    .then((res: any) => {
      if (res.status === 200) {
        dispatch(isOnlineUsersSuccessAction(res.data.data))
      };
    })
    .catch((err: any) => {
      console.log(err)
      if (err.response.status !== 200) {
        dispatch(isOnlineUsersErrorAction())
      };
    })
}

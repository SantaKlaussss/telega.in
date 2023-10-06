import * as actions from './headerConstants';

export const activeToggleAction = () => ({ type: actions.ACTIVE_TOGGLE });

export const fetchOnlineUsersRequest = () => ({ type: actions.FETCH_ONLINE_USERS });

export const isOnlineUsersSuccessAction = (users: number) => ({ type: actions.ONLINE_SUCCESS, payload: users });

export const isOnlineUsersErrorAction = () => ({ type: actions.ONLINE__ERROR });



export const fetchOnlineUsers = () => (dispatch: any, getState: any, api: any) => {
  dispatch(fetchOnlineUsersRequest());
  return api.getOnlineUsers()
    .then((res: any) => {
      if (res.status === 200) {
        dispatch(isOnlineUsersSuccessAction(res.data.data))
      };
    })
    .catch((err: any) => {
      if (err.response.status !== 200) {
        dispatch(isOnlineUsersErrorAction())
      };
    })
}

import * as actions from './headerConstants';

export const activeToggleAction = () => ({ type: actions.ACTIVE_TOGGLE });

export const fetchOnlineUsersRequest = () => ({ type: actions.FETCH_ONLINE_USERS });

export const isOnlineUsersSuccessAction = (users: number) => ({ type: actions.ONLINE_SUCCESS, payload: users });

export const isOnlineUsersErrorAction = () => ({ type: actions.ONLINE__ERROR });



export const fetchOnlineUsers = () => (dispatch: any, getState: any, api: any) => {
  dispatch(fetchOnlineUsersRequest());

  return api.requestAuth()
    .then((res: any) => {
      (res.status === actions.ONLINE_SUCCESS)
      dispatch(isOnlineUsersSuccessAction(res.data.email));
    })
    .catch((err: any) => {
      (err.response.status === actions.ONLINE__ERROR)
      dispatch(isOnlineUsersErrorAction());
    })
}

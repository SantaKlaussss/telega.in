import * as actions from './catalogConstants';

export const fetchChannelRequest = () => ({ type: actions.FETCH_CHANNELS });
export const channelDataSuccessAction = (channels: any) => ({ type: actions.GET_DATA_SUCCESS, payload: channels });
export const isChannelDataErrorAction = () => ({ type: actions.CHANNELS_ERROR });

export const fetchChannels = () => (dispatch: any, getState: any, api: any) => {
  console.log('я в экшене')
  dispatch(fetchChannelRequest());
  return api.getChannels()
    .then((res: any) => {
      if (res.status === 200) {
        dispatch(channelDataSuccessAction(res.data.data))
      };
    })
    .catch((err: any) => {
      if (err.response.status !== 200) {
        dispatch(isChannelDataErrorAction())
      };
    })
}

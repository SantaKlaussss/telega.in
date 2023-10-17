import * as actions from './catalogConstants';

export const fetchChannelRequest = () => ({ type: actions.FETCH_CHANNELS });
export const channelDataSuccessAction = (channels: any) => ({ type: actions.GET_DATA_SUCCESS, payload: channels });
export const isChannelDataErrorAction = () => ({ type: actions.CHANNELS_ERROR });
export const currentPageAction = (page:number) => ({ type: actions.CURRENT_PAGE, payload: page });

export const fetchChannels = (currentPage:number, pageSize:number) => (dispatch: any, getState: any, api: any) => {
  dispatch(fetchChannelRequest());
  return api.getChannels(currentPage, pageSize)
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
};

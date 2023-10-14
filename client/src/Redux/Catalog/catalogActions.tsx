import { ConsoleSqlOutlined } from '@ant-design/icons';
import * as actions from './catalogConstants';

export const fetchChannelRequest = () => ({ type: actions.FETCH_CHANNELS });

export const channelDataSuccessAction = () => ({ type: actions.GET_DATA_SUCCESS });

export const isChannelDataErrorAction = () => ({ type: actions.CHANEL_ERROR });

export const fetchChannels = () => (dispatch: any, getState: any, api: any) => {
  console.log('asfs')
  dispatch(fetchChannelRequest());
  return api.getChannels()
    .then((res: any) => {
      if (res.status === 200) {
        dispatch(channelDataSuccessAction())
      };
    })
    .catch((err: any) => {
      if (err.response.status !== 200) {
        dispatch(isChannelDataErrorAction())
      };
    })
}

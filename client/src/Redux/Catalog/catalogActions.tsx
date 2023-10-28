import { CHANNELS_ERROR_ACTION, CURRENT_PAGE_ACTION, FETCH_CHANNELS_ACTION, GET_DATA_SUCCESS_ACTION, Sorts, VALUE_SEARCH_ACTION, VALUE_SORT_ACTION, channelType, createAction, pageType } from '../Types';
import * as actions from './catalogConstants';

export const fetchChannelRequest = (): FETCH_CHANNELS_ACTION => {
  return createAction(actions.FETCH_CHANNELS, null);
};
export const channelDataSuccessAction = (channels: channelType): GET_DATA_SUCCESS_ACTION => ({ type: actions.GET_DATA_SUCCESS, payload: channels });
export const isChannelDataErrorAction = (): CHANNELS_ERROR_ACTION => ({ type: actions.CHANNELS_ERROR });
export const currentPageAction = (page: pageType): CURRENT_PAGE_ACTION => ({ type: actions.CURRENT_PAGE, payload: page });
export const valueSearchAction = (valueSearch: string): VALUE_SEARCH_ACTION => ({ type: actions.VALUE_SEARCH, payload: valueSearch });
export const valueSortAction = (type: string, order: Sorts): VALUE_SORT_ACTION => ({ type: actions.VALUE_SORT, payload: {type, order} });

export const fetchChannels = (currentPage:number, pageSize:number) => (dispatch: any, getState: any, api: any) => {
  dispatch(fetchChannelRequest());
  return api.getChannels(currentPage, pageSize)
    .then((res: any) => {

      if (res.status === 200) {
        dispatch(channelDataSuccessAction(res.data.data));
      }
    })
    .catch((err: any) => {
      if (err.response.status !== 200) {
        dispatch(isChannelDataErrorAction())
      };
    })
};

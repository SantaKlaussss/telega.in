import { SortsOrder, SortsType, initialStateChannelsType } from '../Types';

export const initialStateChannels = {
  channels: [],
  pages: [],
  isLoading: false,
  isChannelsError: false,
  currentPage: 1,
  valueSearch: '',
  currentSorting: {
    type: SortsType.price,
    order: SortsOrder.ASC,
  },
}

export function catalog(state: initialStateChannelsType = initialStateChannels, action: any) {
  switch (action.type) {
    case 'FETCH_CHANNELS':
      return {
        ...state,
        channels: [],
        isLoading: true,
        isChannelsError: false
      }
    case 'GET_DATA_SUCCESS':
      return {
        ...state,
        channels: action.payload,
        isLoading: false,
        isChannelsError: false,
      }
    case 'CHANNELS_ERROR':
      return {
        ...state,
        isLoading: false,
        isChannelsError: true,
      }
    case 'CURRENT_PAGE':
      return {
        ...state,
        isLoading: false,
        isChannelsError: false,
        currentPage: action.payload,
      }
    case 'VALUE_SEARCH':
      return {
        ...state,
        valueSearch: action.payload
      }
    case 'VALUE_SORT':
      let sortKey = action.payload;
      let newOrder = SortsOrder.ASC;
      if (sortKey === state.currentSorting.type) {
        newOrder = state.currentSorting.order === SortsOrder.ASC ? SortsOrder.DESC : SortsOrder.ASC;
      }
      return {
        ...state,
        currentSorting: {
          type: action.payload,
          order: newOrder,
        }
      }
    default:
      return state
      }
  }

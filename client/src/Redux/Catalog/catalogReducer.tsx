import { ActionsCatalog, SortsOrder, SortsType, channelType, initialStateChannelsType } from '../Types';

export const initialStateChannels = {
  channels: [],
  pages: [],
  isLoading: false,
  isChannelsError: false,
  currentPage: 2,
  valueSearch: '',
  currentSorting: {
    type: SortsType.rating,
    order: SortsOrder.ASC,
  },
  totalChannels: null,
}

export function catalog(state: initialStateChannelsType = initialStateChannels, action: ActionsCatalog) {
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
      let sortedChannels = [...state.channels];
      const plateType: SortsType = state.currentSorting.type;
      const plateOrder: SortsOrder = state.currentSorting.order;
      let sortKey = action.payload as SortsType;
      let newOrder = SortsOrder.ASC;

      if (sortKey === plateType) {
        newOrder = plateOrder === SortsOrder.ASC ? SortsOrder.DESC : SortsOrder.ASC;
      }

      if (newOrder === SortsOrder.ASC) {
        if (sortKey === 'followers' || sortKey === 'rating') {
          sortedChannels.sort((a: any, b: any) => b[sortKey] - a[sortKey]);
        } else {
          sortedChannels.sort((a: any, b: any) => b.format['1/24'][sortKey] - a.format['1/24'][sortKey]);
        }
      }
      
      if (newOrder === SortsOrder.DESC) {
        if (sortKey === 'followers' || sortKey === 'rating') {
          sortedChannels.sort((a: any, b: any) => a[sortKey] - b[sortKey]);
        } else {
          sortedChannels.sort((a: any, b: any) => a.format['1/24'][sortKey] - b.format['1/24'][sortKey]);
        }
      }
      
      return {
        ...state,
        channels: sortedChannels,
        currentSorting: {
          type: action.payload,
          order: newOrder,
        }
      }
    case 'TOTAL_CHANNELS':
      return {
        ...state,
        totalChannels: action.payload
      }
    default:
      return state
      }
  }

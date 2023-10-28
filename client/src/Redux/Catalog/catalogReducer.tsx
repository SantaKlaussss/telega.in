import { Sorts, initialStateChannelsType } from '../Types';

export const initialStateChannels = {
  channels: [],
  pages: [],
  isLoading: false,
  isChannelsError: false,
  currentPage: 1,
  valueSearch: '',
  cuurentSorting: {
    type: '',
    order: Sorts.ASC,
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
      return {
        ...state,
        cuurentSorting: action.payload
      }
    default:
      return state
  }
}

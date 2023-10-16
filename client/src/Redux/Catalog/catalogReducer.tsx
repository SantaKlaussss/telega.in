import { initialStateChannelsType } from '../Types';
import * as action from './catalogActions';

export const initialStateChannels = {
  channels: [],
  isLoading: false,
  isChannelsError: false,
}

export function catalog(state: initialStateChannelsType = initialStateChannels, action: any) {
  switch (action.type) {
    case 'FETCH_CHANNELS':
      console.log('запрос идет')
      return {
        ...state,
        channels: [],
        isLoading: true,
        isChannelsError: false
      }
    case 'GET_DATA_SUCCESS':
      console.log('запрос успешен')
      return {
        ...state,
        channels: action.payload,
        isLoading: false,
        isChannelsError: false,
      }
    case 'CHANNELS__ERROR':
      console.log('Errors')
      return {
        ...state,
        isLoading: false,
        isChannelsError: true,
      }
    default:
      return state
  }
}

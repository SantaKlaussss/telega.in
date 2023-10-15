import { initialStateChannelsType } from '../Types';
import * as action from './catalogActions';

export const initialStateChannels = {
  channels: {},
  isLoading: false,
  isChannelsError: false,
}

export function catalog(state: initialStateChannelsType = initialStateChannels, action: any) {
  switch (action.type) {
    case 'FETCH_CHANNELS':
      console.log('запрос идет')
      return {
        ...state,
        isLoading: !state.isLoading,
      }
    case 'GET_DATA_SUCCESS':
      console.log('запрос успешен')
      return {
        ...state,
        channels: {
          id: action.payload.id,
          rating: action.payload.rating,
          logo: action.payload.logo,
          name: action.payload.name,
          description: action.payload.description,
          category: action.payload.category,
          feature: {
            sale: action.payload.feature.sale,
            authorFamous: action.payload.feature.authorFamous,
            trust: action.payload.feature.trust
          },
          followers: action.payload.followers,
          format: {
            '1/24': {
              views: action.payload.format['1/24'].views,
              er: action.payload.format['1/24'].er,
              cpv: action.payload.format['1/24'].cpv,
              price: action.payload.format['1/24'].price,
            },
            '2/48': {
              views: action.payload.format['2/48'].views,
              er: action.payload.format['2/48'].er,
              cpv: action.payload.format['2/48'].cpv,
              price: action.payload.format['2/48'].price,
            },
          },
        },
        isLoading: false,
        isChannelsError: false,
      }
    case 'CHANNELS__ERROR':
      console.log('Errors')
      return {
        ...state,
        isChannelsError: true,
      }
    default:
      return state
  }
}

import * as action from './catalogActions';

const initialState = {
  channels: [],
  isLoading: false,
  isChannelsError: false,
}

type initialStateType = typeof initialState;

export function header(state: initialStateType = initialState, action: any) {
  switch (action.type) {
    case 'FETCH_CHANNELS':
      return {
        ...state,
        isLoading: !state.isLoading,
      }
    case 'GET_DATA_SUCCESS':
      return {
        ...state,
        id: action.payload,
        rating: action.payload,
        logo: action.payload,
        name: action.payload,
        description: action.payload,
        feature: {
          sale: action.payload,
          authorFamous: action.payload,
          trust: action.payload
        },
        folowers: action.payload,
        views: action.payload,
        price: {
          oneFolowers: action.payload,
          allPrice: action.payload
        },
        isLoading: false,
        isChannelsError: false,
      }
    case 'ONLINE__ERROR':
      console.log('Errors')
      return {
        ...state,
        isChannelsError: true,
      }
    default:
      return state
  }
}

import rootReducer from ".";
import { CHANNELS_ERROR, CURRENT_PAGE, FETCH_CHANNELS, GET_DATA_SUCCESS, GET_REQUEST, VALUE_SEARCH, VALUE_SORT } from "./Catalog/catalogConstants";
import { ACTIVE_TOGGLE, FETCH_ONLINE_USERS, ONLINE_ERROR, ONLINE_SUCCESS } from "./Header/headerConstants";

// initialStates
export type initialStateChannelsType = {
  channels: Array<[]>,
  pages: Array<[]>,
  isLoading: boolean,
  isChannelsError: boolean,
  currentPage: number,
  valueSearch: string,
  cuurentSorting: {
    type: string,
    order: Sorts,
  }, 
};
export type initialStateHeaderType = {
  toggle: boolean,
  isOnlineUsersFetching: boolean,
  onlineUsers: number,
  isOnlineUsersError: boolean,
};

export type stateType = initialStateChannelsType | initialStateHeaderType;

// типизация карточки канала
export type channelType = {
  id: number,
  rating: number,
  logo: string,
  name: string,
  description: string,
  category: string,
  feature: {
    sale: boolean,
    authorFamous: boolean,
    trust: boolean
  },
  followers: number,
  format: {
    '1/24': {
      views: number,
      er: number,
      cpv: number,
      price: number,
    },
    '2/48': {
      views: number,
      er: number,
      cpv: number,
      price: number,
    },
    '3/72': {
      views: number,
      er: number,
      cpv: number,
      price: number,
    }
  }
}

// типизация Pagination
export type pageType = number;

// типизация Экшенов
export interface Action<T, P> {
  readonly type: T;
  readonly payload?: P | null;
}

export function createAction<T extends string, P>(type: T, payload: P): Action<T, P> {
  return { type, payload };
}

export type ActionsCatalog = GET_DATA_SUCCESS_ACTION | GET_REQUEST_ACTION | CHANNELS_ERROR_ACTION | FETCH_CHANNELS_ACTION | CURRENT_PAGE_ACTION;

export type ActionsHeader =  ACTIVE_TOGGLE_ACTION | FETCH_ONLINE_USERS_ACTION |ONLINE_SUCCESS_ACTION |ONLINE_ERROR_ACTION; 

// типизация констант
export type GET_DATA_SUCCESS_ACTION = Action<typeof GET_DATA_SUCCESS, channelType>;
export type GET_REQUEST_ACTION = Action<typeof GET_REQUEST, void>;
export type CHANNELS_ERROR_ACTION = Action<typeof CHANNELS_ERROR, void>;
export type FETCH_CHANNELS_ACTION = Action<typeof FETCH_CHANNELS, void>;
export type CURRENT_PAGE_ACTION = Action<typeof CURRENT_PAGE, pageType>;
export type VALUE_SEARCH_ACTION = Action<typeof VALUE_SEARCH, string>;
export type VALUE_SORT_ACTION = Action<typeof VALUE_SORT, cuurentSortingType>;

export type ACTIVE_TOGGLE_ACTION = Action<typeof ACTIVE_TOGGLE, void>;
export type FETCH_ONLINE_USERS_ACTION = Action<typeof FETCH_ONLINE_USERS, void>;
export type ONLINE_SUCCESS_ACTION = Action<typeof ONLINE_SUCCESS, number>;
export type ONLINE_ERROR_ACTION = Action<typeof ONLINE_ERROR, void>;

// typing RootReducer
export type RootState = ReturnType<typeof rootReducer>

// Типизация пропсов для текстового Поисковика

export type SearchPropsType = {
  channels: Array<channelType>,
}

// enam для сортировки каналов
export enum Sorts {
  ASC = 'ASC',
  DESC = 'DESC',
} 

export type cuurentSortingType = {
  type: string,
  order: Sorts
}

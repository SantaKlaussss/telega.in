import { RootState, initialStateChannelsType, stateType } from "../Types";

export const fetchChannelsSelector = (state: any) => state.catalog.isLoading;
export const channelsSelector = (state: any) => state.catalog.channels;
export const channelsErrorSelector = (state: any) => state.catalog.isChannelsError;
export const currentPageSelector = (state: any) => state.catalog.currentPage;
export const valueSearchSelector = (state: any) => state.catalog.valueSearch;
export const valueSortSelector = (state: any) => state.catalog.currentSorting;
export const totalChannelsSelector = (state: any) => state.catalog.totalChannels;

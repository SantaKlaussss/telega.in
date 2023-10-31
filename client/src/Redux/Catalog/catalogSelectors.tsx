import { RootState } from "../Types";

export const fetchChannelsSelector = (state: RootState) => state.catalog.isLoading;
export const channelsSelector = (state: RootState) => state.catalog.channels;
export const channelsErrorSelector = (state: RootState) => state.catalog.isChannelsError;
export const currentPageSelector = (state: RootState) => state.catalog.currentPage;
export const valueSearchSelector = (state: RootState) => state.catalog.valueSearch;
export const valueSortSelector = (state: RootState) => state.catalog.currentSorting;

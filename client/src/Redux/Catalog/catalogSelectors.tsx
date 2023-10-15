export const fetchChannelsSelector = (state: any) => state.catalog.isLoading;

export const channelsSelector = (state: any) => state.catalog.channels;

export const channelsErrorSelector = (state: any) => state.catalog.isChannelsError

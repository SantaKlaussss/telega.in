import { SortsOrder, SortsType, channelType } from "../../Redux/Types";

export const filtered = (searchText: string, channels: Array<channelType>) => {
  if (!searchText) return channels;

  return channels.filter(({ name }) => {
    return name.toLowerCase().includes(searchText.toLowerCase())
  })
};

export const sortedChannels = (currentSorting: SortsType, channels: Array<channelType>, order: SortsOrder) => {
  if (order = SortsOrder.ASC) {
    if (currentSorting === 'followers' || currentSorting === 'rating')
      return channels.sort((a, b) => b[currentSorting] - a[currentSorting]);

    return channels.sort((a, b) => b.format['1/24'][currentSorting] - a.format['1/24'][currentSorting]);
  }

  if (currentSorting === 'followers' || currentSorting === 'rating')
    return channels.sort((a, b) => a[currentSorting] - b[currentSorting]);

  return channels.sort((a, b) => a.format['1/24'][currentSorting] - b.format['1/24'][currentSorting]);
};

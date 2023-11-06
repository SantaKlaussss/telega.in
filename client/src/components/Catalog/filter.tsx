import { channelType } from "../../Redux/Types";

export const filtered = (searchText: string, channels: Array<channelType>) => {
  if (!searchText) return channels;

  return channels.filter(({ name }) => {
    return name.toLowerCase().includes(searchText.toLowerCase())
  })
};

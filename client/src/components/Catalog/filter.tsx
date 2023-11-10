import { Channel } from "../../Redux/Types";

export const filtered = (searchText: string, channels: Array<Channel>) => {
  if (!searchText) return channels;

  return channels.filter(({ name }) => {
    return name.toLowerCase().includes(searchText.toLowerCase())
  })
};

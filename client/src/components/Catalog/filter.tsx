import { channelType, cuurentSortingType } from "../../Redux/Types";

export const filtered = (searchText: string, channels: Array<channelType>) => {
  if (!searchText) return channels;

  return channels.filter(({ name }) => {
    return name.toLowerCase().includes(searchText.toLowerCase())
  })
};

export const sortedRating = (currentSorting: keyof channelType, channels: Array<channelType>) => {

  return channels.sort((b, a) => a[currentSorting] - b[currentSorting]);
}

// export const sortedER = (formatType, channels: Array<channelType>) => {
//   return channels.sort((a, b) => b.format[formatType].er - a.format[formatType].er);
// }

// export const sortedView = (viewType, channels: Array<channelType>) => {
//   return channels.sort((a, b) => b.format[viewType].views - a.format[viewType].views);
// }

// export const sortedFollower = (channels: Array<channelType>) => {
//   return channels.sort((a, b) => b.followers - a.followers);
// }

// export const sortedPrice = (priceType, channels: Array<channelType>) => {
//   return channels.sort((a, b) => b.format[priceType].price - a.format[priceType].price);
// }

// export const sortedCPV = (cpvType, channels: Array<channelType>) => {
//   return channels.sort((a, b) => b.format[cpvType].cpv - a.format[cpvType].cpv);
// }

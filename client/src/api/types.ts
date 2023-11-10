import { Channel } from "../Redux/Types";


export interface IApi {
  getOnlineUsers(): Promise<{ data: number }>;
  getChannels(
    currentPage: number,
    pageSize: number,
  ): Promise<{
    data: Array<Channel>,
    totalChannels: number,
  }>;
}

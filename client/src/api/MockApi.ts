import { Channel } from "../Redux/Types";
import { channels } from "./mocks";
import { IApi } from "./types";

export class MockApi implements IApi {
  getOnlineUsers(): Promise<{ data: number; }> {
    return Promise.resolve({ data: 49 })
  }

  getChannels(
    currentPage: number,
    pageSize: number,
  ): Promise<{
    data: Channel[];
    totalChannels: number;
  }> {
    return Promise.resolve({
      data: channels.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize,
      ),
      totalChannels: channels.length,
    })
  }
}

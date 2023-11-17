import axios from "axios";
import { Channel } from "../Redux/Types";
import { IApi } from "./types";

type GetChannelsResponse = {
  data: Array<Channel>;
  totalChannels: number;
}

export class Api implements IApi {
  api = axios.create({
    // FIXME: environment variables
    baseURL: 'http://212.233.120.98:8000',
    timeout: 5000
  })

  getOnlineUsers() {
    return this.api
      .get('/onlineusers', {
        headers: {
          "x-apikey": "API_KEY",
        },
        responseType: "json",
      })
      .then(result => result.data)
  }

  getChannels(
    currentPage: number,
    pageSize: number,
  ): Promise<{
    data: Array<Channel>,
    totalChannels: number,
  }> {
    return this.api
      .get<GetChannelsResponse>(
        `/channels`,
        {
          headers: {
            "x-apikey": "API_KEY",
          },
          responseType: "json",
          params: {
            page: currentPage,
            pageSize,
          },
        },
      )
      .then(result => ({
        data: result.data.data,
        totalChannels: result.data.totalChannels,
      }))
  }
};

import axios from "axios";

export class Api {
  api = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 5000
  });

  getOnlineUsers() {
    return this.api.get('/onlineusers', {
      headers: {
        "x-apikey": "API_KEY",
      },
      responseType: "json",
    })
  };
  
  getChannels(currentPage: number, pageSize: number) {
    return this.api.get(`/channels?page=${currentPage}&pageSize=${pageSize}`, {
      headers: {
        "x-apikey": "API_KEY",
      },
      responseType: "json",
    })
  };

  getPages() {
    return this.api.get('/pages', {
      headers: {
        "x-apikey": "API_KEY",
      },
      responseType: "json",
    })
  };
}

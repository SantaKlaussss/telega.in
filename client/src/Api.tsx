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
}

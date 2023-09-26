import axios from "axios";

export class Api {
  api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 5000,
    withCredentials: true
  });

  getOnlineUsers = () => this.api.get('/posts/1/comments');
}

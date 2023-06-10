import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  withCredentials: false,
  headers: {
    Accept:
      'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getPhotos() {
    return api.get('/photos')
  }
}
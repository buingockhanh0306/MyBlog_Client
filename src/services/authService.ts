import axiosClient from '@src/config/axiosConfig';

interface IAuthService{
    username: string,
    password: string
}
export default class AuthService {
  async login (data: IAuthService) {
    return axiosClient.post('/auth', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

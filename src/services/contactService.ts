import axiosClient from '@src/config/axiosConfig';
import { contactProps } from '@src/types/contact';

export default class ContactService {
  async get () {
    return axiosClient.get('/contact');
  }

  async creat (data: contactProps) {
    return axiosClient.post('/contact', data);
  }

  async delete (slug: string) {
    return axiosClient.delete(`./contact/${slug}`);
  }

  async update (slug: string, data: contactProps) {
    return axiosClient.patch(`./admin/${slug}`, data);
  }
}

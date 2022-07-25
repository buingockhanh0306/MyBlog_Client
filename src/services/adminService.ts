import axiosClient from "@src/config/axiosConfig";
import {IFormValue} from "@src/hook/useFormLogin";


export default class AuthService{
    async get(){
        return axiosClient.get('/admin')
    }

    async creat(data: IFormValue){
        return axiosClient.post('./admin', data)
    }

    async delete(username: string){
        return axiosClient.delete(`./admin/${username}`)
    }

    async update(username: string, data: IFormValue){
        return axiosClient.patch(`./admin/${username}`, data)
    }
}
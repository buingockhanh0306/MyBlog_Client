import axiosClient from "@src/config/axiosConfig";

interface ICategory{
    name:string,
    slug: string
}

export default class CategoryService{
    async get(page: number){
        return axiosClient.get(`/categories?page=${page}`,{
            //Nếu page = 0  sẽ trả về tất cả danh mục
            headers: {
                "Content-Type": "application/json",
            },
        })
    }
    async getDetail(slug: string){
        return axiosClient.get(`/categories/${slug}`,{
            headers: {
                "Content-Type": "application/json",
            },
        })
    }
    async delete(slug: string){
        return axiosClient.delete(`/categories/${slug}`,{
            headers: {
                "Content-Type": "application/json",
            },
        })
    }

    async update(slug: string, data: ICategory){
        return axiosClient.patch(`/categories/${slug}`, data,{
            headers: {
                "Content-Type": "application/json",
            },
        })
    }

    async post(data: ICategory){
        return axiosClient.post('/categories', data,{
            headers: {
                "Content-Type": "application/json",
            },
        })
    }
}
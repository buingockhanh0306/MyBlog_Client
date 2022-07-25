import axiosClient from "@src/config/axiosConfig";

interface IPost{
    title: string,
    slug: string,
    description: string,
    content: string,
    thumbnail: string,
    updatedAt?: string
}

export default class PostService{
    async get(currentPage: number = 1){
        return axiosClient.get(`/posts?page=${currentPage}`,{
            headers: {
                "Content-Type": "application/json",
            },
        })
    }
    async getDetail(slug: string){
        return axiosClient.get(`/posts/${slug}`,{
            headers: {
                "Content-Type": "application/json",
            },
        })
    }
    async delete(slug: string){
        return axiosClient.delete(`/posts/${slug}`,{
            headers: {
                "Content-Type": "application/json",
            },
        })
    }

    async update(slug: string, data: IPost){
        return axiosClient.patch(`/posts/${slug}`, data,{
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
    }

    async post(data: IPost){
        return axiosClient.post('/posts', data,{
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
    }
}
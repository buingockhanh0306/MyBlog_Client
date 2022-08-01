export interface IPostProps{
    posts?:{
        title: string,
        slug: string,
        description: string,
        content: string,
        thumbnail: string,
        updatedAt?: string,
        categoryId: string,
        categoryName: string
    }[],
    post?:{
        title: string,
        slug: string,
        description: string,
        content: string,
        thumbnail: string,
        updatedAt?: string,
        categoryId: string,
        categoryName: string
    }
}

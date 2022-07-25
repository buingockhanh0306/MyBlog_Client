
export interface ICategoryProps {
    categories:{
        name: string,
        slug: string,
        updatedAt: string
    }[],
    onDelete: (slug: string)=>void,
    onEdit: (slug: string)=>void
}
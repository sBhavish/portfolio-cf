export interface Blogs {
    page: number
    perPage: number
    totalItems: number
    totalPages: number
    items: Item[]
}

export interface Item {
    collectionId: string
    collectionName: string
    created: string
    heroImage: string
    featured: boolean
    released: boolean
    id: string
    markupContent: string
    title: string
    updated: string
}
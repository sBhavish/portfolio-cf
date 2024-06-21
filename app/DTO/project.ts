export interface Projects {
    page: number
    perPage: number
    totalItems: number
    totalPages: number
    items: Item[]
}

export interface Item {
    boldMark: string
    collectionId: string
    collectionName: string
    created: string
    heroImage: string
    id: string
    todo: boolean
    markup: string
    projectName: string
    projectYear: string
    sideNote: string
    tag: string
    updated: string
}

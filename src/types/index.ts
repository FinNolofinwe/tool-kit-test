export interface IRepo {
    name: string
    id: string
    stargazerCount: number
    url: string
    owner: {
        avatarUrl: string | null
        login: string
        url: string
    }
    defaultBranchRef?: {
        target: {
            history: {
                nodes: {
                    committedDate: string
                }[]
            }
        }
    }
    languages: {
        nodes: {
            color: string
            name: string
        }[]
    }
    description: string
}


export interface IResponse {
    id: string
    login: string
    repositories: {
        totalCount: number | null
        nodes: IRepo[]
    }
}

export interface IQuery {
    viewer: IResponse
}


export interface INode {
    node: IRepo
}

export interface ICurrentRepo {
    repository: IRepo
}

export interface ISearchData {
    repositoryCount: number | null
    edges: {
        node: INode
    }[]
}

export interface ISearchResult {
    search: ISearchData
}


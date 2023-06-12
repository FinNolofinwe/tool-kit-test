import { useQuery } from '@apollo/client';
import { GET_VIEWER, GET_SEARCH_RESULT, GET_REPO } from '../queries';
import { IQuery, ISearchResult, ICurrentRepo } from '../types';

interface ISearchParams {
    query: string | null
    count: number
    before?: string | null
    after?: string | null
}

export function useAccountQuery(query: string | null, count: number) {
    return useQuery<IQuery, ISearchParams>(GET_VIEWER, {
        variables: { query, count }
    });
}

export function useSearchQuery(query: string | null, count: number) {
    return useQuery<ISearchResult,  ISearchParams>(GET_SEARCH_RESULT, {
        variables: { query, count }
    })
}

export function useRepoQuery(owner: string, name: string) {
    return useQuery<ICurrentRepo>(GET_REPO, {
        variables: { owner, name}
    });
}

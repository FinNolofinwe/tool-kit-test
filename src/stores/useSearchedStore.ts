import { create } from 'zustand'
import { IRepo } from '../types/index';

interface ISearchedStore {
    nodes: IRepo[] | null
    totalCount: number | null
    setSearchedData: (data: Partial<ISearchedStore>) => void
}

export const useSearchedStore = create<ISearchedStore>((set) => ({
    nodes: null,
    totalCount: null,
    setSearchedData: ({ nodes, totalCount }) => 
                set({ nodes, totalCount }),
}));

// const searchedSub = useSearchedStore.subscribe((newState) => console.log(newState))
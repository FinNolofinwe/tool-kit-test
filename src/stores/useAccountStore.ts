import { create } from 'zustand'
import { IRepo } from '../types/index';

interface IAccountStore {
    repos: IRepo[] | null
    id?: string | null
    login?: string | null
    totalCount: number | null
    setAccountData: (data: Partial<IAccountStore>) => void
}

export const useAccountStore = create<IAccountStore>((set) => ({
    repos: null,
    id: null,
    login: null,
    totalCount: null,
    setAccountData: ({repos, id, login, totalCount}) => 
                set({ repos, id, login, totalCount})
}));

// const accSub = useAccountStore.subscribe((newState) => console.log(newState))
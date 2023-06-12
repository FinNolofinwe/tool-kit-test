import { create } from 'zustand'
import { IRepo } from '../types/index';

interface IRepositoryStore {
    repository: IRepo | null
    setRepository: (repository: IRepo) => void
}

export const useRepositoryStore = create<IRepositoryStore>((set) => ({
    repository: null,
    setRepository: (newRepository) => set({ repository: newRepository })
}));

// const accSub = useRepositoryStore.subscribe((newState) => console.log(newState))
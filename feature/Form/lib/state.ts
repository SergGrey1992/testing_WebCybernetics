import { create } from 'zustand'

type UseStoreType = {
    isOpen: boolean
    toggle: () => void
}

export const useStore = create<UseStoreType>((set) => ({
    isOpen: false,
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}))

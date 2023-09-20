import {create} from 'zustand'

interface usePrizesModalStore {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const usePrizesModal = create<usePrizesModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))
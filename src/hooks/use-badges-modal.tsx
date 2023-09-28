import {create} from 'zustand'

interface useBadgesModalStore {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const useBadgesModal = create<useBadgesModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))
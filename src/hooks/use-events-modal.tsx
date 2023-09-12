import {create} from 'zustand'

interface useEventsModalStore {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const useEventsModal = create<useEventsModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))
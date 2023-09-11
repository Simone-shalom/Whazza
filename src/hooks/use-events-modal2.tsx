import {create} from 'zustand'

interface useEventsModal2Store {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const useEventsModal2 = create<useEventsModal2Store>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))
import {create} from 'zustand'

interface useLeaderboardModalStore {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const useLeaderboardModal = create<useLeaderboardModalStore>((set) => ({
    isOpen: true,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))
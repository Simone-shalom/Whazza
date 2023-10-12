

import {create} from 'zustand'

interface useConfettiStore{
    showConfetti: boolean
    onOpen: () => void
    onClose: () => void
}

export const useConfetti = create<useConfettiStore>((set) => ({
    showConfetti: false,
    onOpen: () => set({showConfetti: true}),
    onClose: () => set({showConfetti: false})
}))
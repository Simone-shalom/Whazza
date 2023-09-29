// badgeStore.ts
import { Badge } from '@prisma/client';
import {create} from 'zustand';

interface BadgeStore {
  selectedBadge: Badge | null;
  setSelectedBadge: (badge: Badge | null) => void;
}

const useBadgeStore = create<BadgeStore>((set) => ({
  selectedBadge: null,
  setSelectedBadge: (badge) => set({ selectedBadge: badge }),
}));

export default useBadgeStore;

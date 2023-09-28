'use client'

import { Button } from './ui/button'
import toast from 'react-hot-toast'
import { useBadgesModal } from '@/hooks/use-badges-modal'


interface BadgesButtonProps {
  sub?: boolean
}

const BadgesButton = ({sub}: BadgesButtonProps) => {


    const badgesModal = useBadgesModal()
    const handleClick = () => {
      if (sub) {
        badgesModal.onOpen();
      } else {
        toast.error("choosing badges only for subscribed users");
      }
    };
  
    return (
      <Button onClick={handleClick}>
        Choose badge
      </Button>
    );
  };

export default BadgesButton
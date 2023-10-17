'use client'
import { usePrizesModal } from '@/hooks/use-prizes-modal'
import { Button } from './ui/button'
import toast from 'react-hot-toast'


interface PrizesButtonProps {
  sub?: boolean
}

const PrizesButton = ({sub}: PrizesButtonProps) => {


    const prizesModal = usePrizesModal()
    const handleClick = () => {
      if (sub) {
        prizesModal.onOpen();
      } else {
        toast.error("Only for subscribed users");
      }
    };
  
    return (
      <Button data-testid="PrizesButton" onClick={handleClick} variant='outline'>
        Collect prizes
      </Button>
    );
  };

export default PrizesButton
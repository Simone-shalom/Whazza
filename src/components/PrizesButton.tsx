'use client'
import { usePrizesModal } from '@/hooks/use-prizes-modal'
import { Button } from './ui/button'

const PrizesButton = () => {


    const prizesModal = usePrizesModal()

  return (
    <Button 
        onClick={prizesModal.onOpen}>
            Collect prizes
    </Button>
  )
}

export default PrizesButton
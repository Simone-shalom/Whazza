'use client'

import { useConfetti } from '@/hooks/use-confetti';
import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const ConfettiAnimation = () => {

  const useConfeti = useConfetti()

  useEffect(() => {
    // Set showConfetti to false after 500ms
    const timeoutId = setTimeout(() => {
      useConfeti.onClose();
    }, 3000);

    return () => clearTimeout(timeoutId); // Clear the timeout if the component unmounts
  }, [useConfeti]);

  return (
    <div>
      {useConfeti.showConfetti && (
        <Confetti
          width={1000}
          height={500}
        />
      )}
    </div>
  );
}
export default ConfettiAnimation;

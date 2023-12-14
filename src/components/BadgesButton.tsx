"use client";

import { Button } from "./ui/button";
import toast from "react-hot-toast";
import { useBadgesModal } from "@/hooks/use-badges-modal";

interface BadgesButtonProps {
  sub?: boolean;
}

const BadgesButton = ({ sub }: BadgesButtonProps) => {
  const badgesModal = useBadgesModal();
  const handleClick = () => {
    if (sub) {
      badgesModal.onOpen();
    } else {
      toast.error("Only for subscribed users");
    }
  };

  return (
    <Button
      onClick={handleClick}
      variant="outline"
      className="hover:scale-110 transition duration-500 border-orange-500 "
    >
      Choose badge
    </Button>
  );
};

export default BadgesButton;

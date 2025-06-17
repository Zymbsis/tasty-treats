"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useDisclosure } from "@heroui/react";
import Modal from "@/components/modal/modal";

const RecipeModal = ({ children }: { children: ReactNode }) => {
  const { onOpenChange } = useDisclosure();
  const { back } = useRouter();

  return (
    <Modal isOpen onClose={back} onOpenChange={onOpenChange}>
      {children}
    </Modal>
  );
};

export default RecipeModal;

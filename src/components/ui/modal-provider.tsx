import { Modal, ModalContent, useDisclosure } from "@heroui/react";
import { createContext, ReactNode, useState } from "react";

export const ModalContext = createContext<{
  onModalOpen: (payload: ReactNode) => void;
}>({
  onModalOpen: () => {},
});

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const onModalOpen = (payload: ReactNode) => {
    onOpen();
    setModalContent(payload);
  };

  return (
    <ModalContext value={{ onModalOpen }}>
      {children}
      {modalContent && (
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          scrollBehavior="inside"
          placement="center"
          classNames={{
            base: "max-w-none w-[335px] md:w-[531px] pl-5 pr-3 py-10 md:p-8 md:pt-10 md:pr-6 bg-background",
            body: "p-0 gap-0 custom-scrollbar pr-2",
            footer:
              "p-0 pt-8 justify-center md:justify-start gap-3.5 md:gap-4 h-[73px] md:h-[77px] shrink-0 pr-2",
            closeButton:
              "p-0 hover:bg-transparent hover:text-accent active:bg-transparent top-3.5 right-3.5 [&>svg]:size-5 cursor-pointer",
          }}
        >
          <ModalContent>{modalContent}</ModalContent>
        </Modal>
      )}
    </ModalContext>
  );
};

export default ModalProvider;

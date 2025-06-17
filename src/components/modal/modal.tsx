import {
  cn,
  Modal as HeroModal,
  ModalContent,
  ModalProps,
} from "@heroui/react";

const Modal = ({ className, ...props }: ModalProps) => {
  return (
    <HeroModal
      scrollBehavior="inside"
      placement="center"
      className={cn(
        "bg-background w-[335px] max-w-none py-10 pr-3 pl-5 md:w-[531px] md:p-8 md:pt-10 md:pr-6",
        className,
      )}
      classNames={{
        body: "p-0 gap-0 custom-scrollbar pr-2",
        header: "p-0",
        footer:
          "p-0 pt-8 justify-center md:justify-start gap-3.5 md:gap-4 h-[73px] md:h-[77px] shrink-0 pr-2",
        closeButton:
          "p-0 hover:bg-transparent hover:text-accent active:bg-transparent top-3.5 right-3.5 [&>svg]:size-5 cursor-pointer",
      }}
      {...props}
    >
      <ModalContent>{props.children}</ModalContent>
    </HeroModal>
  );
};

export default Modal;

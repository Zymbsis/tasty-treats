import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";

const RecipeFooter = ({
  handleToggleToFavorite,
  favoriteButtonTitle,
}: {
  handleToggleToFavorite: () => void;
  favoriteButtonTitle: string;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <ModalFooter>
        <Button
          onPress={handleToggleToFavorite}
          variant="solid"
          color="primary"
          className="h-full w-[200px] px-6 font-medium md:px-7"
        >
          {favoriteButtonTitle}
        </Button>
        <Button
          onPress={onOpen}
          variant="bordered"
          color="primary"
          className="text-foreground h-full px-6 font-medium md:px-7"
        >
          Give a rating
        </Button>
      </ModalFooter>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <div></div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RecipeFooter;

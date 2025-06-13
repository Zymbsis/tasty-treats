import ToggleFavoriteButton from "@/components/recipes/toggle-favorite-button";
import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";

const RecipeFooter = ({ _id }: { _id: string }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <ModalFooter>
        <ToggleFavoriteButton _id={_id} isIconOnly={false} />
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

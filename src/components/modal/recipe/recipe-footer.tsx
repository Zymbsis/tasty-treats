"use client";

import Modal from "@/components/modal/modal";
import RatingForm from "@/components/modal/rating/rating-form";
import ToggleToFavoriteButton from "@/components/ui/toggle-to-favorite-button";
import { Button, ModalFooter, useDisclosure } from "@heroui/react";

const RecipeFooter = ({ _id }: { _id: string }) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <>
      <ModalFooter>
        <ToggleToFavoriteButton
          id={_id}
          color="primary"
          variant="solid"
          startContent={null}
          className="h-full w-[200px] px-6 font-medium md:px-7"
        />
        <Button
          onPress={onOpen}
          variant="bordered"
          color="primary"
          className="text-foreground h-full px-6 font-medium md:px-7"
        >
          Give a rating
        </Button>
      </ModalFooter>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="md:w-[424px]"
      >
        <RatingForm id={_id} handleCloseModal={onClose} />
      </Modal>
    </>
  );
};

export default RecipeFooter;

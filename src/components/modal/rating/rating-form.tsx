"use client";

import Input from "@/components/ui/input";
import { addRating } from "@/lib/services/actions";
import { Button, ModalBody, ModalFooter, ModalHeader } from "@heroui/react";
import { useActionState } from "react";

export type ActionState = {
  value: {
    rating: string;
    email: string;
    submission: string;
  };
  error: {
    rating: string;
    email: string;
    submission: string;
  };
};

const FORM_ID = "rating-form";
const INITIAL_STATE: ActionState = {
  value: { rating: "", email: "", submission: "" },
  error: { rating: "", email: "", submission: "" },
};

interface RatingFormProps {
  id: string;
  handleCloseModal: () => void;
}

const RatingForm = ({ id, handleCloseModal }: RatingFormProps) => {
  const action = (state: ActionState, formData: FormData) =>
    addRating(state, formData, id);

  const [state, formAction] = useActionState(action, INITIAL_STATE);

  if (state.value.submission) {
    handleCloseModal();
  }

  return (
    <>
      <ModalHeader className="text-foreground mb-1 text-sm/4.5 font-semibold">
        Rating
      </ModalHeader>
      <ModalBody className="mb-3.5 md:mb-4">
        <form action={formAction} id={FORM_ID} method="PATCH">
          <div className="space-y-4">
            <div>
              <Input
                placeholder="Enter rating"
                name="rating"
                defaultValue={state.value.rating}
                aria-invalid={!!state.error.rating}
                aria-describedby={
                  state.error.rating ? "rating-error" : undefined
                }
              />
              {state.error.rating && (
                <p id="rating-error" className="mt-1 text-sm text-red-500">
                  {state.error.rating}
                </p>
              )}
            </div>
            <div>
              <Input
                placeholder="Enter email"
                name="email"
                type="email"
                defaultValue={state.value.email}
                aria-invalid={!!state.error.email}
                aria-describedby={state.error.email ? "email-error" : undefined}
              />
              {state.error.email && (
                <p id="email-error" className="mt-1 text-sm text-red-500">
                  {state.error.email}
                </p>
              )}
            </div>
          </div>
        </form>
      </ModalBody>
      <ModalFooter className="h-auto pt-0">
        <Button
          className="h-[46px] w-full font-medium md:h-12"
          color="primary"
          disableRipple
          form={FORM_ID}
          type="submit"
        >
          Send
        </Button>
      </ModalFooter>
    </>
  );
};

export default RatingForm;

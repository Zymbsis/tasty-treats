"use server";

import { ActionState } from "@/components/modal/rating/rating-form";
import { BASE_URL } from "@/lib/services/api";

interface ValidationResult {
  isValid: boolean;
  errors: {
    rating?: string;
    email?: string;
  };
}

const validateRatingForm = (
  rating: FormDataEntryValue | null,
  email: FormDataEntryValue | null,
): ValidationResult => {
  const errors: { rating?: string; email?: string } = {};

  if (!rating) {
    errors.rating = "Can not be empty";
  }

  if (!email) {
    errors.email = "Can not be empty";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

const createActionState = (
  rating: string,
  email: string,
  submission: string,
  errors: { rating: string; email: string; submission: string },
): ActionState => ({
  value: { rating, email, submission },
  error: errors,
});

export const addRating = async (
  prevState: ActionState,
  formData: FormData,
  id: string,
): Promise<ActionState> => {
  const rating = formData.get("rating");
  const email = formData.get("email");

  const validation = validateRatingForm(rating, email);
  if (!validation.isValid) {
    return {
      ...prevState,
      error: { ...prevState.error, ...validation.errors },
    };
  }

  try {
    const res = await fetch(`${BASE_URL}/recipe/${id}/rating`, {
      method: "PATCH",
      body: JSON.stringify({ rating, email }),
    });
    console.log(res);

    if (!res.ok) {
      return createActionState(rating as string, email as string, "", {
        rating: "",
        email: "",
        submission: "Something went wrong",
      });
    }

    return createActionState("", "", "Success", {
      rating: "",
      email: "",
      submission: "",
    });
  } catch (error) {
    console.error("Rating submission error:", error);
    return createActionState(rating as string, email as string, "", {
      rating: "",
      email: "",
      submission: "Something went wrong. Try again later",
    });
  }
};

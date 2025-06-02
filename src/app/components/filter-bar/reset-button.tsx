import { Button } from "@app/components/ui/button";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ComponentPropsWithRef } from "react";

const ResetButton = ({ ...props }: ComponentPropsWithRef<typeof Button>) => {
  return (
    <Button
      disableRipple
      className="absolute right-0 bottom-0 h-4 justify-end gap-1 p-0 text-xs/4 font-medium"
      variant="light"
      color="secondary"
      startContent={
        <XMarkIcon className="group-data-[hover=true]:text-accent group-data-[pressed=true]:text-accent size-4" />
      }
      {...props}
    >
      Reset the filter
    </Button>
  );
};

export default ResetButton;

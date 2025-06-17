import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import {
  Button,
  Pagination as HeroPagination,
  PaginationProps,
} from "@heroui/react";

const Pagination = ({
  handleSetPage,
  ...props
}: {
  handleSetPage: (page: number) => void;
} & PaginationProps) => {
  return (
    <div className="animate-fade-in flex items-center justify-center gap-1 md:gap-2">
      <Button
        isIconOnly
        radius="full"
        onPress={() => handleSetPage(1)}
        disabled={props.page === 1}
        className="disabled:bg-slide bg-accent text-secondary-foreground disabled:text-secondary-foreground/50 size-10 disabled:cursor-auto disabled:data-[hover=true]:opacity-100 disabled:data-[pressed=true]:scale-100 md:size-11"
      >
        <ChevronDoubleLeftIcon className="h-5 w-5 md:h-6 md:w-6" />
      </Button>
      <HeroPagination
        showControls
        onChange={handleSetPage}
        boundaries={0}
        radius="full"
        classNames={{
          wrapper:
            "gap-2 md:gap-2.5 *:w-10 *:h-10 *:md:w-11 *:md:h-11 *:border *:border-foreground/30 *:cursor-pointer",
          base: "px-0 m-0",
          item: "[&[data-hover=true]:not([data-active=true])]:bg-background [&[data-hover=true]:not([data-active=true])]:border-accent text-foreground/50 text-lg/5.5 data-[hover=true]:data-[active=true]:cursor-auto",
          cursor: "border-none text-lg/5.5",
          prev: "mr-1.5 md:mr-3.5 text-xl md:text-2xl data-[disabled=true]:bg-slide text-secondary-foreground data-[disabled=true]:text-secondary-foreground/50 bg-accent [&[data-hover=true]:not([data-active=true])]:bg-accent [&[data-hover=true]:not([data-active=true])]:opacity-hover border-none",
          next: "ml-1.5 md:ml-3.5 text-xl md:text-2xl data-[disabled=true]:bg-slide text-secondary-foreground data-[disabled=true]:text-secondary-foreground/50 bg-accent [&[data-hover=true]:not([data-active=true])]:bg-accent [&[data-hover=true]:not([data-active=true])]:opacity-hover border-none",
          ellipsis: "text-foreground/50 text-xl/5.5",
          chevronNext: "text-xl/5.5",
          forwardIcon: "text-foreground/50 text-xl/5.5",
        }}
        {...props}
      />
      <Button
        isIconOnly
        radius="full"
        onPress={() => handleSetPage(props.total)}
        disabled={props.page === props.total}
        className="disabled:bg-slide bg-accent text-secondary-foreground disabled:text-secondary-foreground/50 size-10 disabled:cursor-auto disabled:data-[hover=true]:opacity-100 disabled:data-[pressed=true]:scale-100 md:size-11"
      >
        <ChevronDoubleRightIcon className="h-5 w-5 md:h-6 md:w-6" />
      </Button>
    </div>
  );
};

export default Pagination;

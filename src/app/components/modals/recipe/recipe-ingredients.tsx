import {
  FullRecipeIngredient,
  RecipeIngredient,
} from "@app/lib/types/api.types";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";

const columns = [
  { key: "name", label: "Name" },
  { key: "measure", label: "Measure" },
];

const RecipeIngredients = ({
  ingredients,
}: {
  ingredients: FullRecipeIngredient[];
}) => {
  return (
    <Table
      radius="none"
      hideHeader
      removeWrapper
      aria-label="Example static collection table"
      classNames={{
        tr: "p-0 border-b-1 border-foreground/10",
        td: "px-0 pb-2 pt-3.5 md:pt-2.5 last-of-type:text-foreground/50 last-of-type:text-end text-sm/4.5",
      }}
    >
      <TableHeader columns={columns}>
        {column => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={ingredients}>
        {item => (
          <TableRow key={item.id}>
            {columnKey => (
              <TableCell key={columnKey}>
                {item[columnKey as keyof RecipeIngredient]}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default RecipeIngredients;

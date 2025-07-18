import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ThumbsUp, Trash } from "lucide-react";
import { Button } from "../ui/button";
import type { List } from "@/types/todo";


type Props = {
  list: List[] | [];
  onDeleteItem: (id: number) => void;
  onMarkDone: (id: number) => void;
};

export const TodoList = ({ list, onDeleteItem, onMarkDone }: Props) => {
  const onDelete = (id: number) => {
    onDeleteItem(id);
  };
  const onMark = (id: number) => {
    onMarkDone(id);
  };
  return (
    <Table className="mt-10">
      <TableCaption>A list of your todo.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">Item Name</TableHead>
          <TableHead className="w-[300px]">Date</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {list.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="w-[300px]">
              {item.mark ? (
                <>
                  <s>{item.itemname}</s>
                </>
              ) : (
                <>{item.itemname}</>
              )}
            </TableCell>
             <TableCell className="w-[300px]">
              {item.id}
            </TableCell>
            <TableCell className="flex gap-2">
              <Button variant={"destructive"} onClick={() => onDelete(item.id)}>
                <Trash />
              </Button>
              <Button variant={"default"} onClick={() => onMark(item.id)}>
                <ThumbsUp />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

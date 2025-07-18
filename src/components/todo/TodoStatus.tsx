import type { List } from "@/types/todo";
import { Badge } from "../ui/badge";
import { useEffect, useState } from "react";

interface Props {
  list: List[];
}

export const TodoStatus = ({ list }: Props) => {
  const [open, setOpen] = useState(0);
  const [done, setDone] = useState(0);

  
  useEffect(() => {
    const counts = list.reduce(
      (acc: { done: number; open: number }, item: List) => {
        item.mark ? acc.done++ : acc.open++;
        return acc;
      },
      { done: 0, open: 0 }
    );
    setOpen(counts.open);
    setDone(counts.done)
  }, [list]);

  if (!list.length) {
    return null;
  }
  return (
    <div className="mt-10">
      <Badge variant="default">{open} Open</Badge>
      <Badge variant="secondary">{done} Done</Badge>
    </div>
  );
};

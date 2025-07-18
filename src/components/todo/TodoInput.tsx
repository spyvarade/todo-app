import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { toast } from "sonner";

interface Props {
  onAddItem: (item: string) => void;
}

export const TodoInput = ({ onAddItem }: Props) => {
  const [item, setItem] = useState("");
  const onAddToList = () => {
    if (!item) {
      toast("Please enter item name.");
    }
    onAddItem(item);
    setItem("");
  };
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItem(event.currentTarget.value);
  };
  return (
    <div className="flex max-w-3xl gap-4">
      <Input
        type="text"
        placeholder="Item Name"
        className=""
        value={item}
        onChange={onInputChange}
      />
      <Button onClick={onAddToList}>Add to list</Button>
    </div>
  );
};

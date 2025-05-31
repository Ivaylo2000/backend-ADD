import { Request, Response } from "express";
import { items } from "../data/items";
import { Item } from "../interfaces/Items";

export const changeItem = (req: Request, res: Response) => {
  const { name, description } = req.body;
  const { id } = req.params;

  if (!id || !name || !description) {
    res.status(400).json({ error: "id, name and description are required" });
    return;
  }

  const index = items.findIndex((item) => item.id === +id);
  if (index === -1) {
    res.status(404).json({ error: "Item not found" });
    return;
  }

  const updatedItem: Item = {
    id: +id,
    name,
    description,
  };

  items[index] = updatedItem;

  res.json({ message: "Item updated", item: items[index], data: items });
};

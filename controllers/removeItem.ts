import { Request, Response } from "express";
import { items } from "../data/items";

export const removeItem = (req: Request, res: Response) => {
  const { id } = req.params;

  const index = items.findIndex((item) => item.id === +id);

  if (index === -1) {
    res.status(404).json({ error: "Item not found" });
    return;
  }

  items.splice(index, 1);

  res.json({ data: items, message: "Item deleted successfully" });
};

import { Request, Response } from "express";
import { items } from "../data/items";
import { Item } from "../interfaces/Items";

export const addItem = (req: Request, res: Response) => {
  const { name, description } = req.body;

  if (!name || !description) {
    res.status(400).json({ error: "Name and description are required" });
    return;
  }

  const newId = items.length > 0 ? items[items.length - 1].id + 1 : 1;
  const newItem: Item = {
    id: newId,
    name,
    description,
  };

  items.push(newItem);

  res.status(201).json({ message: "Item added", data: items });
};

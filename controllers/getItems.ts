import { Request, Response } from "express";
import { items } from "../data/items";

export const getItems = (req: Request, res: Response) => {
  res.json({ data: items });
};

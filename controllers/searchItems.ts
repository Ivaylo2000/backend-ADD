import { Request, Response } from "express";
import { items } from "../data/items";

export const searchItems = (req: Request, res: Response) => {
  const nameQuery = req.query.name;
  const descriptionQuery = req.query.description;

  if (
    (!nameQuery || nameQuery.length === 0) &&
    (!descriptionQuery || descriptionQuery.length === 0)
  ) {
    res.status(400).json({
      error:
        'Please provide a non-empty "name" and/or "description" query parameter',
    });
    return;
  }

  const name = nameQuery ? nameQuery.toString().toLowerCase() : "";
  const description = descriptionQuery
    ? descriptionQuery.toString().toLowerCase()
    : "";

  const results = items.filter((item) => {
    const matchName = nameQuery ? item.name.toLowerCase().includes(name) : true;
    const matchDescription = descriptionQuery
      ? item.description.toLowerCase().includes(description)
      : true;
    return matchName && matchDescription;
  });

  res.json({ data: results });
};

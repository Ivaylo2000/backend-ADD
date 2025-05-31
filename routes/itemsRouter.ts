import { Router } from "express";
import { addItem } from "../controllers/addItem";
import { getItems } from "../controllers/getItems";
import { changeItem } from "../controllers/changeItem";
import { searchItems } from "../controllers/searchItems";
import { removeItem } from "../controllers/removeItem";

const router = Router();

//example: http://localhost:8000/items
router.get("/items", getItems);

//example: http://localhost:8000/items/search?description=Two
router.get("/items/search", searchItems);

//example: http://localhost:8000/items/2 body: {"name": "New Item Name","description": "New item description"}
router.put("/items/:id", changeItem);

//example: http://localhost:8000/items/2
router.delete("/items/:id", removeItem);

//example: http://localhost:8000/items body:{"name": "New Item","description": "This is a new item"}
router.post("/items", addItem);

export default router;

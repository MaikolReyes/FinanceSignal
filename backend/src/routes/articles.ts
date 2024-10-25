import { Router, Request, Response } from "express";
import Article from "../models/article";

const router = Router();

router.get("/articles", async (req: Request, res: Response) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: "Error" });
  }
});

export default router;
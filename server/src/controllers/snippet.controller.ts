import { Request, Response } from "express";
import { Snippet } from "../models/Snippet.model";
import { v4 as uuidv4 } from "uuid";

export const createSnippet = async (req: Request, res: Response) => {
  try {
    const { language, code } = req.body;

    const shareId = uuidv4();

    const snippet = await Snippet.create({
      language,
      code,
      shareId,
    });

    res.json({
      shareUrl: `${process.env.FRONTEND_URL}/${shareId}`,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to create snippet" });
  }
};

export const getSnippet = async (req: Request, res: Response) => {
  try {
    const { shareId } = req.params;

    const snippet = await Snippet.findOne({ shareId });

    if (!snippet)
      return res.status(404).json({ error: "Snippet not found" });

    res.json(snippet);
  } catch (error) {
    res.status(500).json({ error: "Error fetching snippet" });
  }
};
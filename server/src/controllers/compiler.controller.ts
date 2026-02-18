console.log("Controller hit!");

import { Request, Response } from "express";
import { languageMap } from "../utils/languageMap";
// import { submitToJudge0 } from "../services/judge0.service";
import { executeCode } from "../services/judge0.service";

export const runCode = async (req: Request, res: Response) => {
  try {
    const { language, source_code } = req.body;
    console.log("Received code execution request for language:", language, "with source code:", source_code);
    const language_id = languageMap[language];

    if (!language_id)
      return res.status(400).json({ error: "Unsupported language" });

    // const result = await submitToJudge0(source_code, language_id);
    const result = await executeCode(source_code, language_id);

    res.json({
      stdout: result.stdout,
      stderr: result.stderr,
      status: result.status?.description,
    });
  } catch (error) {
    res.status(500).json({ error: "Execution failed" });
  }
};
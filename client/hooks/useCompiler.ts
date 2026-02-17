import { useState } from "react";
import { api } from "@/lib/api";

export function useCompiler() {
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const runCode = async (language: string, code: string) => {
    try {
      setLoading(true);
      setOutput("");

      const res = await api.post("/submit", {
        language,
        source_code: code,
      });

      const token = res.data.token;

      // Polling
      let result;
      while (true) {
        const response = await api.get(`/result/${token}`);
        if (response.data.status === "completed") {
          result = response.data;
          break;
        }
        await new Promise((r) => setTimeout(r, 1000));
      }

      setOutput(result.stdout || result.stderr || "No Output");
    } catch (err) {
      setOutput("Error running code");
    } finally {
      setLoading(false);
    }
  };

  return { runCode, output, loading };
}
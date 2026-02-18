"use client";

import Editor from "@/components/Editor";
import Sidebar from "@/components/Sidebar";
import Terminal from "@/components/Terminal";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function CompilerPage() {
  const params = useParams();
  const language = params.language as string;

  const [code, setCode] = useState("");


  const runCode = async (lang: string, sourceCode: string) => {
    // try {
      console.log("Running code for language:", lang, "with source code:", sourceCode);
      const response = await fetch("http://localhost:5000/api/compiler/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language: lang, source_code: sourceCode }),
      });
      const data = await response.json();
      console.log("Execution Result:", data);
      return data;
    // } catch (error) {
    //   console.error("Error running code:", error);
    //   throw error;
    // }
  };

  useEffect(() => {
    const templates: Record<string, string> = {
      python: "print('Hello Prashant')",
      javascript: "console.log('Hello Prashant');",
      cpp: '#include <iostream>\nusing namespace std;\nint main(){ cout<<"Hello"; }',
    };

    setCode(templates[language] || "// Start coding...");
  }, [language]);




  return (
    <div className="flex h-screen w-1/2 w-full">
      <Sidebar language={language} setLanguage={(lang) => setCode("")} />
      <Editor language={language} value={code} onChange={setCode} onRun={() => runCode(language, code)}  />
      <Terminal  output="sorry" loading  />
    </div>
  );
}
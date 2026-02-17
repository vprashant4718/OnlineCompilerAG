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
      <Editor language={language} value={code} onChange={setCode} />
      <Terminal  output="sorry" loading  />
    </div>
  );
}
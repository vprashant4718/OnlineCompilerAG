"use client";

import { useState } from "react";
import Terminal from "@/components/Terminal";
import Sidebar from "@/components/Sidebar";
import { useCompiler } from "@/hooks/useCompiler";
import Editor from "@/components/Editor";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState("print('Hello Prashant')");
  const [isFullscreen, setIsFullscreen] = useState(false);

  const { runCode, output, loading } = useCompiler();

  return (
    <div className="h-screen flex flex-col">

      <Navbar
        onRun={() => runCode(language, code)}
      />

      <div className="flex flex-1 overflow-hidden">

        {!isFullscreen && (
          <Sidebar language={language} setLanguage={setLanguage} />
        )}

        <div className="flex flex-row w-full">

          <div className= "w-full h-full">
            <Editor
              language={language}
              value={code}
              onChange={setCode}
            />
          </div>

          {!isFullscreen && (
            <Terminal output={output} loading={loading} />
          )}

        </div>
      </div>
    </div>
  );
}
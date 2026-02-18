"use client";

import { useTheme } from "next-themes";
import MonacoEditor from "@monaco-editor/react";
import { useEffect, useState } from "react";
import { Share2 } from "lucide-react";

interface EditorProps {
  language: string;
  value: string;
  onChange: (value: string) => void;
  onRun: () => void;
}

export default function Editor({
  language,
  value,
  onChange, onRun
}: EditorProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // 🚨 Prevent hydration mismatch

  return (
    <div className="flex flex-col w-full h-full
      bg-white dark:bg-gray-900 
      text-black dark:text-white"
    >
      <div className="flex items-center justify-between px-4 py-2
        bg-gray-100 dark:bg-gray-800
        border-b border-gray-300 dark:border-gray-700"
      >
        <span className="text-sm font-semibold">
          {language.toUpperCase()}
        </span>

        <div className="flex items-center gap-4">
        <span className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 cursor-pointer border border-gray-300 dark:border-gray-700 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          <Share2 size={18} className="cursor-pointer" />  
          Share
        </span>
          {/* Run */}
        <button
          onClick={onRun}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded text-sm"
        >
          Run Code
        </button>
        </div>
      </div>

      <div className="flex-1">
        <MonacoEditor
          height="100%"
          language={language}
          theme={theme === "dark" ? "vs-dark" : "light"}
          value={value}
          onChange={(val) => onChange(val || "")}
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            automaticLayout: true,
          }}
        />
      </div>
    </div>
  );
}
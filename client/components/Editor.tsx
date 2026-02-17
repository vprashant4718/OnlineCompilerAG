"use client";

import { useTheme } from "next-themes";
import MonacoEditor from "@monaco-editor/react";
import { useEffect, useState } from "react";

interface EditorProps {
  language: string;
  value: string;
  onChange: (value: string) => void;
}

export default function Editor({
  language,
  value,
  onChange,
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
"use client";

import { FaPython, FaJs, FaJava, FaPhp } from "react-icons/fa";
import { SiCplusplus, SiTypescript, SiGo } from "react-icons/si";

interface SidebarProps {
  language: string;
  setLanguage: (lang: string) => void;
}

const languages = [
  { id: "python", icon: <FaPython size={22} />, label: "Python" },
  { id: "javascript", icon: <FaJs size={22} />, label: "JavaScript" },
  { id: "cpp", icon: <SiCplusplus size={22} />, label: "C++" },
  { id: "typescript", icon: <SiTypescript size={22} />, label: "TypeScript" },
  { id: "go", icon: <SiGo size={22} />, label: "Go" },
  { id: "php", icon: <FaPhp size={22} />, label: "PHP" },
];

export default function Sidebar({ language, setLanguage }: SidebarProps) {
  return (
    <div className=" bg-gray-200 dark:bg-gray-900 
  w-16 flex flex-col items-center py-4 space-y-4
">
      {languages.map((lang) => (
        <a href={`/${lang.id}`} target="_blank"
          key={lang.id}
          onClick={() => setLanguage(lang.id)}
          className={`p-3 rounded-lg transition-all duration-200 ${
          language === lang.id
            ? "bg-blue-600 text-white"
            : "text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white"
        }`}
          title={lang.label}
        >
          {lang.icon}
        </a>
      ))}
    </div>
  );
}
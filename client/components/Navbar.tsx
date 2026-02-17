"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Fullscreen, Minimize } from "lucide-react";
import { useEffect, useState } from "react";
import { ModeToggle } from "./Toggle-Theme";

interface NavbarProps {
  onRun: () => void;
}

export default function Navbar({ onRun }: NavbarProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener(
        "fullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  };

  return (
    <div className="flex justify-between items-center px-6 py-3
      bg-gray-200 dark:bg-gray-900
      text-black dark:text-white
      border-b border-gray-300 dark:border-gray-700"
    >
      <h1 className=" dark:text-white text-black text-lg font-bold">Online Compiler</h1>

      <div className="flex items-center gap-5">
        
        {/* Theme Toggle */}
        <button onClick={toggleTheme}>
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        {/* <ModeToggle /> */}

        {/* Fullscreen (Real Browser Fullscreen) */}
        <button onClick={toggleFullscreen}>
          {isFullscreen ? <Minimize size={18} /> : <Fullscreen size={18} />}
        </button>

        {/* Run */}
        <button
          onClick={onRun}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded text-sm"
        >
          Run Code
        </button>
      </div>
    </div>
  );
}
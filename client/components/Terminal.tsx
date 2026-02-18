import { BrushCleaning } from "lucide-react";

interface TerminalProps {
  output: string;
  loading: boolean;
}

export default function Terminal({ output, loading }: TerminalProps) {
  return (
   <div className="flex flex-col w-full h-full
      bg-white dark:bg-gray-900 
      text-black dark:text-white" >

      <div className="flex items-center justify-between px-4 py-2
        bg-gray-100 dark:bg-gray-800
        border-b border-gray-300 dark:border-gray-700" >

        <div className="flex  gap-4 items-center ml-[90%]">
            <span className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 cursor-pointer border border-gray-300 dark:border-gray-700 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 right-full" >
              <BrushCleaning size={18} className="cursor-pointer" />  
              Clear
            </span>
        </div>
      </div>

    <div className="
      w-full h-full  p-4 overflow-auto
      bg-gray-100 dark:bg-gray-800
      text-black dark:text-green-400
      border-l border-gray-300 dark:border-gray-700
    ">
      {loading ? "Running..." : output}
    </div>

    </div>
  );
}
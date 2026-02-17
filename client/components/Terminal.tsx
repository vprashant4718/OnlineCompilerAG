interface TerminalProps {
  output: string;
  loading: boolean;
}

export default function Terminal({ output, loading }: TerminalProps) {
  return (
    <div className="
      w-full h-full p-4 overflow-auto
      bg-gray-100 dark:bg-gray-800
      text-black dark:text-green-400
      border-l border-gray-300 dark:border-gray-700
    ">
      {loading ? "Running..." : output}
    </div>
  );
}
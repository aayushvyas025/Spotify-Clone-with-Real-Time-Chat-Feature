import type { ErrorMessageProps } from "@/types/interfaces";

function ErrorMessage({ message }:ErrorMessageProps) {
  if (!message) return null;

  return (
    <div className="mx-4 my-2 rounded-md border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-400">
      {message || "Something went wrong"}
    </div>
  );
}

export default ErrorMessage;

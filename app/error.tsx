"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-8">
      <div className="text-center">
        <h2 className="text-2xl font-serif font-bold mb-4">Something went wrong!</h2>
        <p className="text-foreground/70 mb-6">{error.message}</p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-accent text-background rounded-lg hover:bg-accent/90"
        >
          Try again
        </button>
      </div>
    </div>
  );
}


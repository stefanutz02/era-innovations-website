import { useEffect } from "react";
import { Link } from "react-router-dom";
import { updateSEO } from "@/lib/seo";

export default function NotFound() {
  useEffect(() => {
    updateSEO({
      title: "404 — Pagina nu există | ERA Innovations",
      description: "Pagina pe care o cauți nu există sau a fost mutată.",
      noIndex: true,
    });
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)] px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-[var(--foreground)]">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-[var(--foreground)]">Page not found</h2>
        <p className="mt-2 text-sm text-[var(--muted-foreground)]">
          Pagina nu există sau a fost mutată.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-[var(--foreground)] px-4 py-2 text-sm font-medium text-[var(--background)] hover:opacity-90 transition-opacity"
        >
          Înapoi acasă
        </Link>
      </div>
    </div>
  );
}
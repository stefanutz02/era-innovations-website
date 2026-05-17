// src/pages/Blog.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { useT } from "@/lib/i18n";
import { updateSEO } from "@/lib/seo";
import { loadBlogPosts, type BlogPostMeta } from "@/lib/blog";

export default function Blog() {
  const { t, lang } = useT();
  const [posts, setPosts] = useState<BlogPostMeta[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    updateSEO({
      title: "Blog — ERA Innovations — Software custom, web & mobile România",
      description:
        "Articole despre dezvoltare software, costuri website 2026, web design Piatra-Neamț, SaaS și inovație responsabilă.",
      canonical: "/blog",
      ogUrl: "/blog",
    });

    loadBlogPosts()
      .then((loaded) => {
        setPosts(loaded);
        setError(null);
      })
      .catch((err) => {
        console.error("[Blog] failed to load:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
      })
      .finally(() => setLoading(false));
  }, []);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date
      .toLocaleDateString(lang === "ro" ? "ro-RO" : "en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
      .toUpperCase();
  };

  if (loading) {
    return (
      <>
        <PageHero
          eyebrow={t("nav.blog")}
          title={lang === "ro" ? "Idei, în formă lungă." : "Ideas, the long form."}
        />
        <section className="container-page py-24 text-center">
          <div className="animate-pulse text-[var(--muted-foreground)]">
            {lang === "ro" ? "Se încarcă articolele..." : "Loading articles..."}
          </div>
        </section>
      </>
    );
  }

  if (error) {
    return (
      <>
        <PageHero
          eyebrow={t("nav.blog")}
          title={lang === "ro" ? "Idei, în formă lungă." : "Ideas, the long form."}
        />
        <section className="container-page py-24 text-center">
          <div className="mb-4 text-red-400">
            {lang === "ro" ? "Eroare: " : "Error: "}
            {error}
          </div>
          <button
            onClick={() => window.location.reload()}
            className="text-[var(--accent)] hover:underline"
          >
            {lang === "ro" ? "Reîncearcă" : "Retry"}
          </button>
        </section>
      </>
    );
  }

  if (posts.length === 0) {
    return (
      <>
        <PageHero
          eyebrow={t("nav.blog")}
          title={lang === "ro" ? "Idei, în formă lungă." : "Ideas, the long form."}
        />
        <section className="container-page py-24 text-center text-[var(--muted-foreground)]">
          {lang === "ro" ? "Niciun articol disponibil momentan." : "No articles available right now."}
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow={t("nav.blog")}
        title={lang === "ro" ? "Idei, în formă lungă." : "Ideas, the long form."}
        subtitle={
          lang === "ro"
            ? "Articole și note din spatele proiectelor noastre."
            : "Articles and notes from behind our projects."
        }
      />

      <section className="container-page pt-16 pb-24">
        <div className="divide-y divide-[var(--hairline)] border-y border-[var(--hairline)]">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="group grid grid-cols-1 gap-4 py-8 transition-colors hover:bg-[var(--surface)]/30 md:grid-cols-[140px_120px_1fr_24px] md:items-center md:gap-8 md:px-2"
            >
              <div className="font-mono text-xs tracking-wider text-[var(--muted-foreground)]">
                {formatDate(p.date)}
              </div>
              <div>
                <span className="rounded-full border border-[var(--hairline)] px-2.5 py-1 text-[11px] uppercase tracking-wider text-[var(--foreground)]/80">
                  {p.category}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-medium tracking-tight transition-colors group-hover:text-gradient-brand">
                  {lang === "ro" ? p.title : p.title_en}
                </h3>
                <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                  {lang === "ro" ? p.excerpt : p.excerpt_en}
                </p>
                <div className="mt-2 flex items-center gap-1 text-[11px] text-[var(--muted-foreground)]">
                  <Clock className="h-3 w-3" />
                  {p.readingTime} min
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-[var(--muted-foreground)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--foreground)]" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

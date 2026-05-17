// src/pages/BlogPost.tsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { useT } from "@/lib/i18n";
import { updateSEO } from "@/lib/seo";
import { loadBlogPost, type BlogPost } from "@/lib/blog";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useT();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) return;

    loadBlogPost(slug)
      .then((p) => {
        setPost(p);
        updateSEO({
          title: lang === "ro" ? `${p.title} | ERA Innovations Blog` : `${p.title_en} | ERA Innovations Blog`,
          description: lang === "ro" ? p.excerpt : p.excerpt_en,
          canonical: `/blog/${p.slug}`,
          ogUrl: `/blog/${p.slug}`,
          ogType: "article",
          articleMeta: {
            publishedTime: p.date,
            section: p.category,
            tags: [p.category],
          },
        });
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [slug, lang]);

  if (loading) {
    return (
      <div className="container-page py-24 text-center text-[var(--muted-foreground)]">
        {lang === "ro" ? "Se încarcă articolul..." : "Loading article..."}
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container-page py-24 text-center">
        <h1 className="text-2xl font-semibold">{lang === "ro" ? "Articolul nu a fost găsit" : "Article not found"}</h1>
        <Link to="/blog" className="mt-4 inline-flex items-center gap-2 text-[var(--accent)]">
          <ArrowLeft className="h-4 w-4" /> {lang === "ro" ? "Înapoi la blog" : "Back to blog"}
        </Link>
      </div>
    );
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(lang === "ro" ? "ro-RO" : "en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <article className="container-page max-w-3xl py-24">
      {/* Back link */}
      <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] mb-8">
        <ArrowLeft className="h-4 w-4" /> {lang === "ro" ? "Înapoi la blog" : "Back to blog"}
      </Link>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="rounded-full border border-[var(--hairline)] px-3 py-1 text-[11px] uppercase tracking-wider text-[var(--foreground)]/80">
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-[11px] text-[var(--muted-foreground)]">
            <Calendar className="h-3 w-3" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1 text-[11px] text-[var(--muted-foreground)]">
            <Clock className="h-3 w-3" />
            {post.readingTime} min
          </span>
        </div>
        
        <h1 className="hero-display text-4xl md:text-5xl text-gradient mb-6">
          {lang === "ro" ? post.title : post.title_en}
        </h1>
        
        <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
          {lang === "ro" ? post.excerpt : post.excerpt_en}
        </p>
      </header>

      {/* Content */}
      <div 
        className="prose prose-invert prose-lg max-w-none
          prose-headings:font-display prose-headings:tracking-tight
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-[var(--foreground)]/85 prose-p:leading-relaxed
          prose-a:text-[var(--accent)] prose-a:no-underline hover:prose-a:underline
          prose-strong:text-[var(--foreground)]
          prose-ul:my-6 prose-li:my-2
          prose-blockquote:border-l-[var(--accent)] prose-blockquote:bg-[var(--surface)]/40 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
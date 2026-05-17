import { useState } from "react";

interface OptimizedImageProps {
  src: string; // WebP path
  fallbackSrc: string; // PNG/JPG fallback
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  priority?: boolean;
}

export function OptimizedImage({
  src,
  fallbackSrc,
  alt,
  className,
  width,
  height,
  loading = "lazy",
  priority = false,
}: OptimizedImageProps) {
  const [error, setError] = useState(false);

  // If WebP fails, fall back to original format
  const imgSrc = error ? fallbackSrc : src;

  return (
    <picture>
      {!error && (
        <source
          srcSet={src}
          type="image/webp"
        />
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={priority ? "eager" : loading}
        decoding={priority ? "sync" : "async"}
        onError={() => setError(true)}
      />
    </picture>
  );
}

// Usage for logo:
// <OptimizedImage 
//   src="/assets/logo.webp" 
//   fallbackSrc="/assets/logo.png" 
//   alt="ERA Innovations Logo"
//   width={200}
//   height={50}
//   priority
// />
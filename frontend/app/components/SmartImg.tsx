"use client";
import { useState } from "react";

interface SmartImgProps {
  src: string;
  fallback?: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  fallbackEmoji?: string;
}

/**
 * SmartImg: thử load ảnh local → CDN fallback → emoji placeholder
 */
export default function SmartImg({
  src,
  fallback = "",
  alt,
  className,
  style,
  fallbackEmoji = "📦",
}: SmartImgProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (imgSrc === src && fallback) {
      setImgSrc(fallback);
    } else {
      setFailed(true);
    }
  };

  if (failed) {
    return (
      <span
        className={className}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 48,
          ...style,
        }}
      >
        {fallbackEmoji}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      style={style}
      onError={handleError}
    />
  );
}

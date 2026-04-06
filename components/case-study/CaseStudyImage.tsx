"use client";

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export default function CaseStudyImage({ src, alt, className = "" }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex min-h-[120px] items-center justify-center bg-[#EEF2F8] text-center text-[12px] font-semibold tracking-[-0.02em] text-[#012970]/35 ${className}`}
        role="img"
        aria-label={alt}
      >
        Image: {alt}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- dynamic src + onError fallback
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

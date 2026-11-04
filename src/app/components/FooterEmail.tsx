'use client';

import { useState } from 'react';

export default function FooterEmail() {
  const [copied, setCopied] = useState(false);
  const email = 'dev@notewaredigital.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
    <button
      type="button"
      onClick={copyToClipboard}
      aria-label="Email: copy address"
      className="link-quiet flex items-center gap-2 cursor-pointer"
    >
      <span>Email</span>
      {copied ? (
        <span className="text-caption font-medium text-foreground">Copied</span>
      ) : (
        <svg
          width="12" height="12" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      )}
    </button>
    <span role="status" className="sr-only">{copied ? "Email address copied" : ""}</span>
    </>
  );
}

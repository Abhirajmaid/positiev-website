'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/** Sends `/` + `#contact` to the real contact route (hash stays on home otherwise). */
export function HashContactRedirect() {
  const router = useRouter();

  useEffect(() => {
    if (window.location.hash !== '#contact') return;
    router.replace('/contact');
  }, [router]);

  return null;
}

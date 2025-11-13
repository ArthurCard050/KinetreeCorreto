import { useEffect } from 'react';

export function useScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (!isLocked) return;

    // Simplesmente bloqueia o overflow
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    
    return () => {
      // Restaura o overflow
      document.body.style.overflow = originalOverflow;
    };
  }, [isLocked]);
}

'use client';

import { useEffect, useCallback, useState } from 'react';

interface UseKeyboardNavProps {
  itemCount: number;
  onSelect: (index: number) => void;
  onBack?: () => void;
  enabled?: boolean;
}

export function useKeyboardNav({
  itemCount,
  onSelect,
  onBack,
  enabled = true,
}: UseKeyboardNavProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showHelp, setShowHelp] = useState(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!enabled) return;

      // Toggle help overlay
      if (e.key === '?' && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        setShowHelp((prev) => !prev);
        return;
      }

      // Close help with Escape if help is open
      if (showHelp && e.key === 'Escape') {
        e.preventDefault();
        setShowHelp(false);
        return;
      }

      // Don't handle navigation keys while help is open
      if (showHelp) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % itemCount);
          break;

        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + itemCount) % itemCount);
          break;

        case 'Enter':
          e.preventDefault();
          if (selectedIndex >= 0 && selectedIndex < itemCount) {
            onSelect(selectedIndex);
          }
          break;

        case 'Backspace':
        case 'Escape':
          e.preventDefault();
          if (onBack) {
            onBack();
          }
          break;

        default:
          break;
      }
    },
    [enabled, itemCount, onSelect, onBack, selectedIndex, showHelp]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return { selectedIndex, showHelp, setShowHelp };
}

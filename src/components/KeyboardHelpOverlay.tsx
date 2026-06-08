'use client';

interface KeyboardHelpOverlayProps {
  open: boolean;
  onClose: () => void;
}

export function KeyboardHelpOverlay({
  open,
  onClose,
}: KeyboardHelpOverlayProps) {
  if (!open) return null;

  const shortcuts = [
    { key: '↑ / ↓', description: 'Navigate between items' },
    { key: 'Enter', description: 'Open the selected item' },
    { key: 'Backspace / Esc', description: 'Go back to the previous level' },
    { key: '?', description: 'Toggle this help overlay' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Keyboard Shortcuts</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl leading-none cursor-pointer"
            aria-label="Close help"
          >
            ×
          </button>
        </div>
        <div className="space-y-3">
          {shortcuts.map((shortcut) => (
            <div
              key={shortcut.key}
              className="flex justify-between items-center gap-4"
            >
              <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono text-gray-700 min-w-[100px] text-center">
                {shortcut.key}
              </kbd>
              <span className="text-sm text-gray-600">
                {shortcut.description}
              </span>
            </div>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-5 w-full bg-primary text-white py-2 rounded font-medium hover:bg-primary/80 transition-colors cursor-pointer"
        >
          Got it
        </button>
      </div>
    </div>
  );
}

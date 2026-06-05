'use client';
import React, { useState, useRef } from 'react';
import { Twitter, Linkedin, MessageCircle, Link, Download } from 'lucide-react';
import AchievementBadge from './AchievementBadge';

interface AchievementShareProps {
  title: string;
  description: string;
  icon?: string;
  level?: 'bronze' | 'silver' | 'gold';
  earnedAt?: string;
}

const AchievementShare: React.FC<AchievementShareProps> = ({
  title,
  description,
  icon,
  level = 'bronze',
  earnedAt,
}) => {
  const [copied, setCopied] = useState(false);
  const [screenshotting, setScreenshotting] = useState(false);
  const badgeRef = useRef<HTMLDivElement>(null);

  const shareText = `I just earned the "${title}" achievement on VidyaSetu! ${description}`;
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopyLink = async (): Promise<void> => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTwitter = (): void => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank');
  };

  const handleWhatsApp = (): void => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
    window.open(url, '_blank');
  };

  const handleLinkedIn = (): void => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank');
  };

  const handleScreenshot = async (): Promise<void> => {
    if (!badgeRef.current) return;
    setScreenshotting(true);
    try {
      const { default: html2canvas } = await import('html2canvas');
      const canvas = await html2canvas(badgeRef.current, {
        backgroundColor: '#ffffff',
        scale: 2,
      } as Parameters<typeof html2canvas>[1]);
      const link = document.createElement('a');
      link.download = `${title.replace(/\s+/g, '_')}_achievement.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Screenshot failed:', error);
    } finally {
      setScreenshotting(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-xl max-w-sm w-full text-center shadow-sm">
      <h2 className="text-lg font-bold text-black mb-4 uppercase tracking-wide">
        Achievement Unlocked
      </h2>

      {/* Badge preview */}
      <div
        ref={badgeRef}
        className="flex justify-center mb-5 p-4 bg-white rounded-xl"
      >
        <AchievementBadge
          title={title}
          description={description}
          icon={icon}
          level={level}
          earnedAt={earnedAt}
        />
      </div>

      <p className="text-sm text-gray-500 mb-4">
        Share your achievement with the world
      </p>

      {/* Share buttons */}
      <div className="flex flex-col gap-2 w-full">
        <button
          onClick={handleTwitter}
          className="flex items-center justify-center gap-2 w-full bg-black text-white text-sm font-semibold uppercase px-4 py-3 hover:bg-gray-800 transition-all duration-300"
        >
          <Twitter className="w-4 h-4" />
          Share on Twitter / X
        </button>
        <button
          onClick={handleWhatsApp}
          className="flex items-center justify-center gap-2 w-full bg-black text-white text-sm font-semibold uppercase px-4 py-3 hover:bg-gray-800 transition-all duration-300"
        >
          <MessageCircle className="w-4 h-4" />
          Share on WhatsApp
        </button>
        <button
          onClick={handleLinkedIn}
          className="flex items-center justify-center gap-2 w-full bg-black text-white text-sm font-semibold uppercase px-4 py-3 hover:bg-gray-800 transition-all duration-300"
        >
          <Linkedin className="w-4 h-4" />
          Share on LinkedIn
        </button>
        <button
          onClick={handleCopyLink}
          className={`flex items-center justify-center gap-2 w-full text-sm font-semibold uppercase px-4 py-3 transition-all duration-300 border ${
            copied
              ? 'bg-black text-white border-black'
              : 'bg-white text-black border-black hover:bg-black hover:text-white'
          }`}
        >
          <Link className="w-4 h-4" />
          {copied ? 'Link Copied!' : 'Copy Link'}
        </button>
        <button
          onClick={handleScreenshot}
          disabled={screenshotting}
          className="flex items-center justify-center gap-2 w-full bg-white text-black border border-black text-sm font-semibold uppercase px-4 py-3 hover:bg-black hover:text-white transition-all duration-300 disabled:opacity-50"
        >
          <Download className="w-4 h-4" />
          {screenshotting ? 'Downloading...' : 'Download Card'}
        </button>
      </div>
    </div>
  );
};

export default AchievementShare;

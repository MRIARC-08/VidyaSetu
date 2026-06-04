"use client";
import React, { useState, useRef } from "react";
import AchievementBadge from "./AchievementBadge";

interface AchievementShareProps {
  title: string;
  description: string;
  icon?: string;
  level?: "bronze" | "silver" | "gold";
  earnedAt?: string;
}

const AchievementShare: React.FC<AchievementShareProps> = ({
  title,
  description,
  icon = "🏆",
  level = "bronze",
  earnedAt,
}) => {
  const [copied, setCopied] = useState(false);
  const [screenshotting, setScreenshotting] = useState(false);
  const badgeRef = useRef<HTMLDivElement>(null);

  const shareText = `I just earned the "${title}" achievement on VidyaSetu! 🎉 ${description}`;
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleCopyLink = async (): Promise<void> => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTwitter = (): void => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, "_blank");
  };

  const handleWhatsApp = (): void => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + " " + shareUrl)}`;
    window.open(url, "_blank");
  };

  const handleLinkedIn = (): void => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(url, "_blank");
  };

  
      const handleScreenshot = async (): Promise<void> => {
  if (!badgeRef.current) return;
  setScreenshotting(true);
  try {
    const { default: html2canvas } = await import("html2canvas"); // ✅ dynamic import
    const canvas = await html2canvas(badgeRef.current, {
      backgroundColor: "#ffffff",
      scale: 2,
    } as any);
    const link = document.createElement("a");
    link.download = `${title.replace(/\s+/g, "_")}_achievement.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  } catch (error) {
    console.error("Screenshot failed:", error);
  } finally {
    setScreenshotting(false);
  }
};

  return (
    <div
      style={{
        padding: "24px",
        borderRadius: "16px",
        backgroundColor: "#f9f9f9",
        border: "1px solid #e0e0e0",
        maxWidth: "360px",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: "16px", fontSize: "18px" }}>
        🎉 Achievement Unlocked!
      </h2>

      {/* Badge preview */}
      <div
        ref={badgeRef}
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
          padding: "16px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
        }}
      >
        <AchievementBadge
          title={title}
          description={description}
          icon={icon}
          level={level}
          earnedAt={earnedAt}
        />
      </div>

      <p style={{ fontSize: "13px", color: "#555", marginBottom: "16px" }}>
        Share your achievement with the world!
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <button onClick={handleTwitter} style={btnStyle("#1DA1F2")}>
          🐦 Share on Twitter / X
        </button>
        <button onClick={handleWhatsApp} style={btnStyle("#25D366")}>
          💬 Share on WhatsApp
        </button>
        <button onClick={handleLinkedIn} style={btnStyle("#0A66C2")}>
          💼 Share on LinkedIn
        </button>
        <button onClick={handleCopyLink} style={btnStyle(copied ? "#4caf50" : "#888")}>
          {copied ? "✅ Link Copied!" : "🔗 Copy Link"}
        </button>
        <button
          onClick={handleScreenshot}
          disabled={screenshotting}
          style={btnStyle(screenshotting ? "#aaa" : "#6c757d")}
        >
          {screenshotting ? "⏳ Downloading..." : "📸 Download Achievement Card"}
        </button>
      </div>
    </div>
  );
};

function btnStyle(bg: string): React.CSSProperties {
  return {
    padding: "10px 16px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: bg,
    color: "#fff",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
    transition: "opacity 0.2s",
  };
}

export default AchievementShare;
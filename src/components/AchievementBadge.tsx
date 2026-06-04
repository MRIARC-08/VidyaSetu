"use client";
import React from "react";

interface AchievementBadgeProps {
  title: string;
  description: string;
  icon?: string;
  earnedAt?: string;
  level?: "bronze" | "silver" | "gold";
}

const levelColors = {
  bronze: { bg: "#cd7f32", text: "#fff" },
  silver: { bg: "#c0c0c0", text: "#333" },
  gold:   { bg: "#ffd700", text: "#333" },
};

const AchievementBadge: React.FC<AchievementBadgeProps> = ({
  title,
  description,
  icon = "🏆",
  earnedAt,
  level = "bronze",
}) => {
  const colors = levelColors[level];

  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "16px",
        borderRadius: "12px",
        border: `2px solid ${colors.bg}`,
        backgroundColor: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        maxWidth: "200px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          backgroundColor: colors.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "28px",
          marginBottom: "10px",
        }}
      >
        {icon}
      </div>
      <h3 style={{ margin: "0 0 6px", fontSize: "14px", fontWeight: 600 }}>
        {title}
      </h3>
      <p style={{ margin: "0 0 6px", fontSize: "12px", color: "#666" }}>
        {description}
      </p>
      {earnedAt && (
        <span style={{ fontSize: "11px", color: "#999" }}>
          Earned: {earnedAt}
        </span>
      )}
      <span
        style={{
          marginTop: "8px",
          padding: "2px 10px",
          borderRadius: "20px",
          backgroundColor: colors.bg,
          color: colors.text,
          fontSize: "11px",
          fontWeight: 600,
          textTransform: "uppercase",
        }}
      >
        {level}
      </span>
    </div>
  );
};

export default AchievementBadge;
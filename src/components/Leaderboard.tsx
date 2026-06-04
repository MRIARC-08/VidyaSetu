"use client";

import React from "react";

interface LeaderboardEntry {
  rank: number;
  name: string;
  avatar?: string;
  score: number;
  achievements: number;
}

interface LeaderboardProps {
  entries: LeaderboardEntry[];
  title?: string;
}

const medalEmoji: Record<number, string> = {
  1: "🥇",
  2: "🥈",
  3: "🥉",
};

const Leaderboard: React.FC<LeaderboardProps> = ({
  entries,
  title = "Leaderboard",
}) => {
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "16px",
        backgroundColor: "#fff",
        border: "1px solid #e0e0e0",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        maxWidth: "480px",
        width: "100%",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "16px",
          fontSize: "20px",
          fontWeight: 700,
        }}
      >
        🏆 {title}
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {entries.map((entry) => (
          <div
            key={entry.rank}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 16px",
              borderRadius: "10px",
              backgroundColor: entry.rank <= 3 ? "#fffbea" : "#f5f5f5",
              border: entry.rank <= 3 ? "1px solid #ffd700" : "1px solid #e0e0e0",
            }}
          >
            {/* Rank */}
            <span style={{ fontSize: "20px", minWidth: "32px", textAlign: "center" }}>
              {medalEmoji[entry.rank] ?? `#${entry.rank}`}
            </span>

            {/* Avatar */}
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "#ddd",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              {entry.avatar ? (
                <img src={entry.avatar} alt={entry.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              ) : (
                "👤"
              )}
            </div>

            {/* Name */}
            <span style={{ flex: 1, fontWeight: 500, fontSize: "14px" }}>
              {entry.name}
            </span>

            {/* Stats */}
            <div style={{ textAlign: "right" }}>
              <div style={{ fontWeight: 700, fontSize: "14px", color: "#333" }}>
                {entry.score} pts
              </div>
              <div style={{ fontSize: "11px", color: "#888" }}>
                {entry.achievements} badges
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
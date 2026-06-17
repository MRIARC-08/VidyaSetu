import React from 'react';
import Link from 'next/link';

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  ctaAction?: () => void;
}

export default function EmptyState({
  icon,
  title,
  description,
  ctaText,
  ctaHref,
  ctaAction,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-10 text-center rounded-2xl bg-white/5 border border-black/5 shadow-sm w-full h-full min-h-[280px]">
      {icon && <div className="text-gray-400 mb-5">{icon}</div>}
      
      <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">
        {title}
      </h3>
      
      <p className="text-[14px] text-gray-500 max-w-sm mb-8 leading-relaxed">
        {description}
      </p>
      
      {/* Render a Link if ctaHref is provided, otherwise a standard button */}
      {ctaText && ctaHref ? (
        <Link href={ctaHref}>
          <button className="px-6 py-2.5 bg-black text-white rounded-lg text-[14px] font-medium hover:bg-gray-800 transition-all duration-200">
            {ctaText}
          </button>
        </Link>
      ) : ctaText && ctaAction ? (
        <button 
          onClick={ctaAction}
          className="px-6 py-2.5 bg-black text-white rounded-lg text-[14px] font-medium hover:bg-gray-800 transition-all duration-200"
        >
          {ctaText}
        </button>
      ) : null}
    </div>
  );
}
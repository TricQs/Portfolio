"use client";

import React from "react";

// Glass Effect Wrapper Component (Lightweight Semi-Transparent Surface)
export const GlassEffect = ({
  children,
  className = "",
  style = {},
  href,
  onClick,
  target = "_blank",
  enableBlur = false,
}) => {
  const glassStyle = {
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.3)",
    ...style,
  };

  const content = (
    <div
      onClick={onClick}
      className={`relative flex flex-col font-semibold overflow-hidden text-white ${href || onClick ? 'cursor-pointer' : 'cursor-default'} transition-all duration-300 ${className}`}
      style={glassStyle}
    >
      {/* Glass Surface */}
      <div
        className="absolute inset-0 z-0 overflow-hidden rounded-[inherit]"
        style={{
          background: "rgba(255, 255, 255, 0.04)",
          backdropFilter: enableBlur ? "blur(16px) saturate(180%)" : "none",
          WebkitBackdropFilter: enableBlur ? "blur(16px) saturate(180%)" : "none",
          isolation: "isolate",
        }}
      />
      <div
        className="absolute inset-0 z-20 rounded-[inherit] overflow-hidden pointer-events-none"
        style={{
          boxShadow:
            "inset 1.5px 1.5px 1px 0 rgba(255, 255, 255, 0.25), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.1)",
        }}
      />

      {/* Content */}
      <div className="relative z-30 w-full h-full rounded-[inherit] overflow-hidden flex flex-col">{children}</div>
    </div>
  );

  return href ? (
    <a href={href} target={target} rel="noopener noreferrer" className="block w-full">
      {content}
    </a>
  ) : (
    content
  );
};

// Dock Component
export const GlassDock = ({ icons, href }) => (
  <GlassEffect
    href={href}
    enableBlur={true}
    className="rounded-3xl p-3 hover:p-4 hover:rounded-4xl transition-all duration-500"
  >
    <div className="flex items-center justify-center gap-3 rounded-3xl p-2 overflow-hidden">
      {icons.map((icon, index) => (
        <img
          key={index}
          src={icon.src}
          alt={icon.alt}
          className="w-12 h-12 sm:w-14 sm:h-14 transition-all duration-500 hover:scale-115 cursor-pointer object-contain"
          style={{
            transformOrigin: "center center",
            transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1.4)",
          }}
          onClick={icon.onClick}
        />
      ))}
    </div>
  </GlassEffect>
);

// Button Component
export const GlassButton = ({ children, href, onClick, className = "" }) => (
  <GlassEffect
    href={href}
    enableBlur={true}
    className={`rounded-3xl px-8 py-4 hover:px-9 hover:py-5 transition-all duration-500 overflow-hidden ${className}`}
  >
    <div
      onClick={onClick}
      className="transition-all duration-500 hover:scale-95 flex items-center justify-center"
      style={{
        transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1.4)",
      }}
    >
      {children}
    </div>
  </GlassEffect>
);

// SVG Filter Component
export const GlassFilter = () => null;

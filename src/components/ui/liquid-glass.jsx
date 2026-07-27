"use client";

import React from "react";

// Glass Effect Wrapper Component
export const GlassEffect = ({
  children,
  className = "",
  style = {},
  href,
  target = "_blank",
}) => {
  const glassStyle = {
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.4)",
    transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1.4)",
    ...style,
  };

  const content = (
    <div
      className={`relative flex flex-col font-semibold overflow-hidden text-white cursor-pointer transition-all duration-700 ${className}`}
      style={glassStyle}
    >
      {/* Glass Layers */}
      <div
        className="absolute inset-0 z-0 overflow-hidden rounded-[inherit]"
        style={{
          backdropFilter: "blur(12px) saturate(180%)",
          WebkitBackdropFilter: "blur(12px) saturate(180%)",
          filter: "url(#glass-distortion)",
          isolation: "isolate",
        }}
      />
      <div
        className="absolute inset-0 z-10 rounded-[inherit] overflow-hidden pointer-events-none"
        style={{ background: "rgba(255, 255, 255, 0.05)" }}
      />
      <div
        className="absolute inset-0 z-20 rounded-[inherit] overflow-hidden pointer-events-none"
        style={{
          boxShadow:
            "inset 1.5px 1.5px 1px 0 rgba(255, 255, 255, 0.35), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.15)",
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
export const GlassFilter = () => (
  <svg style={{ display: "none" }} aria-hidden="true">
    <filter
      id="glass-distortion"
      x="0%"
      y="0%"
      width="100%"
      height="100%"
      filterUnits="objectBoundingBox"
    >
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.001 0.005"
        numOctaves="1"
        seed="17"
        result="turbulence"
      />
      <feComponentTransfer in="turbulence" result="mapped">
        <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
        <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
        <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
      </feComponentTransfer>
      <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
      <feSpecularLighting
        in="softMap"
        surfaceScale="5"
        specularConstant="1"
        specularExponent="100"
        lightingColor="white"
        result="specLight"
      >
        <fePointLight x="-200" y="-200" z="300" />
      </feSpecularLighting>
      <feComposite
        in="specLight"
        operator="arithmetic"
        k1="0"
        k2="1"
        k3="1"
        k4="0"
        result="litImage"
      />
      <feDisplacementMap
        in="SourceGraphic"
        in2="softMap"
        scale="80"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </svg>
);

import React from 'react'

// HTML5 Icon
export function HTMLIcon({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#e34f26" className={className} style={{ width: size, height: size, ...style }} aria-hidden="true">
      <path fillRule="evenodd" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
    </svg>
  )
}

// CSS3 Icon
export function CSSIcon({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#1572b6" className={className} style={{ width: size, height: size, ...style }} aria-hidden="true">
      <path fillRule="evenodd" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
    </svg>
  )
}

// JavaScript Icon (yellow square with transparent letters using evenodd)
export function JavaScriptIcon({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#f7df1e" className={className} style={{ width: size, height: size, ...style }} aria-hidden="true">
      <path fillRule="evenodd" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
    </svg>
  )
}

// TypeScript Icon (blue square with transparent letters using evenodd)
export function TypeScriptIcon({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#3178c6" className={className} style={{ width: size, height: size, ...style }} aria-hidden="true">
      <path fillRule="evenodd" d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
    </svg>
  )
}

// React Icon
export function ReactIcon({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={{ width: size, height: size, ...style }} aria-hidden="true">
      <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61dafb" strokeWidth="1.2" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61dafb" strokeWidth="1.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61dafb" strokeWidth="1.2" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="2" fill="#61dafb" />
    </svg>
  )
}

// Next.js Icon
export function NextjsIcon({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} style={{ width: size, height: size, ...style }} aria-hidden="true">
      <circle cx="12" cy="12" r="11" stroke="currentColor" fill="none" />
      <path d="M7.5 16.5V7.5L16.5 16.5M16.5 7.5v9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Tailwind CSS Icon
export function TailwindIcon({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#38bdf8" className={className} style={{ width: size, height: size, ...style }} aria-hidden="true">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.637C13.666 10.62 15.006 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.637C16.336 6.18 14.996 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.637C7.666 17.82 9.006 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.637C10.336 13.38 8.996 12 6.001 12z" />
    </svg>
  )
}

// Python Icon (Official monochromatic path from Simple Icons with fillRule="evenodd")
export function PythonIcon({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#3776ab" className={className} style={{ width: size, height: size, ...style }} aria-hidden="true">
      <path fillRule="evenodd" d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
    </svg>
  )
}

// FastAPI Icon
export function FastAPIIcon({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#009688" className={className} style={{ width: size, height: size, ...style }} aria-hidden="true">
      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm-1.125 18.281v-4.594H7.594l6.094-8.906v4.594h3.281l-6.094 8.906z" />
    </svg>
  )
}

// Node.js Icon
export function NodejsIcon({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#339933" className={className} style={{ width: size, height: size, ...style }} aria-hidden="true">
      <path d="M12 0L1.732 5.928v11.844L12 24.015l10.268-6.243V5.928L12 0zm8.384 16.71L12 21.841l-8.384-5.13V7.072L12 1.942l8.384 5.13v9.638zM12 4.417L5.807 8.01v6.98L12 18.593l6.193-3.603V8.01L12 4.417z" />
    </svg>
  )
}

// Figma Icon
export function FigmaIcon({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={{ width: size, height: size, ...style }} aria-hidden="true">
      <path d="M4 4c0-2.21 1.79-4 4-4h4v8H8c-2.21 0-4-1.79-4-4z" fill="#F24E1E" />
      <path d="M12 0h4c2.21 0 4 1.79 4 4s-1.79 4-4 4h-4V0z" fill="#A259FF" />
      <path d="M12 8h4c2.21 0 4 1.79 4 4s-1.79 4-4 4h-4V8z" fill="#1ABCFE" />
      <path d="M4 12c0-2.21 1.79-4 4-4h4v8H8c-2.21 0-4-1.79-4-4z" fill="#0ACF83" />
      <path d="M4 20c0-2.21 1.79-4 4-4h4v4c0 2.21-1.79 4-4 4s-4-1.79-4-4z" fill="#FF7262" />
    </svg>
  )
}

// Git Icon
export function GitIcon({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#F05032" className={className} style={{ width: size, height: size, ...style }} aria-hidden="true">
      <path d="M23.27 10.56L13.44.73a2.07 2.07 0 0 0-2.92 0L8.71 2.54l3.29 3.29a2.07 2.07 0 0 1 2.87 0 2.07 2.07 0 0 1 0 2.87l-3.3 3.3a2.07 2.07 0 0 1-2.92 0 2.07 2.07 0 0 1 0-2.87l1.04-1.04-3.3-3.3L.73 10.56a2.07 2.07 0 0 0 0 2.92l9.83 9.83a2.07 2.07 0 0 0 2.92 0l9.79-9.83a2.07 2.07 0 0 0 0-2.92z" />
    </svg>
  )
}

// GitHub Icon (standard octocat SVG)
export function GitHubTechIcon({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={{ width: size, height: size, ...style }} aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

// VS Code Icon
export function VSCodeIcon({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#007ACC" className={className} style={{ width: size, height: size, ...style }} aria-hidden="true">
      <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
    </svg>
  )
}

// Vercel Icon
export function VercelIcon({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={{ width: size, height: size, ...style }} aria-hidden="true">
      <path d="M24 22.525H0L12 1.745z" />
    </svg>
  )
}

// ChatGPT Icon (OpenAI swirl logo)
export function ChatGPTIcon({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={{ width: size, height: size, color: '#10a37f', ...style }} aria-hidden="true">
      <path fillRule="evenodd" d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  )
}

// Claude Icon (Anthropic symbol)
export function ClaudeIcon({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={{ width: size, height: size, color: '#d97753', ...style }} aria-hidden="true">
      <path fillRule="evenodd" d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" />
    </svg>
  )
}

// Gemini Icon (4-point sparkle)
export function GeminiIcon({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={{ width: size, height: size, ...style }} aria-hidden="true">
      <path d="M12 0c0 6.627-5.373 12-12 12 6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" fill="url(#gemini-glow)" />
      <defs>
        <linearGradient id="gemini-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9b51e0" />
          <stop offset="50%" stopColor="#4a90e2" />
          <stop offset="100%" stopColor="#50e3c2" />
        </linearGradient>
      </defs>
    </svg>
  )
}

// OpenCode Icon (Square frame with centered cutout — official brand)
export function OpenCodeIcon({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={{ width: size, height: size, ...style }} aria-hidden="true">
      <rect x="1" y="1" width="22" height="22" rx="3" fill="#131010" />
      <path d="M18 19H6V5h12v14z" fill="white" />
      <path d="M15 8H9v8h6V8z" fill="#131010" />
    </svg>
  )
}

// Google Antigravity IDE Icon (Gravitational ripples with a center node)
export function AntigravityIcon({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={{ width: size, height: size, ...style }} aria-hidden="true">
      {/* Glowing core */}
      <circle cx="12" cy="12" r="3" fill="#ffffff" className="animate-pulse" />
      {/* Gravitational ripples */}
      <circle cx="12" cy="12" r="7" stroke="#ffffff" strokeWidth="1" strokeDasharray="4 2" opacity="0.4" />
      <circle cx="12" cy="12" r="10" stroke="#ffffff" strokeWidth="1" opacity="0.2" />
      {/* Antigravity arrow */}
      <path d="M12 16V8M9 11l3-3 3 3" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// REST API Icon (Database with server endpoints)
export function RESTAPIIcon({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={{ width: size, height: size, ...style }} aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  )
}

// Design Systems Icon (Layers/Component stack)
export function DesignSystemsIcon({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={{ width: size, height: size, ...style }} aria-hidden="true">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  )
}

// Responsive Design Icon (Monitor, tablet, phone)
export function ResponsiveIcon({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={{ width: size, height: size, ...style }} aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  )
}

// Wireframing Icon (Layout grid/blueprint)
export function WireframingIcon({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={{ width: size, height: size, ...style }} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 3v18M3 9h18M3 15h18" />
    </svg>
  )
}

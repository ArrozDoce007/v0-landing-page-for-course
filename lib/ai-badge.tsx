'use client'

export default function AIBadge() {
  return (
    <div className="relative w-14 h-14 sm:w-16 sm:h-16">
      <svg
        viewBox="0 0 48 48"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>
            {`
              @keyframes drawBubble {
                0% {
                  stroke-dashoffset: 200;
                }
                100% {
                  stroke-dashoffset: 0;
                }
              }

              @keyframes drawPencil {
                0% {
                  opacity: 0;
                  transform: translate(-10px, 10px) rotate(-45deg);
                }
                50% {
                  opacity: 1;
                }
                100% {
                  opacity: 1;
                  transform: translate(0, 0) rotate(0deg);
                }
              }

              @keyframes float {
                0%, 100% {
                  transform: translateY(0px);
                }
                50% {
                  transform: translateY(-4px);
                }
              }

              .thought-bubble {
                stroke-dasharray: 200;
                animation: drawBubble 2s ease-in-out infinite;
              }

              .pencil-icon {
                animation: drawPencil 2s ease-in-out infinite;
                transform-origin: center;
              }

              .bubble-group {
                animation: float 3s ease-in-out infinite;
              }
            `}
          </style>
        </defs>

        {/* Animated thought bubble */}
        <g className="bubble-group">
          {/* Main bubble */}
          <path
            className="thought-bubble"
            d="M 8 10 Q 8 4 14 4 L 34 4 Q 40 4 40 10 L 40 28 Q 40 34 34 34 L 16 34 L 12 40 L 14 34 L 14 34 Q 8 34 8 28 Z"
            fill="url(#gradientBubble)"
            stroke="#ffa02d"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="gradientBubble" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="" />
              <stop offset="100%" stopColor="#ff6b35" />
            </linearGradient>
          </defs>

          <text
            x="24"
            y="22"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize="14"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            IA
          </text>
        </g>

        {/* Animated pencil */}
        <g className="pencil-icon" style={{ originX: '36px', originY: '8px' }}>
          {/* Pencil body */}
          <rect x="32" y="6" width="16" height="3" fill="#ffffff" rx="0.75" />
        </g>
      </svg>

      {/* Fallback text overlay for accessibility */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white font-bold text-lg pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
          IA
        </span>
      </div>
    </div>
  )
}

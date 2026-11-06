import React, { useMemo } from 'react';

interface AmbientStar {
  id: number;
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
  color: string;
  type: 'cross' | 'dot' | 'sparkle';
}

export const DreamyStarsBackdrop: React.FC = () => {
  const stars: AmbientStar[] = useMemo(() => {
    const list: AmbientStar[] = [];
    const colors = ['#ffffff', '#fff7c2', '#d4f4ff', '#f5dcff', '#ffd4e5'];
    const types: AmbientStar['type'][] = ['cross', 'sparkle', 'dot', 'dot'];

    for (let i = 0; i < 48; i++) {
      list.push({
        id: i,
        top: `${(Math.random() * 96).toFixed(1)}%`,
        left: `${(Math.random() * 96).toFixed(1)}%`,
        size: Math.random() * 3.5 + 1.5,
        duration: Math.random() * 3 + 2.5, // 2.5s to 5.5s
        delay: Math.random() * 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: types[Math.floor(Math.random() * types.length)],
      });
    }
    return list;
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Soft Ethereal Aurora Blobs */}
      <div 
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-25 animate-pulse"
        style={{
          background: 'radial-gradient(circle, #7928ca 0%, #4338ca 50%, transparent 70%)',
          animationDuration: '8s'
        }}
      />
      <div 
        className="absolute top-1/3 -right-28 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse"
        style={{
          background: 'radial-gradient(circle, #06b6d4 0%, #3b82f6 50%, transparent 70%)',
          animationDuration: '10s',
          animationDelay: '3s'
        }}
      />
      <div 
        className="absolute -bottom-24 left-1/4 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-20 animate-pulse"
        style={{
          background: 'radial-gradient(circle, #db2777 0%, #7c3aed 50%, transparent 70%)',
          animationDuration: '12s',
          animationDelay: '1.5s'
        }}
      />

      {/* Floating Starfield Elements */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute"
          style={{
            top: star.top,
            left: star.left,
            animation: `twinkleFade ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
          }}
        >
          {star.type === 'cross' || star.type === 'sparkle' ? (
            <svg
              width={star.size * 5}
              height={star.size * 5}
              viewBox="0 0 24 24"
              className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
              style={{ color: star.color }}
            >
              <path
                fill="currentColor"
                d="M12 0 L13.5 9.5 L24 12 L13.5 14.5 L12 24 L10.5 14.5 L0 12 L10.5 9.5 Z"
              />
            </svg>
          ) : (
            <div
              className="rounded-full shadow-lg"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                backgroundColor: star.color,
                boxShadow: `0 0 10px ${star.color}, 0 0 20px ${star.color}`,
              }}
            />
          )}
        </div>
      ))}

      <style>{`
        @keyframes twinkleFade {
          0%, 100% {
            opacity: 0.15;
            transform: scale(0.8) rotate(0deg);
          }
          50% {
            opacity: 0.95;
            transform: scale(1.25) rotate(45deg);
          }
        }
      `}</style>
    </div>
  );
};

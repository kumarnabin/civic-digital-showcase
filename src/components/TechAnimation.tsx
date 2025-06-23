
import React from 'react';
import { Code, Cpu, Database, Globe, Zap, Layers } from 'lucide-react';

const TechAnimation = () => {
  const techIcons = [
    { Icon: Code, delay: '0s', x: '10%', y: '20%' },
    { Icon: Cpu, delay: '0.5s', x: '80%', y: '30%' },
    { Icon: Database, delay: '1s', x: '20%', y: '70%' },
    { Icon: Globe, delay: '1.5s', x: '70%', y: '80%' },
    { Icon: Zap, delay: '2s', x: '50%', y: '15%' },
    { Icon: Layers, delay: '2.5s', x: '85%', y: '60%' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {techIcons.map(({ Icon, delay, x, y }, index) => (
        <div
          key={index}
          className="absolute animate-float opacity-20 text-white"
          style={{
            left: x,
            top: y,
            animationDelay: delay,
            animationDuration: '6s'
          }}
        >
          <Icon className="w-8 h-8" />
        </div>
      ))}
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-orange-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-3/4 left-3/4 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    </div>
  );
};

export default TechAnimation;

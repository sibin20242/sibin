import { useState, useEffect } from 'react';
import profileAvatar from '@/assets/profile-avatar.jpg';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const loadingMessages = [
    'Initializing...',
    'Loading portfolio...',
    'Preparing experience...',
    'Almost ready...',
    'Welcome!'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onLoadingComplete, 500);
          }, 800);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  useEffect(() => {
    const messageIndex = Math.floor((progress / 100) * (loadingMessages.length - 1));
    setLoadingText(loadingMessages[messageIndex] || loadingMessages[0]);
  }, [progress]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`fixed inset-0 z-50 bg-gradient-to-br from-background via-background/95 to-primary/5 flex items-center justify-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center space-y-8 animate-fade-in">
        {/* Profile image with glow effect */}
        <div className="relative group">
          <div className="w-32 h-32 mx-auto relative">
            {/* Animated ring */}
            <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-spin-slow"></div>
            <div className="absolute inset-2 rounded-full border-2 border-secondary/40 animate-spin-reverse"></div>
            
            {/* Profile image */}
            <img
              src={profileAvatar}
              alt="Sibin K S"
              className="absolute inset-3 w-26 h-26 rounded-full object-cover border-2 border-background shadow-2xl"
            />
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl animate-pulse-glow"></div>
          </div>
        </div>

        {/* Name with gradient effect */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text animate-slide-up">
            Sibin K S
          </h1>
          <p className="text-lg text-muted-foreground animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Full Stack Developer
          </p>
        </div>

        {/* Loading text with typewriter effect */}
        <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-primary font-medium tracking-wide min-h-[1.5rem]">
            {loadingText}
            <span className="animate-pulse ml-1">.</span>
            <span className="animate-pulse ml-0.5" style={{ animationDelay: '0.2s' }}>.</span>
            <span className="animate-pulse ml-0.5" style={{ animationDelay: '0.4s' }}>.</span>
          </p>

          {/* Progress bar */}
          <div className="w-64 mx-auto">
            <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-2 tabular-nums">
              {progress}%
            </p>
          </div>
        </div>

        {/* Floating icons */}
        <div className="absolute -top-20 -left-20 w-8 h-8 rounded-full bg-gradient-primary animate-float opacity-60"></div>
        <div className="absolute -bottom-20 -right-20 w-6 h-6 rounded-full bg-gradient-accent animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-10 -right-32 w-4 h-4 rounded-full bg-gradient-secondary animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

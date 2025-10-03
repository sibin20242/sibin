import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadingScreen } from "@/components/LoadingScreen";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Preload critical resources
    const preloadImages = async () => {
      // Import the images to get the correct Vite URLs
      const profileAvatar = (await import('@/assets/profile-avatar.jpg')).default;
      const heroBg = (await import('@/assets/hero-bg.jpg')).default;
      const sibin = (await import('@/assets/sibin.jpeg')).default;
      
      const imageUrls = [profileAvatar, heroBg, sibin];

      const imagePromises = imageUrls.map((url) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve; // Don't fail if image doesn't load
          img.src = url;
        });
      });

      await Promise.all(imagePromises);
    };

    // Simulate minimum loading time and preload resources
    const loadResources = async () => {
      await Promise.all([
        preloadImages(),
        new Promise(resolve => setTimeout(resolve, 2000)) // Minimum 2s loading
      ]);
    };

    loadResources();
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
        <div className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

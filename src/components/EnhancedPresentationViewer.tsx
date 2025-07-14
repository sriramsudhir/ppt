import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Monitor, Download, Play, Pause, Settings } from 'lucide-react';
import { Slide } from '../types/presentation';

interface EnhancedPresentationViewerProps {
  slides: Slide[];
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
}

export const EnhancedPresentationViewer: React.FC<EnhancedPresentationViewerProps> = ({ 
  slides, 
  currentSlide, 
  setCurrentSlide 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showAnimations, setShowAnimations] = useState(true);
  const [transitionInProgress, setTransitionInProgress] = useState(false);
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set());

  const slide = slides[currentSlide];

  useEffect(() => {
    if (slide && showAnimations) {
      setAnimatedElements(new Set());
      // Trigger animations after slide transition
      setTimeout(() => {
        const newAnimatedElements = new Set<string>();
        slide.elements.forEach(element => {
          if (element.animation) {
            setTimeout(() => {
              setAnimatedElements(prev => new Set([...prev, element.id]));
            }, element.animation.delay);
          }
        });
      }, slide.transition.duration);
    }
  }, [currentSlide, slide, showAnimations]);

  const handleSlideChange = (newIndex: number) => {
    if (newIndex >= 0 && newIndex < slides.length && !transitionInProgress) {
      setTransitionInProgress(true);
      setCurrentSlide(newIndex);
      setTimeout(() => {
        setTransitionInProgress(false);
      }, slides[newIndex]?.transition.duration || 800);
    }
  };

  const toggleSlideshow = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      // Auto-advance slides every 5 seconds
      const interval = setInterval(() => {
        setCurrentSlide(prev => {
          if (prev >= slides.length - 1) {
            setIsPlaying(false);
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 5000);
    }
  };

  const getTransitionClass = (transition: Slide['transition']) => {
    const baseClass = `transition-all duration-${transition.duration}`;
    
    switch (transition.type) {
      case 'slide':
        return `${baseClass} ${transitionInProgress ? 'transform translate-x-full' : 'transform translate-x-0'}`;
      case 'fade':
        return `${baseClass} ${transitionInProgress ? 'opacity-0' : 'opacity-100'}`;
      case 'zoom':
        return `${baseClass} ${transitionInProgress ? 'transform scale-0' : 'transform scale-100'}`;
      case 'flip':
        return `${baseClass} ${transitionInProgress ? 'transform rotateY-180' : 'transform rotateY-0'}`;
      default:
        return baseClass;
    }
  };

  const getAnimationClass = (elementId: string, animation?: any) => {
    if (!animation || !showAnimations) return '';
    
    const isAnimated = animatedElements.has(elementId);
    const baseClass = `transition-all duration-${animation.duration}`;
    
    switch (animation.type) {
      case 'fadeIn':
        return `${baseClass} ${isAnimated ? 'opacity-100' : 'opacity-0'}`;
      case 'slideIn':
        const direction = animation.direction || 'left';
        const translateClass = {
          left: isAnimated ? 'translate-x-0' : '-translate-x-full',
          right: isAnimated ? 'translate-x-0' : 'translate-x-full',
          up: isAnimated ? 'translate-y-0' : '-translate-y-full',
          down: isAnimated ? 'translate-y-0' : 'translate-y-full'
        };
        return `${baseClass} transform ${translateClass[direction]}`;
      case 'zoomIn':
        return `${baseClass} transform ${isAnimated ? 'scale-100' : 'scale-0'}`;
      case 'bounceIn':
        return `${baseClass} transform ${isAnimated ? 'scale-100' : 'scale-0'} ${animation.easing === 'bounce' ? 'animate-bounce' : ''}`;
      case 'rotateIn':
        return `${baseClass} transform ${isAnimated ? 'rotate-0' : 'rotate-180'}`;
      case 'flipIn':
        return `${baseClass} transform ${isAnimated ? 'rotateX-0' : 'rotateX-90'}`;
      default:
        return baseClass;
    }
  };

  const getBackgroundStyle = (background: Slide['background']) => {
    switch (background.type) {
      case 'solid':
        return { backgroundColor: background.color };
      case 'gradient':
        return {
          background: `linear-gradient(${background.gradient?.direction}, ${background.gradient?.from}, ${background.gradient?.to})`
        };
      case 'image':
        return {
          backgroundImage: `url(${background.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        };
      default:
        return {};
    }
  };

  return (
    <div className="h-full flex flex-col bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <Monitor className="w-5 h-5 text-purple-600" />
          <h3 className="text-lg font-semibold text-gray-800">Enhanced PowerPoint Preview</h3>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleSlideshow}
            className={`flex items-center space-x-2 px-3 py-1 rounded-md transition-colors ${
              isPlaying ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
            }`}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isPlaying ? 'Stop' : 'Play'}</span>
          </button>
          <button
            onClick={() => setShowAnimations(!showAnimations)}
            className={`flex items-center space-x-2 px-3 py-1 rounded-md transition-colors ${
              showAnimations ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Animations</span>
          </button>
          <span className="text-sm text-gray-600">
            {slides.length > 0 ? `${currentSlide + 1} / ${slides.length}` : '0 / 0'}
          </span>
          <button className="flex items-center space-x-2 px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Slide Thumbnails */}
        <div className="w-48 bg-gray-100 border-r border-gray-200 overflow-y-auto">
          <div className="p-2 space-y-2">
            {slides.map((slideItem, index) => (
              <div
                key={slideItem.id}
                onClick={() => handleSlideChange(index)}
                className={`p-2 rounded-lg cursor-pointer transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-purple-100 border-2 border-purple-400 shadow-md' 
                    : 'bg-white hover:bg-gray-50 border-2 border-transparent hover:shadow-sm'
                }`}
              >
                <div 
                  className="aspect-video bg-white rounded border border-gray-200 p-2 overflow-hidden"
                  style={getBackgroundStyle(slideItem.background)}
                >
                  <div className="text-xs font-semibold text-white truncate drop-shadow-sm">
                    {slideItem.title || `Slide ${index + 1}`}
                  </div>
                  <div className="text-xs text-gray-200 mt-1 truncate drop-shadow-sm">
                    {slideItem.content}
                  </div>
                  {slideItem.transition.type !== 'fade' && (
                    <div className="text-xs text-yellow-300 mt-1">
                      {slideItem.transition.type}
                    </div>
                  )}
                </div>
                <div className="text-xs text-gray-500 mt-1 text-center">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Slide View */}
        <div className="flex-1 flex flex-col">
          {slides.length > 0 ? (
            <>
              <div className="flex-1 flex items-center justify-center p-8">
                <div 
                  className={`w-full max-w-4xl aspect-video rounded-lg shadow-2xl border border-gray-200 overflow-hidden relative ${getTransitionClass(slide.transition)}`}
                  style={getBackgroundStyle(slide.background)}
                >
                  {/* Slide Elements */}
                  {slide.elements.map((element) => (
                    <div
                      key={element.id}
                      className={`absolute ${getAnimationClass(element.id, element.animation)}`}
                      style={{
                        left: `${(element.position.x / 800) * 100}%`,
                        top: `${(element.position.y / 600) * 100}%`,
                        width: `${(element.size.width / 800) * 100}%`,
                        height: `${(element.size.height / 600) * 100}%`,
                        fontSize: element.style.fontSize,
                        fontFamily: element.style.fontFamily,
                        color: element.style.color,
                        backgroundColor: element.style.backgroundColor,
                        borderRadius: element.style.borderRadius,
                        boxShadow: element.style.shadow ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
                        display: 'flex',
                        alignItems: element.type === 'text' ? 'center' : 'stretch',
                        justifyContent: element.type === 'text' ? 'flex-start' : 'center',
                        padding: element.type === 'text' ? '1rem' : '0'
                      }}
                    >
                      {element.type === 'text' && (
                        <div className="whitespace-pre-wrap leading-relaxed">
                          {element.content}
                        </div>
                      )}
                      {element.type === 'shape' && (
                        <div 
                          className="w-full h-full"
                          style={{
                            backgroundColor: element.style.backgroundColor,
                            borderRadius: element.style.borderRadius
                          }}
                        />
                      )}
                    </div>
                  ))}

                  {/* Default content for slides without custom elements */}
                  {slide.elements.length === 0 && (
                    <div className="h-full flex flex-col justify-center items-center text-center p-8">
                      {slide.layout === 'title' ? (
                        <>
                          <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
                            {slide.title}
                          </h1>
                          <p className="text-xl text-gray-100 drop-shadow-md">
                            {slide.content}
                          </p>
                        </>
                      ) : (
                        <>
                          <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">
                            {slide.title}
                          </h2>
                          <div className="text-lg text-gray-100 whitespace-pre-wrap drop-shadow-md max-w-3xl">
                            {slide.content}
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center items-center p-4 bg-gray-50 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleSlideChange(currentSlide - 1)}
                    disabled={currentSlide === 0 || transitionInProgress}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400 text-gray-700 rounded-l-md transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>
                  
                  <div className="flex space-x-1">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleSlideChange(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentSlide ? 'bg-purple-600' : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={() => handleSlideChange(currentSlide + 1)}
                    disabled={currentSlide === slides.length - 1 || transitionInProgress}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400 text-gray-700 rounded-r-md transition-colors"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <Monitor className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-lg text-gray-600">No slides to display</p>
                <p className="text-sm text-gray-500">Execute your enhanced VBA code to generate animated slides</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
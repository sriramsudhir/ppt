import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Monitor, 
  Download, 
  Play, 
  Pause, 
  Settings,
  Maximize,
  RotateCcw,
  Zap,
  Layers,
  Palette,
  MousePointer
} from 'lucide-react';
import { Slide, SlideElement, AnimationEffect } from '../types/powerpointEffects';

interface CompletePresentationViewerProps {
  slides: Slide[];
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
}

export const CompletePresentationViewer: React.FC<CompletePresentationViewerProps> = ({ 
  slides, 
  currentSlide, 
  setCurrentSlide 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showAnimations, setShowAnimations] = useState(true);
  const [showTransitions, setShowTransitions] = useState(true);
  const [transitionInProgress, setTransitionInProgress] = useState(false);
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set());
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [animationSpeed, setAnimationSpeed] = useState(1);

  const slide = slides[currentSlide];

  useEffect(() => {
    if (slide && showAnimations) {
      setAnimatedElements(new Set());
      
      // Trigger animations after slide transition
      const transitionDelay = showTransitions ? slide.transition.duration : 0;
      
      setTimeout(() => {
        slide.elements.forEach(element => {
          element.animations?.forEach(animation => {
            setTimeout(() => {
              setAnimatedElements(prev => new Set([...prev, element.id]));
            }, animation.delay / animationSpeed);
          });
        });
      }, transitionDelay);
    }
  }, [currentSlide, slide, showAnimations, showTransitions, animationSpeed]);

  const handleSlideChange = (newIndex: number) => {
    if (newIndex >= 0 && newIndex < slides.length && !transitionInProgress) {
      setTransitionInProgress(true);
      setCurrentSlide(newIndex);
      
      const transitionDuration = showTransitions ? slides[newIndex]?.transition.duration || 800 : 0;
      setTimeout(() => {
        setTransitionInProgress(false);
      }, transitionDuration);
    }
  };

  const toggleSlideshow = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
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

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
    setIsFullscreen(!isFullscreen);
  };

  const getTransitionClass = (transition: Slide['transition']) => {
    if (!showTransitions) return '';
    
    const duration = Math.round(transition.duration / animationSpeed);
    const baseClass = `transition-all duration-[${duration}ms]`;
    
    switch (transition.type) {
      case 'slide':
        return `${baseClass} ${transitionInProgress ? 'transform translate-x-full' : 'transform translate-x-0'}`;
      case 'fade':
        return `${baseClass} ${transitionInProgress ? 'opacity-0' : 'opacity-100'}`;
      case 'zoom':
        return `${baseClass} ${transitionInProgress ? 'transform scale-0' : 'transform scale-100'}`;
      case 'flip':
        return `${baseClass} ${transitionInProgress ? 'transform rotateY-180' : 'transform rotateY-0'}`;
      case 'cube':
        return `${baseClass} ${transitionInProgress ? 'transform rotateX-90' : 'transform rotateX-0'}`;
      case 'dissolve':
        return `${baseClass} ${transitionInProgress ? 'opacity-0 blur-sm' : 'opacity-100 blur-0'}`;
      default:
        return baseClass;
    }
  };

  const getAnimationClass = (element: SlideElement, animation: AnimationEffect) => {
    if (!showAnimations) return '';
    
    const isAnimated = animatedElements.has(element.id);
    const duration = Math.round(animation.duration / animationSpeed);
    const baseClass = `transition-all duration-[${duration}ms]`;
    
    switch (animation.category) {
      case 'entrance':
        switch (animation.type) {
          case 'basic':
            if (animation.name.includes('Fade')) {
              return `${baseClass} ${isAnimated ? 'opacity-100' : 'opacity-0'}`;
            } else if (animation.name.includes('Fly')) {
              const direction = animation.direction || 'left';
              const translateClass = {
                left: isAnimated ? 'translate-x-0' : '-translate-x-full',
                right: isAnimated ? 'translate-x-0' : 'translate-x-full',
                up: isAnimated ? 'translate-y-0' : '-translate-y-full',
                down: isAnimated ? 'translate-y-0' : 'translate-y-full'
              };
              return `${baseClass} transform ${translateClass[direction as keyof typeof translateClass]}`;
            } else if (animation.name.includes('Zoom')) {
              return `${baseClass} transform ${isAnimated ? 'scale-100' : 'scale-0'}`;
            }
            break;
          case 'subtle':
            return `${baseClass} ${isAnimated ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95'}`;
          case 'moderate':
            if (animation.name.includes('Bounce')) {
              return `${baseClass} transform ${isAnimated ? 'scale-100' : 'scale-0'} ${animation.easing === 'bounce' ? 'animate-bounce' : ''}`;
            } else if (animation.name.includes('Spiral')) {
              return `${baseClass} transform ${isAnimated ? 'rotate-0 scale-100' : 'rotate-180 scale-0'}`;
            }
            break;
          case 'exciting':
            if (animation.name.includes('Airplane')) {
              return `${baseClass} transform ${isAnimated ? 'translate-x-0 rotate-0' : '-translate-x-full rotate-12'}`;
            } else if (animation.name.includes('Flip')) {
              return `${baseClass} transform ${isAnimated ? 'rotateY-0' : 'rotateY-90'}`;
            }
            break;
        }
        break;
        
      case 'emphasis':
        if (animation.name.includes('Pulse')) {
          return `${baseClass} ${isAnimated ? 'animate-pulse' : ''}`;
        } else if (animation.name.includes('Grow')) {
          return `${baseClass} transform ${isAnimated ? 'scale-110' : 'scale-100'}`;
        } else if (animation.name.includes('Spin')) {
          return `${baseClass} transform ${isAnimated ? 'rotate-360' : 'rotate-0'}`;
        }
        break;
        
      case 'exit':
        switch (animation.type) {
          case 'basic':
            if (animation.name.includes('Fade')) {
              return `${baseClass} ${isAnimated ? 'opacity-0' : 'opacity-100'}`;
            } else if (animation.name.includes('Fly')) {
              const direction = animation.direction || 'right';
              const translateClass = {
                left: isAnimated ? '-translate-x-full' : 'translate-x-0',
                right: isAnimated ? 'translate-x-full' : 'translate-x-0',
                up: isAnimated ? '-translate-y-full' : 'translate-y-0',
                down: isAnimated ? 'translate-y-full' : 'translate-y-0'
              };
              return `${baseClass} transform ${translateClass[direction as keyof typeof translateClass]}`;
            }
            break;
        }
        break;
        
      case 'motionPath':
        if (animation.motionPath) {
          const path = animation.motionPath;
          if (path.type === 'custom' && path.points.length > 1) {
            const startPoint = path.points[0];
            const endPoint = path.points[path.points.length - 1];
            return `${baseClass} transform ${isAnimated ? 
              `translate-x-[${endPoint.x}px] translate-y-[${endPoint.y}px]` : 
              `translate-x-[${startPoint.x}px] translate-y-[${startPoint.y}px]`}`;
          }
        }
        break;
    }
    
    return `${baseClass} ${isAnimated ? 'opacity-100' : 'opacity-0'}`;
  };

  const getBackgroundStyle = (background: Slide['background']) => {
    switch (background.type) {
      case 'solid':
        return { backgroundColor: background.fill };
      case 'gradient':
        if (background.fill?.type === 'linear') {
          const stops = background.fill.stops?.map(stop => 
            `${stop.color} ${stop.position}%`
          ).join(', ') || '';
          return {
            background: `linear-gradient(${background.fill.angle}deg, ${stops})`
          };
        }
        return {};
      case 'picture':
        return {
          backgroundImage: `url(${background.fill})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        };
      case 'texture':
        return {
          backgroundImage: `url(data:image/svg+xml,${encodeURIComponent(`
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="texture" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect width="20" height="20" fill="#f0f0f0"/>
                  <circle cx="10" cy="10" r="2" fill="#ddd"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#texture)"/>
            </svg>
          `)})`,
          backgroundRepeat: 'repeat'
        };
      default:
        return {};
    }
  };

  const renderSlideElement = (element: SlideElement) => {
    const animations = element.animations || [];
    const primaryAnimation = animations[0];
    
    return (
      <div
        key={element.id}
        className={`absolute ${primaryAnimation ? getAnimationClass(element, primaryAnimation) : ''}`}
        style={{
          left: `${(element.position.x / 800) * 100}%`,
          top: `${(element.position.y / 600) * 100}%`,
          width: `${(element.size.width / 800) * 100}%`,
          height: `${(element.size.height / 600) * 100}%`,
          transform: `rotate(${element.rotation}deg)`,
          zIndex: element.position.z
        }}
      >
        {element.type === 'text' && (
          <div 
            className="w-full h-full flex items-center justify-start p-4"
            style={{
              fontSize: element.style.textFormat?.size,
              fontFamily: element.style.textFormat?.font,
              color: element.style.textFormat?.color,
              backgroundColor: element.style.fill?.color,
              fontWeight: element.style.textFormat?.bold ? 'bold' : 'normal',
              fontStyle: element.style.textFormat?.italic ? 'italic' : 'normal',
              textDecoration: element.style.textFormat?.underline ? 'underline' : 'none',
              textAlign: element.style.textFormat?.alignment as any,
              lineHeight: element.style.textFormat?.lineSpacing,
              letterSpacing: element.style.textFormat?.characterSpacing,
              borderRadius: '8px',
              boxShadow: element.style.shadow ? 
                `${element.style.shadow.distance}px ${element.style.shadow.distance}px ${element.style.shadow.blur}px ${element.style.shadow.color}` : 
                'none'
            }}
          >
            <div className="whitespace-pre-wrap leading-relaxed">
              {element.content}
            </div>
          </div>
        )}
        
        {element.type === 'shape' && (
          <svg 
            className="w-full h-full"
            viewBox="0 0 100 50"
            style={{
              filter: element.style.shadow ? 
                `drop-shadow(${element.style.shadow.distance}px ${element.style.shadow.distance}px ${element.style.shadow.blur}px ${element.style.shadow.color})` : 
                'none'
            }}
          >
            <path
              d={element.content}
              fill={element.style.fill?.color || '#3b82f6'}
              stroke={element.style.outline?.color || '#1e40af'}
              strokeWidth={element.style.outline?.width || 2}
              opacity={1 - (element.style.fill?.transparency || 0) / 100}
            />
          </svg>
        )}
      </div>
    );
  };

  return (
    <div className={`h-full flex flex-col bg-white rounded-lg overflow-hidden shadow-lg ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}>
      {/* Header */}
      {showControls && (
        <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Monitor className="w-5 h-5 text-purple-600" />
            <h3 className="text-lg font-semibold text-gray-800">Complete PowerPoint Viewer</h3>
            <div className="flex items-center space-x-1 ml-4">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span className="text-sm text-gray-600">All Effects</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 bg-white rounded-md px-2 py-1 border">
              <span className="text-xs text-gray-600">Speed:</span>
              <select 
                value={animationSpeed} 
                onChange={(e) => setAnimationSpeed(parseFloat(e.target.value))}
                className="text-xs border-none outline-none bg-transparent"
              >
                <option value={0.5}>0.5x</option>
                <option value={1}>1x</option>
                <option value={1.5}>1.5x</option>
                <option value={2}>2x</option>
              </select>
            </div>
            
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
              <Layers className="w-4 h-4" />
              <span>Animations</span>
            </button>
            
            <button
              onClick={() => setShowTransitions(!showTransitions)}
              className={`flex items-center space-x-2 px-3 py-1 rounded-md transition-colors ${
                showTransitions ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700'
              }`}
            >
              <RotateCcw className="w-4 h-4" />
              <span>Transitions</span>
            </button>
            
            <button
              onClick={toggleFullscreen}
              className="flex items-center space-x-2 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-md transition-colors"
            >
              <Maximize className="w-4 h-4" />
              <span>Fullscreen</span>
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
      )}

      <div className="flex-1 flex">
        {/* Slide Thumbnails */}
        {showControls && (
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
                    className="aspect-video bg-white rounded border border-gray-200 p-2 overflow-hidden relative"
                    style={getBackgroundStyle(slideItem.background)}
                  >
                    <div className="text-xs font-semibold text-white truncate drop-shadow-sm">
                      {slideItem.title || `Slide ${index + 1}`}
                    </div>
                    <div className="text-xs text-gray-200 mt-1 truncate drop-shadow-sm">
                      {slideItem.content}
                    </div>
                    
                    {/* Transition indicator */}
                    {slideItem.transition.type !== 'fade' && (
                      <div className="absolute bottom-1 right-1 text-xs text-yellow-300 bg-black bg-opacity-50 px-1 rounded">
                        {slideItem.transition.name}
                      </div>
                    )}
                    
                    {/* Animation count indicator */}
                    {slideItem.elements.some(el => el.animations && el.animations.length > 0) && (
                      <div className="absolute top-1 right-1 text-xs text-blue-300 bg-black bg-opacity-50 px-1 rounded">
                        <Zap className="w-3 h-3" />
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
        )}

        {/* Main Slide View */}
        <div className="flex-1 flex flex-col">
          {slides.length > 0 ? (
            <>
              <div className="flex-1 flex items-center justify-center p-8">
                <div 
                  className={`w-full max-w-4xl aspect-video rounded-lg shadow-2xl border border-gray-200 overflow-hidden relative ${getTransitionClass(slide.transition)}`}
                  style={getBackgroundStyle(slide.background)}
                  onMouseEnter={() => setShowControls(true)}
                  onMouseLeave={() => isFullscreen && setShowControls(false)}
                >
                  {/* Slide Elements */}
                  {slide.elements.map(renderSlideElement)}

                  {/* Default content for slides without custom elements */}
                  {slide.elements.length === 0 && (
                    <div className="h-full flex flex-col justify-center items-center text-center p-8">
                      {slide.layout.type === 'title' ? (
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

                  {/* Morph transition indicator */}
                  {slide.transition.morph?.enabled && (
                    <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                      Morph: {slide.transition.morph.duration}ms
                    </div>
                  )}

                  {/* Zoom effect indicator */}
                  {slide.transition.zoom && (
                    <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                      {slide.transition.zoom.type}: {slide.transition.zoom.duration}ms
                    </div>
                  )}
                </div>
              </div>

              {/* Navigation */}
              {showControls && (
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
              )}
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <Monitor className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-lg text-gray-600">No slides to display</p>
                <p className="text-sm text-gray-500">Execute your complete VBA code to generate slides with all PowerPoint effects</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
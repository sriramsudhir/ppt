import React from 'react';
import { ChevronLeft, ChevronRight, Monitor, Download } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  content: string;
  layout: string;
}

interface PresentationViewerProps {
  slides: Slide[];
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
}

export const PresentationViewer: React.FC<PresentationViewerProps> = ({ 
  slides, 
  currentSlide, 
  setCurrentSlide 
}) => {
  const slide = slides[currentSlide];

  return (
    <div className="h-full flex flex-col bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <Monitor className="w-5 h-5 text-purple-600" />
          <h3 className="text-lg font-semibold text-gray-800">PowerPoint Preview</h3>
        </div>
        <div className="flex items-center space-x-2">
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
                onClick={() => setCurrentSlide(index)}
                className={`p-2 rounded-lg cursor-pointer transition-colors ${
                  index === currentSlide 
                    ? 'bg-purple-100 border-2 border-purple-400' 
                    : 'bg-white hover:bg-gray-50 border-2 border-transparent'
                }`}
              >
                <div className="aspect-video bg-white rounded border border-gray-200 p-2">
                  <div className="text-xs font-semibold text-gray-800 truncate">
                    {slideItem.title || `Slide ${index + 1}`}
                  </div>
                  <div className="text-xs text-gray-600 mt-1 truncate">
                    {slideItem.content}
                  </div>
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
                <div className="w-full max-w-4xl aspect-video bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                  <div className="h-full flex flex-col">
                    {slide.layout === 'title' ? (
                      <div className="flex-1 flex flex-col justify-center items-center text-center p-8">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">
                          {slide.title}
                        </h1>
                        <p className="text-xl text-gray-600">
                          {slide.content}
                        </p>
                      </div>
                    ) : (
                      <div className="flex-1 p-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">
                          {slide.title}
                        </h2>
                        <div className="text-lg text-gray-700 whitespace-pre-wrap">
                          {slide.content}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center items-center p-4 bg-gray-50 border-t border-gray-200">
                <button
                  onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                  disabled={currentSlide === 0}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400 text-gray-700 rounded-l-md transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
                <button
                  onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
                  disabled={currentSlide === slides.length - 1}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400 text-gray-700 rounded-r-md transition-colors"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <Monitor className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-lg text-gray-600">No slides to display</p>
                <p className="text-sm text-gray-500">Execute your VBA code to generate slides</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
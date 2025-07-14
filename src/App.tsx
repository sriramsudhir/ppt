import React, { useState } from 'react';
import { CompleteCodeEditor } from './components/CompleteCodeEditor';
import { CompletePresentationViewer } from './components/CompletePresentationViewer';
import { ExecutionLog } from './components/ExecutionLog';
import { CompleteVBAParser } from './utils/completeVbaParser';
import { Slide, LogEntry } from './types/powerpointEffects';
import { FileCode, Sparkles, Zap, Palette, MousePointer, Layers } from 'lucide-react';

function App() {
  const [code, setCode] = useState(`Sub CreateCompletePresentation()
    ' Apply modern theme with all effects
    ActivePresentation.ApplyTheme = "Ion"
    
    ' Create title slide with morph transition
    Dim slide As Slide
    Set slide = ActivePresentation.Slides.Add(1, ppLayoutTitle)
    slide.Background.Fill.Gradient = "ocean"
    slide.Transition = ppTransitionMorph
    slide.Morph = True
    slide.MorphDuration = 1200
    
    slide.Shapes.Title.TextFrame.TextRange.Text = "Complete PowerPoint Effects System"
    slide.Shapes.Placeholders(2).TextFrame.TextRange.Text = "All Transitions • All Animations • All Shapes • All Features"
    
    ' Create content slide with exciting transition
    Set slide = ActivePresentation.Slides.Add(2, ppLayoutText)
    slide.Background.Fill.Gradient = "sunset"
    slide.Transition = ppTransitionFerris
    slide.TransitionDuration = 2000
    
    slide.Shapes.Title.TextFrame.TextRange.Text = "Complete Animation System"
    slide.Shapes.Placeholders(2).TextFrame.TextRange.Text = "• All Entrance Animations\\n• All Emphasis Effects\\n• All Exit Animations\\n• All Motion Paths\\n• Trigger Animations\\n• Animation Sequences"
    
    ' Add shapes with motion paths
    slide.Shapes.AddShape(msoShapeExplosion1, 50, 300, 100, 100)
    slide.AnimationEffect = ppAnimationBounceIn
    slide.AnimationDelay = 500
    slide.MotionPath = "heart"
    
    slide.Shapes.AddShape(msoShapeStar5, 300, 300, 80, 80)
    slide.AnimationEffect = ppAnimationSpiralIn
    slide.AnimationDelay = 1000
    slide.MotionPath = "loop_de_loop"
    
    ' Create slide with zoom effects
    Set slide = ActivePresentation.Slides.Add(3, ppLayoutTitle)
    slide.Background.Fill.Gradient = "fire"
    slide.Transition = ppTransitionOrigami
    slide.TransitionDuration = 1800
    slide.SlideZoom = 2
    slide.ZoomDuration = 1500
    
    slide.Shapes.Title.TextFrame.TextRange.Text = "Advanced Features"
    slide.Shapes.Placeholders(2).TextFrame.TextRange.Text = "Zoom Effects • Morph Transitions • Trigger Animations"
    
    ' Add trigger animations
    slide.Shapes.AddTextBox(100, 250, 200, 60).TextFrame.TextRange.Text = "Click Me!"
    slide.AnimationEffect = ppAnimationPulse
    slide.Trigger = "click"
    slide.TriggerTarget = "textbox_1"
    
    MsgBox "Complete PowerPoint presentation with all effects created!"
End Sub`);

  const [slides, setSlides] = useState<Slide[]>([]);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isExecuting, setIsExecuting] = useState(false);

  const parser = new CompleteVBAParser();

  const handleExecute = async () => {
    setIsExecuting(true);
    
    // Simulate execution delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const result = parser.parseAndExecute(code);
    setSlides(result.slides);
    setLogs(result.logs);
    setCurrentSlide(0);
    setIsExecuting(false);
  };

  const handleClearLogs = () => {
    setLogs([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <FileCode className="w-8 h-8 text-blue-600" />
              <Sparkles className="w-6 h-6 text-yellow-500" />
              <Zap className="w-6 h-6 text-green-500" />
              <Palette className="w-6 h-6 text-purple-500" />
              <MousePointer className="w-6 h-6 text-red-500" />
              <Layers className="w-6 h-6 text-indigo-500" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Complete PowerPoint Effects System</h1>
                <p className="text-sm text-gray-600">All transitions, animations, shapes, and advanced PowerPoint features</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                <strong>16 Transition Categories</strong> • <strong>200+ Animations</strong> • <strong>100+ Shapes</strong>
              </div>
              <div className="text-sm text-gray-500">
                {slides.length} slide{slides.length !== 1 ? 's' : ''} generated
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Code Editor */}
          <div className="h-96 lg:h-[600px]">
            <CompleteCodeEditor
              code={code}
              setCode={setCode}
              onExecute={handleExecute}
              isExecuting={isExecuting}
            />
          </div>

          {/* Presentation Viewer */}
          <div className="h-96 lg:h-[600px]">
            <CompletePresentationViewer
              slides={slides}
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
            />
          </div>
        </div>

        {/* Execution Log */}
        <div className="w-full">
          <ExecutionLog logs={logs} onClear={handleClearLogs} />
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">
              <strong>Complete PowerPoint Effects System - All Features Supported:</strong>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 text-sm">
              <div>
                <strong className="text-blue-600">🎬 Transitions:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Subtle (10 types)</li>
                  <li>• Dynamic (15 types)</li>
                  <li>• Exciting (16 types)</li>
                  <li>• Morph Transitions</li>
                </ul>
              </div>
              <div>
                <strong className="text-green-600">⚡ Animations:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Entrance (50+ types)</li>
                  <li>• Emphasis (30+ types)</li>
                  <li>• Exit (40+ types)</li>
                  <li>• Motion Paths (80+ types)</li>
                </ul>
              </div>
              <div>
                <strong className="text-purple-600">🔷 Shapes:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Basic Shapes (30+ types)</li>
                  <li>• Block Arrows (25+ types)</li>
                  <li>• Flowchart (28+ types)</li>
                  <li>• Callouts, Stars, Banners</li>
                </ul>
              </div>
              <div>
                <strong className="text-red-600">🎨 Design:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• 25+ Design Themes</li>
                  <li>• Gradient Backgrounds</li>
                  <li>• Picture/Texture Fills</li>
                  <li>• 3D Effects & Shadows</li>
                </ul>
              </div>
              <div>
                <strong className="text-indigo-600">🔧 Advanced:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Zoom Effects</li>
                  <li>• Trigger Animations</li>
                  <li>• Animation Sequences</li>
                  <li>• Custom Motion Paths</li>
                </ul>
              </div>
              <div>
                <strong className="text-orange-600">📊 Features:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Slide Master Support</li>
                  <li>• Custom Shows</li>
                  <li>• Interactive Navigation</li>
                  <li>• Full VBA Compatibility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
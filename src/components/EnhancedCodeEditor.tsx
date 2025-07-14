import React from 'react';
import { Play, Save, FileText, Sparkles } from 'lucide-react';

interface EnhancedCodeEditorProps {
  code: string;
  setCode: (code: string) => void;
  onExecute: () => void;
  isExecuting: boolean;
}

export const EnhancedCodeEditor: React.FC<EnhancedCodeEditorProps> = ({ 
  code, 
  setCode, 
  onExecute, 
  isExecuting 
}) => {
  const insertSampleCode = () => {
    const sampleCode = `Sub CreateEnhancedPresentation()
    ' Create title slide with gradient background
    Dim slide As Slide
    Set slide = ActivePresentation.Slides.Add(1, ppLayoutTitle)
    slide.Background.Fill.Gradient = "ocean"
    slide.Transition = ppTransitionFade
    slide.TransitionDuration = 1000
    
    slide.Shapes.Title.TextFrame.TextRange.Text = "Enhanced VBA Presentation"
    slide.Shapes.Placeholders(2).TextFrame.TextRange.Text = "With Animations & Transitions"
    
    ' Create content slide with animations
    Set slide = ActivePresentation.Slides.Add(2, ppLayoutText)
    slide.Background.Fill.Gradient = "sunset"
    slide.Transition = ppTransitionSlide
    slide.TransitionDuration = 800
    
    slide.Shapes.Title.TextFrame.TextRange.Text = "Amazing Features"
    slide.Shapes.Placeholders(2).TextFrame.TextRange.Text = "• Smooth transitions\\n• Element animations\\n• Custom backgrounds\\n• Interactive controls"
    
    ' Add animated text box
    slide.Shapes.AddTextBox(50, 400, 300, 100).TextFrame.TextRange.Text = "Animated Text!"
    slide.AnimationEffect = ppAnimationSlideIn
    slide.AnimationDelay = 500
    
    ' Add animated shape
    slide.Shapes.AddShape(msoShapeRectangle, 400, 350, 200, 80)
    slide.AnimationEffect = ppAnimationZoomIn
    slide.AnimationDelay = 1000
    
    ' Create final slide with fire gradient
    Set slide = ActivePresentation.Slides.Add(3, ppLayoutTitle)
    slide.Background.Fill.Gradient = "fire"
    slide.Transition = ppTransitionZoom
    slide.TransitionDuration = 1200
    
    slide.Shapes.Title.TextFrame.TextRange.Text = "Thank You!"
    slide.Shapes.Placeholders(2).TextFrame.TextRange.Text = "Experience the power of enhanced VBA presentations"
    
    MsgBox "Enhanced presentation created with animations and transitions!"
End Sub`;
    setCode(sampleCode);
  };

  return (
    <div className="h-full flex flex-col bg-gray-900 rounded-lg overflow-hidden shadow-lg">
      <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <FileText className="w-5 h-5 text-blue-400" />
          <h3 className="text-lg font-semibold text-white">Enhanced VBA Code Editor</h3>
          <Sparkles className="w-4 h-4 text-yellow-400" />
        </div>
        <div className="flex space-x-2">
          <button
            onClick={insertSampleCode}
            className="flex items-center space-x-2 px-3 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-md transition-colors text-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>Sample</span>
          </button>
          <button
            onClick={onExecute}
            disabled={isExecuting}
            className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white rounded-md transition-colors"
          >
            <Play className="w-4 h-4" />
            <span>{isExecuting ? 'Executing...' : 'Execute'}</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
            <Save className="w-4 h-4" />
            <span>Save</span>
          </button>
        </div>
      </div>
      
      <div className="flex-1 relative">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-full p-4 bg-gray-900 text-gray-100 font-mono text-sm resize-none outline-none leading-6"
          placeholder="Enter your enhanced VBA code here...

Enhanced Features Available:
• slide.Background.Fill.Gradient = 'ocean|sunset|forest|fire|sky'
• slide.Transition = ppTransitionFade|ppTransitionSlide|ppTransitionZoom
• slide.TransitionDuration = 800
• slide.AnimationEffect = ppAnimationFadeIn|ppAnimationSlideIn|ppAnimationZoomIn
• slide.AnimationDelay = 500
• slide.Shapes.AddTextBox(x, y, width, height)
• slide.Shapes.AddShape(type, x, y, width, height)

Example:
Sub CreatePresentation()
    Dim slide As Slide
    Set slide = ActivePresentation.Slides.Add(1, ppLayoutTitle)
    slide.Background.Fill.Gradient = 'ocean'
    slide.Transition = ppTransitionFade
    slide.Shapes.Title.TextFrame.TextRange.Text = 'Hello World'
End Sub"
          spellCheck={false}
        />
        
        {/* Enhanced Syntax highlighting overlay */}
        <div className="absolute top-4 left-4 right-4 bottom-4 pointer-events-none">
          <pre className="text-sm font-mono text-transparent whitespace-pre-wrap overflow-hidden leading-6">
            {code.split('\n').map((line, index) => (
              <div key={index}>
                {highlightEnhancedVBASyntax(line)}
              </div>
            ))}
          </pre>
        </div>
      </div>
    </div>
  );
};

const highlightEnhancedVBASyntax = (line: string) => {
  const keywords = [
    'Sub', 'End', 'Dim', 'Set', 'As', 'ActivePresentation', 'Slides', 'Add', 
    'Shapes', 'Title', 'TextFrame', 'TextRange', 'Text', 'Placeholders',
    'Background', 'Fill', 'Gradient', 'Transition', 'TransitionDuration',
    'AnimationEffect', 'AnimationDelay', 'AddTextBox', 'AddShape'
  ];
  
  const constants = [
    'ppLayoutTitle', 'ppLayoutText', 'ppTransitionFade', 'ppTransitionSlide', 
    'ppTransitionZoom', 'ppTransitionFlip', 'ppAnimationFadeIn', 'ppAnimationSlideIn',
    'ppAnimationZoomIn', 'ppAnimationBounceIn', 'msoShapeRectangle', 'msoShapeOval'
  ];
  
  const strings = line.match(/"[^"]*"/g) || [];
  const comments = line.match(/'[^']*/g) || [];
  
  let highlighted = line;
  
  // Highlight keywords
  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'g');
    highlighted = highlighted.replace(regex, `<span class="text-blue-400 font-semibold">${keyword}</span>`);
  });
  
  // Highlight constants
  constants.forEach(constant => {
    const regex = new RegExp(`\\b${constant}\\b`, 'g');
    highlighted = highlighted.replace(regex, `<span class="text-purple-400 font-semibold">${constant}</span>`);
  });
  
  // Highlight strings
  strings.forEach(str => {
    highlighted = highlighted.replace(str, `<span class="text-green-400">${str}</span>`);
  });
  
  // Highlight comments
  comments.forEach(comment => {
    highlighted = highlighted.replace(comment, `<span class="text-gray-500 italic">${comment}</span>`);
  });
  
  // Highlight numbers
  highlighted = highlighted.replace(/\b\d+\b/g, '<span class="text-yellow-400">$&</span>');
  
  return <span dangerouslySetInnerHTML={{ __html: highlighted }} />;
};
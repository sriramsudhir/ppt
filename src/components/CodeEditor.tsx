import React from 'react';
import { Play, Save, FileText } from 'lucide-react';

interface CodeEditorProps {
  code: string;
  setCode: (code: string) => void;
  onExecute: () => void;
  isExecuting: boolean;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ code, setCode, onExecute, isExecuting }) => {
  return (
    <div className="h-full flex flex-col bg-gray-900 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <FileText className="w-5 h-5 text-blue-400" />
          <h3 className="text-lg font-semibold text-white">VBA Code Editor</h3>
        </div>
        <div className="flex space-x-2">
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
          className="w-full h-full p-4 bg-gray-900 text-gray-100 font-mono text-sm resize-none outline-none"
          placeholder="Enter your VBA code here...

Example:
Sub CreatePresentation()
    Dim slide As Slide
    Set slide = ActivePresentation.Slides.Add(1, ppLayoutTitle)
    slide.Shapes.Title.TextFrame.TextRange.Text = 'Hello World'
    slide.Shapes.Placeholders(2).TextFrame.TextRange.Text = 'This is a subtitle'
End Sub"
          spellCheck={false}
        />
        
        {/* Syntax highlighting overlay */}
        <div className="absolute top-4 left-4 right-4 bottom-4 pointer-events-none">
          <pre className="text-sm font-mono text-transparent whitespace-pre-wrap overflow-hidden">
            {code.split('\n').map((line, index) => (
              <div key={index} className="leading-5">
                {highlightVBASyntax(line)}
              </div>
            ))}
          </pre>
        </div>
      </div>
    </div>
  );
};

const highlightVBASyntax = (line: string) => {
  const keywords = ['Sub', 'End', 'Dim', 'Set', 'As', 'ActivePresentation', 'Slides', 'Add', 'Shapes', 'Title', 'TextFrame', 'TextRange', 'Text', 'Placeholders'];
  const strings = line.match(/"[^"]*"/g) || [];
  const comments = line.match(/'[^']*/g) || [];
  
  let highlighted = line;
  
  // Highlight keywords
  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'g');
    highlighted = highlighted.replace(regex, `<span class="text-blue-400">${keyword}</span>`);
  });
  
  // Highlight strings
  strings.forEach(str => {
    highlighted = highlighted.replace(str, `<span class="text-green-400">${str}</span>`);
  });
  
  // Highlight comments
  comments.forEach(comment => {
    highlighted = highlighted.replace(comment, `<span class="text-gray-500">${comment}</span>`);
  });
  
  return <span dangerouslySetInnerHTML={{ __html: highlighted }} />;
};
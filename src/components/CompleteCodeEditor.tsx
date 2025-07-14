import React from 'react';
import { Play, Save, FileText, Sparkles, BookOpen, Zap, Palette, MousePointer } from 'lucide-react';

interface CompleteCodeEditorProps {
  code: string;
  setCode: (code: string) => void;
  onExecute: () => void;
  isExecuting: boolean;
}

export const CompleteCodeEditor: React.FC<CompleteCodeEditorProps> = ({ 
  code, 
  setCode, 
  onExecute, 
  isExecuting 
}) => {
  const insertSampleCode = () => {
    const sampleCode = `Sub CreateCompletePresentation()
    ' Apply modern theme
    ActivePresentation.ApplyTheme = "Ion"
    
    ' Create title slide with morph transition
    Dim slide As Slide
    Set slide = ActivePresentation.Slides.Add(1, ppLayoutTitle)
    slide.Background.Fill.Gradient = "ocean"
    slide.Transition = ppTransitionMorph
    slide.Morph = True
    slide.MorphDuration = 1200
    
    slide.Shapes.Title.TextFrame.TextRange.Text = "Complete PowerPoint Effects"
    slide.Shapes.Placeholders(2).TextFrame.TextRange.Text = "All Transitions • All Animations • All Shapes • All Features"
    
    ' Create content slide with exciting transition
    Set slide = ActivePresentation.Slides.Add(2, ppLayoutText)
    slide.Background.Fill.Gradient = "sunset"
    slide.Transition = ppTransitionFerris
    slide.TransitionDuration = 2000
    
    slide.Shapes.Title.TextFrame.TextRange.Text = "Entrance Animations"
    slide.Shapes.Placeholders(2).TextFrame.TextRange.Text = "• Fade In Effects\\n• Fly In Animations\\n• Zoom Entrances\\n• Bounce Effects\\n• Spiral Animations"
    
    ' Add animated shapes with motion paths
    slide.Shapes.AddShape(msoShapeRectangle, 50, 300, 150, 80)
    slide.AnimationEffect = ppAnimationBounceIn
    slide.AnimationDelay = 500
    slide.MotionPath = "arc_right"
    
    slide.Shapes.AddShape(msoShapeStar5, 250, 300, 100, 100)
    slide.AnimationEffect = ppAnimationSpiral
    slide.AnimationDelay = 1000
    slide.MotionPath = "heart"
    
    ' Create emphasis slide with trigger animations
    Set slide = ActivePresentation.Slides.Add(3, ppLayoutText)
    slide.Background.Fill.Gradient = "fire"
    slide.Transition = ppTransitionOrigami
    slide.TransitionDuration = 1800
    
    slide.Shapes.Title.TextFrame.TextRange.Text = "Emphasis & Motion Paths"
    slide.Shapes.AddTextBox(100, 200, 300, 100).TextFrame.TextRange.Text = "Click to Pulse!"
    slide.AnimationEffect = ppAnimationPulse
    slide.Trigger = "click"
    slide.TriggerTarget = "textbox_1"
    
    ' Add complex shapes
    slide.Shapes.AddShape(msoShapeHexagon, 450, 150, 120, 120)
    slide.AnimationEffect = ppAnimationGrowTurn
    slide.AnimationDelay = 800
    
    slide.Shapes.AddShape(msoShapeCloudCallout, 300, 350, 200, 80)
    slide.AnimationEffect = ppAnimationFloat
    slide.AnimationDelay = 1200
    
    ' Create slide with zoom effects
    Set slide = ActivePresentation.Slides.Add(4, ppLayoutTitle)
    slide.Background.Fill.Gradient = "forest"
    slide.Transition = ppTransitionCube
    slide.TransitionDirection = "left"
    slide.SlideZoom = 2
    slide.ZoomDuration = 1500
    
    slide.Shapes.Title.TextFrame.TextRange.Text = "Zoom & Morph Effects"
    slide.Shapes.Placeholders(2).TextFrame.TextRange.Text = "Advanced PowerPoint Features"
    
    ' Create exit animations slide
    Set slide = ActivePresentation.Slides.Add(5, ppLayoutText)
    slide.Background.Fill.Gradient = "sky"
    slide.Transition = ppTransitionAirplane
    slide.TransitionDuration = 2500
    
    slide.Shapes.Title.TextFrame.TextRange.Text = "Exit Animations"
    slide.Shapes.AddTextBox(50, 200, 250, 60).TextFrame.TextRange.Text = "Fade Out"
    slide.AnimationEffect = ppAnimationFadeOut
    slide.AnimationDelay = 1000
    
    slide.Shapes.AddTextBox(350, 200, 250, 60).TextFrame.TextRange.Text = "Fly Out"
    slide.AnimationEffect = ppAnimationFlyOut
    slide.AnimationDelay = 1500
    slide.AnimationDirection = "right"
    
    slide.Shapes.AddTextBox(200, 300, 250, 60).TextFrame.TextRange.Text = "Spiral Out"
    slide.AnimationEffect = ppAnimationSpiralOut
    slide.AnimationDelay = 2000
    
    ' Create final slide with all shape types
    Set slide = ActivePresentation.Slides.Add(6, ppLayoutBlank)
    slide.Background.Fill.Picture = "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg"
    slide.Transition = ppTransitionPrestige
    slide.TransitionDuration = 2000
    
    ' Add various shapes
    slide.Shapes.AddShape(msoShapeRightArrow, 50, 50, 100, 50)
    slide.Shapes.AddShape(msoShapeExplosion1, 200, 50, 80, 80)
    slide.Shapes.AddShape(msoShapeHeart, 350, 50, 70, 70)
    slide.Shapes.AddShape(msoShapeLightningBolt, 500, 50, 60, 90)
    
    slide.Shapes.AddShape(msoShapeFlowchartProcess, 50, 200, 120, 60)
    slide.Shapes.AddShape(msoShapeCallout, 200, 200, 150, 80)
    slide.Shapes.AddShape(msoShapeSun, 400, 200, 100, 100)
    
    ' Animation sequence for all shapes
    slide.AnimationSequence = "shape_entrance"
    slide.AutoPlay = True
    
    MsgBox "Complete PowerPoint presentation created with all effects!"
End Sub`;
    setCode(sampleCode);
  };

  const insertTransitionSample = () => {
    const transitionCode = `Sub DemoAllTransitions()
    ' Subtle Transitions
    Dim slide As Slide
    Set slide = ActivePresentation.Slides.Add(1, ppLayoutTitle)
    slide.Transition = ppTransitionFade
    slide.Shapes.Title.TextFrame.TextRange.Text = "Subtle: Fade"
    
    Set slide = ActivePresentation.Slides.Add(2, ppLayoutTitle)
    slide.Transition = ppTransitionPush
    slide.TransitionDirection = "left"
    slide.Shapes.Title.TextFrame.TextRange.Text = "Subtle: Push"
    
    Set slide = ActivePresentation.Slides.Add(3, ppLayoutTitle)
    slide.Transition = ppTransitionWipe
    slide.Shapes.Title.TextFrame.TextRange.Text = "Subtle: Wipe"
    
    ' Dynamic Transitions
    Set slide = ActivePresentation.Slides.Add(4, ppLayoutTitle)
    slide.Transition = ppTransitionClock
    slide.Shapes.Title.TextFrame.TextRange.Text = "Dynamic: Clock"
    
    Set slide = ActivePresentation.Slides.Add(5, ppLayoutTitle)
    slide.Transition = ppTransitionRipple
    slide.Shapes.Title.TextFrame.TextRange.Text = "Dynamic: Ripple"
    
    Set slide = ActivePresentation.Slides.Add(6, ppLayoutTitle)
    slide.Transition = ppTransitionHoneycomb
    slide.Shapes.Title.TextFrame.TextRange.Text = "Dynamic: Honeycomb"
    
    ' Exciting Transitions
    Set slide = ActivePresentation.Slides.Add(7, ppLayoutTitle)
    slide.Transition = ppTransitionFerris
    slide.TransitionDuration = 2000
    slide.Shapes.Title.TextFrame.TextRange.Text = "Exciting: Ferris Wheel"
    
    Set slide = ActivePresentation.Slides.Add(8, ppLayoutTitle)
    slide.Transition = ppTransitionAirplane
    slide.TransitionDuration = 2500
    slide.Shapes.Title.TextFrame.TextRange.Text = "Exciting: Airplane"
    
    Set slide = ActivePresentation.Slides.Add(9, ppLayoutTitle)
    slide.Transition = ppTransitionOrigami
    slide.Shapes.Title.TextFrame.TextRange.Text = "Exciting: Origami"
    
    MsgBox "All transition types demonstrated!"
End Sub`;
    setCode(transitionCode);
  };

  const insertAnimationSample = () => {
    const animationCode = `Sub DemoAllAnimations()
    Dim slide As Slide
    
    ' Entrance Animations
    Set slide = ActivePresentation.Slides.Add(1, ppLayoutText)
    slide.Shapes.Title.TextFrame.TextRange.Text = "Entrance Animations"
    
    slide.Shapes.AddTextBox(50, 150, 200, 50).TextFrame.TextRange.Text = "Fade In"
    slide.AnimationEffect = ppAnimationFadeIn
    slide.AnimationDelay = 500
    
    slide.Shapes.AddTextBox(300, 150, 200, 50).TextFrame.TextRange.Text = "Fly In"
    slide.AnimationEffect = ppAnimationFlyIn
    slide.AnimationDirection = "left"
    slide.AnimationDelay = 1000
    
    slide.Shapes.AddTextBox(50, 250, 200, 50).TextFrame.TextRange.Text = "Bounce In"
    slide.AnimationEffect = ppAnimationBounceIn
    slide.AnimationDelay = 1500
    
    slide.Shapes.AddTextBox(300, 250, 200, 50).TextFrame.TextRange.Text = "Spiral In"
    slide.AnimationEffect = ppAnimationSpiralIn
    slide.AnimationDelay = 2000
    
    ' Emphasis Animations
    Set slide = ActivePresentation.Slides.Add(2, ppLayoutText)
    slide.Shapes.Title.TextFrame.TextRange.Text = "Emphasis Animations"
    
    slide.Shapes.AddTextBox(50, 150, 200, 50).TextFrame.TextRange.Text = "Pulse"
    slide.AnimationEffect = ppAnimationPulse
    slide.AnimationTrigger = "click"
    
    slide.Shapes.AddTextBox(300, 150, 200, 50).TextFrame.TextRange.Text = "Grow/Shrink"
    slide.AnimationEffect = ppAnimationGrowShrink
    slide.AnimationTrigger = "click"
    
    slide.Shapes.AddTextBox(50, 250, 200, 50).TextFrame.TextRange.Text = "Spin"
    slide.AnimationEffect = ppAnimationSpin
    slide.AnimationTrigger = "click"
    
    slide.Shapes.AddTextBox(300, 250, 200, 50).TextFrame.TextRange.Text = "Color Pulse"
    slide.AnimationEffect = ppAnimationColorPulse
    slide.AnimationTrigger = "click"
    
    ' Motion Path Animations
    Set slide = ActivePresentation.Slides.Add(3, ppLayoutText)
    slide.Shapes.Title.TextFrame.TextRange.Text = "Motion Path Animations"
    
    slide.Shapes.AddShape(msoShapeOval, 50, 150, 50, 50)
    slide.MotionPath = "arc_right"
    slide.AnimationDelay = 500
    
    slide.Shapes.AddShape(msoShapeStar5, 50, 250, 50, 50)
    slide.MotionPath = "heart"
    slide.AnimationDelay = 1000
    
    slide.Shapes.AddShape(msoShapeRectangle, 50, 350, 50, 50)
    slide.MotionPath = "loop_de_loop"
    slide.AnimationDelay = 1500
    
    ' Exit Animations
    Set slide = ActivePresentation.Slides.Add(4, ppLayoutText)
    slide.Shapes.Title.TextFrame.TextRange.Text = "Exit Animations"
    
    slide.Shapes.AddTextBox(50, 150, 200, 50).TextFrame.TextRange.Text = "Fade Out"
    slide.AnimationEffect = ppAnimationFadeOut
    slide.AnimationDelay = 2000
    
    slide.Shapes.AddTextBox(300, 150, 200, 50).TextFrame.TextRange.Text = "Fly Out"
    slide.AnimationEffect = ppAnimationFlyOut
    slide.AnimationDirection = "right"
    slide.AnimationDelay = 2500
    
    MsgBox "All animation categories demonstrated!"
End Sub`;
    setCode(animationCode);
  };

  const insertShapeSample = () => {
    const shapeCode = `Sub DemoAllShapes()
    Dim slide As Slide
    
    ' Basic Shapes
    Set slide = ActivePresentation.Slides.Add(1, ppLayoutBlank)
    slide.Shapes.Title.TextFrame.TextRange.Text = "Basic Shapes"
    
    slide.Shapes.AddShape(msoShapeRectangle, 50, 100, 80, 60)
    slide.Shapes.AddShape(msoShapeOval, 150, 100, 80, 60)
    slide.Shapes.AddShape(msoShapeTriangle, 250, 100, 80, 60)
    slide.Shapes.AddShape(msoShapeDiamond, 350, 100, 80, 60)
    slide.Shapes.AddShape(msoShapeHexagon, 450, 100, 80, 60)
    
    slide.Shapes.AddShape(msoShapeStar5, 50, 200, 80, 80)
    slide.Shapes.AddShape(msoShapeHeart, 150, 200, 80, 80)
    slide.Shapes.AddShape(msoShapeLightningBolt, 250, 200, 60, 80)
    slide.Shapes.AddShape(msoShapeSun, 350, 200, 80, 80)
    slide.Shapes.AddShape(msoShapeMoon, 450, 200, 80, 80)
    
    ' Block Arrows
    Set slide = ActivePresentation.Slides.Add(2, ppLayoutBlank)
    slide.Shapes.Title.TextFrame.TextRange.Text = "Block Arrows"
    
    slide.Shapes.AddShape(msoShapeRightArrow, 50, 100, 100, 50)
    slide.Shapes.AddShape(msoShapeLeftArrow, 200, 100, 100, 50)
    slide.Shapes.AddShape(msoShapeUpArrow, 350, 100, 50, 100)
    slide.Shapes.AddShape(msoShapeDownArrow, 450, 100, 50, 100)
    
    slide.Shapes.AddShape(msoShapeQuadArrow, 50, 250, 100, 100)
    slide.Shapes.AddShape(msoShapeBentArrow, 200, 250, 120, 80)
    slide.Shapes.AddShape(msoShapeUTurnArrow, 350, 250, 100, 80)
    
    ' Flowchart Shapes
    Set slide = ActivePresentation.Slides.Add(3, ppLayoutBlank)
    slide.Shapes.Title.TextFrame.TextRange.Text = "Flowchart Shapes"
    
    slide.Shapes.AddShape(msoShapeFlowchartProcess, 50, 100, 120, 60)
    slide.Shapes.AddShape(msoShapeFlowchartDecision, 200, 100, 100, 80)
    slide.Shapes.AddShape(msoShapeFlowchartTerminator, 350, 100, 120, 60)
    
    slide.Shapes.AddShape(msoShapeFlowchartData, 50, 200, 120, 60)
    slide.Shapes.AddShape(msoShapeFlowchartDocument, 200, 200, 100, 80)
    slide.Shapes.AddShape(msoShapeFlowchartConnector, 350, 200, 60, 60)
    
    ' Callouts
    Set slide = ActivePresentation.Slides.Add(4, ppLayoutBlank)
    slide.Shapes.Title.TextFrame.TextRange.Text = "Callouts"
    
    slide.Shapes.AddShape(msoShapeRectangularCallout, 50, 100, 150, 80)
    slide.Shapes.AddShape(msoShapeOvalCallout, 250, 100, 150, 80)
    slide.Shapes.AddShape(msoShapeCloudCallout, 450, 100, 150, 80)
    
    ' Stars and Banners
    Set slide = ActivePresentation.Slides.Add(5, ppLayoutBlank)
    slide.Shapes.Title.TextFrame.TextRange.Text = "Stars and Banners"
    
    slide.Shapes.AddShape(msoShapeStar4, 50, 100, 80, 80)
    slide.Shapes.AddShape(msoShapeStar6, 150, 100, 80, 80)
    slide.Shapes.AddShape(msoShapeStar8, 250, 100, 80, 80)
    slide.Shapes.AddShape(msoShapeStar16, 350, 100, 80, 80)
    slide.Shapes.AddShape(msoShapeStar24, 450, 100, 80, 80)
    
    slide.Shapes.AddShape(msoShapeRibbon, 50, 200, 120, 60)
    slide.Shapes.AddShape(msoShapeExplosion1, 200, 200, 100, 100)
    slide.Shapes.AddShape(msoShapeExplosion2, 350, 200, 100, 100)
    
    MsgBox "All shape categories demonstrated!"
End Sub`;
    setCode(shapeCode);
  };

  return (
    <div className="h-full flex flex-col bg-gray-900 rounded-lg overflow-hidden shadow-lg">
      <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <FileText className="w-5 h-5 text-blue-400" />
          <h3 className="text-lg font-semibold text-white">Complete VBA Code Editor</h3>
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <div className="flex items-center space-x-1 ml-2">
            <Zap className="w-4 h-4 text-green-400" />
            <span className="text-xs text-green-400">All Effects</span>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={insertSampleCode}
            className="flex items-center space-x-2 px-3 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-md transition-colors text-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>Complete Demo</span>
          </button>
          
          <button
            onClick={insertTransitionSample}
            className="flex items-center space-x-2 px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors text-sm"
          >
            <MousePointer className="w-4 h-4" />
            <span>Transitions</span>
          </button>
          
          <button
            onClick={insertAnimationSample}
            className="flex items-center space-x-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors text-sm"
          >
            <Zap className="w-4 h-4" />
            <span>Animations</span>
          </button>
          
          <button
            onClick={insertShapeSample}
            className="flex items-center space-x-2 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors text-sm"
          >
            <Palette className="w-4 h-4" />
            <span>Shapes</span>
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
          placeholder="Enter your complete VBA code here...

🎯 COMPLETE POWERPOINT EFFECTS SUPPORTED:

📊 TRANSITIONS (All Categories):
• Subtle: Fade, Cut, Push, Wipe, Split, Reveal, Random Bars, Shape, Uncover, Cover
• Dynamic: Clock, Ripple, Honeycomb, Glitter, Vortex, Shred, Switch, Flip, Gallery, Cube, Doors, Box, Comb, Zoom, Pan
• Exciting: Ferris Wheel, Conveyor, Rotate, Orbit, Airplane, Origami, Prestige, Fracture, Crush, Peel Off, Page Curl, Fall Over, Drape, Curtains, Wind, Morph

🎬 ANIMATIONS (All Categories):
• Entrance: Appear, Blinds, Box, Checkerboard, Circle, Diamond, Dissolve In, Fade In, Flash Once, Fly In, Peek In, Plus, Random Bars, Split, Strips, Wedge, Wheel, Wipe, Zoom, Expand, Faded Swivel, Faded Zoom, Rise Up, Stretch, Compress, Basic Swivel, Boomerang, Bounce, Credits, Curve Up, Drop, Float, Glide, Magnify, Pinwheel, Spiral In, Swish, Thread, Whip, Airplane, Catapult, Flip, Fold, Peek In, Random Effects, Shape, Sling, Spinner, Swivel, Turn
• Emphasis: Bold Flash, Bold Reveal, Brush On Color, Brush On Underline, Color Pulse, Complementary Color, Contrasting Color, Darken, Desaturate, Flash Bulb, Flicker, Grow/Shrink, Lighten, Pulse, Shimmer, Teeter, Transparency, Fill Color, Font Color, Grow With Color, Line Color, Underline, Blast, Blink, Color Wave, Grow Turn, Spin, Wave, Bounce, Float, Pinwheel, Swish
• Exit: All entrance animations with exit variants (Fade Out, Fly Out, Zoom Out, etc.)
• Motion Paths: Custom Path, Arc Down/Left/Right/Up, Bean, Bounce Left/Right, Curvy Left/Right, Curvy Star, Decaying Wave, Diagonal Down/Up Right, Diamond, Down, Figure 8 Four, Football, Freeform, Heart, Hexagon, Horizontal Figure 8, Inverted Square/Triangle, Left, Loop de Loop, Neutron, Octagon, Parallelogram, Peanut, Pentagon, Plus, Pointy Star, Right, S Curve 1/2, Scribble, Sine Wave, Spring, Square, Stairs Down, Swoosh, Teardrop, Trapezoid, Triangle, Turn Down/Up/Down Right/Up Right, Up, Vertical Figure 8, Wave, Zigzag

🔷 SHAPES (All Categories):
• Basic: Rectangle, Rounded Rectangle, Ellipse, Diamond, Triangle, Right Triangle, Parallelogram, Trapezoid, Hexagon, Octagon, Plus, 5/6/8/16/24/32-Point Stars, Round/Snip Corner Rectangles, Plaque, Can, Cube, Bevel, Donut, No Symbol, Block Arc, Smiley Face, Heart, Lightning Bolt, Sun, Moon, Cloud
• Block Arrows: Right/Left/Up/Down Arrow, Left Right Arrow, Up Down Arrow, Quad Arrow, Left Right Up Arrow, Bent Arrow, U-Turn Arrow, Left Up Arrow, Bent Up Arrow, Curved Right/Left/Up/Down Arrow, Striped Right Arrow, Notched Right Arrow, Pentagon, Chevron, Arrow Callouts, Circular Arrow
• Flowchart: Process, Decision, Start/End, Data, Predefined Process, Internal Storage, Document, Multidocument, Terminator, Preparation, Manual Input/Operation, Connector, Off-page Connector, Card, Punched Tape, Summing Junction, Or, Collate, Sort, Extract, Merge, Stored Data, Delay, Sequential Access Storage, Magnetic Disk, Direct Access Storage, Display
• Callouts: Rectangular/Rounded Rectangular/Oval/Cloud Callout, Line Callouts 1-4 (with variants)
• Stars: 4/5/6/7/8/10/12/16/24/32-Point Stars
• Banners: Ribbon, Ribbon 2, Curved Ribbon, Vertical/Horizontal Scroll, Wave, Double Wave, Folded Corner, Explosion 1/2
• Equation: Plus, Minus, Multiply, Divide, Equal, Not Equal
• Action Buttons: Back/Previous, Forward/Next, Beginning, End, Home, Information, Movie, Document, Sound, Help

🎨 DESIGN THEMES (All Categories):
• Modern: Ion, Ion Boardroom, Retrospect, Savon, Slice
• Classic: Office Theme, Adjacency, Angles, Apothecary, Austin
• Creative: Badge, Banded, Basis, Berlin, Celestial
• Business: Circuit, Concourse, Dividend, Equity, Executive
• Education: Facet, Frame, Gallery, Headlines, Integral

🔧 ADVANCED FEATURES:
• Morph Transitions with object morphing
• Slide/Section/Summary Zoom effects
• Trigger animations (click, hover, bookmark, media)
• Animation sequences and timing
• Custom motion paths with coordinates
• Background gradients, pictures, textures
• 3D effects, shadows, glows, reflections
• Interactive navigation and custom shows
• Slide master and layout management

💡 EXAMPLE USAGE:
slide.Transition = ppTransitionMorph
slide.Morph = True
slide.MorphDuration = 1200
slide.AnimationEffect = ppAnimationBounceIn
slide.MotionPath = 'heart'
slide.Shapes.AddShape(msoShapeExplosion1, 100, 100, 80, 80)
slide.SlideZoom = 2
slide.Background.Fill.Gradient = 'ocean'
slide.ApplyTheme = 'Ion'"
          spellCheck={false}
        />
        
        {/* Enhanced Syntax highlighting overlay */}
        <div className="absolute top-4 left-4 right-4 bottom-4 pointer-events-none">
          <pre className="text-sm font-mono text-transparent whitespace-pre-wrap overflow-hidden leading-6">
            {code.split('\n').map((line, index) => (
              <div key={index}>
                {highlightCompleteVBASyntax(line)}
              </div>
            ))}
          </pre>
        </div>
      </div>
    </div>
  );
};

const highlightCompleteVBASyntax = (line: string) => {
  const keywords = [
    'Sub', 'End', 'Dim', 'Set', 'As', 'ActivePresentation', 'Slides', 'Add', 
    'Shapes', 'Title', 'TextFrame', 'TextRange', 'Text', 'Placeholders',
    'Background', 'Fill', 'Gradient', 'Picture', 'Texture', 'Transition', 'TransitionDuration', 'TransitionDirection',
    'AnimationEffect', 'AnimationDelay', 'AnimationDuration', 'AnimationTrigger', 'AnimationDirection',
    'MotionPath', 'MotionPathPoints', 'AddTextBox', 'AddShape', 'ApplyTheme',
    'Morph', 'MorphDuration', 'SlideZoom', 'SectionZoom', 'SummaryZoom', 'ZoomDuration',
    'Trigger', 'TriggerTarget', 'AnimationSequence', 'AutoPlay', 'CustomShow', 'SlideMaster'
  ];
  
  const transitions = [
    // Subtle
    'ppTransitionFade', 'ppTransitionCut', 'ppTransitionPush', 'ppTransitionWipe', 'ppTransitionSplit',
    'ppTransitionReveal', 'ppTransitionRandomBars', 'ppTransitionShape', 'ppTransitionUncover', 'ppTransitionCover',
    // Dynamic
    'ppTransitionClock', 'ppTransitionRipple', 'ppTransitionHoneycomb', 'ppTransitionGlitter', 'ppTransitionVortex',
    'ppTransitionShred', 'ppTransitionSwitch', 'ppTransitionFlip', 'ppTransitionGallery', 'ppTransitionCube',
    'ppTransitionDoors', 'ppTransitionBox', 'ppTransitionComb', 'ppTransitionZoom', 'ppTransitionPan',
    // Exciting
    'ppTransitionFerris', 'ppTransitionConveyor', 'ppTransitionRotate', 'ppTransitionOrbit', 'ppTransitionAirplane',
    'ppTransitionOrigami', 'ppTransitionPrestige', 'ppTransitionFracture', 'ppTransitionCrush', 'ppTransitionPeelOff',
    'ppTransitionPageCurl', 'ppTransitionFall', 'ppTransitionDrape', 'ppTransitionCurtains', 'ppTransitionWind', 'ppTransitionMorph'
  ];
  
  const animations = [
    // Entrance
    'ppAnimationAppear', 'ppAnimationBlinds', 'ppAnimationBox', 'ppAnimationCheckerboard', 'ppAnimationCircle',
    'ppAnimationDiamond', 'ppAnimationDissolveIn', 'ppAnimationFadeIn', 'ppAnimationFlashOnce', 'ppAnimationFlyIn',
    'ppAnimationPeekIn', 'ppAnimationPlus', 'ppAnimationRandomBars', 'ppAnimationSplit', 'ppAnimationStrips',
    'ppAnimationWedge', 'ppAnimationWheel', 'ppAnimationWipe', 'ppAnimationZoom', 'ppAnimationExpand',
    'ppAnimationFadedSwivel', 'ppAnimationFadedZoom', 'ppAnimationRiseUp', 'ppAnimationStretch', 'ppAnimationCompress',
    'ppAnimationBasicSwivel', 'ppAnimationBoomerang', 'ppAnimationBounceIn', 'ppAnimationCredits', 'ppAnimationCurveUp',
    'ppAnimationDrop', 'ppAnimationFloat', 'ppAnimationGlide', 'ppAnimationMagnify', 'ppAnimationPinwheel',
    'ppAnimationSpiralIn', 'ppAnimationSwish', 'ppAnimationThread', 'ppAnimationWhip', 'ppAnimationAirplane',
    'ppAnimationCatapult', 'ppAnimationFlip', 'ppAnimationFold', 'ppAnimationRandomEffects', 'ppAnimationShape',
    'ppAnimationSling', 'ppAnimationSpinner', 'ppAnimationSwivel', 'ppAnimationTurn',
    // Emphasis
    'ppAnimationBoldFlash', 'ppAnimationBoldReveal', 'ppAnimationBrushOnColor', 'ppAnimationBrushOnUnderline',
    'ppAnimationColorPulse', 'ppAnimationComplementaryColor', 'ppAnimationContrastingColor', 'ppAnimationDarken',
    'ppAnimationDesaturate', 'ppAnimationFlashBulb', 'ppAnimationFlicker', 'ppAnimationGrowShrink', 'ppAnimationLighten',
    'ppAnimationPulse', 'ppAnimationShimmer', 'ppAnimationTeeter', 'ppAnimationTransparency', 'ppAnimationFillColor',
    'ppAnimationFontColor', 'ppAnimationGrowWithColor', 'ppAnimationLineColor', 'ppAnimationUnderline',
    'ppAnimationBlast', 'ppAnimationBlink', 'ppAnimationColorWave', 'ppAnimationGrowTurn', 'ppAnimationSpin',
    'ppAnimationWave', 'ppAnimationBounce',
    // Exit
    'ppAnimationFadeOut', 'ppAnimationFlyOut', 'ppAnimationZoomOut', 'ppAnimationSpiralOut', 'ppAnimationContract',
    'ppAnimationSinkDown', 'ppAnimationShrinkTurn', 'ppAnimationCurveDown',
    // Motion Paths
    'ppAnimationCustomPath', 'ppAnimationArcDown', 'ppAnimationArcLeft', 'ppAnimationArcRight', 'ppAnimationArcUp',
    'ppAnimationBean', 'ppAnimationBounceLeft', 'ppAnimationBounceRight', 'ppAnimationCurvyLeft', 'ppAnimationCurvyRight',
    'ppAnimationCurvyStar', 'ppAnimationDecayingWave', 'ppAnimationDiagonalDownRight', 'ppAnimationDiagonalUpRight',
    'ppAnimationDiamond', 'ppAnimationDown', 'ppAnimationFigure8Four', 'ppAnimationFootball', 'ppAnimationFreeform',
    'ppAnimationHeart', 'ppAnimationHexagon', 'ppAnimationHorizontalFigure8', 'ppAnimationInvertedSquare',
    'ppAnimationInvertedTriangle', 'ppAnimationLeft', 'ppAnimationLoopDeLoop', 'ppAnimationNeutron',
    'ppAnimationOctagon', 'ppAnimationParallelogram', 'ppAnimationPeanut', 'ppAnimationPentagon', 'ppAnimationPlus',
    'ppAnimationPointyStar', 'ppAnimationRight', 'ppAnimationSCurve1', 'ppAnimationSCurve2', 'ppAnimationScribble',
    'ppAnimationSineWave', 'ppAnimationSpring', 'ppAnimationSquare', 'ppAnimationStairsDown', 'ppAnimationSwoosh',
    'ppAnimationTeardrop', 'ppAnimationTrapezoid', 'ppAnimationTriangle', 'ppAnimationTurnDown', 'ppAnimationTurnDownRight',
    'ppAnimationTurnUp', 'ppAnimationTurnUpRight', 'ppAnimationUp', 'ppAnimationVerticalFigure8', 'ppAnimationWave',
    'ppAnimationZigzag'
  ];
  
  const shapes = [
    // Basic Shapes
    'msoShapeRectangle', 'msoShapeRoundedRectangle', 'msoShapeOval', 'msoShapeDiamond', 'msoShapeTriangle',
    'msoShapeRightTriangle', 'msoShapeParallelogram', 'msoShapeTrapezoid', 'msoShapeHexagon', 'msoShapeOctagon',
    'msoShapePlus', 'msoShapeStar5', 'msoShapeStar6', 'msoShapeStar8', 'msoShapeStar16', 'msoShapeStar24',
    'msoShapeStar32', 'msoShapeHeart', 'msoShapeLightningBolt', 'msoShapeSun', 'msoShapeMoon', 'msoShapeCloud',
    // Block Arrows
    'msoShapeRightArrow', 'msoShapeLeftArrow', 'msoShapeUpArrow', 'msoShapeDownArrow', 'msoShapeLeftRightArrow',
    'msoShapeUpDownArrow', 'msoShapeQuadArrow', 'msoShapeBentArrow', 'msoShapeUTurnArrow', 'msoShapeLeftUpArrow',
    'msoShapeBentUpArrow', 'msoShapeCurvedRightArrow', 'msoShapeCurvedLeftArrow', 'msoShapeCurvedUpArrow',
    'msoShapeCurvedDownArrow', 'msoShapeStripedRightArrow', 'msoShapeNotchedRightArrow', 'msoShapePentagon',
    'msoShapeChevron', 'msoShapeCircularArrow',
    // Flowchart
    'msoShapeFlowchartProcess', 'msoShapeFlowchartDecision', 'msoShapeFlowchartTerminator', 'msoShapeFlowchartData',
    'msoShapeFlowchartPredefinedProcess', 'msoShapeFlowchartInternalStorage', 'msoShapeFlowchartDocument',
    'msoShapeFlowchartMultidocument', 'msoShapeFlowchartPreparation', 'msoShapeFlowchartManualInput',
    'msoShapeFlowchartManualOperation', 'msoShapeFlowchartConnector', 'msoShapeFlowchartOffpageConnector',
    'msoShapeFlowchartCard', 'msoShapeFlowchartPunchedTape', 'msoShapeFlowchartSummingJunction',
    'msoShapeFlowchartOr', 'msoShapeFlowchartCollate', 'msoShapeFlowchartSort', 'msoShapeFlowchartExtract',
    'msoShapeFlowchartMerge', 'msoShapeFlowchartStoredData', 'msoShapeFlowchartDelay', 'msoShapeFlowchartSequentialAccessStorage',
    'msoShapeFlowchartMagneticDisk', 'msoShapeFlowchartDirectAccessStorage', 'msoShapeFlowchartDisplay',
    // Callouts
    'msoShapeRectangularCallout', 'msoShapeRoundedRectangularCallout', 'msoShapeOvalCallout', 'msoShapeCloudCallout',
    // Stars
    'msoShapeStar4', 'msoShapeStar7', 'msoShapeStar10', 'msoShapeStar12',
    // Banners
    'msoShapeRibbon', 'msoShapeRibbon2', 'msoShapeCurvedRibbon', 'msoShapeVerticalScroll', 'msoShapeHorizontalScroll',
    'msoShapeWave', 'msoShapeDoubleWave', 'msoShapeFoldedCorner', 'msoShapeExplosion1', 'msoShapeExplosion2',
    // Equation
    'msoShapePlusMath', 'msoShapeMinusMath', 'msoShapeMultiplyMath', 'msoShapeDivideMath', 'msoShapeEqualMath',
    'msoShapeNotEqualMath'
  ];
  
  const layouts = [
    'ppLayoutTitle', 'ppLayoutText', 'ppLayoutTwoColumnText', 'ppLayoutTable', 'ppLayoutTextAndChart',
    'ppLayoutChartAndText', 'ppLayoutOrgchart', 'ppLayoutChart', 'ppLayoutTextAndClipart', 'ppLayoutClipartAndText',
    'ppLayoutTitleOnly', 'ppLayoutBlank', 'ppLayoutTextAndObject', 'ppLayoutObjectAndText', 'ppLayoutLargeObject',
    'ppLayoutObject', 'ppLayoutTextAndMediaClip', 'ppLayoutMediaClipAndText', 'ppLayoutObjectOverText',
    'ppLayoutTextOverObject', 'ppLayoutTextAndTwoObjects', 'ppLayoutTwoObjectsAndText', 'ppLayoutTwoObjectsOverText',
    'ppLayoutFourObjects', 'ppLayoutVerticalText', 'ppLayoutClipartAndVerticalText', 'ppLayoutVerticalTitleAndText',
    'ppLayoutVerticalTitleAndTextOverChart', 'ppLayoutTwoObjects', 'ppLayoutObjectAndTwoObjects',
    'ppLayoutTwoObjectsAndObject', 'ppLayoutComparison', 'ppLayoutContentWithCaption', 'ppLayoutPictureWithCaption'
  ];
  
  const strings = line.match(/"[^"]*"/g) || [];
  const comments = line.match(/'[^']*/g) || [];
  
  let highlighted = line;
  
  // Highlight keywords
  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'g');
    highlighted = highlighted.replace(regex, `<span class="text-blue-400 font-semibold">${keyword}</span>`);
  });
  
  // Highlight transitions
  transitions.forEach(transition => {
    const regex = new RegExp(`\\b${transition}\\b`, 'g');
    highlighted = highlighted.replace(regex, `<span class="text-purple-400 font-semibold">${transition}</span>`);
  });
  
  // Highlight animations
  animations.forEach(animation => {
    const regex = new RegExp(`\\b${animation}\\b`, 'g');
    highlighted = highlighted.replace(regex, `<span class="text-green-400 font-semibold">${animation}</span>`);
  });
  
  // Highlight shapes
  shapes.forEach(shape => {
    const regex = new RegExp(`\\b${shape}\\b`, 'g');
    highlighted = highlighted.replace(regex, `<span class="text-cyan-400 font-semibold">${shape}</span>`);
  });
  
  // Highlight layouts
  layouts.forEach(layout => {
    const regex = new RegExp(`\\b${layout}\\b`, 'g');
    highlighted = highlighted.replace(regex, `<span class="text-orange-400 font-semibold">${layout}</span>`);
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
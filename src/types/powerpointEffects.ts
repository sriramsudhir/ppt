// Complete PowerPoint Effects Type Definitions

export interface TransitionEffect {
  id: string;
  name: string;
  category: 'subtle' | 'dynamic' | 'exciting';
  duration: number;
  direction?: 'left' | 'right' | 'up' | 'down' | 'in' | 'out';
  options?: {
    speed?: 'slow' | 'medium' | 'fast';
    sound?: string;
    advanceOnClick?: boolean;
    advanceAfterTime?: number;
  };
}

export interface AnimationEffect {
  id: string;
  name: string;
  category: 'entrance' | 'emphasis' | 'exit' | 'motionPath';
  type: string;
  duration: number;
  delay: number;
  trigger: 'onLoad' | 'onClick' | 'afterPrevious' | 'withPrevious' | 'onHover';
  easing: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'bounce' | 'elastic';
  direction?: string;
  intensity?: 'subtle' | 'medium' | 'strong';
  repeat?: number;
  reverse?: boolean;
  motionPath?: MotionPath;
}

export interface MotionPath {
  type: 'line' | 'arc' | 'turn' | 'shape' | 'loop' | 'custom';
  points: { x: number; y: number }[];
  smooth: boolean;
  autoReverse: boolean;
}

export interface MorphTransition {
  enabled: boolean;
  morphObjects: string[];
  duration: number;
  easing: string;
  options: {
    morphByWord?: boolean;
    morphByCharacter?: boolean;
    morphShapes?: boolean;
    morphImages?: boolean;
  };
}

export interface ZoomEffect {
  type: 'slideZoom' | 'sectionZoom' | 'summaryZoom';
  targetSlide?: number;
  targetSection?: string;
  returnToZoom?: boolean;
  zoomImage?: string;
  duration: number;
}

export interface DesignTheme {
  id: string;
  name: string;
  category: 'modern' | 'classic' | 'creative' | 'business' | 'education';
  colors: {
    primary: string;
    secondary: string;
    accent1: string;
    accent2: string;
    accent3: string;
    accent4: string;
    background: string;
    text: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  effects: {
    shadows: boolean;
    reflections: boolean;
    glows: boolean;
    softEdges: boolean;
    threeDFormat: boolean;
  };
}

export interface ShapeType {
  id: string;
  name: string;
  category: 'basic' | 'blockArrows' | 'flowchart' | 'callouts' | 'stars' | 'banners' | 'equation' | 'action';
  path: string;
  defaultSize: { width: number; height: number };
  connectionPoints?: { x: number; y: number }[];
}

export interface SlideElement {
  id: string;
  type: 'text' | 'shape' | 'image' | 'chart' | 'table' | 'smartArt' | 'media';
  content: any;
  position: { x: number; y: number; z: number };
  size: { width: number; height: number };
  rotation: number;
  style: ElementStyle;
  animations: AnimationEffect[];
  triggers: TriggerAnimation[];
}

export interface ElementStyle {
  fill?: {
    type: 'solid' | 'gradient' | 'pattern' | 'picture';
    color?: string;
    gradient?: GradientFill;
    pattern?: PatternFill;
    picture?: string;
    transparency?: number;
  };
  outline?: {
    color: string;
    width: number;
    style: 'solid' | 'dashed' | 'dotted';
  };
  shadow?: {
    type: 'outer' | 'inner' | 'perspective' | 'reflection';
    color: string;
    blur: number;
    distance: number;
    angle: number;
  };
  glow?: {
    color: string;
    size: number;
    transparency: number;
  };
  threeDFormat?: {
    depth: number;
    contour: { color: string; size: number };
    surface: 'wireframe' | 'matte' | 'plastic' | 'metal';
    lighting: 'neutral' | 'warm' | 'cool' | 'harsh';
  };
  textFormat?: {
    font: string;
    size: number;
    color: string;
    bold: boolean;
    italic: boolean;
    underline: boolean;
    alignment: 'left' | 'center' | 'right' | 'justify';
    lineSpacing: number;
    characterSpacing: number;
  };
}

export interface GradientFill {
  type: 'linear' | 'radial' | 'rectangular' | 'path';
  angle: number;
  stops: { position: number; color: string; transparency: number }[];
}

export interface PatternFill {
  pattern: string;
  foregroundColor: string;
  backgroundColor: string;
}

export interface TriggerAnimation {
  id: string;
  trigger: 'click' | 'hover' | 'bookmark' | 'media';
  targetElement: string;
  animation: AnimationEffect;
  condition?: string;
}

export interface SlideTransition extends TransitionEffect {
  morph?: MorphTransition;
  zoom?: ZoomEffect;
}

export interface AnimationSequence {
  id: string;
  name: string;
  animations: AnimationEffect[];
  totalDuration: number;
  autoPlay: boolean;
  loop: boolean;
}

export interface SlideMaster {
  id: string;
  name: string;
  theme: DesignTheme;
  layouts: SlideLayout[];
  placeholders: Placeholder[];
  backgroundElements: SlideElement[];
}

export interface SlideLayout {
  id: string;
  name: string;
  type: 'title' | 'content' | 'twoContent' | 'comparison' | 'titleOnly' | 'blank' | 'contentWithCaption' | 'pictureWithCaption';
  placeholders: Placeholder[];
}

export interface Placeholder {
  id: string;
  type: 'title' | 'subtitle' | 'content' | 'text' | 'object' | 'chart' | 'table' | 'clipArt' | 'media' | 'picture';
  position: { x: number; y: number };
  size: { width: number; height: number };
  style: ElementStyle;
}

export interface Slide {
  id: number;
  title: string;
  content: string;
  layout: SlideLayout;
  theme: DesignTheme;
  background: {
    type: 'solid' | 'gradient' | 'pattern' | 'picture' | 'texture';
    fill: any;
  };
  transition: SlideTransition;
  elements: SlideElement[];
  animations: AnimationSequence[];
  notes: string;
  timing: {
    advanceOnClick: boolean;
    advanceAfterTime?: number;
    rehearsedTiming?: number;
  };
  section?: string;
  hidden: boolean;
}

export interface Presentation {
  id: string;
  title: string;
  author: string;
  slides: Slide[];
  slideMaster: SlideMaster;
  sections: PresentationSection[];
  settings: PresentationSettings;
}

export interface PresentationSection {
  id: string;
  name: string;
  slideIds: number[];
  collapsed: boolean;
}

export interface PresentationSettings {
  slideSize: {
    width: number;
    height: number;
    orientation: 'landscape' | 'portrait';
  };
  showType: 'speaker' | 'individual' | 'kiosk';
  loopContinuously: boolean;
  showWithoutNarration: boolean;
  showWithoutAnimation: boolean;
  penColor: string;
  laserPointerColor: string;
}

export interface LogEntry {
  id: number;
  type: 'info' | 'success' | 'warning' | 'error';
  message: string;
  timestamp: Date;
  category: 'parsing' | 'animation' | 'transition' | 'design' | 'execution';
}
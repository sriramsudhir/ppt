export interface Slide {
  id: number;
  title: string;
  content: string;
  layout: 'title' | 'content' | 'twoColumn' | 'blank';
  background: {
    type: 'solid' | 'gradient' | 'image';
    color?: string;
    gradient?: {
      from: string;
      to: string;
      direction: string;
    };
    image?: string;
  };
  transition: {
    type: 'fade' | 'slide' | 'zoom' | 'flip' | 'cube' | 'dissolve';
    duration: number;
    direction?: 'left' | 'right' | 'up' | 'down';
  };
  animations: SlideAnimation[];
  elements: SlideElement[];
}

export interface SlideElement {
  id: string;
  type: 'text' | 'image' | 'shape' | 'chart';
  content: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  style: {
    fontSize?: number;
    fontFamily?: string;
    color?: string;
    backgroundColor?: string;
    borderRadius?: number;
    shadow?: boolean;
  };
  animation?: ElementAnimation;
}

export interface ElementAnimation {
  type: 'fadeIn' | 'slideIn' | 'zoomIn' | 'bounceIn' | 'rotateIn' | 'flipIn';
  delay: number;
  duration: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  easing: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'bounce';
}

export interface SlideAnimation {
  id: string;
  elementId: string;
  trigger: 'onLoad' | 'onClick' | 'afterPrevious' | 'withPrevious';
  animation: ElementAnimation;
}

export interface LogEntry {
  id: number;
  type: 'info' | 'success' | 'warning' | 'error';
  message: string;
  timestamp: Date;
}
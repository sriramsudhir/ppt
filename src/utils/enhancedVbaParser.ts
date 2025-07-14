import { Slide, SlideElement, ElementAnimation, SlideAnimation, LogEntry } from '../types/presentation';

export class EnhancedVBAParser {
  private slides: Slide[] = [];
  private logs: LogEntry[] = [];
  private currentSlideIndex = 0;
  private animationCounter = 0;

  parseAndExecute(code: string): { slides: Slide[], logs: LogEntry[] } {
    this.slides = [];
    this.logs = [];
    this.currentSlideIndex = 0;
    this.animationCounter = 0;

    const lines = code.split('\n').map(line => line.trim()).filter(line => line.length > 0);

    this.addLog('info', 'Starting enhanced VBA code execution...');

    try {
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.startsWith("'")) continue;

        // Enhanced parsing for slides, animations, and transitions
        if (line.toLowerCase().includes('slides.add')) {
          this.parseSlideAdd(line);
        } else if (line.toLowerCase().includes('.title.textframe.textrange.text')) {
          this.parseSetTitle(line);
        } else if (line.toLowerCase().includes('.placeholders(2).textframe.textrange.text')) {
          this.parseSetSubtitle(line);
        } else if (line.toLowerCase().includes('.transition')) {
          this.parseTransition(line);
        } else if (line.toLowerCase().includes('.animationeffect')) {
          this.parseAnimation(line);
        } else if (line.toLowerCase().includes('.background')) {
          this.parseBackground(line);
        } else if (line.toLowerCase().includes('.addshape')) {
          this.parseAddShape(line);
        } else if (line.toLowerCase().includes('.addtextbox')) {
          this.parseAddTextBox(line);
        } else if (line.toLowerCase().includes('msgbox')) {
          this.parseMsgBox(line);
        } else if (line.toLowerCase().startsWith('sub ')) {
          this.addLog('info', `Executing subroutine: ${line}`);
        } else if (line.toLowerCase().startsWith('end sub')) {
          this.addLog('info', 'Subroutine execution completed');
        }
      }

      this.addLog('success', `Enhanced presentation created with ${this.slides.length} slide(s), including transitions and animations.`);
    } catch (error) {
      this.addLog('error', `Execution error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }

    return { slides: this.slides, logs: this.logs };
  }

  private parseSlideAdd(line: string): void {
    const match = line.match(/slides\.add\((\d+),\s*(\w+)\)/i);
    if (match) {
      const slideNumber = parseInt(match[1]);
      const layout = match[2].toLowerCase();
      
      const slide: Slide = {
        id: Date.now() + Math.random(),
        title: '',
        content: '',
        layout: this.mapLayout(layout),
        background: {
          type: 'gradient',
          gradient: {
            from: '#667eea',
            to: '#764ba2',
            direction: 'to bottom right'
          }
        },
        transition: {
          type: 'fade',
          duration: 800
        },
        animations: [],
        elements: []
      };

      this.slides.push(slide);
      this.currentSlideIndex = this.slides.length - 1;
      this.addLog('success', `Added new slide with layout: ${layout} and default gradient background`);
    }
  }

  private parseTransition(line: string): void {
    const typeMatch = line.match(/\.transition\s*=\s*(\w+)/i);
    const durationMatch = line.match(/\.transitionduration\s*=\s*(\d+)/i);
    
    if (typeMatch && this.slides.length > 0) {
      const transitionType = typeMatch[1].toLowerCase();
      const duration = durationMatch ? parseInt(durationMatch[1]) : 800;
      
      this.slides[this.currentSlideIndex].transition = {
        type: this.mapTransitionType(transitionType),
        duration,
        direction: this.getTransitionDirection(transitionType)
      };
      
      this.addLog('success', `Set slide transition: ${transitionType} (${duration}ms)`);
    }
  }

  private parseAnimation(line: string): void {
    const match = line.match(/\.animationeffect\s*=\s*(\w+)/i);
    const delayMatch = line.match(/\.animationdelay\s*=\s*(\d+)/i);
    
    if (match && this.slides.length > 0) {
      const animationType = match[1].toLowerCase();
      const delay = delayMatch ? parseInt(delayMatch[1]) : 0;
      
      const animation: ElementAnimation = {
        type: this.mapAnimationType(animationType),
        delay,
        duration: 600,
        easing: 'ease-out'
      };

      // Apply to the last added element or create a default one
      const currentSlide = this.slides[this.currentSlideIndex];
      if (currentSlide.elements.length > 0) {
        const lastElement = currentSlide.elements[currentSlide.elements.length - 1];
        lastElement.animation = animation;
      }
      
      this.addLog('success', `Added animation: ${animationType} with ${delay}ms delay`);
    }
  }

  private parseBackground(line: string): void {
    const colorMatch = line.match(/\.background\.fill\.forecolor\s*=\s*rgb\((\d+),\s*(\d+),\s*(\d+)\)/i);
    const gradientMatch = line.match(/\.background\.fill\.gradient\s*=\s*(\w+)/i);
    
    if (this.slides.length > 0) {
      if (colorMatch) {
        const [, r, g, b] = colorMatch;
        this.slides[this.currentSlideIndex].background = {
          type: 'solid',
          color: `rgb(${r}, ${g}, ${b})`
        };
        this.addLog('success', `Set solid background color: rgb(${r}, ${g}, ${b})`);
      } else if (gradientMatch) {
        const gradientType = gradientMatch[1].toLowerCase();
        this.slides[this.currentSlideIndex].background = {
          type: 'gradient',
          gradient: this.getGradientByType(gradientType)
        };
        this.addLog('success', `Set gradient background: ${gradientType}`);
      }
    }
  }

  private parseAddShape(line: string): void {
    const match = line.match(/\.addshape\((\w+),\s*(\d+),\s*(\d+),\s*(\d+),\s*(\d+)\)/i);
    if (match && this.slides.length > 0) {
      const [, shapeType, x, y, width, height] = match;
      
      const element: SlideElement = {
        id: `shape_${Date.now()}_${Math.random()}`,
        type: 'shape',
        content: shapeType,
        position: { x: parseInt(x), y: parseInt(y) },
        size: { width: parseInt(width), height: parseInt(height) },
        style: {
          backgroundColor: '#3b82f6',
          borderRadius: shapeType.toLowerCase() === 'circle' ? 50 : 8,
          shadow: true
        }
      };

      this.slides[this.currentSlideIndex].elements.push(element);
      this.addLog('success', `Added ${shapeType} shape at (${x}, ${y})`);
    }
  }

  private parseAddTextBox(line: string): void {
    const match = line.match(/\.addtextbox\((\d+),\s*(\d+),\s*(\d+),\s*(\d+)\)/i);
    const textMatch = line.match(/\.textframe\.textrange\.text\s*=\s*"([^"]+)"/i);
    
    if (match && this.slides.length > 0) {
      const [, x, y, width, height] = match;
      const text = textMatch ? textMatch[1] : 'Text Box';
      
      const element: SlideElement = {
        id: `textbox_${Date.now()}_${Math.random()}`,
        type: 'text',
        content: text,
        position: { x: parseInt(x), y: parseInt(y) },
        size: { width: parseInt(width), height: parseInt(height) },
        style: {
          fontSize: 16,
          fontFamily: 'Inter, sans-serif',
          color: '#1f2937',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: 8,
          shadow: true
        },
        animation: {
          type: 'fadeIn',
          delay: this.animationCounter * 200,
          duration: 600,
          easing: 'ease-out'
        }
      };

      this.slides[this.currentSlideIndex].elements.push(element);
      this.animationCounter++;
      this.addLog('success', `Added text box: "${text}" at (${x}, ${y})`);
    }
  }

  private parseSetTitle(line: string): void {
    const match = line.match(/\.title\.textframe\.textrange\.text\s*=\s*"([^"]+)"/i);
    if (match && this.slides.length > 0) {
      const title = match[1];
      this.slides[this.currentSlideIndex].title = title;
      
      // Add title as an animated element
      const titleElement: SlideElement = {
        id: `title_${Date.now()}`,
        type: 'text',
        content: title,
        position: { x: 50, y: 100 },
        size: { width: 700, height: 100 },
        style: {
          fontSize: 48,
          fontFamily: 'Inter, sans-serif',
          color: '#ffffff',
          backgroundColor: 'transparent'
        },
        animation: {
          type: 'slideIn',
          delay: 300,
          duration: 800,
          direction: 'left',
          easing: 'ease-out'
        }
      };

      this.slides[this.currentSlideIndex].elements.push(titleElement);
      this.addLog('success', `Set animated slide title: "${title}"`);
    }
  }

  private parseSetSubtitle(line: string): void {
    const match = line.match(/\.placeholders\(2\)\.textframe\.textrange\.text\s*=\s*"([^"]+)"/i);
    if (match && this.slides.length > 0) {
      const subtitle = match[1];
      this.slides[this.currentSlideIndex].content = subtitle;
      
      // Add subtitle as an animated element
      const subtitleElement: SlideElement = {
        id: `subtitle_${Date.now()}`,
        type: 'text',
        content: subtitle,
        position: { x: 50, y: 220 },
        size: { width: 700, height: 200 },
        style: {
          fontSize: 24,
          fontFamily: 'Inter, sans-serif',
          color: '#f3f4f6',
          backgroundColor: 'transparent'
        },
        animation: {
          type: 'fadeIn',
          delay: 800,
          duration: 600,
          easing: 'ease-out'
        }
      };

      this.slides[this.currentSlideIndex].elements.push(subtitleElement);
      this.addLog('success', `Set animated slide subtitle: "${subtitle}"`);
    }
  }

  private parseMsgBox(line: string): void {
    const match = line.match(/msgbox\s+"([^"]+)"/i);
    if (match) {
      const message = match[1];
      this.addLog('info', `MsgBox: ${message}`);
    }
  }

  private mapLayout(layout: string): Slide['layout'] {
    switch (layout.toLowerCase()) {
      case 'pplayouttitle':
      case 'title':
        return 'title';
      case 'pplayouttext':
      case 'content':
        return 'content';
      case 'pplayouttwocolumntext':
      case 'twocolumn':
        return 'twoColumn';
      default:
        return 'content';
    }
  }

  private mapTransitionType(type: string): Slide['transition']['type'] {
    switch (type.toLowerCase()) {
      case 'pptransitionfade':
      case 'fade':
        return 'fade';
      case 'pptransitionpush':
      case 'slide':
        return 'slide';
      case 'pptransitionzoom':
      case 'zoom':
        return 'zoom';
      case 'pptransitionflip':
      case 'flip':
        return 'flip';
      case 'pptransitioncube':
      case 'cube':
        return 'cube';
      case 'pptransitiondissolve':
      case 'dissolve':
        return 'dissolve';
      default:
        return 'fade';
    }
  }

  private mapAnimationType(type: string): ElementAnimation['type'] {
    switch (type.toLowerCase()) {
      case 'ppanimationfadein':
      case 'fadein':
        return 'fadeIn';
      case 'ppanimationslidein':
      case 'slidein':
        return 'slideIn';
      case 'ppanimationzoomin':
      case 'zoomin':
        return 'zoomIn';
      case 'ppanimationbouncein':
      case 'bouncein':
        return 'bounceIn';
      case 'ppanimationrotatein':
      case 'rotatein':
        return 'rotateIn';
      case 'ppanimationflipin':
      case 'flipin':
        return 'flipIn';
      default:
        return 'fadeIn';
    }
  }

  private getTransitionDirection(type: string): 'left' | 'right' | 'up' | 'down' | undefined {
    if (type.includes('left')) return 'left';
    if (type.includes('right')) return 'right';
    if (type.includes('up')) return 'up';
    if (type.includes('down')) return 'down';
    return undefined;
  }

  private getGradientByType(type: string) {
    const gradients = {
      sunset: { from: '#ff7e5f', to: '#feb47b', direction: 'to bottom right' },
      ocean: { from: '#667eea', to: '#764ba2', direction: 'to bottom right' },
      forest: { from: '#134e5e', to: '#71b280', direction: 'to bottom right' },
      fire: { from: '#f12711', to: '#f5af19', direction: 'to bottom right' },
      sky: { from: '#74b9ff', to: '#0984e3', direction: 'to bottom right' }
    };
    
    return gradients[type as keyof typeof gradients] || gradients.ocean;
  }

  private addLog(type: LogEntry['type'], message: string): void {
    this.logs.push({
      id: Date.now() + Math.random(),
      type,
      message,
      timestamp: new Date()
    });
  }
}
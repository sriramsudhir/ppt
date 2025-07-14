import { 
  Slide, 
  SlideElement, 
  AnimationEffect, 
  SlideTransition, 
  DesignTheme, 
  ShapeType, 
  LogEntry,
  MorphTransition,
  ZoomEffect,
  TriggerAnimation,
  AnimationSequence,
  SlideMaster,
  SlideLayout
} from '../types/powerpointEffects';
import { TRANSITIONS, ANIMATIONS, DESIGN_THEMES, SHAPE_TYPES } from '../data/powerpointEffects';

export class CompleteVBAParser {
  private slides: Slide[] = [];
  private logs: LogEntry[] = [];
  private currentSlideIndex = 0;
  private animationCounter = 0;
  private currentTheme: DesignTheme = DESIGN_THEMES[0];
  private slideMaster: SlideMaster | null = null;
  private animationSequences: AnimationSequence[] = [];

  parseAndExecute(code: string): { slides: Slide[], logs: LogEntry[] } {
    this.slides = [];
    this.logs = [];
    this.currentSlideIndex = 0;
    this.animationCounter = 0;

    const lines = code.split('\n').map(line => line.trim()).filter(line => line.length > 0);

    this.addLog('info', 'Starting complete PowerPoint VBA execution...', 'execution');

    try {
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.startsWith("'")) continue;

        // Parse all PowerPoint commands
        this.parseLine(line);
      }

      this.addLog('success', `Complete presentation created with ${this.slides.length} slide(s), including all PowerPoint features.`, 'execution');
    } catch (error) {
      this.addLog('error', `Execution error: ${error instanceof Error ? error.message : 'Unknown error'}`, 'execution');
    }

    return { slides: this.slides, logs: this.logs };
  }

  private parseLine(line: string): void {
    const lowerLine = line.toLowerCase();

    // Slide Management
    if (lowerLine.includes('slides.add')) {
      this.parseSlideAdd(line);
    }
    // Theme and Design
    else if (lowerLine.includes('.applytheme')) {
      this.parseApplyTheme(line);
    }
    else if (lowerLine.includes('.slidemaster')) {
      this.parseSlideMaster(line);
    }
    // Content
    else if (lowerLine.includes('.title.textframe.textrange.text')) {
      this.parseSetTitle(line);
    }
    else if (lowerLine.includes('.placeholders(2).textframe.textrange.text')) {
      this.parseSetSubtitle(line);
    }
    // Transitions - All Categories
    else if (lowerLine.includes('.transition')) {
      this.parseTransition(line);
    }
    else if (lowerLine.includes('.morph')) {
      this.parseMorphTransition(line);
    }
    // Animations - All Categories
    else if (lowerLine.includes('.animationeffect')) {
      this.parseAnimation(line);
    }
    else if (lowerLine.includes('.motionpath')) {
      this.parseMotionPath(line);
    }
    else if (lowerLine.includes('.trigger')) {
      this.parseTriggerAnimation(line);
    }
    // Zoom Effects
    else if (lowerLine.includes('.slidezoom')) {
      this.parseSlideZoom(line);
    }
    else if (lowerLine.includes('.sectionzoom')) {
      this.parseSectionZoom(line);
    }
    else if (lowerLine.includes('.summaryzoom')) {
      this.parseSummaryZoom(line);
    }
    // Backgrounds and Design
    else if (lowerLine.includes('.background')) {
      this.parseBackground(line);
    }
    // Shapes - All Categories
    else if (lowerLine.includes('.addshape')) {
      this.parseAddShape(line);
    }
    else if (lowerLine.includes('.addtextbox')) {
      this.parseAddTextBox(line);
    }
    // Advanced Features
    else if (lowerLine.includes('.animationsequence')) {
      this.parseAnimationSequence(line);
    }
    else if (lowerLine.includes('.customshow')) {
      this.parseCustomShow(line);
    }
    // Standard VBA
    else if (lowerLine.includes('msgbox')) {
      this.parseMsgBox(line);
    }
    else if (lowerLine.startsWith('sub ')) {
      this.addLog('info', `Executing subroutine: ${line}`, 'execution');
    }
    else if (lowerLine.startsWith('end sub')) {
      this.addLog('info', 'Subroutine execution completed', 'execution');
    }
    else if (lowerLine.startsWith('dim ')) {
      this.addLog('info', `Variable declared: ${line}`, 'parsing');
    }
    else if (lowerLine.startsWith('set ')) {
      this.addLog('info', `Object reference set: ${line}`, 'parsing');
    }
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
        layout: this.createSlideLayout(layout),
        theme: this.currentTheme,
        background: {
          type: 'gradient',
          fill: {
            type: 'linear',
            angle: 45,
            stops: [
              { position: 0, color: this.currentTheme.colors.primary, transparency: 0 },
              { position: 100, color: this.currentTheme.colors.secondary, transparency: 0 }
            ]
          }
        },
        transition: this.createDefaultTransition(),
        elements: [],
        animations: [],
        notes: '',
        timing: {
          advanceOnClick: true,
          advanceAfterTime: undefined,
          rehearsedTiming: undefined
        },
        section: undefined,
        hidden: false
      };

      this.slides.push(slide);
      this.currentSlideIndex = this.slides.length - 1;
      this.addLog('success', `Added new slide with layout: ${layout}`, 'design');
    }
  }

  private parseApplyTheme(line: string): void {
    const match = line.match(/\.applytheme\s*=\s*"([^"]+)"/i);
    if (match) {
      const themeName = match[1].toLowerCase();
      const theme = DESIGN_THEMES.find(t => t.name.toLowerCase() === themeName);
      
      if (theme) {
        this.currentTheme = theme;
        // Apply theme to all existing slides
        this.slides.forEach(slide => {
          slide.theme = theme;
        });
        this.addLog('success', `Applied theme: ${theme.name}`, 'design');
      } else {
        this.addLog('warning', `Theme not found: ${themeName}`, 'design');
      }
    }
  }

  private parseTransition(line: string): void {
    const typeMatch = line.match(/\.transition\s*=\s*(\w+)/i);
    const durationMatch = line.match(/\.transitionduration\s*=\s*(\d+)/i);
    const directionMatch = line.match(/\.transitiondirection\s*=\s*(\w+)/i);
    
    if (typeMatch && this.slides.length > 0) {
      const transitionType = typeMatch[1].toLowerCase();
      const duration = durationMatch ? parseInt(durationMatch[1]) : 800;
      const direction = directionMatch ? directionMatch[1].toLowerCase() as any : undefined;
      
      // Find transition in database
      let transition: any = null;
      Object.values(TRANSITIONS).flat().forEach(t => {
        if (t.id === transitionType || t.name.toLowerCase().includes(transitionType)) {
          transition = t;
        }
      });

      if (transition) {
        this.slides[this.currentSlideIndex].transition = {
          ...transition,
          duration,
          direction: direction || transition.direction,
          morph: undefined,
          zoom: undefined
        };
        
        this.addLog('success', `Set slide transition: ${transition.name} (${duration}ms)`, 'transition');
      } else {
        this.addLog('warning', `Transition not found: ${transitionType}`, 'transition');
      }
    }
  }

  private parseMorphTransition(line: string): void {
    const enabledMatch = line.match(/\.morph\s*=\s*(true|false)/i);
    const durationMatch = line.match(/\.morphduration\s*=\s*(\d+)/i);
    
    if (enabledMatch && this.slides.length > 0) {
      const enabled = enabledMatch[1].toLowerCase() === 'true';
      const duration = durationMatch ? parseInt(durationMatch[1]) : 1000;
      
      const morphTransition: MorphTransition = {
        enabled,
        morphObjects: [],
        duration,
        easing: 'ease-in-out',
        options: {
          morphByWord: true,
          morphByCharacter: false,
          morphShapes: true,
          morphImages: true
        }
      };

      this.slides[this.currentSlideIndex].transition.morph = morphTransition;
      this.addLog('success', `Set morph transition: ${enabled ? 'enabled' : 'disabled'} (${duration}ms)`, 'transition');
    }
  }

  private parseAnimation(line: string): void {
    const match = line.match(/\.animationeffect\s*=\s*(\w+)/i);
    const delayMatch = line.match(/\.animationdelay\s*=\s*(\d+)/i);
    const durationMatch = line.match(/\.animationduration\s*=\s*(\d+)/i);
    const triggerMatch = line.match(/\.animationtrigger\s*=\s*(\w+)/i);
    
    if (match && this.slides.length > 0) {
      const animationType = match[1].toLowerCase();
      const delay = delayMatch ? parseInt(delayMatch[1]) : 0;
      const duration = durationMatch ? parseInt(durationMatch[1]) : 600;
      const trigger = triggerMatch ? triggerMatch[1].toLowerCase() as any : 'onLoad';
      
      // Find animation in database
      let animation: AnimationEffect | null = null;
      Object.values(ANIMATIONS).flat().forEach(a => {
        if (a.id === animationType || a.name.toLowerCase().includes(animationType)) {
          animation = { ...a, delay, duration, trigger };
        }
      });

      if (animation) {
        // Apply to the last added element or create a default one
        const currentSlide = this.slides[this.currentSlideIndex];
        if (currentSlide.elements.length > 0) {
          const lastElement = currentSlide.elements[currentSlide.elements.length - 1];
          if (!lastElement.animations) lastElement.animations = [];
          lastElement.animations.push(animation);
        }
        
        this.addLog('success', `Added animation: ${animation.name} with ${delay}ms delay`, 'animation');
      } else {
        this.addLog('warning', `Animation not found: ${animationType}`, 'animation');
      }
    }
  }

  private parseMotionPath(line: string): void {
    const match = line.match(/\.motionpath\s*=\s*(\w+)/i);
    const pointsMatch = line.match(/\.motionpathpoints\s*=\s*"([^"]+)"/i);
    
    if (match && this.slides.length > 0) {
      const pathType = match[1].toLowerCase();
      const points = pointsMatch ? this.parsePathPoints(pointsMatch[1]) : [];
      
      // Find motion path animation
      const motionPathAnim = ANIMATIONS.motionPath.find(a => 
        a.id === pathType || a.name.toLowerCase().includes(pathType)
      );

      if (motionPathAnim) {
        const animation: AnimationEffect = {
          ...motionPathAnim,
          motionPath: {
            type: pathType as any,
            points: points.length > 0 ? points : [{ x: 0, y: 0 }, { x: 100, y: 100 }],
            smooth: true,
            autoReverse: false
          }
        };

        const currentSlide = this.slides[this.currentSlideIndex];
        if (currentSlide.elements.length > 0) {
          const lastElement = currentSlide.elements[currentSlide.elements.length - 1];
          if (!lastElement.animations) lastElement.animations = [];
          lastElement.animations.push(animation);
        }
        
        this.addLog('success', `Added motion path: ${motionPathAnim.name}`, 'animation');
      } else {
        this.addLog('warning', `Motion path not found: ${pathType}`, 'animation');
      }
    }
  }

  private parseSlideZoom(line: string): void {
    const targetMatch = line.match(/\.slidezoom\s*=\s*(\d+)/i);
    const durationMatch = line.match(/\.zoomduration\s*=\s*(\d+)/i);
    
    if (targetMatch && this.slides.length > 0) {
      const targetSlide = parseInt(targetMatch[1]);
      const duration = durationMatch ? parseInt(durationMatch[1]) : 1000;
      
      const zoomEffect: ZoomEffect = {
        type: 'slideZoom',
        targetSlide,
        returnToZoom: true,
        duration
      };

      this.slides[this.currentSlideIndex].transition.zoom = zoomEffect;
      this.addLog('success', `Added slide zoom to slide ${targetSlide}`, 'transition');
    }
  }

  private parseSectionZoom(line: string): void {
    const sectionMatch = line.match(/\.sectionzoom\s*=\s*"([^"]+)"/i);
    const durationMatch = line.match(/\.zoomduration\s*=\s*(\d+)/i);
    
    if (sectionMatch && this.slides.length > 0) {
      const targetSection = sectionMatch[1];
      const duration = durationMatch ? parseInt(durationMatch[1]) : 1000;
      
      const zoomEffect: ZoomEffect = {
        type: 'sectionZoom',
        targetSection,
        returnToZoom: true,
        duration
      };

      this.slides[this.currentSlideIndex].transition.zoom = zoomEffect;
      this.addLog('success', `Added section zoom to section "${targetSection}"`, 'transition');
    }
  }

  private parseSummaryZoom(line: string): void {
    const durationMatch = line.match(/\.summaryzoom.*duration\s*=\s*(\d+)/i);
    
    if (this.slides.length > 0) {
      const duration = durationMatch ? parseInt(durationMatch[1]) : 1000;
      
      const zoomEffect: ZoomEffect = {
        type: 'summaryZoom',
        returnToZoom: false,
        duration
      };

      this.slides[this.currentSlideIndex].transition.zoom = zoomEffect;
      this.addLog('success', `Added summary zoom`, 'transition');
    }
  }

  private parseBackground(line: string): void {
    const colorMatch = line.match(/\.background\.fill\.forecolor\s*=\s*rgb\((\d+),\s*(\d+),\s*(\d+)\)/i);
    const gradientMatch = line.match(/\.background\.fill\.gradient\s*=\s*"([^"]+)"/i);
    const pictureMatch = line.match(/\.background\.fill\.picture\s*=\s*"([^"]+)"/i);
    const textureMatch = line.match(/\.background\.fill\.texture\s*=\s*(\w+)/i);
    
    if (this.slides.length > 0) {
      if (colorMatch) {
        const [, r, g, b] = colorMatch;
        this.slides[this.currentSlideIndex].background = {
          type: 'solid',
          fill: `rgb(${r}, ${g}, ${b})`
        };
        this.addLog('success', `Set solid background color: rgb(${r}, ${g}, ${b})`, 'design');
      } else if (gradientMatch) {
        const gradientName = gradientMatch[1].toLowerCase();
        this.slides[this.currentSlideIndex].background = {
          type: 'gradient',
          fill: this.getGradientByName(gradientName)
        };
        this.addLog('success', `Set gradient background: ${gradientName}`, 'design');
      } else if (pictureMatch) {
        const picturePath = pictureMatch[1];
        this.slides[this.currentSlideIndex].background = {
          type: 'picture',
          fill: picturePath
        };
        this.addLog('success', `Set picture background: ${picturePath}`, 'design');
      } else if (textureMatch) {
        const texture = textureMatch[1];
        this.slides[this.currentSlideIndex].background = {
          type: 'texture',
          fill: texture
        };
        this.addLog('success', `Set texture background: ${texture}`, 'design');
      }
    }
  }

  private parseAddShape(line: string): void {
    const match = line.match(/\.addshape\((\w+),\s*(\d+),\s*(\d+),\s*(\d+),\s*(\d+)\)/i);
    if (match && this.slides.length > 0) {
      const [, shapeType, x, y, width, height] = match;
      
      // Find shape in database
      let shape: ShapeType | null = null;
      Object.values(SHAPE_TYPES).flat().forEach(s => {
        if (s.id === shapeType.toLowerCase() || s.name.toLowerCase().includes(shapeType.toLowerCase())) {
          shape = s;
        }
      });

      if (shape) {
        const element: SlideElement = {
          id: `shape_${Date.now()}_${Math.random()}`,
          type: 'shape',
          content: shape.path,
          position: { x: parseInt(x), y: parseInt(y), z: 0 },
          size: { width: parseInt(width), height: parseInt(height) },
          rotation: 0,
          style: {
            fill: {
              type: 'solid',
              color: this.currentTheme.colors.accent1,
              transparency: 0
            },
            outline: {
              color: this.currentTheme.colors.primary,
              width: 2,
              style: 'solid'
            },
            shadow: this.currentTheme.effects.shadows ? {
              type: 'outer',
              color: 'rgba(0,0,0,0.3)',
              blur: 4,
              distance: 2,
              angle: 45
            } : undefined
          },
          animations: [],
          triggers: []
        };

        this.slides[this.currentSlideIndex].elements.push(element);
        this.addLog('success', `Added ${shape.name} shape at (${x}, ${y})`, 'design');
      } else {
        this.addLog('warning', `Shape type not found: ${shapeType}`, 'design');
      }
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
        position: { x: parseInt(x), y: parseInt(y), z: 0 },
        size: { width: parseInt(width), height: parseInt(height) },
        rotation: 0,
        style: {
          fill: {
            type: 'solid',
            color: 'rgba(255, 255, 255, 0.9)',
            transparency: 10
          },
          textFormat: {
            font: this.currentTheme.fonts.body,
            size: 16,
            color: this.currentTheme.colors.text,
            bold: false,
            italic: false,
            underline: false,
            alignment: 'left',
            lineSpacing: 1.2,
            characterSpacing: 0
          },
          shadow: this.currentTheme.effects.shadows ? {
            type: 'outer',
            color: 'rgba(0,0,0,0.2)',
            blur: 2,
            distance: 1,
            angle: 45
          } : undefined
        },
        animations: [{
          id: `anim_${Date.now()}`,
          name: 'Fade In',
          category: 'entrance',
          type: 'basic',
          duration: 600,
          delay: this.animationCounter * 200,
          trigger: 'onLoad',
          easing: 'ease-out'
        }],
        triggers: []
      };

      this.slides[this.currentSlideIndex].elements.push(element);
      this.animationCounter++;
      this.addLog('success', `Added text box: "${text}" at (${x}, ${y})`, 'design');
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
        position: { x: 50, y: 100, z: 1 },
        size: { width: 700, height: 100 },
        rotation: 0,
        style: {
          textFormat: {
            font: this.currentTheme.fonts.heading,
            size: 48,
            color: '#ffffff',
            bold: true,
            italic: false,
            underline: false,
            alignment: 'center',
            lineSpacing: 1.2,
            characterSpacing: 0
          },
          fill: {
            type: 'solid',
            color: 'transparent',
            transparency: 100
          }
        },
        animations: [{
          id: `title_anim_${Date.now()}`,
          name: 'Slide In',
          category: 'entrance',
          type: 'moderate',
          duration: 800,
          delay: 300,
          trigger: 'onLoad',
          easing: 'ease-out',
          direction: 'left'
        }],
        triggers: []
      };

      this.slides[this.currentSlideIndex].elements.push(titleElement);
      this.addLog('success', `Set animated slide title: "${title}"`, 'design');
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
        position: { x: 50, y: 220, z: 1 },
        size: { width: 700, height: 200 },
        rotation: 0,
        style: {
          textFormat: {
            font: this.currentTheme.fonts.body,
            size: 24,
            color: '#f3f4f6',
            bold: false,
            italic: false,
            underline: false,
            alignment: 'center',
            lineSpacing: 1.4,
            characterSpacing: 0
          },
          fill: {
            type: 'solid',
            color: 'transparent',
            transparency: 100
          }
        },
        animations: [{
          id: `subtitle_anim_${Date.now()}`,
          name: 'Fade In',
          category: 'entrance',
          type: 'subtle',
          duration: 600,
          delay: 800,
          trigger: 'onLoad',
          easing: 'ease-out'
        }],
        triggers: []
      };

      this.slides[this.currentSlideIndex].elements.push(subtitleElement);
      this.addLog('success', `Set animated slide subtitle: "${subtitle}"`, 'design');
    }
  }

  private parseTriggerAnimation(line: string): void {
    const match = line.match(/\.trigger\s*=\s*(\w+)/i);
    const targetMatch = line.match(/\.triggertarget\s*=\s*"([^"]+)"/i);
    
    if (match && targetMatch && this.slides.length > 0) {
      const trigger = match[1].toLowerCase();
      const target = targetMatch[1];
      
      const triggerAnimation: TriggerAnimation = {
        id: `trigger_${Date.now()}`,
        trigger: trigger as any,
        targetElement: target,
        animation: {
          id: `trigger_anim_${Date.now()}`,
          name: 'Triggered Animation',
          category: 'emphasis',
          type: 'moderate',
          duration: 500,
          delay: 0,
          trigger: 'onClick',
          easing: 'ease-in-out'
        }
      };

      // Find target element and add trigger
      const currentSlide = this.slides[this.currentSlideIndex];
      const targetElement = currentSlide.elements.find(el => el.id === target);
      if (targetElement) {
        targetElement.triggers.push(triggerAnimation);
        this.addLog('success', `Added trigger animation: ${trigger} on ${target}`, 'animation');
      } else {
        this.addLog('warning', `Target element not found: ${target}`, 'animation');
      }
    }
  }

  private parseAnimationSequence(line: string): void {
    const nameMatch = line.match(/\.animationsequence\s*=\s*"([^"]+)"/i);
    const autoPlayMatch = line.match(/\.autoplay\s*=\s*(true|false)/i);
    
    if (nameMatch) {
      const sequenceName = nameMatch[1];
      const autoPlay = autoPlayMatch ? autoPlayMatch[1].toLowerCase() === 'true' : false;
      
      const sequence: AnimationSequence = {
        id: `seq_${Date.now()}`,
        name: sequenceName,
        animations: [],
        totalDuration: 0,
        autoPlay,
        loop: false
      };

      this.animationSequences.push(sequence);
      this.addLog('success', `Created animation sequence: ${sequenceName}`, 'animation');
    }
  }

  private parseCustomShow(line: string): void {
    const nameMatch = line.match(/\.customshow\s*=\s*"([^"]+)"/i);
    const slidesMatch = line.match(/\.slides\s*=\s*"([^"]+)"/i);
    
    if (nameMatch) {
      const showName = nameMatch[1];
      const slideNumbers = slidesMatch ? slidesMatch[1].split(',').map(s => parseInt(s.trim())) : [];
      
      this.addLog('success', `Created custom show: ${showName} with slides [${slideNumbers.join(', ')}]`, 'design');
    }
  }

  private parseSlideMaster(line: string): void {
    const nameMatch = line.match(/\.slidemaster\s*=\s*"([^"]+)"/i);
    
    if (nameMatch) {
      const masterName = nameMatch[1];
      
      this.slideMaster = {
        id: `master_${Date.now()}`,
        name: masterName,
        theme: this.currentTheme,
        layouts: [],
        placeholders: [],
        backgroundElements: []
      };
      
      this.addLog('success', `Created slide master: ${masterName}`, 'design');
    }
  }

  private parseMsgBox(line: string): void {
    const match = line.match(/msgbox\s+"([^"]+)"/i);
    if (match) {
      const message = match[1];
      this.addLog('info', `MsgBox: ${message}`, 'execution');
    }
  }

  // Helper methods
  private createSlideLayout(layoutType: string): SlideLayout {
    return {
      id: `layout_${Date.now()}`,
      name: layoutType,
      type: this.mapLayoutType(layoutType),
      placeholders: []
    };
  }

  private createDefaultTransition(): SlideTransition {
    return {
      id: 'fade',
      name: 'Fade',
      category: 'subtle',
      duration: 500
    };
  }

  private mapLayoutType(layout: string): SlideLayout['type'] {
    switch (layout.toLowerCase()) {
      case 'pplayouttitle':
      case 'title':
        return 'title';
      case 'pplayouttext':
      case 'content':
        return 'content';
      case 'pplayouttwocolumntext':
      case 'twocolumn':
        return 'twoContent';
      case 'pplayoutcomparison':
        return 'comparison';
      case 'pplayouttitleonly':
        return 'titleOnly';
      case 'pplayoutblank':
        return 'blank';
      case 'pplayoutcontentwithcaption':
        return 'contentWithCaption';
      case 'pplayoutpicturewithcaption':
        return 'pictureWithCaption';
      default:
        return 'content';
    }
  }

  private getGradientByName(name: string) {
    const gradients: Record<string, any> = {
      ocean: {
        type: 'linear',
        angle: 45,
        stops: [
          { position: 0, color: '#667eea', transparency: 0 },
          { position: 100, color: '#764ba2', transparency: 0 }
        ]
      },
      sunset: {
        type: 'linear',
        angle: 45,
        stops: [
          { position: 0, color: '#ff7e5f', transparency: 0 },
          { position: 100, color: '#feb47b', transparency: 0 }
        ]
      },
      forest: {
        type: 'linear',
        angle: 45,
        stops: [
          { position: 0, color: '#134e5e', transparency: 0 },
          { position: 100, color: '#71b280', transparency: 0 }
        ]
      },
      fire: {
        type: 'linear',
        angle: 45,
        stops: [
          { position: 0, color: '#f12711', transparency: 0 },
          { position: 100, color: '#f5af19', transparency: 0 }
        ]
      },
      sky: {
        type: 'linear',
        angle: 45,
        stops: [
          { position: 0, color: '#74b9ff', transparency: 0 },
          { position: 100, color: '#0984e3', transparency: 0 }
        ]
      }
    };
    
    return gradients[name] || gradients.ocean;
  }

  private parsePathPoints(pointsStr: string): { x: number; y: number }[] {
    const points: { x: number; y: number }[] = [];
    const pairs = pointsStr.split(',');
    
    for (let i = 0; i < pairs.length; i += 2) {
      if (i + 1 < pairs.length) {
        points.push({
          x: parseInt(pairs[i].trim()),
          y: parseInt(pairs[i + 1].trim())
        });
      }
    }
    
    return points;
  }

  private addLog(type: LogEntry['type'], message: string, category: LogEntry['category']): void {
    this.logs.push({
      id: Date.now() + Math.random(),
      type,
      message,
      timestamp: new Date(),
      category
    });
  }
}
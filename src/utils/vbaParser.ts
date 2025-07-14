interface Slide {
  id: number;
  title: string;
  content: string;
  layout: string;
}

interface LogEntry {
  id: number;
  type: 'info' | 'success' | 'warning' | 'error';
  message: string;
  timestamp: Date;
}

export class VBAParser {
  private slides: Slide[] = [];
  private logs: LogEntry[] = [];
  private currentSlideIndex = 0;

  parseAndExecute(code: string): { slides: Slide[], logs: LogEntry[] } {
    this.slides = [];
    this.logs = [];
    this.currentSlideIndex = 0;

    const lines = code.split('\n').map(line => line.trim()).filter(line => line.length > 0);

    this.addLog('info', 'Starting VBA code execution...');

    try {
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Skip comments
        if (line.startsWith("'")) {
          continue;
        }

        // Parse different VBA commands
        if (line.toLowerCase().includes('slides.add')) {
          this.parseSlideAdd(line);
        } else if (line.toLowerCase().includes('.title.textframe.textrange.text')) {
          this.parseSetTitle(line);
        } else if (line.toLowerCase().includes('.placeholders(2).textframe.textrange.text')) {
          this.parseSetSubtitle(line);
        } else if (line.toLowerCase().includes('.textframe.textrange.text')) {
          this.parseSetText(line);
        } else if (line.toLowerCase().includes('msgbox')) {
          this.parseMsgBox(line);
        } else if (line.toLowerCase().startsWith('sub ')) {
          this.addLog('info', `Executing subroutine: ${line}`);
        } else if (line.toLowerCase().startsWith('end sub')) {
          this.addLog('info', 'Subroutine execution completed');
        } else if (line.toLowerCase().startsWith('dim ')) {
          this.addLog('info', `Variable declared: ${line}`);
        } else if (line.toLowerCase().startsWith('set ')) {
          this.addLog('info', `Object reference set: ${line}`);
        }
      }

      this.addLog('success', `Code execution completed. Generated ${this.slides.length} slide(s).`);
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
        layout: layout.includes('title') ? 'title' : 'content'
      };

      this.slides.push(slide);
      this.currentSlideIndex = this.slides.length - 1;
      this.addLog('success', `Added new slide with layout: ${layout}`);
    }
  }

  private parseSetTitle(line: string): void {
    const match = line.match(/\.title\.textframe\.textrange\.text\s*=\s*"([^"]+)"/i);
    if (match && this.slides.length > 0) {
      const title = match[1];
      this.slides[this.currentSlideIndex].title = title;
      this.addLog('success', `Set slide title: "${title}"`);
    }
  }

  private parseSetSubtitle(line: string): void {
    const match = line.match(/\.placeholders\(2\)\.textframe\.textrange\.text\s*=\s*"([^"]+)"/i);
    if (match && this.slides.length > 0) {
      const subtitle = match[1];
      this.slides[this.currentSlideIndex].content = subtitle;
      this.addLog('success', `Set slide subtitle: "${subtitle}"`);
    }
  }

  private parseSetText(line: string): void {
    const match = line.match(/\.textframe\.textrange\.text\s*=\s*"([^"]+)"/i);
    if (match && this.slides.length > 0) {
      const text = match[1];
      if (!this.slides[this.currentSlideIndex].content) {
        this.slides[this.currentSlideIndex].content = text;
      } else {
        this.slides[this.currentSlideIndex].content += '\n' + text;
      }
      this.addLog('success', `Added text: "${text}"`);
    }
  }

  private parseMsgBox(line: string): void {
    const match = line.match(/msgbox\s+"([^"]+)"/i);
    if (match) {
      const message = match[1];
      this.addLog('info', `MsgBox: ${message}`);
    }
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
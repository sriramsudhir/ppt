// Complete PowerPoint Effects Database

import { TransitionEffect, AnimationEffect, DesignTheme, ShapeType } from '../types/powerpointEffects';

// TRANSITION EFFECTS - Complete List
export const TRANSITIONS: Record<string, TransitionEffect[]> = {
  subtle: [
    { id: 'fade', name: 'Fade', category: 'subtle', duration: 500 },
    { id: 'cut', name: 'Cut', category: 'subtle', duration: 0 },
    { id: 'push', name: 'Push', category: 'subtle', duration: 700, direction: 'left' },
    { id: 'wipe', name: 'Wipe', category: 'subtle', duration: 600, direction: 'right' },
    { id: 'split', name: 'Split', category: 'subtle', duration: 800, direction: 'in' },
    { id: 'reveal', name: 'Reveal', category: 'subtle', duration: 750, direction: 'left' },
    { id: 'randomBars', name: 'Random Bars', category: 'subtle', duration: 900 },
    { id: 'shape', name: 'Shape', category: 'subtle', duration: 650 },
    { id: 'uncover', name: 'Uncover', category: 'subtle', duration: 700, direction: 'right' },
    { id: 'cover', name: 'Cover', category: 'subtle', duration: 650, direction: 'left' }
  ],
  
  dynamic: [
    { id: 'clock', name: 'Clock', category: 'dynamic', duration: 1000 },
    { id: 'ripple', name: 'Ripple', category: 'dynamic', duration: 1200 },
    { id: 'honeycomb', name: 'Honeycomb', category: 'dynamic', duration: 1100 },
    { id: 'glitter', name: 'Glitter', category: 'dynamic', duration: 1300 },
    { id: 'vortex', name: 'Vortex', category: 'dynamic', duration: 1400 },
    { id: 'shred', name: 'Shred', category: 'dynamic', duration: 1000, direction: 'in' },
    { id: 'switch', name: 'Switch', category: 'dynamic', duration: 800 },
    { id: 'flip', name: 'Flip', category: 'dynamic', duration: 900 },
    { id: 'gallery', name: 'Gallery', category: 'dynamic', duration: 1100 },
    { id: 'cube', name: 'Cube', category: 'dynamic', duration: 1200, direction: 'left' },
    { id: 'doors', name: 'Doors', category: 'dynamic', duration: 1000 },
    { id: 'box', name: 'Box', category: 'dynamic', duration: 950, direction: 'in' },
    { id: 'comb', name: 'Comb', category: 'dynamic', duration: 850 },
    { id: 'zoom', name: 'Zoom', category: 'dynamic', duration: 800, direction: 'in' },
    { id: 'pan', name: 'Pan', category: 'dynamic', duration: 1000, direction: 'left' }
  ],
  
  exciting: [
    { id: 'ferris', name: 'Ferris Wheel', category: 'exciting', duration: 2000 },
    { id: 'conveyor', name: 'Conveyor', category: 'exciting', duration: 1800 },
    { id: 'rotate', name: 'Rotate', category: 'exciting', duration: 1500 },
    { id: 'orbit', name: 'Orbit', category: 'exciting', duration: 2200 },
    { id: 'airplane', name: 'Airplane', category: 'exciting', duration: 2500 },
    { id: 'origami', name: 'Origami', category: 'exciting', duration: 2000 },
    { id: 'prestige', name: 'Prestige', category: 'exciting', duration: 1800 },
    { id: 'fracture', name: 'Fracture', category: 'exciting', duration: 1600 },
    { id: 'crush', name: 'Crush', category: 'exciting', duration: 1400 },
    { id: 'peelOff', name: 'Peel Off', category: 'exciting', duration: 1700 },
    { id: 'pageCurl', name: 'Page Curl', category: 'exciting', duration: 1900 },
    { id: 'fall', name: 'Fall Over', category: 'exciting', duration: 1300 },
    { id: 'drape', name: 'Drape', category: 'exciting', duration: 1500 },
    { id: 'curtains', name: 'Curtains', category: 'exciting', duration: 1600 },
    { id: 'wind', name: 'Wind', category: 'exciting', duration: 1400 },
    { id: 'morph', name: 'Morph', category: 'exciting', duration: 1000 }
  ]
};

// ANIMATION EFFECTS - Complete Categories
export const ANIMATIONS: Record<string, AnimationEffect[]> = {
  entrance: [
    // Basic Entrance
    { id: 'appear', name: 'Appear', category: 'entrance', type: 'basic', duration: 500, delay: 0, trigger: 'onLoad', easing: 'ease' },
    { id: 'blinds', name: 'Blinds', category: 'entrance', type: 'basic', duration: 800, delay: 0, trigger: 'onLoad', easing: 'ease' },
    { id: 'box', name: 'Box', category: 'entrance', type: 'basic', duration: 700, delay: 0, trigger: 'onLoad', easing: 'ease', direction: 'in' },
    { id: 'checkerboard', name: 'Checkerboard', category: 'entrance', type: 'basic', duration: 900, delay: 0, trigger: 'onLoad', easing: 'ease' },
    { id: 'circle', name: 'Circle', category: 'entrance', type: 'basic', duration: 800, delay: 0, trigger: 'onLoad', easing: 'ease', direction: 'in' },
    { id: 'diamond', name: 'Diamond', category: 'entrance', type: 'basic', duration: 750, delay: 0, trigger: 'onLoad', easing: 'ease', direction: 'in' },
    { id: 'dissolveIn', name: 'Dissolve In', category: 'entrance', type: 'basic', duration: 1000, delay: 0, trigger: 'onLoad', easing: 'ease' },
    { id: 'fadeIn', name: 'Fade In', category: 'entrance', type: 'basic', duration: 600, delay: 0, trigger: 'onLoad', easing: 'ease' },
    { id: 'flashOnce', name: 'Flash Once', category: 'entrance', type: 'basic', duration: 400, delay: 0, trigger: 'onLoad', easing: 'ease' },
    { id: 'flyIn', name: 'Fly In', category: 'entrance', type: 'basic', duration: 800, delay: 0, trigger: 'onLoad', easing: 'ease', direction: 'left' },
    { id: 'peek', name: 'Peek In', category: 'entrance', type: 'basic', duration: 600, delay: 0, trigger: 'onLoad', easing: 'ease', direction: 'down' },
    { id: 'plus', name: 'Plus', category: 'entrance', type: 'basic', duration: 700, delay: 0, trigger: 'onLoad', easing: 'ease', direction: 'in' },
    { id: 'randomBars', name: 'Random Bars', category: 'entrance', type: 'basic', duration: 900, delay: 0, trigger: 'onLoad', easing: 'ease' },
    { id: 'split', name: 'Split', category: 'entrance', type: 'basic', duration: 800, delay: 0, trigger: 'onLoad', easing: 'ease', direction: 'in' },
    { id: 'strips', name: 'Strips', category: 'entrance', type: 'basic', duration: 850, delay: 0, trigger: 'onLoad', easing: 'ease', direction: 'down' },
    { id: 'wedge', name: 'Wedge', category: 'entrance', type: 'basic', duration: 750, delay: 0, trigger: 'onLoad', easing: 'ease' },
    { id: 'wheel', name: 'Wheel', category: 'entrance', type: 'basic', duration: 1000, delay: 0, trigger: 'onLoad', easing: 'ease' },
    { id: 'wipe', name: 'Wipe', category: 'entrance', type: 'basic', duration: 700, delay: 0, trigger: 'onLoad', easing: 'ease', direction: 'right' },
    { id: 'zoom', name: 'Zoom', category: 'entrance', type: 'basic', duration: 600, delay: 0, trigger: 'onLoad', easing: 'ease', direction: 'in' },
    
    // Subtle Entrance
    { id: 'expand', name: 'Expand', category: 'entrance', type: 'subtle', duration: 800, delay: 0, trigger: 'onLoad', easing: 'ease-out' },
    { id: 'faded_swivel', name: 'Faded Swivel', category: 'entrance', type: 'subtle', duration: 900, delay: 0, trigger: 'onLoad', easing: 'ease-out' },
    { id: 'faded_zoom', name: 'Faded Zoom', category: 'entrance', type: 'subtle', duration: 700, delay: 0, trigger: 'onLoad', easing: 'ease-out' },
    { id: 'rise_up', name: 'Rise Up', category: 'entrance', type: 'subtle', duration: 800, delay: 0, trigger: 'onLoad', easing: 'ease-out' },
    { id: 'stretch', name: 'Stretch', category: 'entrance', type: 'subtle', duration: 750, delay: 0, trigger: 'onLoad', easing: 'ease-out' },
    { id: 'compress', name: 'Compress', category: 'entrance', type: 'subtle', duration: 650, delay: 0, trigger: 'onLoad', easing: 'ease-out' },
    
    // Moderate Entrance
    { id: 'basic_swivel', name: 'Basic Swivel', category: 'entrance', type: 'moderate', duration: 800, delay: 0, trigger: 'onLoad', easing: 'ease-in-out' },
    { id: 'boomerang', name: 'Boomerang', category: 'entrance', type: 'moderate', duration: 1200, delay: 0, trigger: 'onLoad', easing: 'ease-in-out' },
    { id: 'bounce', name: 'Bounce', category: 'entrance', type: 'moderate', duration: 1000, delay: 0, trigger: 'onLoad', easing: 'bounce' },
    { id: 'credits', name: 'Credits', category: 'entrance', type: 'moderate', duration: 1500, delay: 0, trigger: 'onLoad', easing: 'ease-in-out' },
    { id: 'curve_up', name: 'Curve Up', category: 'entrance', type: 'moderate', duration: 900, delay: 0, trigger: 'onLoad', easing: 'ease-in-out' },
    { id: 'drop', name: 'Drop', category: 'entrance', type: 'moderate', duration: 800, delay: 0, trigger: 'onLoad', easing: 'ease-in' },
    { id: 'float', name: 'Float', category: 'entrance', type: 'moderate', duration: 1100, delay: 0, trigger: 'onLoad', easing: 'ease-out' },
    { id: 'glide', name: 'Glide', category: 'entrance', type: 'moderate', duration: 1000, delay: 0, trigger: 'onLoad', easing: 'ease-in-out' },
    { id: 'magnify', name: 'Magnify', category: 'entrance', type: 'moderate', duration: 700, delay: 0, trigger: 'onLoad', easing: 'ease-out' },
    { id: 'pinwheel', name: 'Pinwheel', category: 'entrance', type: 'moderate', duration: 1200, delay: 0, trigger: 'onLoad', easing: 'ease-in-out' },
    { id: 'spiral_in', name: 'Spiral In', category: 'entrance', type: 'moderate', duration: 1300, delay: 0, trigger: 'onLoad', easing: 'ease-in-out' },
    { id: 'swish', name: 'Swish', category: 'entrance', type: 'moderate', duration: 800, delay: 0, trigger: 'onLoad', easing: 'ease-out' },
    { id: 'thread', name: 'Thread', category: 'entrance', type: 'moderate', duration: 1000, delay: 0, trigger: 'onLoad', easing: 'ease-in-out' },
    { id: 'whip', name: 'Whip', category: 'entrance', type: 'moderate', duration: 600, delay: 0, trigger: 'onLoad', easing: 'ease-in-out' },
    
    // Exciting Entrance
    { id: 'airplane', name: 'Airplane', category: 'entrance', type: 'exciting', duration: 2000, delay: 0, trigger: 'onLoad', easing: 'ease-in-out' },
    { id: 'catapult', name: 'Catapult', category: 'entrance', type: 'exciting', duration: 1500, delay: 0, trigger: 'onLoad', easing: 'ease-out' },
    { id: 'flip', name: 'Flip', category: 'entrance', type: 'exciting', duration: 1000, delay: 0, trigger: 'onLoad', easing: 'ease-in-out' },
    { id: 'fold', name: 'Fold', category: 'entrance', type: 'exciting', duration: 1200, delay: 0, trigger: 'onLoad', easing: 'ease-in-out' },
    { id: 'peek_in', name: 'Peek In', category: 'entrance', type: 'exciting', duration: 800, delay: 0, trigger: 'onLoad', easing: 'ease-out' },
    { id: 'random_effects', name: 'Random Effects', category: 'entrance', type: 'exciting', duration: 1000, delay: 0, trigger: 'onLoad', easing: 'ease' },
    { id: 'shape', name: 'Shape', category: 'entrance', type: 'exciting', duration: 900, delay: 0, trigger: 'onLoad', easing: 'ease-in-out' },
    { id: 'sling', name: 'Sling', category: 'entrance', type: 'exciting', duration: 1100, delay: 0, trigger: 'onLoad', easing: 'ease-out' },
    { id: 'spinner', name: 'Spinner', category: 'entrance', type: 'exciting', duration: 1300, delay: 0, trigger: 'onLoad', easing: 'ease-in-out' },
    { id: 'swivel', name: 'Swivel', category: 'entrance', type: 'exciting', duration: 800, delay: 0, trigger: 'onLoad', easing: 'ease-in-out' },
    { id: 'turn', name: 'Turn', category: 'entrance', type: 'exciting', duration: 900, delay: 0, trigger: 'onLoad', easing: 'ease-in-out' }
  ],
  
  emphasis: [
    // Basic Emphasis
    { id: 'bold_flash', name: 'Bold Flash', category: 'emphasis', type: 'basic', duration: 300, delay: 0, trigger: 'onClick', easing: 'ease' },
    { id: 'bold_reveal', name: 'Bold Reveal', category: 'emphasis', type: 'basic', duration: 500, delay: 0, trigger: 'onClick', easing: 'ease' },
    { id: 'brush_on_color', name: 'Brush On Color', category: 'emphasis', type: 'basic', duration: 800, delay: 0, trigger: 'onClick', easing: 'ease' },
    { id: 'brush_on_underline', name: 'Brush On Underline', category: 'emphasis', type: 'basic', duration: 600, delay: 0, trigger: 'onClick', easing: 'ease' },
    { id: 'color_pulse', name: 'Color Pulse', category: 'emphasis', type: 'basic', duration: 1000, delay: 0, trigger: 'onClick', easing: 'ease', repeat: 3 },
    { id: 'complementary_color', name: 'Complementary Color', category: 'emphasis', type: 'basic', duration: 400, delay: 0, trigger: 'onClick', easing: 'ease' },
    { id: 'complementary_color_2', name: 'Complementary Color 2', category: 'emphasis', type: 'basic', duration: 400, delay: 0, trigger: 'onClick', easing: 'ease' },
    { id: 'contrasting_color', name: 'Contrasting Color', category: 'emphasis', type: 'basic', duration: 400, delay: 0, trigger: 'onClick', easing: 'ease' },
    { id: 'darken', name: 'Darken', category: 'emphasis', type: 'basic', duration: 500, delay: 0, trigger: 'onClick', easing: 'ease' },
    { id: 'desaturate', name: 'Desaturate', category: 'emphasis', type: 'basic', duration: 600, delay: 0, trigger: 'onClick', easing: 'ease' },
    { id: 'flash_bulb', name: 'Flash Bulb', category: 'emphasis', type: 'basic', duration: 200, delay: 0, trigger: 'onClick', easing: 'ease' },
    { id: 'flicker', name: 'Flicker', category: 'emphasis', type: 'basic', duration: 800, delay: 0, trigger: 'onClick', easing: 'ease' },
    { id: 'grow_shrink', name: 'Grow/Shrink', category: 'emphasis', type: 'basic', duration: 600, delay: 0, trigger: 'onClick', easing: 'ease' },
    { id: 'lighten', name: 'Lighten', category: 'emphasis', type: 'basic', duration: 500, delay: 0, trigger: 'onClick', easing: 'ease' },
    { id: 'pulse', name: 'Pulse', category: 'emphasis', type: 'basic', duration: 800, delay: 0, trigger: 'onClick', easing: 'ease', repeat: 2 },
    { id: 'shimmer', name: 'Shimmer', category: 'emphasis', type: 'basic', duration: 1000, delay: 0, trigger: 'onClick', easing: 'ease' },
    { id: 'teeter', name: 'Teeter', category: 'emphasis', type: 'basic', duration: 1200, delay: 0, trigger: 'onClick', easing: 'ease' },
    { id: 'transparency', name: 'Transparency', category: 'emphasis', type: 'basic', duration: 600, delay: 0, trigger: 'onClick', easing: 'ease' },
    
    // Subtle Emphasis
    { id: 'fill_color', name: 'Fill Color', category: 'emphasis', type: 'subtle', duration: 700, delay: 0, trigger: 'onClick', easing: 'ease-out' },
    { id: 'font_color', name: 'Font Color', category: 'emphasis', type: 'subtle', duration: 500, delay: 0, trigger: 'onClick', easing: 'ease-out' },
    { id: 'grow_with_color', name: 'Grow With Color', category: 'emphasis', type: 'subtle', duration: 800, delay: 0, trigger: 'onClick', easing: 'ease-out' },
    { id: 'line_color', name: 'Line Color', category: 'emphasis', type: 'subtle', duration: 600, delay: 0, trigger: 'onClick', easing: 'ease-out' },
    { id: 'underline', name: 'Underline', category: 'emphasis', type: 'subtle', duration: 400, delay: 0, trigger: 'onClick', easing: 'ease-out' },
    
    // Moderate Emphasis
    { id: 'blast', name: 'Blast', category: 'emphasis', type: 'moderate', duration: 600, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'blink', name: 'Blink', category: 'emphasis', type: 'moderate', duration: 1000, delay: 0, trigger: 'onClick', easing: 'ease-in-out', repeat: 3 },
    { id: 'bold_flash', name: 'Bold Flash', category: 'emphasis', type: 'moderate', duration: 300, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'color_wave', name: 'Color Wave', category: 'emphasis', type: 'moderate', duration: 1200, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'grow_turn', name: 'Grow and Turn', category: 'emphasis', type: 'moderate', duration: 800, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'spin', name: 'Spin', category: 'emphasis', type: 'moderate', duration: 1000, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'wave', name: 'Wave', category: 'emphasis', type: 'moderate', duration: 1500, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    
    // Exciting Emphasis
    { id: 'bounce', name: 'Bounce', category: 'emphasis', type: 'exciting', duration: 1000, delay: 0, trigger: 'onClick', easing: 'bounce' },
    { id: 'float', name: 'Float', category: 'emphasis', type: 'exciting', duration: 1200, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'pinwheel', name: 'Pinwheel', category: 'emphasis', type: 'exciting', duration: 1500, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'swish', name: 'Swish', category: 'emphasis', type: 'exciting', duration: 800, delay: 0, trigger: 'onClick', easing: 'ease-out' }
  ],
  
  exit: [
    // Basic Exit
    { id: 'blinds', name: 'Blinds', category: 'exit', type: 'basic', duration: 800, delay: 0, trigger: 'onClick', easing: 'ease' },
    { id: 'box', name: 'Box', category: 'exit', type: 'basic', duration: 700, delay: 0, trigger: 'onClick', easing: 'ease', direction: 'out' },
    { id: 'checkerboard', name: 'Checkerboard', category: 'exit', type: 'basic', duration: 900, delay: 0, trigger: 'onClick', easing: 'ease' },
    { id: 'circle', name: 'Circle', category: 'exit', type: 'basic', duration: 800, delay: 0, trigger: 'onClick', easing: 'ease', direction: 'out' },
    { id: 'diamond', name: 'Diamond', category: 'exit', type: 'basic', duration: 750, delay: 0, trigger: 'onClick', easing: 'ease', direction: 'out' },
    { id: 'disappear', name: 'Disappear', category: 'exit', type: 'basic', duration: 0, delay: 0, trigger: 'onClick', easing: 'ease' },
    { id: 'dissolve_out', name: 'Dissolve Out', category: 'exit', type: 'basic', duration: 1000, delay: 0, trigger: 'onClick', easing: 'ease' },
    { id: 'fade_out', name: 'Fade Out', category: 'exit', type: 'basic', duration: 600, delay: 0, trigger: 'onClick', easing: 'ease' },
    { id: 'flash_once', name: 'Flash Once', category: 'exit', type: 'basic', duration: 400, delay: 0, trigger: 'onClick', easing: 'ease' },
    { id: 'fly_out', name: 'Fly Out', category: 'exit', type: 'basic', duration: 800, delay: 0, trigger: 'onClick', easing: 'ease', direction: 'right' },
    { id: 'peek_out', name: 'Peek Out', category: 'exit', type: 'basic', duration: 600, delay: 0, trigger: 'onClick', easing: 'ease', direction: 'up' },
    { id: 'plus', name: 'Plus', category: 'exit', type: 'basic', duration: 700, delay: 0, trigger: 'onClick', easing: 'ease', direction: 'out' },
    { id: 'random_bars', name: 'Random Bars', category: 'exit', type: 'basic', duration: 900, delay: 0, trigger: 'onClick', easing: 'ease' },
    { id: 'split', name: 'Split', category: 'exit', type: 'basic', duration: 800, delay: 0, trigger: 'onClick', easing: 'ease', direction: 'out' },
    { id: 'strips', name: 'Strips', category: 'exit', type: 'basic', duration: 850, delay: 0, trigger: 'onClick', easing: 'ease', direction: 'up' },
    { id: 'wedge', name: 'Wedge', category: 'exit', type: 'basic', duration: 750, delay: 0, trigger: 'onClick', easing: 'ease' },
    { id: 'wheel', name: 'Wheel', category: 'exit', type: 'basic', duration: 1000, delay: 0, trigger: 'onClick', easing: 'ease' },
    { id: 'wipe', name: 'Wipe', category: 'exit', type: 'basic', duration: 700, delay: 0, trigger: 'onClick', easing: 'ease', direction: 'left' },
    { id: 'zoom', name: 'Zoom', category: 'exit', type: 'basic', duration: 600, delay: 0, trigger: 'onClick', easing: 'ease', direction: 'out' },
    
    // Subtle Exit
    { id: 'contract', name: 'Contract', category: 'exit', type: 'subtle', duration: 800, delay: 0, trigger: 'onClick', easing: 'ease-in' },
    { id: 'faded_swivel', name: 'Faded Swivel', category: 'exit', type: 'subtle', duration: 900, delay: 0, trigger: 'onClick', easing: 'ease-in' },
    { id: 'faded_zoom', name: 'Faded Zoom', category: 'exit', type: 'subtle', duration: 700, delay: 0, trigger: 'onClick', easing: 'ease-in' },
    { id: 'sink_down', name: 'Sink Down', category: 'exit', type: 'subtle', duration: 800, delay: 0, trigger: 'onClick', easing: 'ease-in' },
    { id: 'shrink_turn', name: 'Shrink & Turn', category: 'exit', type: 'subtle', duration: 750, delay: 0, trigger: 'onClick', easing: 'ease-in' },
    { id: 'compress', name: 'Compress', category: 'exit', type: 'subtle', duration: 650, delay: 0, trigger: 'onClick', easing: 'ease-in' },
    
    // Moderate Exit
    { id: 'basic_swivel', name: 'Basic Swivel', category: 'exit', type: 'moderate', duration: 800, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'boomerang', name: 'Boomerang', category: 'exit', type: 'moderate', duration: 1200, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'bounce', name: 'Bounce', category: 'exit', type: 'moderate', duration: 1000, delay: 0, trigger: 'onClick', easing: 'bounce' },
    { id: 'credits', name: 'Credits', category: 'exit', type: 'moderate', duration: 1500, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'curve_down', name: 'Curve Down', category: 'exit', type: 'moderate', duration: 900, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'drop', name: 'Drop', category: 'exit', type: 'moderate', duration: 800, delay: 0, trigger: 'onClick', easing: 'ease-in' },
    { id: 'float', name: 'Float', category: 'exit', type: 'moderate', duration: 1100, delay: 0, trigger: 'onClick', easing: 'ease-in' },
    { id: 'glide', name: 'Glide', category: 'exit', type: 'moderate', duration: 1000, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'magnify', name: 'Magnify', category: 'exit', type: 'moderate', duration: 700, delay: 0, trigger: 'onClick', easing: 'ease-in' },
    { id: 'pinwheel', name: 'Pinwheel', category: 'exit', type: 'moderate', duration: 1200, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'spiral_out', name: 'Spiral Out', category: 'exit', type: 'moderate', duration: 1300, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'swish', name: 'Swish', category: 'exit', type: 'moderate', duration: 800, delay: 0, trigger: 'onClick', easing: 'ease-in' },
    { id: 'thread', name: 'Thread', category: 'exit', type: 'moderate', duration: 1000, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'whip', name: 'Whip', category: 'exit', type: 'moderate', duration: 600, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    
    // Exciting Exit
    { id: 'airplane', name: 'Airplane', category: 'exit', type: 'exciting', duration: 2000, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'catapult', name: 'Catapult', category: 'exit', type: 'exciting', duration: 1500, delay: 0, trigger: 'onClick', easing: 'ease-in' },
    { id: 'flip', name: 'Flip', category: 'exit', type: 'exciting', duration: 1000, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'fold', name: 'Fold', category: 'exit', type: 'exciting', duration: 1200, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'peek_out', name: 'Peek Out', category: 'exit', type: 'exciting', duration: 800, delay: 0, trigger: 'onClick', easing: 'ease-in' },
    { id: 'random_effects', name: 'Random Effects', category: 'exit', type: 'exciting', duration: 1000, delay: 0, trigger: 'onClick', easing: 'ease' },
    { id: 'shape', name: 'Shape', category: 'exit', type: 'exciting', duration: 900, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'sling', name: 'Sling', category: 'exit', type: 'exciting', duration: 1100, delay: 0, trigger: 'onClick', easing: 'ease-in' },
    { id: 'spinner', name: 'Spinner', category: 'exit', type: 'exciting', duration: 1300, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'swivel', name: 'Swivel', category: 'exit', type: 'exciting', duration: 800, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'turn', name: 'Turn', category: 'exit', type: 'exciting', duration: 900, delay: 0, trigger: 'onClick', easing: 'ease-in-out' }
  ],
  
  motionPath: [
    { id: 'custom_path', name: 'Custom Path', category: 'motionPath', type: 'custom', duration: 2000, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'arc_down', name: 'Arc Down', category: 'motionPath', type: 'preset', duration: 1500, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'arc_left', name: 'Arc Left', category: 'motionPath', type: 'preset', duration: 1500, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'arc_right', name: 'Arc Right', category: 'motionPath', type: 'preset', duration: 1500, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'arc_up', name: 'Arc Up', category: 'motionPath', type: 'preset', duration: 1500, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'bean', name: 'Bean', category: 'motionPath', type: 'preset', duration: 2000, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'bounce_left', name: 'Bounce Left', category: 'motionPath', type: 'preset', duration: 1800, delay: 0, trigger: 'onClick', easing: 'bounce' },
    { id: 'bounce_right', name: 'Bounce Right', category: 'motionPath', type: 'preset', duration: 1800, delay: 0, trigger: 'onClick', easing: 'bounce' },
    { id: 'curvy_left', name: 'Curvy Left', category: 'motionPath', type: 'preset', duration: 2200, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'curvy_right', name: 'Curvy Right', category: 'motionPath', type: 'preset', duration: 2200, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'curvy_star', name: 'Curvy Star', category: 'motionPath', type: 'preset', duration: 3000, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'decaying_wave', name: 'Decaying Wave', category: 'motionPath', type: 'preset', duration: 2500, delay: 0, trigger: 'onClick', easing: 'ease-out' },
    { id: 'diagonal_down_right', name: 'Diagonal Down Right', category: 'motionPath', type: 'preset', duration: 1200, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'diagonal_up_right', name: 'Diagonal Up Right', category: 'motionPath', type: 'preset', duration: 1200, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'diamond', name: 'Diamond', category: 'motionPath', type: 'preset', duration: 2400, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'down', name: 'Down', category: 'motionPath', type: 'preset', duration: 1000, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'figure_8_four', name: 'Figure 8 Four', category: 'motionPath', type: 'preset', duration: 3200, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'football', name: 'Football', category: 'motionPath', type: 'preset', duration: 2800, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'freeform', name: 'Freeform', category: 'motionPath', type: 'custom', duration: 2000, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'heart', name: 'Heart', category: 'motionPath', type: 'preset', duration: 2600, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'hexagon', name: 'Hexagon', category: 'motionPath', type: 'preset', duration: 2400, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'horizontal_figure_8', name: 'Horizontal Figure 8', category: 'motionPath', type: 'preset', duration: 3000, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'inverted_square', name: 'Inverted Square', category: 'motionPath', type: 'preset', duration: 2000, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'inverted_triangle', name: 'Inverted Triangle', category: 'motionPath', type: 'preset', duration: 1800, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'left', name: 'Left', category: 'motionPath', type: 'preset', duration: 1000, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'loop_de_loop', name: 'Loop de Loop', category: 'motionPath', type: 'preset', duration: 2200, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'neutron', name: 'Neutron', category: 'motionPath', type: 'preset', duration: 2800, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'octagon', name: 'Octagon', category: 'motionPath', type: 'preset', duration: 2600, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'parallelogram', name: 'Parallelogram', category: 'motionPath', type: 'preset', duration: 2000, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'peanut', name: 'Peanut', category: 'motionPath', type: 'preset', duration: 2400, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'pentagon', name: 'Pentagon', category: 'motionPath', type: 'preset', duration: 2200, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'plus', name: 'Plus', category: 'motionPath', type: 'preset', duration: 2000, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'pointy_star', name: 'Pointy Star', category: 'motionPath', type: 'preset', duration: 2800, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'right', name: 'Right', category: 'motionPath', type: 'preset', duration: 1000, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 's_curve_1', name: 'S Curve 1', category: 'motionPath', type: 'preset', duration: 1800, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 's_curve_2', name: 'S Curve 2', category: 'motionPath', type: 'preset', duration: 1800, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'scribble', name: 'Scribble', category: 'motionPath', type: 'custom', duration: 2500, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'sine_wave', name: 'Sine Wave', category: 'motionPath', type: 'preset', duration: 2200, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'spring', name: 'Spring', category: 'motionPath', type: 'preset', duration: 2000, delay: 0, trigger: 'onClick', easing: 'bounce' },
    { id: 'square', name: 'Square', category: 'motionPath', type: 'preset', duration: 2000, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'stairs_down', name: 'Stairs Down', category: 'motionPath', type: 'preset', duration: 1600, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'swoosh', name: 'Swoosh', category: 'motionPath', type: 'preset', duration: 1400, delay: 0, trigger: 'onClick', easing: 'ease-out' },
    { id: 'teardrop', name: 'Teardrop', category: 'motionPath', type: 'preset', duration: 2000, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'trapezoid', name: 'Trapezoid', category: 'motionPath', type: 'preset', duration: 2000, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'triangle', name: 'Triangle', category: 'motionPath', type: 'preset', duration: 1800, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'turn_down', name: 'Turn Down', category: 'motionPath', type: 'preset', duration: 1200, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'turn_down_right', name: 'Turn Down Right', category: 'motionPath', type: 'preset', duration: 1200, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'turn_up', name: 'Turn Up', category: 'motionPath', type: 'preset', duration: 1200, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'turn_up_right', name: 'Turn Up Right', category: 'motionPath', type: 'preset', duration: 1200, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'up', name: 'Up', category: 'motionPath', type: 'preset', duration: 1000, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'vertical_figure_8', name: 'Vertical Figure 8', category: 'motionPath', type: 'preset', duration: 3000, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'wave', name: 'Wave', category: 'motionPath', type: 'preset', duration: 2000, delay: 0, trigger: 'onClick', easing: 'ease-in-out' },
    { id: 'zigzag', name: 'Zigzag', category: 'motionPath', type: 'preset', duration: 1800, delay: 0, trigger: 'onClick', easing: 'ease-in-out' }
  ]
};

// DESIGN THEMES - Complete Collection
export const DESIGN_THEMES: DesignTheme[] = [
  // Modern Themes
  {
    id: 'ion', name: 'Ion', category: 'modern',
    colors: { primary: '#2563eb', secondary: '#1e40af', accent1: '#3b82f6', accent2: '#60a5fa', accent3: '#93c5fd', accent4: '#dbeafe', background: '#ffffff', text: '#1f2937' },
    fonts: { heading: 'Segoe UI', body: 'Segoe UI' },
    effects: { shadows: true, reflections: false, glows: true, softEdges: true, threeDFormat: false }
  },
  {
    id: 'ion_boardroom', name: 'Ion Boardroom', category: 'modern',
    colors: { primary: '#1f2937', secondary: '#374151', accent1: '#4b5563', accent2: '#6b7280', accent3: '#9ca3af', accent4: '#d1d5db', background: '#f9fafb', text: '#111827' },
    fonts: { heading: 'Calibri', body: 'Calibri' },
    effects: { shadows: true, reflections: false, glows: false, softEdges: true, threeDFormat: false }
  },
  {
    id: 'retrospect', name: 'Retrospect', category: 'modern',
    colors: { primary: '#7c3aed', secondary: '#5b21b6', accent1: '#8b5cf6', accent2: '#a78bfa', accent3: '#c4b5fd', accent4: '#ede9fe', background: '#ffffff', text: '#1f2937' },
    fonts: { heading: 'Segoe UI', body: 'Segoe UI' },
    effects: { shadows: true, reflections: true, glows: true, softEdges: true, threeDFormat: false }
  },
  {
    id: 'savon', name: 'Savon', category: 'modern',
    colors: { primary: '#059669', secondary: '#047857', accent1: '#10b981', accent2: '#34d399', accent3: '#6ee7b7', accent4: '#d1fae5', background: '#ffffff', text: '#1f2937' },
    fonts: { heading: 'Calibri Light', body: 'Calibri' },
    effects: { shadows: false, reflections: false, glows: false, softEdges: true, threeDFormat: false }
  },
  {
    id: 'slice', name: 'Slice', category: 'modern',
    colors: { primary: '#dc2626', secondary: '#b91c1c', accent1: '#ef4444', accent2: '#f87171', accent3: '#fca5a5', accent4: '#fecaca', background: '#ffffff', text: '#1f2937' },
    fonts: { heading: 'Segoe UI', body: 'Segoe UI' },
    effects: { shadows: true, reflections: false, glows: true, softEdges: true, threeDFormat: false }
  },
  
  // Classic Themes
  {
    id: 'office', name: 'Office Theme', category: 'classic',
    colors: { primary: '#0f4c75', secondary: '#3282b8', accent1: '#bbe1fa', accent2: '#1b262c', accent3: '#0f3460', accent4: '#e8f4f8', background: '#ffffff', text: '#000000' },
    fonts: { heading: 'Calibri', body: 'Calibri' },
    effects: { shadows: false, reflections: false, glows: false, softEdges: false, threeDFormat: false }
  },
  {
    id: 'adjacency', name: 'Adjacency', category: 'classic',
    colors: { primary: '#4472c4', secondary: '#70ad47', accent1: '#ffc000', accent2: '#c55a11', accent3: '#264478', accent4: '#43682b', background: '#ffffff', text: '#000000' },
    fonts: { heading: 'Calibri Light', body: 'Calibri' },
    effects: { shadows: true, reflections: false, glows: false, softEdges: true, threeDFormat: false }
  },
  {
    id: 'angles', name: 'Angles', category: 'classic',
    colors: { primary: '#264653', secondary: '#2a9d8f', accent1: '#e9c46a', accent2: '#f4a261', accent3: '#e76f51', accent4: '#f1faee', background: '#ffffff', text: '#264653' },
    fonts: { heading: 'Calibri', body: 'Calibri' },
    effects: { shadows: true, reflections: false, glows: false, softEdges: true, threeDFormat: false }
  },
  {
    id: 'apothecary', name: 'Apothecary', category: 'classic',
    colors: { primary: '#8b4513', secondary: '#a0522d', accent1: '#daa520', accent2: '#cd853f', accent3: '#f4a460', accent4: '#fdf5e6', background: '#fffef7', text: '#654321' },
    fonts: { heading: 'Book Antiqua', body: 'Book Antiqua' },
    effects: { shadows: true, reflections: false, glows: false, softEdges: true, threeDFormat: true }
  },
  {
    id: 'austin', name: 'Austin', category: 'classic',
    colors: { primary: '#c5504b', secondary: '#d86613', accent1: '#e8b004', accent2: '#70ad47', accent3: '#4bacc6', accent4: '#f79646', background: '#ffffff', text: '#000000' },
    fonts: { heading: 'Calibri', body: 'Calibri' },
    effects: { shadows: true, reflections: false, glows: false, softEdges: true, threeDFormat: false }
  },
  
  // Creative Themes
  {
    id: 'badge', name: 'Badge', category: 'creative',
    colors: { primary: '#ff6b6b', secondary: '#4ecdc4', accent1: '#45b7d1', accent2: '#f9ca24', accent3: '#6c5ce7', accent4: '#a29bfe', background: '#ffffff', text: '#2d3436' },
    fonts: { heading: 'Segoe UI', body: 'Segoe UI' },
    effects: { shadows: true, reflections: true, glows: true, softEdges: true, threeDFormat: true }
  },
  {
    id: 'banded', name: 'Banded', category: 'creative',
    colors: { primary: '#e17055', secondary: '#00b894', accent1: '#0984e3', accent2: '#6c5ce7', accent3: '#fd79a8', accent4: '#fdcb6e', background: '#ffffff', text: '#2d3436' },
    fonts: { heading: 'Calibri', body: 'Calibri' },
    effects: { shadows: true, reflections: false, glows: true, softEdges: true, threeDFormat: false }
  },
  {
    id: 'basis', name: 'Basis', category: 'creative',
    colors: { primary: '#ff7675', secondary: '#74b9ff', accent1: '#00b894', accent2: '#fdcb6e', accent3: '#e17055', accent4: '#6c5ce7', background: '#ffffff', text: '#2d3436' },
    fonts: { heading: 'Segoe UI Light', body: 'Segoe UI' },
    effects: { shadows: true, reflections: true, glows: true, softEdges: true, threeDFormat: false }
  },
  {
    id: 'berlin', name: 'Berlin', category: 'creative',
    colors: { primary: '#2d3436', secondary: '#636e72', accent1: '#00b894', accent2: '#e17055', accent3: '#0984e3', accent4: '#fdcb6e', background: '#ddd', text: '#2d3436' },
    fonts: { heading: 'Segoe UI', body: 'Segoe UI' },
    effects: { shadows: true, reflections: false, glows: false, softEdges: true, threeDFormat: false }
  },
  {
    id: 'celestial', name: 'Celestial', category: 'creative',
    colors: { primary: '#6c5ce7', secondary: '#a29bfe', accent1: '#fd79a8', accent2: '#fdcb6e', accent3: '#00b894', accent4: '#74b9ff', background: '#2d3436', text: '#ffffff' },
    fonts: { heading: 'Segoe UI', body: 'Segoe UI' },
    effects: { shadows: true, reflections: true, glows: true, softEdges: true, threeDFormat: true }
  },
  
  // Business Themes
  {
    id: 'circuit', name: 'Circuit', category: 'business',
    colors: { primary: '#1e3a8a', secondary: '#3b82f6', accent1: '#60a5fa', accent2: '#93c5fd', accent3: '#dbeafe', accent4: '#eff6ff', background: '#f8fafc', text: '#1e293b' },
    fonts: { heading: 'Segoe UI', body: 'Segoe UI' },
    effects: { shadows: true, reflections: false, glows: true, softEdges: true, threeDFormat: false }
  },
  {
    id: 'concourse', name: 'Concourse', category: 'business',
    colors: { primary: '#374151', secondary: '#4b5563', accent1: '#6b7280', accent2: '#9ca3af', accent3: '#d1d5db', accent4: '#f3f4f6', background: '#ffffff', text: '#111827' },
    fonts: { heading: 'Calibri', body: 'Calibri' },
    effects: { shadows: true, reflections: false, glows: false, softEdges: true, threeDFormat: false }
  },
  {
    id: 'dividend', name: 'Dividend', category: 'business',
    colors: { primary: '#059669', secondary: '#10b981', accent1: '#34d399', accent2: '#6ee7b7', accent3: '#a7f3d0', accent4: '#d1fae5', background: '#ffffff', text: '#064e3b' },
    fonts: { heading: 'Calibri', body: 'Calibri' },
    effects: { shadows: true, reflections: false, glows: false, softEdges: true, threeDFormat: false }
  },
  {
    id: 'equity', name: 'Equity', category: 'business',
    colors: { primary: '#dc2626', secondary: '#ef4444', accent1: '#f87171', accent2: '#fca5a5', accent3: '#fecaca', accent4: '#fee2e2', background: '#ffffff', text: '#7f1d1d' },
    fonts: { heading: 'Calibri', body: 'Calibri' },
    effects: { shadows: true, reflections: false, glows: false, softEdges: true, threeDFormat: false }
  },
  {
    id: 'executive', name: 'Executive', category: 'business',
    colors: { primary: '#1f2937', secondary: '#374151', accent1: '#4b5563', accent2: '#6b7280', accent3: '#9ca3af', accent4: '#d1d5db', background: '#f9fafb', text: '#111827' },
    fonts: { heading: 'Calibri', body: 'Calibri' },
    effects: { shadows: true, reflections: false, glows: false, softEdges: true, threeDFormat: false }
  },
  
  // Education Themes
  {
    id: 'facet', name: 'Facet', category: 'education',
    colors: { primary: '#7c3aed', secondary: '#8b5cf6', accent1: '#a78bfa', accent2: '#c4b5fd', accent3: '#ddd6fe', accent4: '#ede9fe', background: '#ffffff', text: '#581c87' },
    fonts: { heading: 'Segoe UI', body: 'Segoe UI' },
    effects: { shadows: true, reflections: true, glows: true, softEdges: true, threeDFormat: false }
  },
  {
    id: 'frame', name: 'Frame', category: 'education',
    colors: { primary: '#0891b2', secondary: '#0e7490', accent1: '#06b6d4', accent2: '#22d3ee', accent3: '#67e8f9', accent4: '#cffafe', background: '#ffffff', text: '#164e63' },
    fonts: { heading: 'Calibri', body: 'Calibri' },
    effects: { shadows: true, reflections: false, glows: false, softEdges: true, threeDFormat: false }
  },
  {
    id: 'gallery', name: 'Gallery', category: 'education',
    colors: { primary: '#be185d', secondary: '#db2777', accent1: '#ec4899', accent2: '#f472b6', accent3: '#f9a8d4', accent4: '#fce7f3', background: '#ffffff', text: '#831843' },
    fonts: { heading: 'Segoe UI', body: 'Segoe UI' },
    effects: { shadows: true, reflections: true, glows: true, softEdges: true, threeDFormat: false }
  },
  {
    id: 'headlines', name: 'Headlines', category: 'education',
    colors: { primary: '#dc2626', secondary: '#ef4444', accent1: '#f87171', accent2: '#fca5a5', accent3: '#fecaca', accent4: '#fee2e2', background: '#ffffff', text: '#7f1d1d' },
    fonts: { heading: 'Impact', body: 'Calibri' },
    effects: { shadows: true, reflections: false, glows: true, softEdges: true, threeDFormat: false }
  },
  {
    id: 'integral', name: 'Integral', category: 'education',
    colors: { primary: '#1565c0', secondary: '#1976d2', accent1: '#2196f3', accent2: '#42a5f5', accent3: '#90caf9', accent4: '#e3f2fd', background: '#ffffff', text: '#0d47a1' },
    fonts: { heading: 'Calibri', body: 'Calibri' },
    effects: { shadows: true, reflections: false, glows: false, softEdges: true, threeDFormat: false }
  }
];

// SHAPE TYPES - Complete Collection
export const SHAPE_TYPES: Record<string, ShapeType[]> = {
  basic: [
    { id: 'rectangle', name: 'Rectangle', category: 'basic', path: 'M0,0 L100,0 L100,50 L0,50 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'rounded_rectangle', name: 'Rounded Rectangle', category: 'basic', path: 'M10,0 L90,0 Q100,0 100,10 L100,40 Q100,50 90,50 L10,50 Q0,50 0,40 L0,10 Q0,0 10,0 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'ellipse', name: 'Ellipse', category: 'basic', path: 'M50,0 A50,25 0 1,1 50,50 A50,25 0 1,1 50,0 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'diamond', name: 'Diamond', category: 'basic', path: 'M50,0 L100,25 L50,50 L0,25 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'triangle', name: 'Triangle', category: 'basic', path: 'M50,0 L100,50 L0,50 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'right_triangle', name: 'Right Triangle', category: 'basic', path: 'M0,0 L100,50 L0,50 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'parallelogram', name: 'Parallelogram', category: 'basic', path: 'M25,0 L100,0 L75,50 L0,50 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'trapezoid', name: 'Trapezoid', category: 'basic', path: 'M20,0 L80,0 L100,50 L0,50 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'hexagon', name: 'Hexagon', category: 'basic', path: 'M25,0 L75,0 L100,25 L75,50 L25,50 L0,25 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'octagon', name: 'Octagon', category: 'basic', path: 'M30,0 L70,0 L100,15 L100,35 L70,50 L30,50 L0,35 L0,15 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'plus', name: 'Plus', category: 'basic', path: 'M40,0 L60,0 L60,20 L100,20 L100,30 L60,30 L60,50 L40,50 L40,30 L0,30 L0,20 L40,20 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'star_5', name: '5-Point Star', category: 'basic', path: 'M50,0 L61,35 L98,35 L68,57 L79,91 L50,70 L21,91 L32,57 L2,35 L39,35 Z', defaultSize: { width: 100, height: 100 } },
    { id: 'star_6', name: '6-Point Star', category: 'basic', path: 'M50,0 L65,25 L100,25 L75,50 L100,75 L65,75 L50,100 L35,75 L0,75 L25,50 L0,25 L35,25 Z', defaultSize: { width: 100, height: 100 } },
    { id: 'star_8', name: '8-Point Star', category: 'basic', path: 'M50,0 L59,21 L79,21 L64,36 L71,57 L50,50 L29,57 L36,36 L21,21 L41,21 Z', defaultSize: { width: 100, height: 100 } },
    { id: 'star_16', name: '16-Point Star', category: 'basic', path: 'M50,0 L54,12 L67,12 L57,22 L61,34 L50,28 L39,34 L43,22 L33,12 L46,12 Z', defaultSize: { width: 100, height: 100 } },
    { id: 'star_24', name: '24-Point Star', category: 'basic', path: 'M50,0 L52,8 L60,8 L54,14 L56,22 L50,18 L44,22 L46,14 L40,8 L48,8 Z', defaultSize: { width: 100, height: 100 } },
    { id: 'star_32', name: '32-Point Star', category: 'basic', path: 'M50,0 L51,6 L57,6 L53,10 L54,16 L50,13 L46,16 L47,10 L43,6 L49,6 Z', defaultSize: { width: 100, height: 100 } },
    { id: 'round_single_corner_rectangle', name: 'Round Single Corner Rectangle', category: 'basic', path: 'M0,0 L90,0 Q100,0 100,10 L100,50 L0,50 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'round_same_side_corner_rectangle', name: 'Round Same Side Corner Rectangle', category: 'basic', path: 'M10,0 L90,0 Q100,0 100,10 L100,40 Q100,50 90,50 L0,50 L0,0 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'round_diagonal_corner_rectangle', name: 'Round Diagonal Corner Rectangle', category: 'basic', path: 'M10,0 L100,0 L100,40 Q100,50 90,50 L0,50 L0,10 Q0,0 10,0 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'snip_single_corner_rectangle', name: 'Snip Single Corner Rectangle', category: 'basic', path: 'M0,0 L85,0 L100,15 L100,50 L0,50 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'snip_same_side_corner_rectangle', name: 'Snip Same Side Corner Rectangle', category: 'basic', path: 'M15,0 L85,0 L100,15 L100,50 L0,50 L0,15 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'snip_diagonal_corner_rectangle', name: 'Snip Diagonal Corner Rectangle', category: 'basic', path: 'M15,0 L100,0 L100,35 L85,50 L0,50 L0,15 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'plaque', name: 'Plaque', category: 'basic', path: 'M15,0 L85,0 Q100,0 100,15 L100,35 Q100,50 85,50 L15,50 Q0,50 0,35 L0,15 Q0,0 15,0 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'can', name: 'Can', category: 'basic', path: 'M0,10 Q0,0 50,0 Q100,0 100,10 L100,40 Q100,50 50,50 Q0,50 0,40 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'cube', name: 'Cube', category: 'basic', path: 'M0,15 L15,0 L100,0 L100,35 L85,50 L0,50 Z M15,0 L30,15 L30,50 M100,0 L85,15 L0,15', defaultSize: { width: 100, height: 50 } },
    { id: 'bevel', name: 'Bevel', category: 'basic', path: 'M10,0 L90,0 L100,10 L90,50 L10,50 L0,40 L0,10 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'donut', name: 'Donut', category: 'basic', path: 'M50,0 A50,25 0 1,1 50,50 A50,25 0 1,1 50,0 Z M50,15 A35,10 0 1,0 50,35 A35,10 0 1,0 50,15 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'no_symbol', name: 'No Symbol', category: 'basic', path: 'M50,0 A50,25 0 1,1 50,50 A50,25 0 1,1 50,0 Z M15,15 L85,35 M85,15 L15,35', defaultSize: { width: 100, height: 50 } },
    { id: 'block_arc', name: 'Block Arc', category: 'basic', path: 'M50,0 A50,25 0 0,1 100,25 L85,25 A35,10 0 0,0 50,15 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'smiley_face', name: 'Smiley Face', category: 'basic', path: 'M50,0 A50,25 0 1,1 50,50 A50,25 0 1,1 50,0 Z M35,15 A5,5 0 1,1 35,25 A5,5 0 1,1 35,15 Z M65,15 A5,5 0 1,1 65,25 A5,5 0 1,1 65,15 Z M30,30 Q50,40 70,30', defaultSize: { width: 100, height: 50 } },
    { id: 'heart', name: 'Heart', category: 'basic', path: 'M50,15 C50,10 40,0 25,0 C10,0 0,10 0,25 C0,40 50,50 50,50 C50,50 100,40 100,25 C100,10 90,0 75,0 C60,0 50,10 50,15 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'lightning_bolt', name: 'Lightning Bolt', category: 'basic', path: 'M60,0 L40,20 L55,20 L35,50 L55,30 L40,30 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'sun', name: 'Sun', category: 'basic', path: 'M50,10 A15,15 0 1,1 50,40 A15,15 0 1,1 50,10 Z M50,0 L50,5 M50,45 L50,50 M20,25 L25,25 M75,25 L80,25 M30,10 L33,13 M67,37 L70,40 M70,10 L67,13 M33,37 L30,40', defaultSize: { width: 100, height: 50 } },
    { id: 'moon', name: 'Moon', category: 'basic', path: 'M30,0 A25,25 0 1,1 30,50 A30,30 0 1,0 30,0 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'cloud', name: 'Cloud', category: 'basic', path: 'M20,30 A15,15 0 0,1 35,15 A20,20 0 0,1 75,15 A15,15 0 0,1 85,30 A10,10 0 0,1 85,40 L20,40 A10,10 0 0,1 20,30 Z', defaultSize: { width: 100, height: 50 } }
  ],
  
  blockArrows: [
    { id: 'right_arrow', name: 'Right Arrow', category: 'blockArrows', path: 'M0,15 L60,15 L60,0 L100,25 L60,50 L60,35 L0,35 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'left_arrow', name: 'Left Arrow', category: 'blockArrows', path: 'M100,15 L40,15 L40,0 L0,25 L40,50 L40,35 L100,35 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'up_arrow', name: 'Up Arrow', category: 'blockArrows', path: 'M35,50 L35,20 L0,20 L50,0 L100,20 L65,20 L65,50 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'down_arrow', name: 'Down Arrow', category: 'blockArrows', path: 'M35,0 L35,30 L0,30 L50,50 L100,30 L65,30 L65,0 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'left_right_arrow', name: 'Left Right Arrow', category: 'blockArrows', path: 'M20,15 L40,15 L40,0 L60,25 L40,50 L40,35 L20,35 L20,50 L0,25 L20,0 Z M80,15 L60,15 L60,0 L40,25 L60,50 L60,35 L80,35 L80,50 L100,25 L80,0 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'up_down_arrow', name: 'Up Down Arrow', category: 'blockArrows', path: 'M35,20 L35,30 L0,30 L25,50 L50,30 L65,30 L65,20 L100,20 L75,0 L50,20 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'quad_arrow', name: 'Quad Arrow', category: 'blockArrows', path: 'M40,0 L60,0 L60,15 L85,15 L85,0 L100,25 L85,50 L85,35 L60,35 L60,50 L40,50 L40,35 L15,35 L15,50 L0,25 L15,0 L15,15 L40,15 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'left_right_up_arrow', name: 'Left Right Up Arrow', category: 'blockArrows', path: 'M40,0 L60,0 L60,15 L75,15 L75,0 L100,25 L75,50 L75,35 L25,35 L25,50 L0,25 L25,0 L25,15 L40,15 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'bent_arrow', name: 'Bent Arrow', category: 'blockArrows', path: 'M0,35 L60,35 L60,15 L60,0 L100,25 L60,50 L60,35 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'uturn_arrow', name: 'U-Turn Arrow', category: 'blockArrows', path: 'M20,50 L20,15 A15,15 0 0,1 50,15 L80,15 L80,0 L100,25 L80,50 L80,35 L50,35 A35,35 0 0,0 20,50 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'left_up_arrow', name: 'Left Up Arrow', category: 'blockArrows', path: 'M50,50 L50,25 L25,25 L25,50 L0,25 L25,0 L50,25 L75,25 L75,0 L100,25 L75,50 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'bent_up_arrow', name: 'Bent Up Arrow', category: 'blockArrows', path: 'M0,50 L35,50 L35,15 L50,15 L50,0 L75,25 L50,50 L35,35 L0,35 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'curved_right_arrow', name: 'Curved Right Arrow', category: 'blockArrows', path: 'M0,25 Q0,0 25,0 L60,0 L60,15 L85,15 L85,0 L100,25 L85,50 L85,35 L60,35 L60,50 L25,50 Q0,50 0,25 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'curved_left_arrow', name: 'Curved Left Arrow', category: 'blockArrows', path: 'M100,25 Q100,0 75,0 L40,0 L40,15 L15,15 L15,0 L0,25 L15,50 L15,35 L40,35 L40,50 L75,50 Q100,50 100,25 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'curved_up_arrow', name: 'Curved Up Arrow', category: 'blockArrows', path: 'M25,100 Q0,100 0,75 L0,40 L15,40 L15,15 L0,15 L25,0 L50,15 L35,15 L35,40 L50,40 L50,75 Q50,100 25,100 Z', defaultSize: { width: 50, height: 100 } },
    { id: 'curved_down_arrow', name: 'Curved Down Arrow', category: 'blockArrows', path: 'M25,0 Q0,0 0,25 L0,60 L15,60 L15,85 L0,85 L25,100 L50,85 L35,85 L35,60 L50,60 L50,25 Q50,0 25,0 Z', defaultSize: { width: 50, height: 100 } },
    { id: 'striped_right_arrow', name: 'Striped Right Arrow', category: 'blockArrows', path: 'M0,15 L60,15 L60,0 L100,25 L60,50 L60,35 L0,35 Z M10,20 L10,30 M20,20 L20,30 M30,20 L30,30 M40,20 L40,30 M50,20 L50,30', defaultSize: { width: 100, height: 50 } },
    { id: 'notched_right_arrow', name: 'Notched Right Arrow', category: 'blockArrows', path: 'M0,15 L60,15 L60,0 L100,25 L60,50 L60,35 L0,35 L15,25 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'pentagon', name: 'Pentagon', category: 'blockArrows', path: 'M50,0 L100,20 L80,50 L20,50 L0,20 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'chevron', name: 'Chevron', category: 'blockArrows', path: 'M0,0 L75,0 L100,25 L75,50 L0,50 L25,25 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'right_arrow_callout', name: 'Right Arrow Callout', category: 'blockArrows', path: 'M0,0 L60,0 L60,15 L80,15 L80,0 L100,25 L80,50 L80,35 L60,35 L60,50 L0,50 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'left_arrow_callout', name: 'Left Arrow Callout', category: 'blockArrows', path: 'M100,0 L40,0 L40,15 L20,15 L20,0 L0,25 L20,50 L20,35 L40,35 L40,50 L100,50 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'up_arrow_callout', name: 'Up Arrow Callout', category: 'blockArrows', path: 'M0,50 L0,20 L15,20 L15,0 L35,0 L50,15 L65,0 L85,0 L85,20 L100,20 L100,50 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'down_arrow_callout', name: 'Down Arrow Callout', category: 'blockArrows', path: 'M0,0 L0,30 L15,30 L15,50 L35,50 L50,35 L65,50 L85,50 L85,30 L100,30 L100,0 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'left_right_arrow_callout', name: 'Left Right Arrow Callout', category: 'blockArrows', path: 'M20,0 L80,0 L80,15 L90,15 L90,0 L100,25 L90,50 L90,35 L80,35 L80,50 L20,50 L20,35 L10,35 L10,50 L0,25 L10,0 L10,15 L20,15 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'up_down_arrow_callout', name: 'Up Down Arrow Callout', category: 'blockArrows', path: 'M0,20 L0,30 L15,30 L15,40 L35,40 L50,50 L65,40 L85,40 L85,30 L100,30 L100,20 L85,20 L85,10 L65,10 L50,0 L35,10 L15,10 L15,20 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'quad_arrow_callout', name: 'Quad Arrow Callout', category: 'blockArrows', path: 'M35,0 L65,0 L65,10 L75,10 L75,0 L100,25 L75,50 L75,40 L65,40 L65,50 L35,50 L35,40 L25,40 L25,50 L0,25 L25,0 L25,10 L35,10 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'circular_arrow', name: 'Circular Arrow', category: 'blockArrows', path: 'M50,10 A20,20 0 1,1 30,30 L40,30 A10,10 0 1,0 50,20 L60,20 L50,0 L40,20 Z', defaultSize: { width: 100, height: 50 } }
  ],
  
  flowchart: [
    { id: 'process', name: 'Process', category: 'flowchart', path: 'M0,0 L100,0 L100,50 L0,50 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'decision', name: 'Decision', category: 'flowchart', path: 'M50,0 L100,25 L50,50 L0,25 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'start_end', name: 'Start/End', category: 'flowchart', path: 'M25,0 L75,0 Q100,0 100,25 Q100,50 75,50 L25,50 Q0,50 0,25 Q0,0 25,0 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'data', name: 'Data', category: 'flowchart', path: 'M20,0 L100,0 L80,50 L0,50 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'predefined_process', name: 'Predefined Process', category: 'flowchart', path: 'M0,0 L100,0 L100,50 L0,50 Z M10,0 L10,50 M90,0 L90,50', defaultSize: { width: 100, height: 50 } },
    { id: 'internal_storage', name: 'Internal Storage', category: 'flowchart', path: 'M0,0 L100,0 L100,50 L0,50 Z M0,10 L100,10 M10,0 L10,50', defaultSize: { width: 100, height: 50 } },
    { id: 'document', name: 'Document', category: 'flowchart', path: 'M0,0 L100,0 L100,40 Q75,50 50,40 Q25,30 0,40 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'multidocument', name: 'Multidocument', category: 'flowchart', path: 'M0,10 L90,10 L90,40 Q75,50 60,40 Q45,30 30,40 L0,40 Z M10,0 L100,0 L100,30 Q85,40 70,30 Q55,20 40,30 L10,30 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'terminator', name: 'Terminator', category: 'flowchart', path: 'M25,0 L75,0 Q100,0 100,25 Q100,50 75,50 L25,50 Q0,50 0,25 Q0,0 25,0 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'preparation', name: 'Preparation', category: 'flowchart', path: 'M20,0 L80,0 L100,25 L80,50 L20,50 L0,25 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'manual_input', name: 'Manual Input', category: 'flowchart', path: 'M0,10 L100,0 L100,50 L0,50 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'manual_operation', name: 'Manual Operation', category: 'flowchart', path: 'M0,0 L100,0 L80,50 L20,50 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'connector', name: 'Connector', category: 'flowchart', path: 'M50,0 A25,25 0 1,1 50,50 A25,25 0 1,1 50,0 Z', defaultSize: { width: 50, height: 50 } },
    { id: 'off_page_connector', name: 'Off-page Connector', category: 'flowchart', path: 'M0,0 L100,0 L100,30 L50,50 L0,30 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'card', name: 'Card', category: 'flowchart', path: 'M10,0 L100,0 L100,50 L0,50 L0,10 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'punched_tape', name: 'Punched Tape', category: 'flowchart', path: 'M0,10 Q25,0 50,10 Q75,20 100,10 L100,40 Q75,50 50,40 Q25,30 0,40 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'summing_junction', name: 'Summing Junction', category: 'flowchart', path: 'M50,0 A25,25 0 1,1 50,50 A25,25 0 1,1 50,0 Z M25,25 L75,25 M50,0 L50,50', defaultSize: { width: 50, height: 50 } },
    { id: 'or', name: 'Or', category: 'flowchart', path: 'M50,0 A25,25 0 1,1 50,50 A25,25 0 1,1 50,0 Z M35,15 L65,35 M65,15 L35,35', defaultSize: { width: 50, height: 50 } },
    { id: 'collate', name: 'Collate', category: 'flowchart', path: 'M0,0 L100,50 L0,50 Z M100,0 L0,50 L100,50 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'sort', name: 'Sort', category: 'flowchart', path: 'M0,25 L50,0 L100,25 L50,50 Z M0,25 L100,25', defaultSize: { width: 100, height: 50 } },
    { id: 'extract', name: 'Extract', category: 'flowchart', path: 'M50,0 L100,50 L0,50 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'merge', name: 'Merge', category: 'flowchart', path: 'M0,0 L100,0 L50,50 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'stored_data', name: 'Stored Data', category: 'flowchart', path: 'M20,0 Q0,0 0,25 Q0,50 20,50 L100,50 L100,0 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'delay', name: 'Delay', category: 'flowchart', path: 'M0,0 L80,0 Q100,0 100,25 Q100,50 80,50 L0,50 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'sequential_access_storage', name: 'Sequential Access Storage', category: 'flowchart', path: 'M20,0 Q0,0 0,25 Q0,50 20,50 L80,50 Q100,50 100,25 Q100,0 80,0 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'magnetic_disk', name: 'Magnetic Disk', category: 'flowchart', path: 'M0,10 Q0,0 50,0 Q100,0 100,10 L100,40 Q100,50 50,50 Q0,50 0,40 Z M0,10 Q50,20 100,10', defaultSize: { width: 100, height: 50 } },
    { id: 'direct_access_storage', name: 'Direct Access Storage', category: 'flowchart', path: 'M10,0 L90,0 L100,10 L90,50 L10,50 L0,40 L0,10 Z M10,0 L20,10 L10,50 M90,0 L80,10 L90,50', defaultSize: { width: 100, height: 50 } },
    { id: 'display', name: 'Display', category: 'flowchart', path: 'M20,0 L80,0 Q100,0 100,25 Q100,50 80,50 L20,50 Q0,50 0,25 Q0,0 20,0 Z M20,0 Q40,25 20,50', defaultSize: { width: 100, height: 50 } }
  ],
  
  callouts: [
    { id: 'rectangular_callout', name: 'Rectangular Callout', category: 'callouts', path: 'M0,0 L100,0 L100,40 L60,40 L50,50 L40,40 L0,40 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'rounded_rectangular_callout', name: 'Rounded Rectangular Callout', category: 'callouts', path: 'M10,0 L90,0 Q100,0 100,10 L100,30 L60,30 L50,40 L40,30 L10,30 Q0,30 0,20 L0,10 Q0,0 10,0 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'oval_callout', name: 'Oval Callout', category: 'callouts', path: 'M50,0 A50,20 0 1,1 50,40 L40,40 L50,50 L60,40 A50,20 0 1,1 50,0 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'cloud_callout', name: 'Cloud Callout', category: 'callouts', path: 'M20,20 A15,15 0 0,1 35,5 A20,20 0 0,1 75,5 A15,15 0 0,1 85,20 A10,10 0 0,1 85,30 L60,30 L50,40 L40,30 L20,30 A10,10 0 0,1 20,20 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'line_callout_1', name: 'Line Callout 1', category: 'callouts', path: 'M0,0 L80,0 L80,30 L100,30 L50,40 L0,30 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'line_callout_2', name: 'Line Callout 2', category: 'callouts', path: 'M0,0 L80,0 L80,20 L100,20 L100,30 L50,40 L0,30 L0,20 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'line_callout_3', name: 'Line Callout 3', category: 'callouts', path: 'M0,0 L70,0 L70,15 L85,15 L85,0 L100,0 L100,25 L50,35 L0,25 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'line_callout_4', name: 'Line Callout 4', category: 'callouts', path: 'M0,0 L70,0 L70,10 L85,10 L85,0 L100,0 L100,20 L85,20 L85,30 L50,40 L0,30 L0,20 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'line_callout_1_accent_bar', name: 'Line Callout 1 (Accent Bar)', category: 'callouts', path: 'M0,0 L80,0 L80,30 L100,30 L50,40 L0,30 Z M5,0 L5,30', defaultSize: { width: 100, height: 50 } },
    { id: 'line_callout_2_accent_bar', name: 'Line Callout 2 (Accent Bar)', category: 'callouts', path: 'M0,0 L80,0 L80,20 L100,20 L100,30 L50,40 L0,30 L0,20 Z M5,0 L5,30', defaultSize: { width: 100, height: 50 } },
    { id: 'line_callout_3_accent_bar', name: 'Line Callout 3 (Accent Bar)', category: 'callouts', path: 'M0,0 L70,0 L70,15 L85,15 L85,0 L100,0 L100,25 L50,35 L0,25 Z M5,0 L5,25', defaultSize: { width: 100, height: 50 } },
    { id: 'line_callout_4_accent_bar', name: 'Line Callout 4 (Accent Bar)', category: 'callouts', path: 'M0,0 L70,0 L70,10 L85,10 L85,0 L100,0 L100,20 L85,20 L85,30 L50,40 L0,30 L0,20 Z M5,0 L5,30', defaultSize: { width: 100, height: 50 } },
    { id: 'line_callout_1_no_border', name: 'Line Callout 1 (No Border)', category: 'callouts', path: 'M0,0 L80,0 L80,30 L100,30 L50,40 L0,30 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'line_callout_2_no_border', name: 'Line Callout 2 (No Border)', category: 'callouts', path: 'M0,0 L80,0 L80,20 L100,20 L100,30 L50,40 L0,30 L0,20 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'line_callout_3_no_border', name: 'Line Callout 3 (No Border)', category: 'callouts', path: 'M0,0 L70,0 L70,15 L85,15 L85,0 L100,0 L100,25 L50,35 L0,25 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'line_callout_4_no_border', name: 'Line Callout 4 (No Border)', category: 'callouts', path: 'M0,0 L70,0 L70,10 L85,10 L85,0 L100,0 L100,20 L85,20 L85,30 L50,40 L0,30 L0,20 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'line_callout_1_border_and_accent_bar', name: 'Line Callout 1 (Border and Accent Bar)', category: 'callouts', path: 'M0,0 L80,0 L80,30 L100,30 L50,40 L0,30 Z M5,0 L5,30 M0,0 L80,0 L80,30 L0,30 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'line_callout_2_border_and_accent_bar', name: 'Line Callout 2 (Border and Accent Bar)', category: 'callouts', path: 'M0,0 L80,0 L80,20 L100,20 L100,30 L50,40 L0,30 L0,20 Z M5,0 L5,30 M0,0 L80,0 L80,20 L0,20 L0,30 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'line_callout_3_border_and_accent_bar', name: 'Line Callout 3 (Border and Accent Bar)', category: 'callouts', path: 'M0,0 L70,0 L70,15 L85,15 L85,0 L100,0 L100,25 L50,35 L0,25 Z M5,0 L5,25 M0,0 L70,0 L70,15 L0,15 L0,25 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'line_callout_4_border_and_accent_bar', name: 'Line Callout 4 (Border and Accent Bar)', category: 'callouts', path: 'M0,0 L70,0 L70,10 L85,10 L85,0 L100,0 L100,20 L85,20 L85,30 L50,40 L0,30 L0,20 Z M5,0 L5,30 M0,0 L70,0 L70,10 L0,10 L0,20 L0,30 Z', defaultSize: { width: 100, height: 50 } }
  ],
  
  stars: [
    { id: 'star_4', name: '4-Point Star', category: 'stars', path: 'M50,0 L60,40 L100,50 L60,60 L50,100 L40,60 L0,50 L40,40 Z', defaultSize: { width: 100, height: 100 } },
    { id: 'star_5', name: '5-Point Star', category: 'stars', path: 'M50,0 L61,35 L98,35 L68,57 L79,91 L50,70 L21,91 L32,57 L2,35 L39,35 Z', defaultSize: { width: 100, height: 100 } },
    { id: 'star_6', name: '6-Point Star', category: 'stars', path: 'M50,0 L65,25 L100,25 L75,50 L100,75 L65,75 L50,100 L35,75 L0,75 L25,50 L0,25 L35,25 Z', defaultSize: { width: 100, height: 100 } },
    { id: 'star_7', name: '7-Point Star', category: 'stars', path: 'M50,0 L58,28 L86,21 L71,46 L100,50 L71,54 L86,79 L58,72 L50,100 L42,72 L14,79 L29,54 L0,50 L29,46 L14,21 L42,28 Z', defaultSize: { width: 100, height: 100 } },
    { id: 'star_8', name: '8-Point Star', category: 'stars', path: 'M50,0 L59,21 L79,21 L64,36 L71,57 L50,50 L29,57 L36,36 L21,21 L41,21 Z', defaultSize: { width: 100, height: 100 } },
    { id: 'star_10', name: '10-Point Star', category: 'stars', path: 'M50,0 L55,20 L75,15 L65,35 L85,40 L65,45 L75,65 L55,60 L50,80 L45,60 L25,65 L35,45 L15,40 L35,35 L25,15 L45,20 Z', defaultSize: { width: 100, height: 100 } },
    { id: 'star_12', name: '12-Point Star', category: 'stars', path: 'M50,0 L54,18 L72,12 L64,30 L82,36 L64,42 L72,60 L54,54 L50,72 L46,54 L28,60 L36,42 L18,36 L36,30 L28,12 L46,18 Z', defaultSize: { width: 100, height: 100 } },
    { id: 'star_16', name: '16-Point Star', category: 'stars', path: 'M50,0 L54,12 L67,12 L57,22 L61,34 L50,28 L39,34 L43,22 L33,12 L46,12 Z', defaultSize: { width: 100, height: 100 } },
    { id: 'star_24', name: '24-Point Star', category: 'stars', path: 'M50,0 L52,8 L60,8 L54,14 L56,22 L50,18 L44,22 L46,14 L40,8 L48,8 Z', defaultSize: { width: 100, height: 100 } },
    { id: 'star_32', name: '32-Point Star', category: 'stars', path: 'M50,0 L51,6 L57,6 L53,10 L54,16 L50,13 L46,16 L47,10 L43,6 L49,6 Z', defaultSize: { width: 100, height: 100 } }
  ],
  
  banners: [
    { id: 'ribbon', name: 'Ribbon', category: 'banners', path: 'M0,15 L20,0 L80,0 L100,15 L100,35 L80,50 L20,50 L0,35 Z M20,0 L15,10 L20,20 M80,0 L85,10 L80,20', defaultSize: { width: 100, height: 50 } },
    { id: 'ribbon2', name: 'Ribbon 2', category: 'banners', path: 'M10,0 L90,0 L100,10 L90,20 L100,30 L90,40 L100,50 L10,50 L0,40 L10,30 L0,20 L10,10 L0,0 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'curved_ribbon', name: 'Curved Ribbon', category: 'banners', path: 'M0,25 Q25,0 50,25 Q75,50 100,25 L90,35 Q50,60 10,35 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'vertical_scroll', name: 'Vertical Scroll', category: 'banners', path: 'M10,0 Q0,0 0,10 L0,40 Q0,50 10,50 L90,50 Q100,50 100,40 L100,10 Q100,0 90,0 Z M0,10 Q10,5 20,10 M100,10 Q90,5 80,10 M0,40 Q10,45 20,40 M100,40 Q90,45 80,40', defaultSize: { width: 100, height: 50 } },
    { id: 'horizontal_scroll', name: 'Horizontal Scroll', category: 'banners', path: 'M0,10 L0,40 Q0,50 10,50 L40,50 Q50,50 50,40 L50,10 Q50,0 40,0 L10,0 Q0,0 0,10 Z M10,0 Q5,10 10,20 M40,0 Q45,10 40,20 M10,50 Q5,40 10,30 M40,50 Q45,40 40,30', defaultSize: { width: 50, height: 50 } },
    { id: 'wave', name: 'Wave', category: 'banners', path: 'M0,25 Q25,0 50,25 Q75,50 100,25 L100,35 Q75,60 50,35 Q25,10 0,35 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'double_wave', name: 'Double Wave', category: 'banners', path: 'M0,15 Q25,0 50,15 Q75,30 100,15 L100,25 Q75,40 50,25 Q25,10 0,25 Z M0,25 Q25,10 50,25 Q75,40 100,25 L100,35 Q75,50 50,35 Q25,20 0,35 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'folded_corner', name: 'Folded Corner', category: 'banners', path: 'M0,0 L80,0 L100,20 L100,50 L0,50 Z M80,0 L80,20 L100,20', defaultSize: { width: 100, height: 50 } },
    { id: 'explosion1', name: 'Explosion 1', category: 'banners', path: 'M50,0 L60,20 L80,10 L70,30 L90,25 L75,45 L95,50 L75,55 L90,75 L70,70 L80,90 L60,80 L50,100 L40,80 L20,90 L30,70 L10,75 L25,55 L5,50 L25,45 L10,25 L30,30 L20,10 L40,20 Z', defaultSize: { width: 100, height: 100 } },
    { id: 'explosion2', name: 'Explosion 2', category: 'banners', path: 'M50,0 L55,15 L70,5 L65,20 L80,15 L75,30 L90,25 L80,40 L95,45 L80,60 L90,75 L75,70 L80,85 L65,80 L70,95 L55,85 L50,100 L45,85 L30,95 L35,80 L20,85 L25,70 L10,75 L20,60 L5,45 L20,40 L10,25 L25,30 L20,15 L35,20 L30,5 L45,15 Z', defaultSize: { width: 100, height: 100 } }
  ],
  
  equation: [
    { id: 'plus_math', name: 'Plus', category: 'equation', path: 'M40,20 L60,20 L60,0 L80,0 L80,20 L100,20 L100,40 L80,40 L80,60 L60,60 L60,40 L40,40 L40,60 L20,60 L20,40 L0,40 L0,20 L20,20 L20,0 L40,0 Z', defaultSize: { width: 100, height: 60 } },
    { id: 'minus_math', name: 'Minus', category: 'equation', path: 'M0,20 L100,20 L100,40 L0,40 Z', defaultSize: { width: 100, height: 60 } },
    { id: 'multiply_math', name: 'Multiply', category: 'equation', path: 'M20,0 L40,20 L60,0 L80,0 L60,20 L80,40 L60,40 L40,20 L20,40 L0,40 L20,20 L0,0 Z', defaultSize: { width: 80, height: 40 } },
    { id: 'divide_math', name: 'Divide', category: 'equation', path: 'M0,25 L100,25 L100,35 L0,35 Z M45,5 A5,5 0 1,1 45,15 A5,5 0 1,1 45,5 Z M45,45 A5,5 0 1,1 45,55 A5,5 0 1,1 45,45 Z', defaultSize: { width: 100, height: 60 } },
    { id: 'equal_math', name: 'Equal', category: 'equation', path: 'M0,15 L100,15 L100,25 L0,25 Z M0,35 L100,35 L100,45 L0,45 Z', defaultSize: { width: 100, height: 60 } },
    { id: 'not_equal_math', name: 'Not Equal', category: 'equation', path: 'M0,15 L100,15 L100,25 L0,25 Z M0,35 L100,35 L100,45 L0,45 Z M30,0 L50,60 L40,60 L20,0 Z', defaultSize: { width: 100, height: 60 } }
  ],
  
  action: [
    { id: 'action_button_back_previous', name: 'Back or Previous', category: 'action', path: 'M50,0 A50,25 0 1,1 50,50 A50,25 0 1,1 50,0 Z M35,25 L20,15 L20,20 L15,20 L15,30 L20,30 L20,35 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'action_button_forward_next', name: 'Forward or Next', category: 'action', path: 'M50,0 A50,25 0 1,1 50,50 A50,25 0 1,1 50,0 Z M65,25 L80,15 L80,20 L85,20 L85,30 L80,30 L80,35 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'action_button_beginning', name: 'Beginning', category: 'action', path: 'M50,0 A50,25 0 1,1 50,50 A50,25 0 1,1 50,0 Z M20,15 L20,35 L25,35 L25,15 Z M30,25 L45,15 L45,35 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'action_button_end', name: 'End', category: 'action', path: 'M50,0 A50,25 0 1,1 50,50 A50,25 0 1,1 50,0 Z M80,15 L80,35 L75,35 L75,15 Z M70,25 L55,15 L55,35 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'action_button_home', name: 'Home', category: 'action', path: 'M50,0 A50,25 0 1,1 50,50 A50,25 0 1,1 50,0 Z M50,10 L35,20 L35,35 L45,35 L45,25 L55,25 L55,35 L65,35 L65,20 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'action_button_information', name: 'Information', category: 'action', path: 'M50,0 A50,25 0 1,1 50,50 A50,25 0 1,1 50,0 Z M50,10 A3,3 0 1,1 50,16 A3,3 0 1,1 50,10 Z M47,20 L53,20 L53,35 L47,35 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'action_button_movie', name: 'Movie', category: 'action', path: 'M50,0 A50,25 0 1,1 50,50 A50,25 0 1,1 50,0 Z M35,15 L35,35 L65,25 Z', defaultSize: { width: 100, height: 50 } },
    { id: 'action_button_document', name: 'Document', category: 'action', path: 'M50,0 A50,25 0 1,1 50,50 A50,25 0 1,1 50,0 Z M35,10 L60,10 L65,15 L65,35 L35,35 Z M60,10 L60,15 L65,15', defaultSize: { width: 100, height: 50 } },
    { id: 'action_button_sound', name: 'Sound', category: 'action', path: 'M50,0 A50,25 0 1,1 50,50 A50,25 0 1,1 50,0 Z M35,20 L45,20 L55,15 L55,35 L45,30 L35,30 Z M60,18 Q65,25 60,32 M65,15 Q72,25 65,35', defaultSize: { width: 100, height: 50 } },
    { id: 'action_button_help', name: 'Help', category: 'action', path: 'M50,0 A50,25 0 1,1 50,50 A50,25 0 1,1 50,0 Z M45,15 Q45,10 50,10 Q55,10 55,15 Q55,20 50,20 L50,25 M50,30 A2,2 0 1,1 50,34 A2,2 0 1,1 50,30', defaultSize: { width: 100, height: 50 } }
  ]
};
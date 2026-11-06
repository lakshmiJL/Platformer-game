import { DisneyCharacter, ParticleType } from './types';

export const DISNEY_CHARACTERS: DisneyCharacter[] = [
  {
    id: 'mickey',
    name: 'Mickey Mouse',
    movie: 'Classic Disney',
    category: 'classics',
    quote: "Oh boy! Let's reach the stars!",
    themeColor: '#ff2a2a',
    glowColor: 'rgba(255, 42, 42, 0.75)',
    accentColor: '#ffe600',
    secondaryColor: '#111111',
    particleType: 'star',
    iconEmoji: '🐭',
  },
  {
    id: 'stitch',
    name: 'Stitch (626)',
    movie: 'Lilo & Stitch',
    category: 'magical',
    quote: 'Ohana means family!',
    themeColor: '#00b4d8',
    glowColor: 'rgba(0, 180, 216, 0.8)',
    accentColor: '#90e0ef',
    secondaryColor: '#f72585',
    particleType: 'sparkle',
    iconEmoji: '👽',
  },
  {
    id: 'elsa',
    name: 'Queen Elsa',
    movie: 'Frozen',
    category: 'princesses',
    quote: 'The cold never bothered me anyway!',
    themeColor: '#48cae4',
    glowColor: 'rgba(144, 224, 239, 0.85)',
    accentColor: '#caf0f8',
    secondaryColor: '#ffffff',
    particleType: 'snow',
    iconEmoji: '❄️',
  },
  {
    id: 'buzz',
    name: 'Buzz Lightyear',
    movie: 'Toy Story',
    category: 'pixar',
    quote: 'To infinity... and beyond!',
    themeColor: '#38b000',
    glowColor: 'rgba(56, 176, 0, 0.8)',
    accentColor: '#7209b7',
    secondaryColor: '#ffffff',
    particleType: 'fire',
    iconEmoji: '🚀',
  },
  {
    id: 'simba',
    name: 'Simba',
    movie: 'The Lion King',
    category: 'classics',
    quote: "I'm gonna be the King!",
    themeColor: '#f77f00',
    glowColor: 'rgba(247, 127, 0, 0.8)',
    accentColor: '#fcbf49',
    secondaryColor: '#d62828',
    particleType: 'dust',
    iconEmoji: '🦁',
  },
  {
    id: 'donald',
    name: 'Donald Duck',
    movie: 'Classic Disney',
    category: 'classics',
    quote: "Aw, phooey! Watch me jump!",
    themeColor: '#0077b6',
    glowColor: 'rgba(0, 119, 182, 0.8)',
    accentColor: '#ffb703',
    secondaryColor: '#d90429',
    particleType: 'bubble',
    iconEmoji: '🦆',
  },
  {
    id: 'woody',
    name: 'Sheriff Woody',
    movie: 'Toy Story',
    category: 'pixar',
    quote: "You've got a friend in me!",
    themeColor: '#e09f3e',
    glowColor: 'rgba(224, 159, 62, 0.8)',
    accentColor: '#fff3b0',
    secondaryColor: '#540b0e',
    particleType: 'star',
    iconEmoji: '🤠',
  },
  {
    id: 'ariel',
    name: 'Ariel',
    movie: 'The Little Mermaid',
    category: 'princesses',
    quote: 'Part of that world up high!',
    themeColor: '#06d6a0',
    glowColor: 'rgba(6, 214, 160, 0.8)',
    accentColor: '#e63946',
    secondaryColor: '#9b5de5',
    particleType: 'bubble',
    iconEmoji: '🧜‍♀️',
  },
  {
    id: 'baymax',
    name: 'Baymax',
    movie: 'Big Hero 6',
    category: 'pixar',
    quote: 'I am satisfied with my care!',
    themeColor: '#e0e1dd',
    glowColor: 'rgba(240, 240, 245, 0.85)',
    accentColor: '#e63946',
    secondaryColor: '#1b263b',
    particleType: 'heart',
    iconEmoji: '🤍',
  },
  {
    id: 'pooh',
    name: 'Winnie the Pooh',
    movie: 'Winnie the Pooh',
    category: 'classics',
    quote: 'A little sweet bounce!',
    themeColor: '#ffb703',
    glowColor: 'rgba(255, 183, 3, 0.8)',
    accentColor: '#e63946',
    secondaryColor: '#fb8500',
    particleType: 'sparkle',
    iconEmoji: '🍯',
  },
  {
    id: 'tinkerbell',
    name: 'Tinker Bell',
    movie: 'Peter Pan',
    category: 'magical',
    quote: 'All you need is faith, trust & pixie dust!',
    themeColor: '#a7c957',
    glowColor: 'rgba(167, 201, 87, 0.85)',
    accentColor: '#f9f871',
    secondaryColor: '#6a994e',
    particleType: 'pixie',
    iconEmoji: '🧚‍♀️',
  },
  {
    id: 'genie',
    name: 'The Genie',
    movie: 'Aladdin',
    category: 'magical',
    quote: 'Phenomenal cosmic powers!',
    themeColor: '#0096c7',
    glowColor: 'rgba(0, 150, 199, 0.85)',
    accentColor: '#ffd166',
    secondaryColor: '#03045e',
    particleType: 'magic',
    iconEmoji: '🧞‍♂️',
  },
  {
    id: 'minnie',
    name: 'Minnie Mouse',
    movie: 'Classic Disney',
    category: 'classics',
    quote: 'Yoo-hoo! Ready to jump!',
    themeColor: '#ff4d6d',
    glowColor: 'rgba(255, 77, 109, 0.8)',
    accentColor: '#fff0f3',
    secondaryColor: '#590d22',
    particleType: 'heart',
    iconEmoji: '🎀',
  },
  {
    id: 'goofy',
    name: 'Goofy',
    movie: 'Classic Disney',
    category: 'classics',
    quote: 'Gawrsh! Up, up, and away!',
    themeColor: '#52b788',
    glowColor: 'rgba(82, 183, 136, 0.8)',
    accentColor: '#f77f00',
    secondaryColor: '#1d3557',
    particleType: 'star',
    iconEmoji: '🐕',
  },
  {
    id: 'moana',
    name: 'Moana',
    movie: 'Moana',
    category: 'princesses',
    quote: 'See the line where the sky meets the sea?',
    themeColor: '#f3722c',
    glowColor: 'rgba(243, 114, 44, 0.8)',
    accentColor: '#48cae4',
    secondaryColor: '#f9c74f',
    particleType: 'sparkle',
    iconEmoji: '🌊',
  },
  {
    id: 'olaf',
    name: 'Olaf',
    movie: 'Frozen',
    category: 'magical',
    quote: 'I like warm hugs & high jumps!',
    themeColor: '#e9ecef',
    glowColor: 'rgba(233, 236, 239, 0.85)',
    accentColor: '#f77f00',
    secondaryColor: '#495057',
    particleType: 'snow',
    iconEmoji: '⛄',
  },
  {
    id: 'cinderella',
    name: 'Cinderella',
    movie: 'Cinderella',
    category: 'princesses',
    quote: 'A dream is a wish your heart makes!',
    themeColor: '#90e0ef',
    glowColor: 'rgba(144, 224, 239, 0.85)',
    accentColor: '#ffffff',
    secondaryColor: '#48cae4',
    particleType: 'sparkle',
    iconEmoji: '👑',
  },
  {
    id: 'sulley',
    name: 'James P. Sullivan',
    movie: 'Monsters, Inc.',
    category: 'pixar',
    quote: 'Kitty! Big jumps ahead!',
    themeColor: '#00b4d8',
    glowColor: 'rgba(0, 180, 216, 0.8)',
    accentColor: '#9d4edd',
    secondaryColor: '#0077b6',
    particleType: 'star',
    iconEmoji: '👾',
  },
  {
    id: 'mike',
    name: 'Mike Wazowski',
    movie: 'Monsters, Inc.',
    category: 'pixar',
    quote: "I'm on a platform jumping game!",
    themeColor: '#70e000',
    glowColor: 'rgba(112, 224, 0, 0.8)',
    accentColor: '#38b000',
    secondaryColor: '#007200',
    particleType: 'sparkle',
    iconEmoji: '👁️',
  },
];

// Popular Disney character presets for custom selection search
export const POPULAR_DISNEY_SUGGESTIONS: Array<{
  name: string;
  movie: string;
  category: 'classics' | 'pixar' | 'princesses' | 'magical';
  themeColor: string;
  glowColor: string;
  accentColor: string;
  iconEmoji: string;
  quote: string;
  particleType: ParticleType;
}> = [
  {
    name: 'Rapunzel',
    movie: 'Tangled',
    category: 'princesses',
    themeColor: '#c77dff',
    glowColor: 'rgba(199, 125, 255, 0.8)',
    accentColor: '#ffea00',
    iconEmoji: '☀️',
    quote: 'Best day ever!',
    particleType: 'sparkle',
  },
  {
    name: 'Mulan',
    movie: 'Mulan',
    category: 'princesses',
    themeColor: '#d90429',
    glowColor: 'rgba(217, 4, 41, 0.8)',
    accentColor: '#ffd166',
    iconEmoji: '🌸',
    quote: 'The flower that blooms in adversity is most rare!',
    particleType: 'leaf',
  },
  {
    name: 'Lightning McQueen',
    movie: 'Cars',
    category: 'pixar',
    themeColor: '#d00000',
    glowColor: 'rgba(208, 0, 0, 0.85)',
    accentColor: '#ffba08',
    iconEmoji: '🏎️',
    quote: 'Ka-chow!',
    particleType: 'fire',
  },
  {
    name: 'WALL-E',
    movie: 'WALL-E',
    category: 'pixar',
    themeColor: '#e09f3e',
    glowColor: 'rgba(224, 159, 62, 0.8)',
    accentColor: '#80b918',
    iconEmoji: '🤖',
    quote: 'Directive: Jump higher!',
    particleType: 'sparkle',
  },
  {
    name: 'Peter Pan',
    movie: 'Peter Pan',
    category: 'magical',
    themeColor: '#55a630',
    glowColor: 'rgba(85, 166, 48, 0.8)',
    accentColor: '#f94144',
    iconEmoji: '🗡️',
    quote: 'Never grow up!',
    particleType: 'pixie',
  },
  {
    name: 'Aladdin',
    movie: 'Aladdin',
    category: 'classics',
    themeColor: '#7209b7',
    glowColor: 'rgba(114, 9, 183, 0.8)',
    accentColor: '#ffd166',
    iconEmoji: '✨',
    quote: 'A whole new world!',
    particleType: 'magic',
  },
  {
    name: 'Jasmine',
    movie: 'Aladdin',
    category: 'princesses',
    themeColor: '#00b4d8',
    glowColor: 'rgba(0, 180, 216, 0.8)',
    accentColor: '#ffb703',
    iconEmoji: '🐅',
    quote: "I'm not a prize to be won!",
    particleType: 'sparkle',
  },
  {
    name: 'Belle',
    movie: 'Beauty and the Beast',
    category: 'princesses',
    themeColor: '#ffd166',
    glowColor: 'rgba(255, 209, 102, 0.8)',
    accentColor: '#d90429',
    iconEmoji: '🌹',
    quote: 'I want adventure in the great wide somewhere!',
    particleType: 'sparkle',
  },
  {
    name: 'Jack Skellington',
    movie: 'The Nightmare Before Christmas',
    category: 'magical',
    themeColor: '#e9ecef',
    glowColor: 'rgba(233, 236, 239, 0.8)',
    accentColor: '#f72585',
    iconEmoji: '🎃',
    quote: "What's this? What's this?!",
    particleType: 'snow',
  },
  {
    name: 'Grogu',
    movie: 'The Mandalorian (Disney+)',
    category: 'magical',
    themeColor: '#80b918',
    glowColor: 'rgba(128, 185, 24, 0.8)',
    accentColor: '#ddb892',
    iconEmoji: '🐸',
    quote: 'This is the way!',
    particleType: 'magic',
  },
  {
    name: 'Mirabel',
    movie: 'Encanto',
    category: 'magical',
    themeColor: '#00afb9',
    glowColor: 'rgba(0, 175, 185, 0.8)',
    accentColor: '#f72585',
    iconEmoji: '🦋',
    quote: 'Make your family proud!',
    particleType: 'sparkle',
  },
  {
    name: 'Tiana',
    movie: 'The Princess and the Frog',
    category: 'princesses',
    themeColor: '#70e000',
    glowColor: 'rgba(112, 224, 0, 0.8)',
    accentColor: '#ffea00',
    iconEmoji: '👑',
    quote: "Almost there, people down here think I'm crazy!",
    particleType: 'pixie',
  },
  {
    name: 'Hercules',
    movie: 'Hercules',
    category: 'classics',
    themeColor: '#f77f00',
    glowColor: 'rgba(247, 127, 0, 0.8)',
    accentColor: '#4361ee',
    iconEmoji: '⚡',
    quote: 'I can go the distance!',
    particleType: 'fire',
  },
  {
    name: 'Tarzan',
    movie: 'Tarzan',
    category: 'classics',
    themeColor: '#606c38',
    glowColor: 'rgba(96, 108, 56, 0.8)',
    accentColor: '#dda15e',
    iconEmoji: '🦍',
    quote: 'Two worlds, one family!',
    particleType: 'leaf',
  },
  {
    name: 'Dory',
    movie: 'Finding Nemo',
    category: 'pixar',
    themeColor: '#0077b6',
    glowColor: 'rgba(0, 119, 182, 0.8)',
    accentColor: '#ffb703',
    iconEmoji: '🐠',
    quote: 'Just keep swimming (and jumping)!',
    particleType: 'bubble',
  },
  {
    name: 'Maleficent',
    movie: 'Sleeping Beauty',
    category: 'magical',
    themeColor: '#7209b7',
    glowColor: 'rgba(56, 176, 0, 0.85)',
    accentColor: '#38b000',
    iconEmoji: '🦹‍♀️',
    quote: 'Now shall you deal with me, and all the powers of magic!',
    particleType: 'magic',
  },
];

const LOCAL_STORAGE_CHARACTER_KEY = 'disney-jumper-selected-character';
const LOCAL_STORAGE_CUSTOMS_KEY = 'disney-jumper-custom-characters';

export function getSavedCharacter(): DisneyCharacter {
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_CHARACTER_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.name) return parsed;
    }
  } catch (e) {
    console.error('Failed to load saved character:', e);
  }
  return DISNEY_CHARACTERS[0]; // Default: Mickey Mouse
}

export function saveSelectedCharacter(character: DisneyCharacter) {
  try {
    localStorage.setItem(LOCAL_STORAGE_CHARACTER_KEY, JSON.stringify(character));
  } catch (e) {
    console.error('Failed to save character:', e);
  }
}

export function getSavedCustomCharacters(): DisneyCharacter[] {
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_CUSTOMS_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Failed to load custom characters:', e);
  }
  return [];
}

export function saveCustomCharacter(character: DisneyCharacter) {
  try {
    const existing = getSavedCustomCharacters();
    const updated = [character, ...existing.filter((c) => c.id !== character.id)].slice(0, 10);
    localStorage.setItem(LOCAL_STORAGE_CUSTOMS_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save custom character:', e);
  }
}

/**
 * Procedural Vector Canvas Drawer for Disney Characters.
 * Renders recognizable details, colors, accessories, eyes, ears, and direction facing.
 */
export function drawDisneyCharacter(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  character: DisneyCharacter,
  facingLeft: boolean,
  vy: number,
  isGrounded: boolean,
  jumpProgress: number
) {
  ctx.save();

  // Move origin to center of character
  const centerX = x + width / 2;
  const centerY = y + height / 2;
  ctx.translate(centerX, centerY);

  // Direction facing
  if (facingLeft) {
    ctx.scale(-1, 1);
  }

  // Squish and stretch animation based on vertical velocity
  let scaleX = 1;
  let scaleY = 1;
  let tilt = 0;

  if (!isGrounded) {
    if (vy < -2) {
      // Ascending: stretch vertically
      scaleY = 1.1;
      scaleX = 0.92;
      tilt = Math.max(-0.2, Math.min(0.2, vy * 0.02));
    } else if (vy > 2) {
      // Descending
      scaleY = 1.05;
      scaleX = 0.96;
      tilt = Math.max(-0.15, Math.min(0.15, vy * 0.015));
    }
  } else {
    // Landing squash
    scaleX = 1.06;
    scaleY = 0.94;
  }

  ctx.scale(scaleX, scaleY);
  ctx.rotate(tilt);

  // Draw character glow aura
  ctx.shadowBlur = 18;
  ctx.shadowColor = character.glowColor;

  const charId = character.id.toLowerCase();

  // Render specific character or fallback
  if (charId.includes('mickey')) {
    drawMickey(ctx, width, height, character);
  } else if (charId.includes('minnie')) {
    drawMinnie(ctx, width, height, character);
  } else if (charId.includes('stitch') || charId.includes('626')) {
    drawStitch(ctx, width, height, character);
  } else if (charId.includes('elsa')) {
    drawElsa(ctx, width, height, character);
  } else if (charId.includes('buzz')) {
    drawBuzz(ctx, width, height, character, vy < -1);
  } else if (charId.includes('simba')) {
    drawSimba(ctx, width, height, character);
  } else if (charId.includes('donald')) {
    drawDonald(ctx, width, height, character);
  } else if (charId.includes('woody')) {
    drawWoody(ctx, width, height, character);
  } else if (charId.includes('ariel')) {
    drawAriel(ctx, width, height, character);
  } else if (charId.includes('baymax')) {
    drawBaymax(ctx, width, height, character);
  } else if (charId.includes('pooh')) {
    drawPooh(ctx, width, height, character);
  } else if (charId.includes('tinkerbell') || charId.includes('tinker')) {
    drawTinkerBell(ctx, width, height, character, jumpProgress);
  } else if (charId.includes('genie')) {
    drawGenie(ctx, width, height, character);
  } else if (charId.includes('goofy')) {
    drawGoofy(ctx, width, height, character);
  } else if (charId.includes('moana')) {
    drawMoana(ctx, width, height, character);
  } else if (charId.includes('olaf')) {
    drawOlaf(ctx, width, height, character);
  } else if (charId.includes('cinderella')) {
    drawCinderella(ctx, width, height, character);
  } else if (charId.includes('sulley') || charId.includes('sullivan')) {
    drawSulley(ctx, width, height, character);
  } else if (charId.includes('mike') || charId.includes('wazowski')) {
    drawMike(ctx, width, height, character);
  } else {
    // Custom or any other Disney character
    drawCustomDisney(ctx, width, height, character);
  }

  ctx.restore();
}

/* =========================================================================
   INDIVIDUAL DISNEY CHARACTER VECTOR RENDERERS
   ========================================================================= */

function drawMickey(ctx: CanvasRenderingContext2D, w: number, h: number, char: DisneyCharacter) {
  const r = w * 0.38;

  // Ears
  ctx.fillStyle = '#111111';
  ctx.beginPath();
  ctx.arc(-w * 0.32, -h * 0.32, r * 0.65, 0, Math.PI * 2);
  ctx.arc(w * 0.32, -h * 0.32, r * 0.65, 0, Math.PI * 2);
  ctx.fill();

  // Head base
  ctx.beginPath();
  ctx.arc(0, -h * 0.05, r, 0, Math.PI * 2);
  ctx.fill();

  // Face mask (peach skin)
  ctx.fillStyle = '#ffdfba';
  ctx.beginPath();
  ctx.ellipse(-w * 0.12, -h * 0.08, r * 0.45, r * 0.65, -0.15, 0, Math.PI * 2);
  ctx.ellipse(w * 0.12, -h * 0.08, r * 0.45, r * 0.65, 0.15, 0, Math.PI * 2);
  ctx.ellipse(0, h * 0.02, r * 0.6, r * 0.4, 0, 0, Math.PI * 2);
  ctx.fill();

  // Eyes
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.ellipse(-w * 0.09, -h * 0.14, 3.5, 6, 0, 0, Math.PI * 2);
  ctx.ellipse(w * 0.09, -h * 0.14, 3.5, 6, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#111111';
  ctx.beginPath();
  ctx.arc(-w * 0.07, -h * 0.13, 2.2, 0, Math.PI * 2);
  ctx.arc(w * 0.07, -h * 0.13, 2.2, 0, Math.PI * 2);
  ctx.fill();

  // Nose
  ctx.beginPath();
  ctx.ellipse(0, -h * 0.03, 4.5, 3, 0, 0, Math.PI * 2);
  ctx.fill();

  // Smile
  ctx.strokeStyle = '#111111';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(0, h * 0.02, 7, 0.2, Math.PI - 0.2);
  ctx.stroke();

  // Red Shorts
  ctx.fillStyle = '#e63946';
  ctx.beginPath();
  ctx.roundRect(-w * 0.4, h * 0.14, w * 0.8, h * 0.32, 6);
  ctx.fill();

  // White buttons on shorts
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.ellipse(-w * 0.16, h * 0.3, 3, 4.5, 0, 0, Math.PI * 2);
  ctx.ellipse(w * 0.16, h * 0.3, 3, 4.5, 0, 0, Math.PI * 2);
  ctx.fill();

  // Yellow shoes
  ctx.fillStyle = '#ffd166';
  ctx.beginPath();
  ctx.ellipse(-w * 0.22, h * 0.46, 6, 3.5, 0, 0, Math.PI * 2);
  ctx.ellipse(w * 0.22, h * 0.46, 6, 3.5, 0, 0, Math.PI * 2);
  ctx.fill();
}

function drawMinnie(ctx: CanvasRenderingContext2D, w: number, h: number, char: DisneyCharacter) {
  drawMickey(ctx, w, h, char);

  // Big Pink Polka Dot Bow on top of head
  ctx.fillStyle = '#ff4d6d';
  ctx.beginPath();
  ctx.ellipse(-w * 0.22, -h * 0.38, 8, 5, -0.4, 0, Math.PI * 2);
  ctx.ellipse(w * 0.22, -h * 0.38, 8, 5, 0.4, 0, Math.PI * 2);
  ctx.fill();

  // Bow knot
  ctx.fillStyle = '#c9184a';
  ctx.beginPath();
  ctx.arc(0, -h * 0.38, 5, 0, Math.PI * 2);
  ctx.fill();

  // White polka dots on bow
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.arc(-w * 0.24, -h * 0.38, 1.8, 0, Math.PI * 2);
  ctx.arc(-w * 0.16, -h * 0.42, 1.5, 0, Math.PI * 2);
  ctx.arc(w * 0.24, -h * 0.38, 1.8, 0, Math.PI * 2);
  ctx.arc(w * 0.16, -h * 0.42, 1.5, 0, Math.PI * 2);
  ctx.fill();

  // Eyelashes
  ctx.strokeStyle = '#111111';
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(-w * 0.14, -h * 0.19);
  ctx.lineTo(-w * 0.18, -h * 0.23);
  ctx.moveTo(w * 0.14, -h * 0.19);
  ctx.lineTo(w * 0.18, -h * 0.23);
  ctx.stroke();
}

function drawStitch(ctx: CanvasRenderingContext2D, w: number, h: number, char: DisneyCharacter) {
  // Giant pointy ears
  ctx.fillStyle = '#0077b6';
  ctx.beginPath();
  // Left ear
  ctx.moveTo(-w * 0.2, -h * 0.1);
  ctx.quadraticCurveTo(-w * 0.65, -h * 0.35, -w * 0.58, -h * 0.5);
  ctx.quadraticCurveTo(-w * 0.3, -h * 0.45, -w * 0.1, -h * 0.25);
  ctx.closePath();
  ctx.fill();

  // Right ear
  ctx.moveTo(w * 0.2, -h * 0.1);
  ctx.quadraticCurveTo(w * 0.65, -h * 0.35, w * 0.58, -h * 0.5);
  ctx.quadraticCurveTo(w * 0.3, -h * 0.45, w * 0.1, -h * 0.25);
  ctx.closePath();
  ctx.fill();

  // Inner ear pink
  ctx.fillStyle = '#f72585';
  ctx.beginPath();
  ctx.moveTo(-w * 0.2, -h * 0.15);
  ctx.quadraticCurveTo(-w * 0.52, -h * 0.33, -w * 0.48, -h * 0.43);
  ctx.quadraticCurveTo(-w * 0.28, -h * 0.38, -w * 0.14, -h * 0.22);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(w * 0.2, -h * 0.15);
  ctx.quadraticCurveTo(w * 0.52, -h * 0.33, w * 0.48, -h * 0.43);
  ctx.quadraticCurveTo(w * 0.28, -h * 0.38, w * 0.14, -h * 0.22);
  ctx.fill();

  // Head and body
  ctx.fillStyle = '#0096c7';
  ctx.beginPath();
  ctx.ellipse(0, 0, w * 0.42, h * 0.38, 0, 0, Math.PI * 2);
  ctx.fill();

  // Light blue chest/tummy
  ctx.fillStyle = '#90e0ef';
  ctx.beginPath();
  ctx.ellipse(0, h * 0.15, w * 0.26, h * 0.2, 0, 0, Math.PI * 2);
  ctx.fill();

  // Dark eye patches
  ctx.fillStyle = '#00509d';
  ctx.beginPath();
  ctx.ellipse(-w * 0.16, -h * 0.06, 7, 10, -0.25, 0, Math.PI * 2);
  ctx.ellipse(w * 0.16, -h * 0.06, 7, 10, 0.25, 0, Math.PI * 2);
  ctx.fill();

  // Big black expressive eyes
  ctx.fillStyle = '#0a0908';
  ctx.beginPath();
  ctx.ellipse(-w * 0.15, -h * 0.06, 5.5, 8, -0.2, 0, Math.PI * 2);
  ctx.ellipse(w * 0.15, -h * 0.06, 5.5, 8, 0.2, 0, Math.PI * 2);
  ctx.fill();

  // Eye highlights
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.arc(-w * 0.16, -h * 0.1, 2.5, 0, Math.PI * 2);
  ctx.arc(w * 0.14, -h * 0.1, 2.5, 0, Math.PI * 2);
  ctx.fill();

  // Wide alien nose
  ctx.fillStyle = '#003566';
  ctx.beginPath();
  ctx.ellipse(0, h * 0.04, 6.5, 4.5, 0, 0, Math.PI * 2);
  ctx.fill();

  // Head tuft
  ctx.fillStyle = '#0096c7';
  ctx.beginPath();
  ctx.moveTo(-w * 0.06, -h * 0.36);
  ctx.lineTo(0, -h * 0.46);
  ctx.lineTo(w * 0.06, -h * 0.36);
  ctx.fill();
}

function drawElsa(ctx: CanvasRenderingContext2D, w: number, h: number, char: DisneyCharacter) {
  // Cape / Snowflake glow aura
  ctx.fillStyle = 'rgba(202, 240, 248, 0.4)';
  ctx.beginPath();
  ctx.moveTo(-w * 0.35, 0);
  ctx.lineTo(-w * 0.48, h * 0.45);
  ctx.lineTo(w * 0.48, h * 0.45);
  ctx.lineTo(w * 0.35, 0);
  ctx.fill();

  // Ice cyan gown
  ctx.fillStyle = '#00b4d8';
  ctx.beginPath();
  ctx.moveTo(-w * 0.25, h * 0.05);
  ctx.lineTo(-w * 0.38, h * 0.45);
  ctx.lineTo(w * 0.38, h * 0.45);
  ctx.lineTo(w * 0.25, h * 0.05);
  ctx.closePath();
  ctx.fill();

  // Bodice with glitter
  ctx.fillStyle = '#90e0ef';
  ctx.beginPath();
  ctx.roundRect(-w * 0.22, -h * 0.05, w * 0.44, h * 0.22, 4);
  ctx.fill();

  // Face
  ctx.fillStyle = '#fceade';
  ctx.beginPath();
  ctx.arc(0, -h * 0.12, w * 0.22, 0, Math.PI * 2);
  ctx.fill();

  // Platinum blonde hair
  ctx.fillStyle = '#f8f9fa';
  ctx.beginPath();
  ctx.arc(0, -h * 0.18, w * 0.24, Math.PI, Math.PI * 2);
  ctx.fill();

  // Side braid draped over shoulder
  ctx.fillStyle = '#edf2f4';
  ctx.beginPath();
  ctx.moveTo(w * 0.12, -h * 0.1);
  ctx.quadraticCurveTo(w * 0.35, h * 0.08, w * 0.28, h * 0.35);
  ctx.lineTo(w * 0.2, h * 0.32);
  ctx.quadraticCurveTo(w * 0.25, h * 0.08, w * 0.08, -h * 0.05);
  ctx.fill();

  // Blue eyes
  ctx.fillStyle = '#0077b6';
  ctx.beginPath();
  ctx.arc(-w * 0.08, -h * 0.12, 2.5, 0, Math.PI * 2);
  ctx.arc(w * 0.08, -h * 0.12, 2.5, 0, Math.PI * 2);
  ctx.fill();

  // Smiling lips
  ctx.strokeStyle = '#f28482';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(0, -h * 0.05, 4, 0.2, Math.PI - 0.2);
  ctx.stroke();

  // Ice Crystal Tiara
  ctx.fillStyle = '#caf0f8';
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(-w * 0.14, -h * 0.28);
  ctx.lineTo(-w * 0.06, -h * 0.38);
  ctx.lineTo(0, -h * 0.44);
  ctx.lineTo(w * 0.06, -h * 0.38);
  ctx.lineTo(w * 0.14, -h * 0.28);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

function drawBuzz(ctx: CanvasRenderingContext2D, w: number, h: number, char: DisneyCharacter, isBoosting: boolean) {
  // Rocket flames when boosting
  if (isBoosting) {
    ctx.fillStyle = '#ff5400';
    ctx.beginPath();
    ctx.moveTo(-w * 0.25, h * 0.42);
    ctx.lineTo(-w * 0.2, h * 0.65);
    ctx.lineTo(-w * 0.15, h * 0.42);
    ctx.moveTo(w * 0.15, h * 0.42);
    ctx.lineTo(w * 0.2, h * 0.65);
    ctx.lineTo(w * 0.25, h * 0.42);
    ctx.fill();

    ctx.fillStyle = '#ffbe0b';
    ctx.beginPath();
    ctx.moveTo(-w * 0.23, h * 0.42);
    ctx.lineTo(-w * 0.2, h * 0.56);
    ctx.lineTo(-w * 0.17, h * 0.42);
    ctx.moveTo(w * 0.17, h * 0.42);
    ctx.lineTo(w * 0.2, h * 0.56);
    ctx.lineTo(w * 0.23, h * 0.42);
    ctx.fill();
  }

  // Jetpack wings
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.roundRect(-w * 0.5, -h * 0.1, w * 0.15, h * 0.35, 3);
  ctx.roundRect(w * 0.35, -h * 0.1, w * 0.15, h * 0.35, 3);
  ctx.fill();

  // Wingtip hazard stripes
  ctx.fillStyle = '#e63946';
  ctx.fillRect(-w * 0.5, -h * 0.1, w * 0.15, 4);
  ctx.fillStyle = '#38b000';
  ctx.fillRect(w * 0.35, -h * 0.1, w * 0.15, 4);

  // White Space Suit Torso
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.roundRect(-w * 0.32, -h * 0.05, w * 0.64, h * 0.42, 6);
  ctx.fill();

  // Neon Green Chest Armor
  ctx.fillStyle = '#38b000';
  ctx.beginPath();
  ctx.roundRect(-w * 0.28, -h * 0.02, w * 0.56, h * 0.18, 4);
  ctx.fill();

  // Buttons on chest
  ctx.fillStyle = '#0077b6';
  ctx.beginPath();
  ctx.arc(-w * 0.12, h * 0.07, 3, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#d90429';
  ctx.beginPath();
  ctx.arc(0, h * 0.07, 3, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#ffb703';
  ctx.beginPath();
  ctx.arc(w * 0.12, h * 0.07, 3, 0, Math.PI * 2);
  ctx.fill();

  // Purple Skullcap Head
  ctx.fillStyle = '#7209b7';
  ctx.beginPath();
  ctx.arc(0, -h * 0.2, w * 0.22, 0, Math.PI * 2);
  ctx.fill();

  // Face
  ctx.fillStyle = '#ffdfba';
  ctx.beginPath();
  ctx.ellipse(0, -h * 0.18, w * 0.15, h * 0.12, 0, 0, Math.PI * 2);
  ctx.fill();

  // Chin swirl & smirk
  ctx.strokeStyle = '#7209b7';
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.arc(0, -h * 0.11, 2.5, 0, Math.PI * 1.5);
  ctx.stroke();

  // Clear Visor Dome with reflection
  ctx.strokeStyle = 'rgba(56, 176, 0, 0.8)';
  ctx.lineWidth = 1.5;
  ctx.fillStyle = 'rgba(144, 224, 239, 0.25)';
  ctx.beginPath();
  ctx.arc(0, -h * 0.2, w * 0.32, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Visor reflection shine
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(0, -h * 0.2, w * 0.26, -Math.PI * 0.8, -Math.PI * 0.3);
  ctx.stroke();
}

function drawSimba(ctx: CanvasRenderingContext2D, w: number, h: number, char: DisneyCharacter) {
  // Ears
  ctx.fillStyle = '#e07a5f';
  ctx.beginPath();
  ctx.arc(-w * 0.28, -h * 0.26, 7, 0, Math.PI * 2);
  ctx.arc(w * 0.28, -h * 0.26, 7, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#3d405b';
  ctx.beginPath();
  ctx.arc(-w * 0.28, -h * 0.26, 7, Math.PI, Math.PI * 1.6);
  ctx.arc(w * 0.28, -h * 0.26, 7, Math.PI * 1.4, Math.PI * 2);
  ctx.stroke();

  // Golden Lion Head
  ctx.fillStyle = '#f4a261';
  ctx.beginPath();
  ctx.arc(0, -h * 0.06, w * 0.36, 0, Math.PI * 2);
  ctx.fill();

  // Red Hair Tuft on head
  ctx.fillStyle = '#b7094c';
  ctx.beginPath();
  ctx.moveTo(-w * 0.08, -h * 0.36);
  ctx.quadraticCurveTo(0, -h * 0.48, w * 0.12, -h * 0.42);
  ctx.quadraticCurveTo(w * 0.04, -h * 0.34, w * 0.06, -h * 0.36);
  ctx.fill();

  // Cream muzzle
  ctx.fillStyle = '#faedcd';
  ctx.beginPath();
  ctx.ellipse(0, h * 0.06, w * 0.24, h * 0.16, 0, 0, Math.PI * 2);
  ctx.fill();

  // Pink nose
  ctx.fillStyle = '#d62828';
  ctx.beginPath();
  ctx.moveTo(-4, 0);
  ctx.lineTo(4, 0);
  ctx.lineTo(0, 4);
  ctx.closePath();
  ctx.fill();

  // Big curious lion eyes
  ctx.fillStyle = '#fcbf49';
  ctx.beginPath();
  ctx.ellipse(-w * 0.12, -h * 0.1, 4.5, 6, -0.1, 0, Math.PI * 2);
  ctx.ellipse(w * 0.12, -h * 0.1, 4.5, 6, 0.1, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#111111';
  ctx.beginPath();
  ctx.arc(-w * 0.11, -h * 0.09, 3, 0, Math.PI * 2);
  ctx.arc(w * 0.11, -h * 0.09, 3, 0, Math.PI * 2);
  ctx.fill();

  // Paws
  ctx.fillStyle = '#f4a261';
  ctx.beginPath();
  ctx.roundRect(-w * 0.32, h * 0.22, w * 0.64, h * 0.22, 6);
  ctx.fill();
}

function drawDonald(ctx: CanvasRenderingContext2D, w: number, h: number, char: DisneyCharacter) {
  // Sailor hat
  ctx.fillStyle = '#0077b6';
  ctx.beginPath();
  ctx.ellipse(w * 0.05, -h * 0.34, w * 0.26, h * 0.12, -0.2, 0, Math.PI * 2);
  ctx.fill();

  // Black ribbon on hat
  ctx.fillStyle = '#111111';
  ctx.beginPath();
  ctx.moveTo(w * 0.2, -h * 0.34);
  ctx.lineTo(w * 0.45, -h * 0.38);
  ctx.lineTo(w * 0.4, -h * 0.28);
  ctx.fill();

  // White feathered head
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.arc(0, -h * 0.08, w * 0.35, 0, Math.PI * 2);
  ctx.fill();

  // Feather tufts on cheeks
  ctx.beginPath();
  ctx.arc(-w * 0.32, -h * 0.05, 5, 0, Math.PI * 2);
  ctx.arc(w * 0.32, -h * 0.05, 5, 0, Math.PI * 2);
  ctx.fill();

  // Blue eyes
  ctx.fillStyle = '#0096c7';
  ctx.beginPath();
  ctx.ellipse(-w * 0.1, -h * 0.14, 3, 6, 0, 0, Math.PI * 2);
  ctx.ellipse(w * 0.1, -h * 0.14, 3, 6, 0, 0, Math.PI * 2);
  ctx.fill();

  // Big Orange Bill (duck beak)
  ctx.fillStyle = '#fb8500';
  ctx.beginPath();
  ctx.ellipse(0, 0, w * 0.32, h * 0.14, 0, 0, Math.PI * 2);
  ctx.fill();

  // Blue sailor collar
  ctx.fillStyle = '#0077b6';
  ctx.beginPath();
  ctx.roundRect(-w * 0.35, h * 0.15, w * 0.7, h * 0.28, 4);
  ctx.fill();

  // Red bow tie
  ctx.fillStyle = '#d90429';
  ctx.beginPath();
  ctx.ellipse(-w * 0.08, h * 0.18, 5, 3.5, -0.3, 0, Math.PI * 2);
  ctx.ellipse(w * 0.08, h * 0.18, 5, 3.5, 0.3, 0, Math.PI * 2);
  ctx.arc(0, h * 0.18, 3, 0, Math.PI * 2);
  ctx.fill();
}

function drawWoody(ctx: CanvasRenderingContext2D, w: number, h: number, char: DisneyCharacter) {
  // Cowboy Hat
  ctx.fillStyle = '#8b4513';
  ctx.beginPath();
  // Hat brim
  ctx.ellipse(0, -h * 0.3, w * 0.5, h * 0.12, 0, 0, Math.PI * 2);
  ctx.fill();

  // Hat crown
  ctx.beginPath();
  ctx.roundRect(-w * 0.24, -h * 0.48, w * 0.48, h * 0.22, [6, 6, 2, 2]);
  ctx.fill();

  // Hat ribbon
  ctx.fillStyle = '#3a1f04';
  ctx.fillRect(-w * 0.24, -h * 0.34, w * 0.48, 3.5);

  // Face
  ctx.fillStyle = '#ffdfba';
  ctx.beginPath();
  ctx.arc(0, -h * 0.12, w * 0.24, 0, Math.PI * 2);
  ctx.fill();

  // Friendly smile and eyes
  ctx.fillStyle = '#3a1f04';
  ctx.beginPath();
  ctx.arc(-w * 0.08, -h * 0.14, 2.5, 0, Math.PI * 2);
  ctx.arc(w * 0.08, -h * 0.14, 2.5, 0, Math.PI * 2);
  ctx.fill();

  // Yellow and Red Checkered Shirt
  ctx.fillStyle = '#ffbe0b';
  ctx.beginPath();
  ctx.roundRect(-w * 0.3, h * 0.08, w * 0.6, h * 0.36, 4);
  ctx.fill();

  // Cowhide Vest
  ctx.fillStyle = '#f8f9fa';
  ctx.fillRect(-w * 0.3, h * 0.08, w * 0.16, h * 0.34);
  ctx.fillRect(w * 0.14, h * 0.08, w * 0.16, h * 0.34);

  // Cow spots
  ctx.fillStyle = '#212529';
  ctx.beginPath();
  ctx.arc(-w * 0.22, h * 0.16, 3, 0, Math.PI * 2);
  ctx.arc(w * 0.22, h * 0.24, 3, 0, Math.PI * 2);
  ctx.fill();

  // Golden Sheriff Star Badge
  ctx.fillStyle = '#ffd166';
  ctx.strokeStyle = '#b7094c';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(-w * 0.15, h * 0.2, 4.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
}

function drawAriel(ctx: CanvasRenderingContext2D, w: number, h: number, char: DisneyCharacter) {
  // Long flowing crimson red hair behind
  ctx.fillStyle = '#d90429';
  ctx.beginPath();
  ctx.ellipse(w * 0.1, -h * 0.08, w * 0.44, h * 0.38, 0.2, 0, Math.PI * 2);
  ctx.fill();

  // Mermaid tail with green scales
  ctx.fillStyle = '#06d6a0';
  ctx.beginPath();
  ctx.moveTo(-w * 0.2, h * 0.12);
  ctx.quadraticCurveTo(-w * 0.28, h * 0.35, -w * 0.1, h * 0.46);
  ctx.lineTo(w * 0.1, h * 0.46);
  ctx.quadraticCurveTo(w * 0.28, h * 0.35, w * 0.2, h * 0.12);
  ctx.closePath();
  ctx.fill();

  // Tail flukes (fin)
  ctx.fillStyle = '#118ab2';
  ctx.beginPath();
  ctx.ellipse(-w * 0.14, h * 0.48, 7, 4, -0.4, 0, Math.PI * 2);
  ctx.ellipse(w * 0.14, h * 0.48, 7, 4, 0.4, 0, Math.PI * 2);
  ctx.fill();

  // Purple Seashell Top
  ctx.fillStyle = '#9d4edd';
  ctx.beginPath();
  ctx.arc(-w * 0.11, h * 0.04, 5.5, 0, Math.PI * 2);
  ctx.arc(w * 0.11, h * 0.04, 5.5, 0, Math.PI * 2);
  ctx.fill();

  // Face
  ctx.fillStyle = '#ffdfba';
  ctx.beginPath();
  ctx.arc(0, -h * 0.14, w * 0.2, 0, Math.PI * 2);
  ctx.fill();

  // Sea-green eyes
  ctx.fillStyle = '#0077b6';
  ctx.beginPath();
  ctx.arc(-w * 0.07, -h * 0.14, 2.5, 0, Math.PI * 2);
  ctx.arc(w * 0.07, -h * 0.14, 2.5, 0, Math.PI * 2);
  ctx.fill();

  // Hair wave in front with purple flower
  ctx.fillStyle = '#d90429';
  ctx.beginPath();
  ctx.arc(0, -h * 0.22, w * 0.24, Math.PI, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#c77dff';
  ctx.beginPath();
  ctx.arc(w * 0.18, -h * 0.24, 4, 0, Math.PI * 2);
  ctx.fill();
}

function drawBaymax(ctx: CanvasRenderingContext2D, w: number, h: number, char: DisneyCharacter) {
  // Pear shaped inflatable robot body
  ctx.fillStyle = '#f8f9fa';
  ctx.beginPath();
  // Lower body
  ctx.ellipse(0, h * 0.15, w * 0.42, h * 0.32, 0, 0, Math.PI * 2);
  // Upper body/head
  ctx.ellipse(0, -h * 0.15, w * 0.32, h * 0.24, 0, 0, Math.PI * 2);
  ctx.fill();

  // Subtle vinyl outline
  ctx.strokeStyle = '#ced4da';
  ctx.lineWidth = 1.2;
  ctx.stroke();

  // Iconic Baymax Face: two black dots connected by a horizontal line
  ctx.fillStyle = '#111111';
  ctx.strokeStyle = '#111111';
  ctx.lineWidth = 1.8;

  // Connecting line
  ctx.beginPath();
  ctx.moveTo(-w * 0.12, -h * 0.15);
  ctx.lineTo(w * 0.12, -h * 0.15);
  ctx.stroke();

  // Eyes
  ctx.beginPath();
  ctx.arc(-w * 0.12, -h * 0.15, 3.5, 0, Math.PI * 2);
  ctx.arc(w * 0.12, -h * 0.15, 3.5, 0, Math.PI * 2);
  ctx.fill();

  // Healthcare chip access port / Heart emblem
  ctx.strokeStyle = '#e63946';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(-w * 0.18, h * 0.05, 4, 0, Math.PI * 2);
  ctx.stroke();
}

function drawPooh(ctx: CanvasRenderingContext2D, w: number, h: number, char: DisneyCharacter) {
  // Round bear ears
  ctx.fillStyle = '#f39c12';
  ctx.beginPath();
  ctx.arc(-w * 0.28, -h * 0.28, 6.5, 0, Math.PI * 2);
  ctx.arc(w * 0.28, -h * 0.28, 6.5, 0, Math.PI * 2);
  ctx.fill();

  // Golden bear head
  ctx.beginPath();
  ctx.arc(0, -h * 0.1, w * 0.35, 0, Math.PI * 2);
  ctx.fill();

  // Chubby yellow tummy
  ctx.beginPath();
  ctx.ellipse(0, h * 0.26, w * 0.36, h * 0.22, 0, 0, Math.PI * 2);
  ctx.fill();

  // Classic Short Red Shirt
  ctx.fillStyle = '#d90429';
  ctx.beginPath();
  ctx.roundRect(-w * 0.34, h * 0.02, w * 0.68, h * 0.22, 5);
  ctx.fill();

  // Cute face
  ctx.fillStyle = '#111111';
  ctx.beginPath();
  ctx.arc(-w * 0.1, -h * 0.14, 2.5, 0, Math.PI * 2);
  ctx.arc(w * 0.1, -h * 0.14, 2.5, 0, Math.PI * 2);
  ctx.fill();

  // Nose & smile
  ctx.beginPath();
  ctx.ellipse(0, -h * 0.06, 3.5, 2.5, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = '#111111';
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.arc(0, -h * 0.02, 5, 0.2, Math.PI - 0.2);
  ctx.stroke();
}

function drawTinkerBell(ctx: CanvasRenderingContext2D, w: number, h: number, char: DisneyCharacter, jumpProgress: number) {
  // Fluttering fairy wings
  const wingOffset = Math.sin(Date.now() * 0.02) * 5;
  ctx.fillStyle = 'rgba(202, 240, 248, 0.65)';
  ctx.strokeStyle = '#caf0f8';
  ctx.lineWidth = 1;

  ctx.beginPath();
  ctx.ellipse(-w * 0.32, -h * 0.1 + wingOffset * 0.4, w * 0.28, h * 0.18, -0.4, 0, Math.PI * 2);
  ctx.ellipse(w * 0.32, -h * 0.1 - wingOffset * 0.4, w * 0.28, h * 0.18, 0.4, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Blonde hair with bun
  ctx.fillStyle = '#ffea00';
  ctx.beginPath();
  // Bun on top
  ctx.arc(0, -h * 0.38, 7, 0, Math.PI * 2);
  // Head hair
  ctx.arc(0, -h * 0.18, w * 0.22, 0, Math.PI * 2);
  ctx.fill();

  // Hair tie
  ctx.fillStyle = '#70e000';
  ctx.fillRect(-5, -h * 0.33, 10, 3);

  // Face
  ctx.fillStyle = '#ffdfba';
  ctx.beginPath();
  ctx.arc(0, -h * 0.12, w * 0.18, 0, Math.PI * 2);
  ctx.fill();

  // Blue sparkling eyes
  ctx.fillStyle = '#0077b6';
  ctx.beginPath();
  ctx.arc(-w * 0.06, -h * 0.12, 2, 0, Math.PI * 2);
  ctx.arc(w * 0.06, -h * 0.12, 2, 0, Math.PI * 2);
  ctx.fill();

  // Green leaf dress
  ctx.fillStyle = '#55a630';
  ctx.beginPath();
  ctx.moveTo(-w * 0.18, 0);
  ctx.lineTo(-w * 0.28, h * 0.36);
  ctx.lineTo(w * 0.28, h * 0.36);
  ctx.lineTo(w * 0.18, 0);
  ctx.closePath();
  ctx.fill();

  // White pom-pom shoes
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.arc(-w * 0.14, h * 0.44, 3.5, 0, Math.PI * 2);
  ctx.arc(w * 0.14, h * 0.44, 3.5, 0, Math.PI * 2);
  ctx.fill();
}

function drawGenie(ctx: CanvasRenderingContext2D, w: number, h: number, char: DisneyCharacter) {
  // Wispy blue magic lamp smoke tail
  ctx.fillStyle = 'rgba(0, 150, 199, 0.7)';
  ctx.beginPath();
  ctx.moveTo(-w * 0.2, h * 0.15);
  ctx.quadraticCurveTo(-w * 0.4, h * 0.4, 0, h * 0.52);
  ctx.quadraticCurveTo(w * 0.35, h * 0.38, w * 0.2, h * 0.15);
  ctx.closePath();
  ctx.fill();

  // Blue Muscular Torso
  ctx.fillStyle = '#0096c7';
  ctx.beginPath();
  ctx.roundRect(-w * 0.34, -h * 0.05, w * 0.68, h * 0.26, 8);
  ctx.fill();

  // Gold wristbands
  ctx.fillStyle = '#ffd166';
  ctx.fillRect(-w * 0.38, h * 0.05, 5, 8);
  ctx.fillRect(w * 0.34, h * 0.05, 5, 8);

  // Big blue head
  ctx.beginPath();
  ctx.arc(0, -h * 0.18, w * 0.28, 0, Math.PI * 2);
  ctx.fill();

  // Black Topknot Ponytail
  ctx.fillStyle = '#111111';
  ctx.beginPath();
  ctx.arc(w * 0.05, -h * 0.42, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#ffd166';
  ctx.fillRect(w * 0.02, -h * 0.37, 6, 3);

  // Gold hoop earring
  ctx.strokeStyle = '#ffd166';
  ctx.lineWidth = 1.8;
  ctx.beginPath();
  ctx.arc(-w * 0.28, -h * 0.18, 4, 0, Math.PI * 2);
  ctx.stroke();

  // Goatee beard
  ctx.fillStyle = '#111111';
  ctx.beginPath();
  ctx.moveTo(-4, -h * 0.04);
  ctx.lineTo(4, -h * 0.04);
  ctx.lineTo(0, h * 0.06);
  ctx.closePath();
  ctx.fill();

  // Cheerful eyes
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.arc(-w * 0.08, -h * 0.2, 3, 0, Math.PI * 2);
  ctx.arc(w * 0.08, -h * 0.2, 3, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#111111';
  ctx.beginPath();
  ctx.arc(-w * 0.07, -h * 0.2, 1.8, 0, Math.PI * 2);
  ctx.arc(w * 0.07, -h * 0.2, 1.8, 0, Math.PI * 2);
  ctx.fill();
}

function drawGoofy(ctx: CanvasRenderingContext2D, w: number, h: number, char: DisneyCharacter) {
  // Long floppy black hound ears dangling down
  ctx.fillStyle = '#111111';
  ctx.beginPath();
  ctx.ellipse(-w * 0.36, 0, 5, 16, -0.15, 0, Math.PI * 2);
  ctx.ellipse(w * 0.36, 0, 5, 16, 0.15, 0, Math.PI * 2);
  ctx.fill();

  // Tall green floppy hat with black band
  ctx.fillStyle = '#52b788';
  ctx.beginPath();
  ctx.ellipse(0, -h * 0.36, w * 0.26, 4, 0, 0, Math.PI * 2);
  ctx.roundRect(-w * 0.16, -h * 0.54, w * 0.32, h * 0.2, [6, 6, 2, 2]);
  ctx.fill();
  ctx.fillStyle = '#111111';
  ctx.fillRect(-w * 0.16, -h * 0.38, w * 0.32, 4);

  // Black head
  ctx.beginPath();
  ctx.arc(0, -h * 0.18, w * 0.24, 0, Math.PI * 2);
  ctx.fill();

  // Muzzle with two white buck teeth
  ctx.fillStyle = '#faedcd';
  ctx.beginPath();
  ctx.ellipse(0, -h * 0.08, w * 0.26, h * 0.14, 0, 0, Math.PI * 2);
  ctx.fill();

  // Black round bulb nose
  ctx.fillStyle = '#111111';
  ctx.beginPath();
  ctx.arc(0, -h * 0.12, 5, 0, Math.PI * 2);
  ctx.fill();

  // Two white buck teeth
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(-4, -h * 0.02, 3.5, 5);
  ctx.fillRect(0.5, -h * 0.02, 3.5, 5);

  // Orange sweater
  ctx.fillStyle = '#f77f00';
  ctx.beginPath();
  ctx.roundRect(-w * 0.3, h * 0.1, w * 0.6, h * 0.34, 4);
  ctx.fill();
}

function drawMoana(ctx: CanvasRenderingContext2D, w: number, h: number, char: DisneyCharacter) {
  // Long dark curly Polynesian hair
  ctx.fillStyle = '#1f1a17';
  ctx.beginPath();
  ctx.ellipse(0, -h * 0.12, w * 0.42, h * 0.34, 0, 0, Math.PI * 2);
  ctx.fill();

  // Polynesian Tan Face
  ctx.fillStyle = '#d4a373';
  ctx.beginPath();
  ctx.arc(0, -h * 0.12, w * 0.22, 0, Math.PI * 2);
  ctx.fill();

  // Pink island flower in hair
  ctx.fillStyle = '#ff758f';
  ctx.beginPath();
  ctx.arc(w * 0.22, -h * 0.24, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#ffea00';
  ctx.beginPath();
  ctx.arc(w * 0.22, -h * 0.24, 2, 0, Math.PI * 2);
  ctx.fill();

  // Deep brown eyes
  ctx.fillStyle = '#3a1f04';
  ctx.beginPath();
  ctx.arc(-w * 0.08, -h * 0.12, 2.5, 0, Math.PI * 2);
  ctx.arc(w * 0.08, -h * 0.12, 2.5, 0, Math.PI * 2);
  ctx.fill();

  // Coral red island voyager top
  ctx.fillStyle = '#f3722c';
  ctx.beginPath();
  ctx.roundRect(-w * 0.28, h * 0.06, w * 0.56, h * 0.18, 3);
  ctx.fill();

  // Heart of Te Fiti glowing amulet necklace
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(0, h * 0.02, 6, 0, Math.PI);
  ctx.stroke();

  ctx.fillStyle = '#00f5d4';
  ctx.shadowBlur = 10;
  ctx.shadowColor = '#00f5d4';
  ctx.beginPath();
  ctx.arc(0, h * 0.08, 3.5, 0, Math.PI * 2);
  ctx.fill();

  // Tapa skirt
  ctx.fillStyle = '#faedcd';
  ctx.beginPath();
  ctx.roundRect(-w * 0.3, h * 0.26, w * 0.6, h * 0.2, 2);
  ctx.fill();
}

function drawOlaf(ctx: CanvasRenderingContext2D, w: number, h: number, char: DisneyCharacter) {
  // Twig hair on head
  ctx.strokeStyle = '#4a3728';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(0, -h * 0.35);
  ctx.lineTo(-4, -h * 0.48);
  ctx.moveTo(0, -h * 0.35);
  ctx.lineTo(0, -h * 0.5);
  ctx.moveTo(0, -h * 0.35);
  ctx.lineTo(4, -h * 0.46);
  ctx.stroke();

  // 3 Snowball Body parts
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  // Head
  ctx.ellipse(0, -h * 0.18, w * 0.24, h * 0.18, 0, 0, Math.PI * 2);
  // Mid body
  ctx.arc(0, h * 0.06, w * 0.2, 0, Math.PI * 2);
  // Base body
  ctx.arc(0, h * 0.28, w * 0.3, 0, Math.PI * 2);
  ctx.fill();

  // Carrot Nose
  ctx.fillStyle = '#f77f00';
  ctx.beginPath();
  ctx.moveTo(0, -h * 0.18);
  ctx.lineTo(w * 0.38, -h * 0.16);
  ctx.lineTo(0, -h * 0.12);
  ctx.closePath();
  ctx.fill();

  // Coal eyes & buck tooth
  ctx.fillStyle = '#111111';
  ctx.beginPath();
  ctx.arc(-w * 0.08, -h * 0.22, 2.5, 0, Math.PI * 2);
  ctx.arc(w * 0.08, -h * 0.22, 2.5, 0, Math.PI * 2);
  // Coal buttons on body
  ctx.arc(0, h * 0.05, 3, 0, Math.PI * 2);
  ctx.arc(0, h * 0.22, 3.5, 0, Math.PI * 2);
  ctx.arc(0, h * 0.33, 3.5, 0, Math.PI * 2);
  ctx.fill();

  // One big buck tooth
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(-2.5, -h * 0.1, 5, 4);
}

function drawCinderella(ctx: CanvasRenderingContext2D, w: number, h: number, char: DisneyCharacter) {
  // Blonde updo
  ctx.fillStyle = '#f9c74f';
  ctx.beginPath();
  ctx.arc(0, -h * 0.34, 9, 0, Math.PI * 2);
  ctx.arc(0, -h * 0.16, w * 0.24, 0, Math.PI * 2);
  ctx.fill();

  // Blue headband
  ctx.fillStyle = '#48cae4';
  ctx.fillRect(-w * 0.2, -h * 0.26, w * 0.4, 4);

  // Face
  ctx.fillStyle = '#ffdfba';
  ctx.beginPath();
  ctx.arc(0, -h * 0.12, w * 0.2, 0, Math.PI * 2);
  ctx.fill();

  // Blue eyes
  ctx.fillStyle = '#0077b6';
  ctx.beginPath();
  ctx.arc(-w * 0.07, -h * 0.12, 2.5, 0, Math.PI * 2);
  ctx.arc(w * 0.07, -h * 0.12, 2.5, 0, Math.PI * 2);
  ctx.fill();

  // Sparkling Blue Ballgown
  ctx.fillStyle = '#90e0ef';
  ctx.beginPath();
  ctx.moveTo(-w * 0.2, h * 0.06);
  ctx.lineTo(-w * 0.42, h * 0.45);
  ctx.lineTo(w * 0.42, h * 0.45);
  ctx.lineTo(w * 0.2, h * 0.06);
  ctx.closePath();
  ctx.fill();

  // White puffy shoulder sleeves
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.arc(-w * 0.24, h * 0.04, 6, 0, Math.PI * 2);
  ctx.arc(w * 0.24, h * 0.04, 6, 0, Math.PI * 2);
  ctx.fill();
}

function drawSulley(ctx: CanvasRenderingContext2D, w: number, h: number, char: DisneyCharacter) {
  // Curved Monster Horns
  ctx.fillStyle = '#ede0d4';
  ctx.beginPath();
  ctx.arc(-w * 0.25, -h * 0.32, 6, Math.PI * 0.5, Math.PI * 1.8);
  ctx.arc(w * 0.25, -h * 0.32, 6, Math.PI * 1.2, Math.PI * 2.5);
  ctx.stroke();

  // Turquoise Furry Body
  ctx.fillStyle = '#00b4d8';
  ctx.beginPath();
  ctx.roundRect(-w * 0.38, -h * 0.28, w * 0.76, h * 0.72, 12);
  ctx.fill();

  // Purple spots
  ctx.fillStyle = '#9d4edd';
  ctx.beginPath();
  ctx.ellipse(-w * 0.2, -h * 0.08, 6, 8, 0.3, 0, Math.PI * 2);
  ctx.ellipse(w * 0.2, h * 0.12, 7, 9, -0.2, 0, Math.PI * 2);
  ctx.ellipse(-w * 0.1, h * 0.24, 5, 6, 0.4, 0, Math.PI * 2);
  ctx.fill();

  // Friendly face
  ctx.fillStyle = '#faedcd';
  ctx.beginPath();
  ctx.ellipse(0, -h * 0.04, w * 0.22, h * 0.12, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#111111';
  ctx.beginPath();
  ctx.arc(-w * 0.1, -h * 0.15, 2.5, 0, Math.PI * 2);
  ctx.arc(w * 0.1, -h * 0.15, 2.5, 0, Math.PI * 2);
  ctx.fill();

  // Blue monster nose
  ctx.fillStyle = '#0077b6';
  ctx.beginPath();
  ctx.ellipse(0, -h * 0.08, 5, 3.5, 0, 0, Math.PI * 2);
  ctx.fill();
}

function drawMike(ctx: CanvasRenderingContext2D, w: number, h: number, char: DisneyCharacter) {
  // Two small horns
  ctx.fillStyle = '#e9ecef';
  ctx.beginPath();
  ctx.moveTo(-w * 0.2, -h * 0.32);
  ctx.lineTo(-w * 0.28, -h * 0.44);
  ctx.lineTo(-w * 0.14, -h * 0.34);
  ctx.moveTo(w * 0.2, -h * 0.32);
  ctx.lineTo(w * 0.28, -h * 0.44);
  ctx.lineTo(w * 0.14, -h * 0.34);
  ctx.fill();

  // Lime green spherical body
  ctx.fillStyle = '#70e000';
  ctx.beginPath();
  ctx.arc(0, 0, w * 0.38, 0, Math.PI * 2);
  ctx.fill();

  // Giant Single Eye
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.arc(0, -h * 0.06, w * 0.22, 0, Math.PI * 2);
  ctx.fill();

  // Cyan Iris
  ctx.fillStyle = '#00b4d8';
  ctx.beginPath();
  ctx.arc(0, -h * 0.06, w * 0.13, 0, Math.PI * 2);
  ctx.fill();

  // Black Pupil & shine
  ctx.fillStyle = '#111111';
  ctx.beginPath();
  ctx.arc(0, -h * 0.06, w * 0.07, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.arc(-2, -h * 0.08, 2, 0, Math.PI * 2);
  ctx.fill();

  // Big happy grin
  ctx.strokeStyle = '#004b23';
  ctx.lineWidth = 1.8;
  ctx.beginPath();
  ctx.arc(0, h * 0.14, w * 0.2, 0.2, Math.PI - 0.2);
  ctx.stroke();
}

function drawCustomDisney(ctx: CanvasRenderingContext2D, w: number, h: number, char: DisneyCharacter) {
  // Stylized Disney Crest / Hero Shield Body
  ctx.fillStyle = char.themeColor;
  ctx.beginPath();
  ctx.roundRect(-w * 0.36, -h * 0.32, w * 0.72, h * 0.68, 10);
  ctx.fill();

  // Inner Accent Crest
  ctx.fillStyle = char.accentColor;
  ctx.beginPath();
  ctx.roundRect(-w * 0.28, -h * 0.24, w * 0.56, h * 0.52, 6);
  ctx.fill();

  // Character Icon Emoji or Initial
  ctx.font = `bold ${Math.floor(w * 0.45)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  if (char.iconEmoji) {
    ctx.fillText(char.iconEmoji, 0, 0);
  } else {
    ctx.fillStyle = '#111111';
    ctx.fillText(char.name.charAt(0).toUpperCase(), 0, 0);
  }

  // Golden Hero Star on top
  ctx.fillStyle = '#ffea00';
  ctx.beginPath();
  ctx.arc(0, -h * 0.36, 4, 0, Math.PI * 2);
  ctx.fill();

  // Bottom boots/trim
  ctx.fillStyle = char.secondaryColor || '#111111';
  ctx.beginPath();
  ctx.roundRect(-w * 0.3, h * 0.36, w * 0.6, h * 0.12, 3);
  ctx.fill();
}

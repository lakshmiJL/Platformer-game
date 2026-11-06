import { CANVAS_WIDTH, CANVAS_HEIGHT } from './constants';
import { Platform } from './types';

export interface DreamyStar {
  x: number;
  y: number;
  size: number;
  twinkleSpeed: number;
  twinklePhase: number;
  baseAlpha: number;
  color: string;
  glowColor: string;
  type: 'cross' | 'star4' | 'glow' | 'circle' | 'diamond';
  parallax: number; // 0.1 to 0.5 for depth
}

export interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  alpha: number;
  life: number;
  maxLife: number;
  color: string;
}

export interface DreamyNebula {
  x: number;
  y: number;
  radius: number;
  color: string;
  pulseSpeed: number;
  pulsePhase: number;
  parallax: number;
}

const STAR_COLORS = [
  { color: '#ffffff', glow: 'rgba(255, 255, 255, 0.9)' },       // Pure diamond white
  { color: '#fff6c9', glow: 'rgba(255, 246, 201, 0.85)' },      // Golden starlight
  { color: '#d8f4ff', glow: 'rgba(200, 240, 255, 0.85)' },      // Ethereal ice cyan
  { color: '#f3dbff', glow: 'rgba(235, 205, 255, 0.85)' },      // Dreamy fairy lavender
  { color: '#ffd6e7', glow: 'rgba(255, 214, 231, 0.85)' },      // Soft pixie rose
  { color: '#cbf8ff', glow: 'rgba(180, 245, 255, 0.8)' },       // Magic stardust
];

export function createDreamyStarfield(count = 110): DreamyStar[] {
  const stars: DreamyStar[] = [];
  const types: DreamyStar['type'][] = ['cross', 'star4', 'glow', 'circle', 'circle', 'diamond'];

  for (let i = 0; i < count; i++) {
    const colorTheme = STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)];
    const starType = types[Math.floor(Math.random() * types.length)];
    
    // Size distribution: mostly small twinkles (1-2px), some prominent magical cross/star4 stars (2.5-4px)
    const isProminent = starType === 'cross' || starType === 'star4';
    const size = isProminent ? (Math.random() * 2.5 + 2.5) : (Math.random() * 2 + 1);

    stars.push({
      x: Math.random() * CANVAS_WIDTH,
      y: Math.random() * CANVAS_HEIGHT * 3, // Spans a continuous vertical canvas span
      size,
      twinkleSpeed: Math.random() * 0.04 + 0.02,
      twinklePhase: Math.random() * Math.PI * 2,
      baseAlpha: Math.random() * 0.4 + 0.5,
      color: colorTheme.color,
      glowColor: colorTheme.glow,
      type: starType,
      parallax: Math.random() * 0.25 + 0.1, // 0.1 (far) to 0.35 (near)
    });
  }

  return stars;
}

export function createDreamyNebulas(): DreamyNebula[] {
  return [
    {
      x: CANVAS_WIDTH * 0.25,
      y: CANVAS_HEIGHT * 0.3,
      radius: 140,
      color: 'rgba(138, 75, 255, 0.15)', // Violet nebula
      pulseSpeed: 0.015,
      pulsePhase: 0,
      parallax: 0.08,
    },
    {
      x: CANVAS_WIDTH * 0.78,
      y: CANVAS_HEIGHT * 0.65,
      radius: 160,
      color: 'rgba(40, 150, 255, 0.12)', // Cyan aurora
      pulseSpeed: 0.02,
      pulsePhase: Math.PI * 0.7,
      parallax: 0.12,
    },
    {
      x: CANVAS_WIDTH * 0.5,
      y: CANVAS_HEIGHT * 0.1,
      radius: 120,
      color: 'rgba(255, 120, 200, 0.1)', // Rose stardust cloud
      pulseSpeed: 0.018,
      pulsePhase: Math.PI * 1.3,
      parallax: 0.05,
    },
  ];
}

export function maybeSpawnShootingStar(
  shootingStars: ShootingStar[],
  frameCount: number
): void {
  // Spawn every ~240 frames (~4 seconds) or 1.5% chance per frame if none currently
  if (shootingStars.length < 2 && (frameCount % 220 === 0 || Math.random() < 0.006)) {
    const startX = Math.random() * (CANVAS_WIDTH * 0.8) + 40;
    const startY = Math.random() * (CANVAS_HEIGHT * 0.4);
    const angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.4; // Diagonal downwards
    const speed = Math.random() * 6 + 7;

    shootingStars.push({
      x: startX,
      y: startY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      length: Math.random() * 45 + 35,
      alpha: 1,
      life: 0,
      maxLife: Math.floor(Math.random() * 25 + 30),
      color: Math.random() > 0.4 ? '#fff8db' : '#c9f4ff',
    });
  }
}

export function updateShootingStars(shootingStars: ShootingStar[]): ShootingStar[] {
  return shootingStars
    .map((s) => {
      s.x += s.vx;
      s.y += s.vy;
      s.life++;
      s.alpha = Math.max(0, 1 - (s.life / s.maxLife));
      return s;
    })
    .filter((s) => s.life < s.maxLife && s.alpha > 0.02);
}

/**
 * Renders the dreamy celestial background onto the canvas
 */
export function drawDreamyBackground(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  cameraY: number,
  frameCount: number,
  stars: DreamyStar[],
  nebulas: DreamyNebula[],
  shootingStars: ShootingStar[]
): void {
  // 1. Dreamy Multi-Stop Celestial Twilight Sky Gradient
  const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
  // Rich midnight violet to deep indigo and enchanted nocturnal purple
  skyGrad.addColorStop(0, '#070617');   // Deep cosmic black-violet
  skyGrad.addColorStop(0.35, '#100b2b'); // Celestial indigo
  skyGrad.addColorStop(0.7, '#1a103d');  // Enchanted twilight royal purple
  skyGrad.addColorStop(1, '#110926');    // Soft nocturnal glow
  ctx.fillStyle = skyGrad;
  ctx.fillRect(0, 0, width, height);

  // 2. Soft Glowing Nebulas (Parallaxed & Pulsing)
  nebulas.forEach((nebula) => {
    const pulse = Math.sin(frameCount * nebula.pulseSpeed + nebula.pulsePhase) * 0.15 + 0.85;
    const currentRadius = nebula.radius * pulse;
    
    // Parallax vertical movement
    const drawY = ((nebula.y - cameraY * nebula.parallax) % (height * 1.5) + (height * 1.5)) % (height * 1.5) - height * 0.25;

    const radGrad = ctx.createRadialGradient(
      nebula.x,
      drawY,
      0,
      nebula.x,
      drawY,
      currentRadius
    );
    radGrad.addColorStop(0, nebula.color);
    radGrad.addColorStop(0.6, nebula.color.replace(/[\d.]+\)$/, '0.05)'));
    radGrad.addColorStop(1, 'rgba(0,0,0,0)');

    ctx.save();
    ctx.fillStyle = radGrad;
    ctx.fillRect(0, 0, width, height);
    ctx.restore();
  });

  // 3. Dreamy Crescent Moon with Celestial Radiance in the upper sky
  const moonParallaxY = (-cameraY * 0.04) % (height * 2);
  const moonY = 80 + moonParallaxY;
  const moonX = width - 75;

  if (moonY > -60 && moonY < height + 60) {
    ctx.save();
    // Moon halo glow
    const moonGlow = ctx.createRadialGradient(moonX, moonY, 4, moonX, moonY, 48);
    moonGlow.addColorStop(0, 'rgba(255, 245, 200, 0.35)');
    moonGlow.addColorStop(0.4, 'rgba(230, 215, 255, 0.15)');
    moonGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = moonGlow;
    ctx.beginPath();
    ctx.arc(moonX, moonY, 48, 0, Math.PI * 2);
    ctx.fill();

    // Crescent Moon body
    ctx.shadowBlur = 16;
    ctx.shadowColor = 'rgba(255, 248, 220, 0.9)';
    ctx.fillStyle = '#fffdf0';

    ctx.beginPath();
    ctx.arc(moonX, moonY, 16, 0.45 * Math.PI, 1.85 * Math.PI, false);
    ctx.bezierCurveTo(moonX + 6, moonY - 10, moonX + 6, moonY + 10, moonX + 9, moonY + 13);
    ctx.closePath();
    ctx.fill();

    // "Second star to the right" - A lovely bright Disney twinkle star right next to the moon
    const starGlint = Math.sin(frameCount * 0.05) * 0.4 + 0.8;
    drawTwinkleCross(ctx, moonX + 28, moonY - 14, 5 * starGlint, '#fff7c2', 'rgba(255, 247, 194, 0.9)');
    ctx.restore();
  }

  // 4. Parallax Twinkling Starfield
  stars.forEach((star) => {
    // Continuous infinite scroll using modulo
    const virtualHeight = height * 2.5;
    const drawY = ((star.y - cameraY * star.parallax) % virtualHeight + virtualHeight) % virtualHeight;

    if (drawY < -10 || drawY > height + 10) return;

    // Twinkle modulation
    const twinkle = Math.sin(frameCount * star.twinkleSpeed + star.twinklePhase);
    // Smooth pulse between (baseAlpha * 0.3) and (baseAlpha * 1.0)
    const currentAlpha = Math.max(0.1, star.baseAlpha * (0.55 + 0.45 * twinkle));
    const currentScale = 0.85 + 0.35 * Math.max(0, twinkle);

    ctx.save();
    ctx.globalAlpha = currentAlpha;
    ctx.fillStyle = star.color;
    ctx.shadowBlur = 8 * currentScale;
    ctx.shadowColor = star.glowColor;

    if (star.type === 'cross' || star.type === 'star4') {
      // 4-point Disney magic twinkle star
      drawTwinkleCross(ctx, star.x, drawY, star.size * currentScale, star.color, star.glowColor);
    } else if (star.type === 'diamond') {
      const s = star.size * currentScale;
      ctx.beginPath();
      ctx.moveTo(star.x, drawY - s * 1.3);
      ctx.lineTo(star.x + s * 0.7, drawY);
      ctx.lineTo(star.x, drawY + s * 1.3);
      ctx.lineTo(star.x - s * 0.7, drawY);
      ctx.closePath();
      ctx.fill();
    } else if (star.type === 'glow') {
      // Glowing star with soft halo
      ctx.beginPath();
      ctx.arc(star.x, drawY, star.size * 0.75 * currentScale, 0, Math.PI * 2);
      ctx.fill();

      // Faint outer corona
      ctx.globalAlpha = currentAlpha * 0.35;
      ctx.beginPath();
      ctx.arc(star.x, drawY, star.size * 2.2 * currentScale, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // Tiny celestial pinprick
      ctx.beginPath();
      ctx.arc(star.x, drawY, star.size * 0.65 * currentScale, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  });

  // 5. Shooting Stars / Wishing Stars
  shootingStars.forEach((s) => {
    ctx.save();
    ctx.globalAlpha = s.alpha;
    ctx.strokeStyle = s.color;
    ctx.shadowBlur = 14;
    ctx.shadowColor = s.color;
    ctx.lineWidth = 2;

    const tailX = s.x - (s.vx / Math.hypot(s.vx, s.vy)) * s.length;
    const tailY = s.y - (s.vy / Math.hypot(s.vx, s.vy)) * s.length;

    const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
    grad.addColorStop(0, 'rgba(255, 255, 255, 0)');
    grad.addColorStop(0.7, s.color);
    grad.addColorStop(1, '#ffffff');

    ctx.strokeStyle = grad;
    ctx.beginPath();
    ctx.moveTo(tailX, tailY);
    ctx.lineTo(s.x, s.y);
    ctx.stroke();

    // Bright starhead
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(s.x, s.y, 2.5, 0, Math.PI * 2);
    ctx.fill();

    // Head twinkle cross
    drawTwinkleCross(ctx, s.x, s.y, 4, '#ffffff', s.color);

    ctx.restore();
  });

  // 6. Subtle Dreamy Stardust Horizon Mist at the bottom
  const mistGrad = ctx.createLinearGradient(0, height - 70, 0, height);
  mistGrad.addColorStop(0, 'rgba(30, 16, 65, 0)');
  mistGrad.addColorStop(1, 'rgba(42, 18, 80, 0.4)');
  ctx.fillStyle = mistGrad;
  ctx.fillRect(0, height - 70, width, 70);
}

/**
 * Draws a classic 4-point Disney fairy-tale twinkle star with elongated vertical/horizontal diamond rays
 */
export function drawTwinkleCross(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  fillColor: string,
  glowColor: string
): void {
  ctx.save();
  ctx.fillStyle = fillColor;
  ctx.shadowBlur = 10;
  ctx.shadowColor = glowColor;

  const longRay = size * 2.2;
  const shortRay = size * 0.45;

  ctx.beginPath();
  // Top point
  ctx.moveTo(x, y - longRay);
  // Top-right notch
  ctx.quadraticCurveTo(x, y, x + shortRay, y);
  // Right point
  ctx.lineTo(x + longRay, y);
  // Bottom-right notch
  ctx.quadraticCurveTo(x, y, x, y + shortRay);
  // Bottom point
  ctx.lineTo(x, y + longRay);
  // Bottom-left notch
  ctx.quadraticCurveTo(x, y, x - shortRay, y);
  // Left point
  ctx.lineTo(x - longRay, y);
  // Top-left notch
  ctx.quadraticCurveTo(x, y, x, y - shortRay);
  ctx.closePath();
  ctx.fill();

  // Diamond center glint
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.arc(x, y, size * 0.35, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

/**
 * Dreamy visual styling for platforms:
 * Soft rounded crystalline cloud-caps with starlight rim and subtle corner twinkles
 */
export function drawDreamyPlatform(
  ctx: CanvasRenderingContext2D,
  platform: Platform,
  frameCount: number
): void {
  const { x, y, width, height } = platform;
  const r = 7; // Rounded corners

  ctx.save();
  // Soft ambient starlight glow
  ctx.shadowBlur = 18;
  ctx.shadowColor = platform.glowColor;

  // Dreamy Platform Gradient: crystalline pastel lavender to translucent lilac
  const platGrad = ctx.createLinearGradient(x, y, x, y + height);
  platGrad.addColorStop(0, '#f0d9ff');
  platGrad.addColorStop(0.4, '#d8b4e2');
  platGrad.addColorStop(1, '#9b71bc');

  ctx.fillStyle = platGrad;

  // Draw rounded platform rectangle
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.arcTo(x + width, y, x + width, y + r, r);
  ctx.lineTo(x + width, y + height - r);
  ctx.arcTo(x + width, y + height, x + width - r, y + height, r);
  ctx.lineTo(x + r, y + height);
  ctx.arcTo(x, y + height, x, y + height - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
  ctx.fill();

  // Starlight Top Highlight rim
  ctx.shadowBlur = 6;
  ctx.shadowColor = '#ffffff';
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(x + r, y + 1);
  ctx.lineTo(x + width - r, y + 1);
  ctx.stroke();

  // Subtle dreamy sparkle on platform corner
  const cornerSparklePhase = (frameCount * 0.05 + x * 0.02) % (Math.PI * 2);
  if (Math.sin(cornerSparklePhase) > 0.8) {
    const sparkleSize = (Math.sin(cornerSparklePhase) - 0.8) * 12;
    drawTwinkleCross(ctx, x + 8, y + 1, sparkleSize, '#ffffff', '#e8d4ff');
  }

  ctx.restore();
}

/**
 * Dreamy visual styling for collectible gems:
 * Faceted starlight diamond with rotating celestial shimmer rays
 */
export function drawDreamyGem(
  ctx: CanvasRenderingContext2D,
  gemX: number,
  gemY: number,
  gemSize: number,
  frameCount: number
): void {
  ctx.save();
  const centerX = gemX + gemSize / 2;
  const centerY = gemY + gemSize / 2;
  const pulse = Math.sin(frameCount * 0.08) * 0.15 + 1;
  const radius = (gemSize / 2) * pulse;

  // Multi-layered golden-star celestial glow
  ctx.shadowBlur = 22;
  ctx.shadowColor = 'rgba(255, 247, 0, 0.9)';

  // Gem Facet Gradient
  const gemGrad = ctx.createLinearGradient(centerX, gemY - 2, centerX, gemY + gemSize + 2);
  gemGrad.addColorStop(0, '#ffffff');
  gemGrad.addColorStop(0.3, '#fffb80');
  gemGrad.addColorStop(0.8, '#ffd000');
  gemGrad.addColorStop(1, '#ff9900');
  ctx.fillStyle = gemGrad;

  // Diamond shape
  ctx.beginPath();
  ctx.moveTo(centerX, centerY - radius * 1.3);
  ctx.lineTo(centerX + radius, centerY);
  ctx.lineTo(centerX, centerY + radius * 1.3);
  ctx.lineTo(centerX - radius, centerY);
  ctx.closePath();
  ctx.fill();

  // Facet highlight lines
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(centerX - radius * 0.5, centerY);
  ctx.lineTo(centerX, centerY - radius * 0.7);
  ctx.lineTo(centerX + radius * 0.5, centerY);
  ctx.lineTo(centerX, centerY + radius * 0.7);
  ctx.closePath();
  ctx.stroke();

  // Shimmering 4-point starlight glint
  const glintPulse = Math.sin(frameCount * 0.12) * 0.3 + 0.7;
  drawTwinkleCross(ctx, centerX, centerY, 3.5 * glintPulse, '#ffffff', '#fff700');

  ctx.restore();
}

import React, { useEffect, useRef, useState } from 'react';
import { 
  CANVAS_WIDTH, 
  CANVAS_HEIGHT, 
  PLAYER_WIDTH,
  PLAYER_HEIGHT,
  PLATFORM_WIDTH, 
  PLATFORM_HEIGHT, 
  GEM_SIZE, 
  GRAVITY, 
  JUMP_FORCE, 
  MOVE_SPEED, 
  COLORS 
} from '../constants';
import { Player, Platform, GameState, DisneyCharacter, GameParticle } from '../types';
import { audioManager } from '../audio';
import { 
  getSavedCharacter, 
  saveSelectedCharacter, 
  drawDisneyCharacter, 
  DISNEY_CHARACTERS 
} from '../disneyCharacters';
import { 
  createDreamyStarfield, 
  createDreamyNebulas, 
  drawDreamyBackground, 
  drawDreamyPlatform, 
  drawDreamyGem, 
  maybeSpawnShootingStar, 
  updateShootingStars,
  DreamyStar,
  DreamyNebula,
  ShootingStar
} from '../dreamyBackground';
import { CharacterSelectModal } from './CharacterSelectModal';
import { Trophy, Play, RotateCcw, Sparkles, User, ArrowLeft, ArrowRight, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Game: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<GameState>('START');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('neon-jumper-highscore');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [selectedCharacter, setSelectedCharacter] = useState<DisneyCharacter>(() => getSavedCharacter());
  const [isCharacterModalOpen, setIsCharacterModalOpen] = useState(false);

  const playerRef = useRef<Player>({
    x: CANVAS_WIDTH / 2 - PLAYER_WIDTH / 2,
    y: CANVAS_HEIGHT - 100,
    width: PLAYER_WIDTH,
    height: PLAYER_HEIGHT,
    vx: 0,
    vy: 0,
    color: selectedCharacter.themeColor,
    glowColor: selectedCharacter.glowColor,
    isGrounded: false,
    facingLeft: false,
    character: selectedCharacter,
  });

  const platformsRef = useRef<Platform[]>([]);
  const particlesRef = useRef<GameParticle[]>([]);
  const keysRef = useRef<{ [key: string]: boolean }>({});
  const cameraYRef = useRef(0);
  const requestRef = useRef<number>(null);
  const frameCountRef = useRef(0);

  // Dreamy celestial starfield and shooting stars
  const starsRef = useRef<DreamyStar[]>(createDreamyStarfield(120));
  const nebulasRef = useRef<DreamyNebula[]>(createDreamyNebulas());
  const shootingStarsRef = useRef<ShootingStar[]>([]);

  // Synchronize player character whenever selectedCharacter changes
  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.character = selectedCharacter;
      playerRef.current.color = selectedCharacter.themeColor;
      playerRef.current.glowColor = selectedCharacter.glowColor;
    }
  }, [selectedCharacter]);

  const handleSelectCharacter = (char: DisneyCharacter) => {
    setSelectedCharacter(char);
    saveSelectedCharacter(char);
    if (playerRef.current) {
      playerRef.current.character = char;
      playerRef.current.color = char.themeColor;
      playerRef.current.glowColor = char.glowColor;
    }
  };

  const spawnParticles = (x: number, y: number, count: number, isBurst = false) => {
    const char = playerRef.current.character || selectedCharacter;
    for (let i = 0; i < count; i++) {
      const angle = isBurst ? Math.random() * Math.PI * 2 : Math.PI / 2 + (Math.random() - 0.5);
      const speed = isBurst ? Math.random() * 3 + 1 : Math.random() * 1.5 + 0.5;
      const vx = Math.cos(angle) * speed + (playerRef.current.vx * 0.2);
      const vy = isBurst ? Math.sin(angle) * speed : Math.random() * 1.5 + 0.5;

      particlesRef.current.push({
        x: x + (Math.random() - 0.5) * 16,
        y: y + (Math.random() - 0.5) * 8,
        vx,
        vy,
        size: Math.random() * 4 + 2,
        alpha: 1,
        color: Math.random() > 0.4 ? char.themeColor : (char.accentColor || '#ffffff'),
        type: char.particleType,
        life: 0,
        maxLife: Math.floor(Math.random() * 20 + 25),
      });
    }

    // Cap particles array length for performance
    if (particlesRef.current.length > 80) {
      particlesRef.current = particlesRef.current.slice(-80);
    }
  };

  const initGame = () => {
    playerRef.current = {
      x: CANVAS_WIDTH / 2 - PLAYER_WIDTH / 2,
      y: CANVAS_HEIGHT - 100,
      width: PLAYER_WIDTH,
      height: PLAYER_HEIGHT,
      vx: 0,
      vy: 0,
      color: selectedCharacter.themeColor,
      glowColor: selectedCharacter.glowColor,
      isGrounded: false,
      facingLeft: false,
      character: selectedCharacter,
    };

    particlesRef.current = [];

    const initialPlatforms: Platform[] = [];
    // Starting platform
    initialPlatforms.push({
      x: CANVAS_WIDTH / 2 - PLATFORM_WIDTH / 2,
      y: CANVAS_HEIGHT - 50,
      width: PLATFORM_WIDTH,
      height: PLATFORM_HEIGHT,
      color: COLORS.PLATFORM,
      glowColor: COLORS.PLATFORM_GLOW,
      hasGem: false,
      gemCollected: false,
    });

    // Generate initial set of platforms
    for (let i = 1; i < 10; i++) {
      initialPlatforms.push(generatePlatform(CANVAS_HEIGHT - 50 - i * 100));
    }

    platformsRef.current = initialPlatforms;
    cameraYRef.current = 0;
    setScore(0);
  };

  const generatePlatform = (y: number): Platform => {
    const x = Math.random() * (CANVAS_WIDTH - PLATFORM_WIDTH);
    const hasGem = Math.random() > 0.7;
    return {
      x,
      y,
      width: PLATFORM_WIDTH,
      height: PLATFORM_HEIGHT,
      color: COLORS.PLATFORM,
      glowColor: COLORS.PLATFORM_GLOW,
      hasGem,
      gemCollected: false,
    };
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    keysRef.current[e.code] = true;
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    keysRef.current[e.code] = false;
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const update = () => {
    frameCountRef.current++;

    // Animate dreamy sky shooting stars and twinkles
    maybeSpawnShootingStar(shootingStarsRef.current, frameCountRef.current);
    shootingStarsRef.current = updateShootingStars(shootingStarsRef.current);

    if (gameState !== 'PLAYING') return;

    const player = playerRef.current;

    // Horizontal movement & facing direction
    if (keysRef.current['ArrowLeft'] || keysRef.current['KeyA']) {
      player.vx = -MOVE_SPEED;
      player.facingLeft = true;
    } else if (keysRef.current['ArrowRight'] || keysRef.current['KeyD']) {
      player.vx = MOVE_SPEED;
      player.facingLeft = false;
    } else {
      player.vx *= 0.8; // Friction
    }

    player.x += player.vx;

    // Screen wrap
    if (player.x + player.width < 0) player.x = CANVAS_WIDTH;
    if (player.x > CANVAS_WIDTH) player.x = -player.width;

    // Vertical movement
    player.vy += GRAVITY;
    player.y += player.vy;

    // Jumping
    if ((keysRef.current['Space'] || keysRef.current['ArrowUp'] || keysRef.current['KeyW']) && player.isGrounded) {
      player.vy = JUMP_FORCE;
      player.isGrounded = false;
      audioManager.playJump(player.character?.particleType);
      spawnParticles(player.x + player.width / 2, player.y + player.height, 10, true);
    }

    // Trail particles while moving through air or running
    if (Math.abs(player.vy) > 2 || Math.abs(player.vx) > 1.5) {
      if (frameCountRef.current % 3 === 0) {
        spawnParticles(player.x + player.width / 2, player.y + player.height - 4, 1);
      }
    }

    // Update Particles
    particlesRef.current.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.life++;
      p.alpha = 1 - (p.life / p.maxLife);
    });
    particlesRef.current = particlesRef.current.filter((p) => p.life < p.maxLife);

    // Collision detection with platforms
    player.isGrounded = false;
    platformsRef.current.forEach((platform) => {
      // Only collide when falling
      if (player.vy > 0) {
        if (
          player.x < platform.x + platform.width &&
          player.x + player.width > platform.x &&
          player.y + player.height > platform.y &&
          player.y + player.height < platform.y + platform.height + player.vy
        ) {
          player.y = platform.y - player.height;
          player.vy = 0;
          player.isGrounded = true;
        }
      }

      // Gem collection
      if (platform.hasGem && !platform.gemCollected) {
        const gemX = platform.x + platform.width / 2 - GEM_SIZE / 2;
        const gemY = platform.y - GEM_SIZE - 5;
        if (
          player.x < gemX + GEM_SIZE &&
          player.x + player.width > gemX &&
          player.y < gemY + GEM_SIZE &&
          player.y + player.height > gemY
        ) {
          platform.gemCollected = true;
          setScore((s) => s + 10);
          audioManager.playGem();
          spawnParticles(gemX + GEM_SIZE / 2, gemY + GEM_SIZE / 2, 8, true);
        }
      }
    });

    // Camera follow
    if (player.y < cameraYRef.current + CANVAS_HEIGHT / 2) {
      const diff = (cameraYRef.current + CANVAS_HEIGHT / 2) - player.y;
      cameraYRef.current -= diff;
      
      // Update score based on height
      const heightScore = Math.floor(Math.abs(cameraYRef.current) / 10);
      setScore(prev => Math.max(prev, heightScore));
    }

    // Generate new platforms and remove old ones
    const topPlatformY = platformsRef.current[platformsRef.current.length - 1].y;
    if (topPlatformY > cameraYRef.current - 100) {
      platformsRef.current.push(generatePlatform(topPlatformY - 100));
    }

    if (platformsRef.current[0].y > cameraYRef.current + CANVAS_HEIGHT + 100) {
      platformsRef.current.shift();
    }

    // Game Over
    if (player.y > cameraYRef.current + CANVAS_HEIGHT) {
      setGameState('GAMEOVER');
      audioManager.playGameOver();
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem('neon-jumper-highscore', score.toString());
      }
    }
  };

  const drawParticles = (ctx: CanvasRenderingContext2D, particles: GameParticle[]) => {
    particles.forEach((p) => {
      ctx.save();
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 12;
      ctx.shadowColor = p.color;

      if (p.type === 'star') {
        const s = p.size;
        ctx.translate(p.x, p.y);
        ctx.beginPath();
        ctx.moveTo(0, -s);
        ctx.lineTo(s * 0.3, -s * 0.3);
        ctx.lineTo(s, 0);
        ctx.lineTo(s * 0.3, s * 0.3);
        ctx.lineTo(0, s);
        ctx.lineTo(-s * 0.3, s * 0.3);
        ctx.lineTo(-s, 0);
        ctx.lineTo(-s * 0.3, -s * 0.3);
        ctx.closePath();
        ctx.fill();
      } else if (p.type === 'snow') {
        ctx.translate(p.x, p.y);
        ctx.fillRect(-p.size / 2, -1, p.size, 2);
        ctx.fillRect(-1, -p.size / 2, 2, p.size);
      } else if (p.type === 'bubble') {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 1;
        ctx.stroke();
      } else if (p.type === 'heart') {
        ctx.translate(p.x, p.y);
        const s = p.size * 0.7;
        ctx.beginPath();
        ctx.arc(-s / 2, -s / 2, s / 2, Math.PI, 0);
        ctx.arc(s / 2, -s / 2, s / 2, Math.PI, 0);
        ctx.lineTo(0, s);
        ctx.closePath();
        ctx.fill();
      } else if (p.type === 'fire') {
        ctx.translate(p.x, p.y);
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size * 0.7, p.size * 1.3, 0, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.type === 'leaf') {
        ctx.translate(p.x, p.y);
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size * 0.6, p.size * 1.1, 0.4, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Sparkle / Pixie dust dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    });
  };

  const draw = (ctx: CanvasRenderingContext2D) => {
    // 1. Draw dreamy celestial background with parallax starfield, nebulas, moon, and shooting stars
    drawDreamyBackground(
      ctx,
      CANVAS_WIDTH,
      CANVAS_HEIGHT,
      cameraYRef.current,
      frameCountRef.current,
      starsRef.current,
      nebulasRef.current,
      shootingStarsRef.current
    );

    ctx.save();
    ctx.translate(0, -cameraYRef.current);

    // 2. Draw dreamy crystalline platforms & glittering faceted gems
    platformsRef.current.forEach((platform) => {
      drawDreamyPlatform(ctx, platform, frameCountRef.current);

      // Draw gems
      if (platform.hasGem && !platform.gemCollected) {
        const gemX = platform.x + platform.width / 2 - GEM_SIZE / 2;
        const gemY = platform.y - GEM_SIZE - 5;
        drawDreamyGem(ctx, gemX, gemY, GEM_SIZE, frameCountRef.current);
      }
    });

    // Draw magical particles
    drawParticles(ctx, particlesRef.current);

    // Draw Disney character instead of plain blue rectangle
    const player = playerRef.current;
    const currentChar = player.character || selectedCharacter;
    drawDisneyCharacter(
      ctx,
      player.x,
      player.y,
      player.width,
      player.height,
      currentChar,
      player.facingLeft,
      player.vy,
      player.isGrounded,
      frameCountRef.current
    );

    ctx.restore();
  };

  const loop = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (ctx) {
      update();
      draw(ctx);
    }
    (requestRef as any).current = requestAnimationFrame(loop);
  };

  useEffect(() => {
    (requestRef as any).current = requestAnimationFrame(loop);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [gameState]);

  const startGame = () => {
    initGame();
    setGameState('PLAYING');
  };

  // Quick select characters shown on the start screen
  const quickCharacters = DISNEY_CHARACTERS.slice(0, 7);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-3 sm:p-4 selection:bg-cyan-500 selection:text-black">
      <div className="relative group">
        {/* Glowing border themed around current Disney character with dreamy celestial halo */}
        <div 
          className="absolute -inset-2 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 20%, ${selectedCharacter.themeColor}cc, ${selectedCharacter.glowColor}88, #7928ca66, transparent 80%)`
          }}
        />
        
        {/* Subtle fairy-dust twinkle corner accents */}
        <div className="absolute -top-2.5 -left-2.5 text-yellow-300 text-xs opacity-80 animate-pulse pointer-events-none">✨</div>
        <div className="absolute -top-2.5 -right-2.5 text-cyan-300 text-xs opacity-80 animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}>✦</div>
        <div className="absolute -bottom-2.5 -left-2.5 text-purple-300 text-xs opacity-80 animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}>✦</div>
        <div className="absolute -bottom-2.5 -right-2.5 text-yellow-300 text-xs opacity-80 animate-pulse pointer-events-none" style={{ animationDelay: '1.5s' }}>✨</div>

        <div className="relative bg-[#09071c] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(20,10,45,0.9),0_0_25px_rgba(168,85,247,0.3)] border border-purple-400/30">
          <canvas
            ref={canvasRef}
            width={CANVAS_WIDTH}
            height={CANVAS_HEIGHT}
            className="block"
          />

          {/* Top HUD Overlays */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <div className="flex flex-col gap-1.5 pointer-events-auto">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 shadow-lg">
                <Trophy className="w-4 h-4 text-yellow-400" />
                <span className="font-mono text-sm font-bold text-white">{score}</span>
              </div>
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] uppercase font-mono text-gray-400">
                <span>Best: {highScore}</span>
              </div>
            </div>

            {/* Current Disney Character Badge / Quick Switch */}
            <button
              onClick={() => setIsCharacterModalOpen(true)}
              className="pointer-events-auto flex items-center gap-2 bg-black/70 hover:bg-black/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 hover:border-yellow-400 transition-all shadow-lg hover:scale-105"
              title="Click to change Disney Character"
            >
              <span className="text-base">{selectedCharacter.iconEmoji}</span>
              <span className="text-xs font-bold text-white truncate max-w-[90px] sm:max-w-[120px]">
                {selectedCharacter.name}
              </span>
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            </button>
          </div>

          {/* Touch Controls (shown on small screens during gameplay) */}
          {gameState === 'PLAYING' && (
            <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center sm:hidden pointer-events-auto z-10">
              <div className="flex gap-2">
                <button
                  onTouchStart={() => { keysRef.current['ArrowLeft'] = true; }}
                  onTouchEnd={() => { keysRef.current['ArrowLeft'] = false; }}
                  onMouseDown={() => { keysRef.current['ArrowLeft'] = true; }}
                  onMouseUp={() => { keysRef.current['ArrowLeft'] = false; }}
                  className="w-12 h-12 rounded-xl bg-white/20 active:bg-white/40 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-lg"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <button
                  onTouchStart={() => { keysRef.current['ArrowRight'] = true; }}
                  onTouchEnd={() => { keysRef.current['ArrowRight'] = false; }}
                  onMouseDown={() => { keysRef.current['ArrowRight'] = true; }}
                  onMouseUp={() => { keysRef.current['ArrowRight'] = false; }}
                  className="w-12 h-12 rounded-xl bg-white/20 active:bg-white/40 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-lg"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>

              <button
                onTouchStart={() => { keysRef.current['Space'] = true; }}
                onTouchEnd={() => { keysRef.current['Space'] = false; }}
                onMouseDown={() => { keysRef.current['Space'] = true; }}
                onMouseUp={() => { keysRef.current['Space'] = false; }}
                className="px-5 h-12 rounded-xl bg-yellow-400 active:bg-yellow-300 text-black font-bold flex items-center gap-1.5 shadow-lg"
              >
                <ArrowUp className="w-5 h-5" />
                <span className="text-xs">JUMP</span>
              </button>
            </div>
          )}

          {/* Overlays: START and GAMEOVER */}
          <AnimatePresence>
            {gameState === 'START' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-black/85 backdrop-blur-md p-5 text-center overflow-y-auto"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="mb-1 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] font-bold uppercase tracking-widest text-cyan-300"
                >
                  <Sparkles className="w-3 h-3 text-yellow-400" />
                  <span>Choose Your Hero</span>
                </motion.div>

                <motion.h1 
                  initial={{ y: -15 }}
                  animate={{ y: 0 }}
                  className="text-4xl font-display mb-1 tracking-wider italic text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-white to-purple-400"
                >
                  DISNEY JUMPER
                </motion.h1>

                {/* Selected Character Preview Card */}
                <div 
                  onClick={() => setIsCharacterModalOpen(true)}
                  className="w-full max-w-xs mt-3 mb-4 p-3 rounded-2xl bg-gradient-to-b from-white/15 to-white/5 border border-white/20 hover:border-yellow-400/80 cursor-pointer transition-all hover:scale-[1.02] shadow-xl group text-left relative overflow-hidden"
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-lg border relative flex-shrink-0"
                      style={{
                        backgroundColor: `${selectedCharacter.themeColor}33`,
                        borderColor: selectedCharacter.themeColor,
                        boxShadow: `0 0 20px ${selectedCharacter.glowColor}`
                      }}
                    >
                      {selectedCharacter.iconEmoji}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-yellow-400">
                          {selectedCharacter.category}
                        </span>
                        <span className="text-[10px] text-cyan-300 group-hover:underline flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5" />
                          Change
                        </span>
                      </div>
                      <h3 className="text-base font-black text-white truncate">
                        {selectedCharacter.name}
                      </h3>
                      <p className="text-[11px] text-gray-300 truncate">
                        {selectedCharacter.movie}
                      </p>
                    </div>
                  </div>

                  <p className="mt-2 text-[10px] text-gray-300 italic bg-black/40 px-2.5 py-1.5 rounded-lg border border-white/5">
                    "{selectedCharacter.quote}"
                  </p>
                </div>

                {/* Quick Switch Bar */}
                <div className="w-full max-w-xs mb-4">
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest font-mono mb-1.5 text-left flex justify-between items-center">
                    <span>Quick Select:</span>
                    <button
                      onClick={() => setIsCharacterModalOpen(true)}
                      className="text-cyan-400 hover:text-cyan-300 text-[10px] font-bold"
                    >
                      See All →
                    </button>
                  </div>
                  <div className="flex gap-1.5 justify-between">
                    {quickCharacters.map((char) => (
                      <button
                        key={char.id}
                        onClick={() => handleSelectCharacter(char)}
                        className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg transition-all ${
                          selectedCharacter.id === char.id
                            ? 'scale-115 ring-2 ring-yellow-400 bg-white/20'
                            : 'bg-white/5 hover:bg-white/15 opacity-70 hover:opacity-100'
                        }`}
                        style={{
                          borderColor: char.themeColor,
                          borderWidth: selectedCharacter.id === char.id ? '2px' : '1px',
                        }}
                        title={`${char.name} (${char.movie})`}
                      >
                        {char.iconEmoji}
                      </button>
                    ))}
                    <button
                      onClick={() => setIsCharacterModalOpen(true)}
                      className="w-9 h-9 rounded-xl bg-purple-600/50 hover:bg-purple-600 border border-purple-400/40 flex items-center justify-center text-xs text-white font-bold"
                      title="More characters"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                {/* Start Game Button */}
                <div className="space-y-3 w-full max-w-xs">
                  <button
                    onClick={startGame}
                    className="w-full group relative flex items-center justify-center gap-3 bg-white hover:bg-yellow-300 text-black font-black py-3.5 rounded-xl hover:scale-105 transition-all shadow-xl"
                  >
                    <Play className="w-5 h-5 fill-current" />
                    <span>PLAY AS {selectedCharacter.name.toUpperCase()}</span>
                  </button>
                  
                  <div className="grid grid-cols-2 gap-2 text-left">
                    <div className="bg-white/5 border border-white/10 p-2.5 rounded-xl text-[10px] uppercase tracking-widest text-gray-400">
                      <span>ARROWS / A-D</span>
                      <div className="text-white font-bold mt-0.5">MOVE & TILT</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-2.5 rounded-xl text-[10px] uppercase tracking-widest text-gray-400">
                      <span>SPACE / UP / W</span>
                      <div className="text-white font-bold mt-0.5">HIGH JUMP</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {gameState === 'GAMEOVER' && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-black/92 backdrop-blur-xl p-6 text-center overflow-y-auto"
              >
                <div className="mb-4">
                  <div className="text-red-400 text-[10px] uppercase tracking-[0.3em] font-mono mb-1">
                    Game Over
                  </div>
                  <h2 className="text-5xl font-black text-white italic tracking-tight">
                    FALLEN DOWN!
                  </h2>
                </div>

                {/* Character Status Card */}
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-2xl mb-5 w-full max-w-xs text-left">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl border"
                    style={{
                      backgroundColor: `${selectedCharacter.themeColor}33`,
                      borderColor: selectedCharacter.themeColor,
                    }}
                  >
                    {selectedCharacter.iconEmoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-white truncate">
                      {selectedCharacter.name}
                    </div>
                    <div className="text-[10px] text-gray-400 italic truncate">
                      "{selectedCharacter.quote}"
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2 mb-6">
                  <div className="text-center">
                    <div className="text-gray-500 text-[10px] uppercase tracking-widest mb-0.5">Final Score</div>
                    <div className="text-5xl font-mono font-bold text-cyan-400">{score}</div>
                  </div>
                  {score >= highScore && score > 0 && (
                    <motion.div 
                      initial={{ y: 5, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5"
                    >
                      <Trophy className="w-3.5 h-3.5 text-yellow-400" />
                      New Personal Best!
                    </motion.div>
                  )}
                </div>

                <div className="space-y-2.5 w-full max-w-xs">
                  <button
                    onClick={startGame}
                    className="w-full flex items-center justify-center gap-3 bg-cyan-400 hover:bg-cyan-300 text-black font-bold py-3.5 rounded-xl transition-all hover:scale-105 shadow-xl"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>JUMP AGAIN</span>
                  </button>

                  <button
                    onClick={() => setIsCharacterModalOpen(true)}
                    className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 rounded-xl border border-white/15 transition-all text-xs"
                  >
                    <Sparkles className="w-4 h-4 text-yellow-400" />
                    <span>CHANGE DISNEY CHARACTER</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Disney character selection modal */}
      <AnimatePresence>
        {isCharacterModalOpen && (
          <CharacterSelectModal
            isOpen={isCharacterModalOpen}
            onClose={() => setIsCharacterModalOpen(false)}
            selectedCharacter={selectedCharacter}
            onSelectCharacter={(char) => {
              handleSelectCharacter(char);
              setIsCharacterModalOpen(false);
            }}
          />
        )}
      </AnimatePresence>

      <div className="mt-4 text-center max-w-sm">
        <p className="text-gray-400 text-xs leading-relaxed flex items-center justify-center gap-1">
          <span>Jump higher as your favorite</span>
          <span className="text-yellow-400 font-bold">Disney character</span>
          <span>✨</span>
        </p>
      </div>
    </div>
  );
};

export default Game;


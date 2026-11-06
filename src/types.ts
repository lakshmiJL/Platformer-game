export interface Point {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface Entity extends Point, Size {
  color: string;
  glowColor: string;
}

export interface Platform extends Entity {
  hasGem: boolean;
  gemCollected: boolean;
}

export type CharacterCategory = 'all' | 'classics' | 'pixar' | 'princesses' | 'magical' | 'custom';

export type ParticleType = 'sparkle' | 'snow' | 'star' | 'bubble' | 'fire' | 'dust' | 'heart' | 'pixie' | 'magic' | 'leaf';

export interface DisneyCharacter {
  id: string;
  name: string;
  movie: string;
  category: 'classics' | 'pixar' | 'princesses' | 'magical' | 'custom';
  quote: string;
  themeColor: string;
  glowColor: string;
  accentColor: string;
  secondaryColor?: string;
  particleType: ParticleType;
  iconEmoji: string;
  custom?: boolean;
}

export interface GameParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
  type: ParticleType;
  life: number;
  maxLife: number;
  rotation?: number;
}

export interface Player extends Entity {
  vx: number;
  vy: number;
  isGrounded: boolean;
  facingLeft: boolean;
  character: DisneyCharacter;
}

export type GameState = 'START' | 'PLAYING' | 'GAMEOVER';


import React, { useState, useMemo } from 'react';
import { DisneyCharacter, CharacterCategory, ParticleType } from '../types';
import { 
  DISNEY_CHARACTERS, 
  POPULAR_DISNEY_SUGGESTIONS, 
  getSavedCustomCharacters, 
  saveCustomCharacter 
} from '../disneyCharacters';
import { audioManager } from '../audio';
import { 
  X, 
  Search, 
  Sparkles, 
  Check, 
  Plus, 
  Palette, 
  Film, 
  Heart, 
  Flame, 
  Snowflake, 
  Star, 
  Droplets,
  Wand2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CharacterSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCharacter: DisneyCharacter;
  onSelectCharacter: (character: DisneyCharacter) => void;
}

const CATEGORIES: { id: CharacterCategory; label: string; icon: string }[] = [
  { id: 'all', label: 'All Characters', icon: '✨' },
  { id: 'classics', label: 'Classics', icon: '🏰' },
  { id: 'princesses', label: 'Princesses', icon: '👑' },
  { id: 'pixar', label: 'Pixar', icon: '🚀' },
  { id: 'magical', label: 'Magical', icon: '🪄' },
  { id: 'custom', label: 'Custom', icon: '🎨' },
];

const PRESET_COLORS = [
  { name: 'Royal Red', hex: '#e63946', glow: 'rgba(230, 57, 70, 0.8)' },
  { name: 'Cosmic Blue', hex: '#00b4d8', glow: 'rgba(0, 180, 216, 0.8)' },
  { name: 'Magic Purple', hex: '#9d4edd', glow: 'rgba(157, 78, 221, 0.8)' },
  { name: 'Enchanted Gold', hex: '#ffb703', glow: 'rgba(255, 183, 3, 0.8)' },
  { name: 'Emerald Green', hex: '#38b000', glow: 'rgba(56, 176, 0, 0.8)' },
  { name: 'Pixie Rose', hex: '#ff4d6d', glow: 'rgba(255, 77, 109, 0.8)' },
  { name: 'Ice Frost', hex: '#caf0f8', glow: 'rgba(202, 240, 248, 0.8)' },
  { name: 'Tiki Sunset', hex: '#f77f00', glow: 'rgba(247, 127, 0, 0.8)' },
];

const PARTICLE_OPTIONS: { id: ParticleType; label: string; icon: React.ReactNode }[] = [
  { id: 'star', label: 'Golden Stars', icon: <Star className="w-4 h-4 text-yellow-400" /> },
  { id: 'sparkle', label: 'Magic Sparkles', icon: <Sparkles className="w-4 h-4 text-purple-400" /> },
  { id: 'snow', label: 'Snow & Frost', icon: <Snowflake className="w-4 h-4 text-cyan-300" /> },
  { id: 'fire', label: 'Rocket Fire', icon: <Flame className="w-4 h-4 text-orange-400" /> },
  { id: 'bubble', label: 'Ocean Bubbles', icon: <Droplets className="w-4 h-4 text-sky-400" /> },
  { id: 'pixie', label: 'Pixie Dust', icon: <Wand2 className="w-4 h-4 text-lime-400" /> },
  { id: 'heart', label: 'Warm Hearts', icon: <Heart className="w-4 h-4 text-pink-400" /> },
];

export const CharacterSelectModal: React.FC<CharacterSelectModalProps> = ({
  isOpen,
  onClose,
  selectedCharacter,
  onSelectCharacter,
}) => {
  const [activeCategory, setActiveCategory] = useState<CharacterCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCreatingCustom, setIsCreatingCustom] = useState(false);
  const [customCharacters, setCustomCharacters] = useState<DisneyCharacter[]>(() => getSavedCustomCharacters());

  // Custom Character Creator state
  const [customName, setCustomName] = useState('');
  const [customMovie, setCustomMovie] = useState('');
  const [customQuote, setCustomQuote] = useState('');
  const [customColor, setCustomColor] = useState(PRESET_COLORS[0].hex);
  const [customGlow, setCustomGlow] = useState(PRESET_COLORS[0].glow);
  const [customEmoji, setCustomEmoji] = useState('🌟');
  const [customParticle, setCustomParticle] = useState<ParticleType>('sparkle');

  // Combined character list
  const allCharacters = useMemo(() => {
    return [...DISNEY_CHARACTERS, ...customCharacters];
  }, [customCharacters]);

  // Suggested Disney names matching query that aren't already listed
  const suggestedSuggestions = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    const existingNames = new Set(allCharacters.map((c) => c.name.toLowerCase()));
    return POPULAR_DISNEY_SUGGESTIONS.filter(
      (s) => s.name.toLowerCase().includes(q) && !existingNames.has(s.name.toLowerCase())
    );
  }, [searchQuery, allCharacters]);

  // Filtered characters
  const filteredCharacters = useMemo(() => {
    let list = allCharacters;

    if (activeCategory === 'custom') {
      list = list.filter((c) => c.custom);
    } else if (activeCategory !== 'all') {
      list = list.filter((c) => c.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.movie.toLowerCase().includes(q) ||
          c.quote.toLowerCase().includes(q)
      );
    }

    return list;
  }, [allCharacters, activeCategory, searchQuery]);

  const handlePickCharacter = (char: DisneyCharacter) => {
    audioManager.playCharacterSelect();
    onSelectCharacter(char);
  };

  const handleCreateCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customName.trim()) return;

    const newChar: DisneyCharacter = {
      id: `custom-${Date.now()}`,
      name: customName.trim(),
      movie: customMovie.trim() || 'Disney Universe',
      category: 'custom',
      quote: customQuote.trim() || `I am ${customName.trim()}! Let's reach new heights!`,
      themeColor: customColor,
      glowColor: customGlow,
      accentColor: '#ffffff',
      secondaryColor: '#111111',
      particleType: customParticle,
      iconEmoji: customEmoji || '✨',
      custom: true,
    };

    saveCustomCharacter(newChar);
    setCustomCharacters((prev) => [newChar, ...prev]);
    handlePickCharacter(newChar);
    setIsCreatingCustom(false);
    setCustomName('');
    setCustomMovie('');
    setCustomQuote('');
  };

  const handleQuickAddSuggestion = (s: typeof POPULAR_DISNEY_SUGGESTIONS[0]) => {
    const newChar: DisneyCharacter = {
      id: `custom-${s.name.toLowerCase().replace(/\s+/g, '-')}`,
      name: s.name,
      movie: s.movie,
      category: s.category,
      quote: s.quote,
      themeColor: s.themeColor,
      glowColor: s.glowColor,
      accentColor: s.accentColor,
      secondaryColor: '#111111',
      particleType: s.particleType,
      iconEmoji: s.iconEmoji,
      custom: true,
    };

    saveCustomCharacter(newChar);
    setCustomCharacters((prev) => [newChar, ...prev.filter((c) => c.name !== newChar.name)]);
    handlePickCharacter(newChar);
    setSearchQuery('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-[#121214] border border-white/15 rounded-2xl shadow-2xl overflow-hidden text-white"
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-blue-950/40 via-purple-950/30 to-black">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-xl shadow-lg">
              ✨
            </div>
            <div>
              <h2 className="text-xl font-display uppercase tracking-wider text-white">
                Choose Disney Character
              </h2>
              <p className="text-xs text-gray-400">
                Play with unique magical abilities, custom animations & trails
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Custom Toggle Bar */}
        <div className="p-4 border-b border-white/10 bg-black/40 space-y-3">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search character (e.g. Mickey, Elsa, Stitch, Woody)..."
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <button
              onClick={() => setIsCreatingCustom(!isCreatingCustom)}
              className={`px-3.5 py-2.5 rounded-xl font-medium text-xs flex items-center gap-1.5 transition whitespace-nowrap border ${
                isCreatingCustom
                  ? 'bg-purple-600 border-purple-400 text-white shadow-lg'
                  : 'bg-white/5 hover:bg-white/10 border-white/10 text-gray-300'
              }`}
            >
              <Plus className="w-4 h-4" />
              <span>Create Custom</span>
            </button>
          </div>

          {/* Category Tabs */}
          {!isCreatingCustom && (
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 transition whitespace-nowrap ${
                    activeCategory === cat.id
                      ? 'bg-white text-black font-bold shadow-md'
                      : 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Custom Character Creator View */}
          {isCreatingCustom ? (
            <form onSubmit={handleCreateCustom} className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2 text-sm font-bold text-cyan-400">
                  <Palette className="w-4 h-4" />
                  <span>Design Any Disney Character</span>
                </div>
                <span className="text-xs text-gray-500">Pick any Disney hero or villain</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">
                    Character Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    placeholder="e.g. Rapunzel, Peter Pan, Mulan, Wall-E"
                    className="w-full bg-black/60 border border-white/15 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">
                    Movie / Franchise
                  </label>
                  <input
                    type="text"
                    value={customMovie}
                    onChange={(e) => setCustomMovie(e.target.value)}
                    placeholder="e.g. Tangled, Cars, Aladdin"
                    className="w-full bg-black/60 border border-white/15 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1">
                  Signature Quote / Catchphrase
                </label>
                <input
                  type="text"
                  value={customQuote}
                  onChange={(e) => setCustomQuote(e.target.value)}
                  placeholder="e.g. Best day ever!"
                  className="w-full bg-black/60 border border-white/15 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* Theme Color Palette */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1.5">
                  Signature Theme & Glow Color
                </label>
                <div className="flex flex-wrap gap-2">
                  {PRESET_COLORS.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => {
                        setCustomColor(c.hex);
                        setCustomGlow(c.glow);
                      }}
                      className={`w-7 h-7 rounded-full transition-transform flex items-center justify-center ${
                        customColor === c.hex ? 'scale-125 ring-2 ring-white ring-offset-2 ring-offset-black' : 'hover:scale-110'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    >
                      {customColor === c.hex && <Check className="w-3.5 h-3.5 text-black stroke-[3]" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Emoji Icon & Particle Trail */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">
                    Icon Emoji / Symbol
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      maxLength={2}
                      value={customEmoji}
                      onChange={(e) => setCustomEmoji(e.target.value)}
                      className="w-14 text-center text-xl bg-black/60 border border-white/15 rounded-lg py-1.5 text-white"
                    />
                    <div className="flex gap-1 items-center overflow-x-auto text-lg">
                      {['🌟', '🌸', '👑', '🚀', '⚡', '🏹', '☀️', '🏎️', '🤖', '🦋'].map((em) => (
                        <button
                          key={em}
                          type="button"
                          onClick={() => setCustomEmoji(em)}
                          className="hover:scale-125 transition p-1"
                        >
                          {em}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">
                    Magical Trail Effect
                  </label>
                  <select
                    value={customParticle}
                    onChange={(e) => setCustomParticle(e.target.value as ParticleType)}
                    className="w-full bg-black/60 border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
                  >
                    {PARTICLE_OPTIONS.map((p) => (
                      <option key={p.id} value={p.id} className="bg-neutral-900 text-white">
                        {p.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsCreatingCustom(false)}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs text-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-xs shadow-lg flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Save & Play Character
                </button>
              </div>
            </form>
          ) : null}

          {/* Quick Add Suggestions from Search */}
          {suggestedSuggestions.length > 0 && (
            <div className="p-3 bg-purple-950/20 border border-purple-500/20 rounded-xl space-y-2">
              <div className="text-[11px] uppercase tracking-wider text-purple-300 font-bold flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>Available Disney Suggestions</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {suggestedSuggestions.map((sug) => (
                  <button
                    key={sug.name}
                    onClick={() => handleQuickAddSuggestion(sug)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-900/40 hover:bg-purple-800/60 border border-purple-500/30 text-xs text-white hover:scale-105 transition"
                  >
                    <span>{sug.iconEmoji}</span>
                    <span className="font-semibold">{sug.name}</span>
                    <span className="text-[10px] text-purple-300 opacity-80">({sug.movie})</span>
                    <Plus className="w-3 h-3 text-purple-300 ml-1" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Character Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {filteredCharacters.map((char) => {
              const isSelected = selectedCharacter.id === char.id;

              return (
                <motion.div
                  key={char.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handlePickCharacter(char)}
                  className={`group relative p-3 rounded-xl border cursor-pointer transition-all flex flex-col justify-between overflow-hidden ${
                    isSelected
                      ? 'bg-white/15 border-yellow-400 shadow-[0_0_20px_rgba(255,215,0,0.3)] ring-1 ring-yellow-400'
                      : 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20'
                  }`}
                  style={{
                    borderLeftColor: char.themeColor,
                    borderLeftWidth: '4px',
                  }}
                >
                  {/* Top row: icon emoji & select badge */}
                  <div className="flex items-start justify-between mb-2">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl shadow-md transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: `${char.themeColor}33`,
                        boxShadow: `0 0 15px ${char.glowColor}`,
                        border: `1px solid ${char.themeColor}`,
                      }}
                    >
                      {char.iconEmoji}
                    </div>

                    {isSelected ? (
                      <span className="flex items-center gap-1 bg-yellow-400 text-black text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                        <Check className="w-3 h-3 stroke-[3]" />
                        Active
                      </span>
                    ) : (
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">
                        {char.category}
                      </span>
                    )}
                  </div>

                  {/* Character Name & Movie */}
                  <div>
                    <h3 className="font-bold text-sm text-white group-hover:text-yellow-300 transition-colors leading-tight">
                      {char.name}
                    </h3>
                    <div className="flex items-center gap-1 text-[11px] text-gray-400 mt-0.5">
                      <Film className="w-3 h-3 text-gray-500 flex-shrink-0" />
                      <span className="truncate">{char.movie}</span>
                    </div>
                  </div>

                  {/* Quote / Ability */}
                  <p className="mt-2 text-[10px] text-gray-400 italic line-clamp-2 leading-relaxed bg-black/30 p-1.5 rounded-lg border border-white/5">
                    "{char.quote}"
                  </p>

                  {/* Bottom Indicator */}
                  <div className="mt-2 flex items-center justify-between text-[10px] text-gray-500 font-mono">
                    <span className="capitalize flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" style={{ color: char.themeColor }} />
                      {char.particleType}
                    </span>
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: char.themeColor }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filteredCharacters.length === 0 && (
            <div className="py-12 text-center text-gray-400 space-y-3">
              <p className="text-base">No character matches "{searchQuery}"</p>
              <button
                onClick={() => {
                  setCustomName(searchQuery);
                  setIsCreatingCustom(true);
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition"
              >
                <Plus className="w-4 h-4" />
                Create "{searchQuery}" as Custom Character
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-black/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-lg border"
              style={{
                backgroundColor: `${selectedCharacter.themeColor}33`,
                borderColor: selectedCharacter.themeColor,
              }}
            >
              {selectedCharacter.iconEmoji}
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <span>Playing as</span>
                <span className="text-yellow-400">{selectedCharacter.name}</span>
              </div>
              <div className="text-[10px] text-gray-400 truncate max-w-xs">
                {selectedCharacter.movie}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-yellow-300 transition-colors shadow-lg"
          >
            Confirm & Jump
          </button>
        </div>
      </motion.div>
    </div>
  );
};

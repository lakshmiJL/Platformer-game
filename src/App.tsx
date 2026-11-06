/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Game from './components/Game';
import { DreamyStarsBackdrop } from './components/DreamyStarsBackdrop';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#09071c] via-[#110d2e] to-[#070514] text-white overflow-hidden font-sans relative selection:bg-purple-500 selection:text-white">
      <DreamyStarsBackdrop />
      <div className="relative z-10">
        <Game />
      </div>
    </div>
  );
}

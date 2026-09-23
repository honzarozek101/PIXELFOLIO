/* =====================================================================
   Nastavení částic JEN pro src/Intro.png.
   Když tenhle soubor smažeš, použije se záloha z hlavního config.js
   (pole "projectSettings", případně "intro.settings").
   ===================================================================== */
window.PORTFOLIO_ITEM_CONFIGS = window.PORTFOLIO_ITEM_CONFIGS || {};
window.PORTFOLIO_ITEM_CONFIGS['Intro.png'] = {
  // --- Obrázek ---
  step: 5,                     // velikost částice v px (menší = víc částic, větší zátěž)
  imgScale: 90,                // velikost obrázku v % plochy (20–120)
  alphaCut: 40,                // práh průhlednosti (1–250)
  scatterIn: true,             // true = po načtení se složí z chaosu
  bg: '#0b0d12',               // barva pozadí

  // --- Kolize ---
  collide: true,               // částice se srážejí
  sizeF: 0.92,                 // kolizní velikost (0.3–1.6)
  rest: 0.45,                  // odrazivost (0–1)
  iters: 2,                    // přesnost kolizí (1–4)
  walls: true,                 // odrážet od okrajů plochy

  // --- Síly ---
  spring: 0.012,               // návrat na původní místo (0–0.1)
  friction: 0.05,              // tření (0–0.3)
  gravX: 0,                    // gravitace vodorovně (-0.5–0.5)
  gravY: 0,                    // gravitace svisle (-0.5–0.5)
  turb: 0,                     // chvění (0–2)
  speed: 1,                    // rychlost simulace (0.2–2)

  // --- Interakce mezi částicemi ---
  pair: 0,                     // přitahování (−) ↔ odpuzování (+), -1 … 1
  affinity: 0,                 // barevná příbuznost (0–1)
  reach: 3,                    // dosah v násobcích částice (1.5–6)

  // --- Myš ---
  mouseMode: 'repel',          // 'repel' | 'attract' | 'swirl' | 'ball' | 'off'
  mouseR: 110,                 // poloměr kurzoru v px
  mouseStr: 1.5,               // síla (0–5)
  clickBurst: true,            // levé kliknutí vytvoří výbuch

  // --- Vzhled ---
  colorMode: 'orig',           // 'orig' | 'heat' | 'flash'
  visSize: 1.25,               // velikost vykreslení částice
  round: true,                 // kulaté částice
  additive: false              // svit (aditivní míchání)
};

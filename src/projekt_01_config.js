/* =====================================================================
   Nastavení částic JEN pro src/projekt_01.png.
   Když tenhle soubor smažeš, použije se záloha z hlavního config.js.
   ===================================================================== */
window.PORTFOLIO_ITEM_CONFIGS = window.PORTFOLIO_ITEM_CONFIGS || {};
window.PORTFOLIO_ITEM_CONFIGS['projekt_01.png'] = {
  // --- Obrázek ---
  step: 5,
  imgScale: 90,
  alphaCut: 40,
  scatterIn: true,
  bg: '#0b0d12',

  // --- Kolize ---
  collide: true,
  sizeF: 0.92,
  rest: 0.45,
  iters: 2,
  walls: true,

  // --- Síly ---
  spring: 0.012,
  friction: 0.05,
  gravX: 0,
  gravY: 0,
  turb: 0,
  speed: 1,

  // --- Interakce mezi částicemi ---
  pair: 0,
  affinity: 0,
  reach: 3,

  // --- Myš ---
  mouseMode: 'repel',
  mouseR: 110,
  mouseStr: 1.5,
  clickBurst: true,

  // --- Vzhled ---
  colorMode: 'orig',
  visSize: 1.25,
  round: true,
  additive: false
};

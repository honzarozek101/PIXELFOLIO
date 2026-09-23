/* =====================================================================
   Nastavení částic JEN pro src/projekt_03.png.
   Ukázka odlišného stylu – jemný vír kolem kurzoru a svit. Klidně smaž
   a nahraď vlastním.
   ===================================================================== */
window.PORTFOLIO_ITEM_CONFIGS = window.PORTFOLIO_ITEM_CONFIGS || {};
window.PORTFOLIO_ITEM_CONFIGS['projekt_03.png'] = {
  // --- Obrázek ---
  step: 5,
  imgScale: 90,
  alphaCut: 40,
  scatterIn: true,
  bg: '#0b0d12',

  // --- Kolize ---
  collide: true,
  sizeF: 0.8,
  rest: 1,
  iters: 2,
  walls: true,

  // --- Síly ---
  spring: 0.006,
  friction: 0.02,
  gravX: 0,
  gravY: 0,
  turb: 0.15,
  speed: 1,

  // --- Interakce mezi částicemi ---
  pair: -0.2,
  affinity: 0,
  reach: 3.5,

  // --- Myš ---
  mouseMode: 'swirl',           // kurzor kolem sebe roztáčí částice
  mouseR: 140,
  mouseStr: 1.8,
  clickBurst: true,

  // --- Vzhled ---
  colorMode: 'orig',
  visSize: 1.25,
  round: true,
  additive: true                // svit (aditivní míchání barev)
};

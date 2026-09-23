/* =====================================================================
   Nastavení částic JEN pro src/projekt_02.png.
   Ukázka odlišného stylu – světlé pozadí a "písek" (gravitace dolů,
   malá odrazivost). Klidně smaž a nahraď vlastním.
   ===================================================================== */
window.PORTFOLIO_ITEM_CONFIGS = window.PORTFOLIO_ITEM_CONFIGS || {};
window.PORTFOLIO_ITEM_CONFIGS['projekt_02.png'] = {
  // --- Obrázek ---
  step: 4,
  imgScale: 85,
  alphaCut: 40,
  scatterIn: true,
  bg: '#f3f1ec',                // světlé pozadí – text/tlačítka se samy přebarví

  // --- Kolize ---
  collide: true,
  sizeF: 1,
  rest: 0.12,
  iters: 3,
  walls: true,

  // --- Síly ---
  spring: 0,
  friction: 0.01,
  gravX: 0,
  gravY: 0.25,                  // padá dolů jako písek
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
  visSize: 1.15,
  round: true,
  additive: false
};

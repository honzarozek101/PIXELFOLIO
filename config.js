/* =====================================================================
   PORTFOLIO – hlavní konfigurace
   Tenhle soubor můžeš libovolně upravovat, index.html se nemusí měnit.

   Struktura složek:
     index.html
     config.js
     src/
       background.png             – (nepovinné) SPOLEČNÉ pozadí za částicemi pro všechny
                                     obrázky, co nemají vlastní vlastní_background.png
       Intro.png                  – úvodní obrázek (načte se při příchodu na stránku)
       Intro_config.js            – (nepovinné) nastavení částic jen pro Intro
       Intro_background.png       – (nepovinné) pozadí jen pro Intro
       projekt_01.png              – 1. projekt
       projekt_01_config.js       – (nepovinné) nastavení částic jen pro projekt_01
       projekt_01_background.png  – (nepovinné) pozadí jen pro projekt_01
       projekt_02.png              – 2. projekt
       projekt_02_config.js
       ...                        – další projekty (čísla jdou popořadě)

   ---------------------------------------------------------------------
   JAK SE NASTAVUJE VZHLED A CHOVÁNÍ ČÁSTIC PRO KAŽDÝ OBRÁZEK
   ---------------------------------------------------------------------
   Ke KAŽDÉMU PNG může (ale nemusí) existovat vlastní soubor ve složce src/,
   pojmenovaný stejně jako obrázek + přípona "_config.js":

       src/Intro.png        →  src/Intro_config.js
       src/projekt_01.png   →  src/projekt_01_config.js
       src/projekt_02.png   →  src/projekt_02_config.js

   V tomhle souboru je nastavení fyziky/rozpixelování VÝHRADNĚ pro daný
   obrázek – viz ukázkové soubory, jsou už ve složce src a slouží jako šablona.

   Když soubor pro daný obrázek neexistuje (nebo se nenačte), použije se
   jako záloha (fallback) "projectSettings" z TOHOTO hlavního config.js
   níž. Takže tenhle soubor si klidně nech jako obecné výchozí nastavení
   a doladěné/odlišné efekty pro konkrétní projekty dávej do těch
   samostatných *_config.js souborů ve složce src.

   ADRESY (url) a POPISKY (title) projektů se naopak nastavují VÝHRADNĚ
   tady dole v poli "projects" – v src/*_config.js soubory na to nemají
   žádný vliv.

   ---------------------------------------------------------------------
   OBRÁZEK NA POZADÍ (volitelně, místo/vedle jednobarevného "bg")
   ---------------------------------------------------------------------
   Za částicemi může být místo jednobarevné plochy i PNG obrázek. Hledá
   se stejně jako per-PNG nastavení, podle jména obrázku:

       src/projekt_01.png  →  hledá se src/projekt_01_background.png
                               když neexistuje, hledá se src/background.png
                               když neexistuje ani ten, použije se barva "bg"

   Takže "src/background.png" je JEDNO společné pozadí pro úplně všechny
   obrázky, které nemají vlastní "<jméno>_background.png". Žádné z toho
   se nenastavuje tady v config.js – stačí soubor přidat/smazat ve
   složce src. Barva "bg" v nastavení se i tak použije jako podklad,
   než se obrázek na pozadí načte, a pro kontrast textu/tlačítek – vyplať
   se ji nastavit zhruba na tón obrázku na pozadí.
   ===================================================================== */

window.PORTFOLIO_CONFIG = {

  /* ---------- Obecné ---------- */
  siteTitle: 'Portfolio',          // titulek záložky v prohlížeči
  srcFolder: 'src/',               // složka s PNG a *_config.js soubory
  loop: true,                      // true = z posledního projektu tlačítko vede zpět na Intro
  openInNewTab: false,             // false = přesměruje v tomhle okně, true = otevře novou kartu
  longPressMs: 600,                // na dotykových zařízeních: jak dlouho podržet prst místo pravého tlačítka
  transitionOutMs: 450,            // jak dlouho se stávající obrázek rozlétá, než naskočí další (0 = hned)
  hint: 'Pravé tlačítko myši – otevřít projekt',   // nápověda dole (prázdný řetězec '' = skrýt)


  /* ---------- INTRO (src/Intro.png) ---------- */
  intro: {
    file: 'Intro.png',             // název souboru ve složce src (pozor na velikost písmen)
    url: '',                       // adresa po pravém kliknutí; prázdné = na Introu se nic nestane
    title: '',                     // volitelný popisek dole

    // Nastavení částic pro Intro se bere ze souboru src/Intro_config.js
    // (pokud existuje). Tohle pole "settings" je jen druhotná záloha,
    // kdybys náhodou chtěl(a) nastavení mít i tady – normálně ho
    // nech prázdné a uprav rovnou src/Intro_config.js.
    settings: {}
  },


  /* ---------- Výchozí nastavení – FALLBACK pro projekty bez vlastního *_config.js ---------- */
  projectSettings: {
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
  },


  /* ---------- PROJEKTY ----------
     Pořadí = pořadí souborů: první položka = src/projekt_01.png,
     druhá = src/projekt_02.png atd. Počet projektů určuje počet položek.

       url      – kam se uživatel dostane po pravém kliknutí (POVINNÉ pole pro odkaz)
       title    – volitelný popisek dole
       file     – volitelně jiný název souboru než projekt_NN.png
                  (pak se i config soubor hledá podle TOHOTO jména, např.
                   file: 'kavarna.png' → src/kavarna_config.js)
       settings – volitelně přepíše nastavení jen pro tenhle projekt, ale
                  jen když NEEXISTUJE src/<soubor>_config.js – ten má vždy
                  přednost. Normálně tohle pole nech prázdné {} a nastavení
                  dělej přes src/projekt_NN_config.js.
  */
  projects: [
    { url: 'https://example.com/projekt-1', title: 'Projekt 01', settings: {} },
    { url: 'https://example.com/projekt-2', title: 'Projekt 02', settings: {} },
    { url: 'https://example.com/projekt-3', title: 'Projekt 03', settings: {} }
  ]
};

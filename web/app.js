(function () {
  "use strict";

  // Bereiche laut "Perspektive Kind - Hamburger Bildungsleitlinien" (Stand 09/2024), Kapitel 4
  const BEREICHE = [
    { id: "koerper", name: "Körper, Bewegung und Gesundheit" },
    { id: "sozio", name: "Soziokulturelles Leben" },
    { id: "sprache", name: "Kommunikation, Sprachen, Schriftkultur" },
    { id: "aesthetik", name: "Ästhetische Bildung", unter: { gestalten: "Bildnerisches Gestalten", musik: "Musik", theater: "Theaterspiel" } },
    { id: "medien", name: "Digitale Medienbildung" },
    { id: "mathe", name: "Mathematische Bildung" },
    { id: "natur", name: "Natur, Umwelt, Technik" }
  ];
  const BEDUERFNISSE = [
    {
      id: "kognitiv", name: "Kognitive Bedürfnisse", pflicht: true,
      unter: { selbstverwirklichung: "Selbstverwirklichung", selbstbestimmung: "Selbstbestimmung", leistung: "Leistung", spiel: "Spiel", anregung: "Anregung", lernen: "Lernen", neugier: "Neugier" }
    },
    {
      id: "koerperlich", name: "Körperliche Bedürfnisse", pflicht: true,
      unter: { pflege: "Pflege", kleidung: "Kleidung", bewegung: "Bewegung", nahrung: "Gesunde und ausreichende Nahrung", schlaf: "Schlaf und Ruhephasen" }
    },
    {
      id: "sozialemotional", name: "Sozial-emotionale Bedürfnisse", pflicht: true,
      unter: { gleichaltrige: "Kontakt zu Gleichaltrigen", bezugspersonen: "Tragfähige Beziehung zu Bezugspersonen", anerkennung: "Anerkennung", zugehoerigkeit: "Zugehörigkeit", geborgenheit: "Geborgenheit", verstaendnis: "Verständnis", sicherheit: "Sicherheit und Schutz" }
    }
  ];
  const LIED_BEREICHE = [
    { id: "essen", name: "Warten auf Essen" },
    { id: "begruessung", name: "Begrüßung" },
    { id: "abschied", name: "Abschied" },
    { id: "ueberleitung", name: "Überleitung" },
    { id: "jahreszeiten", name: "Jahreszeiten", unter: { fruehling: "Frühling", sommer: "Sommer", herbst: "Herbst", winter: "Winter" } },
    { id: "freude", name: "Freude" },
    { id: "geburtstag", name: "Geburtstag" },
    { id: "aua", name: "Aua" },
    { id: "sprachbildung", name: "Sprachbildung" },
    { id: "zahlen", name: "Zahlen" },
    { id: "eltern", name: "Mama und Papa" },
    { id: "reihe", name: "In einer Reihe gehen" },
    { id: "tiere", name: "Tiere und ihre Geräusche" },
    { id: "wetter", name: "Wetter" },
    { id: "einschlafen", name: "Einschlafen und Mittagsschlaf" },
    { id: "aufwachen", name: "Aufwachen und Guten Morgen" }
  ];
  const RUBRIKEN = {
    bildung: { name: "Bildungsbereiche", bereiche: BEREICHE },
    beduerfnisse: { name: "Kinderbedürfnisse", bereiche: BEDUERFNISSE },
    lieder: { name: "Kinderlieder", bereiche: LIED_BEREICHE }
  };
  const ANGEBOT_BEREICHE = BEREICHE.concat(BEDUERFNISSE);
  const ALLE_BEREICHE = ANGEBOT_BEREICHE.concat(LIED_BEREICHE);
  // Themen werden aus den Texten der Angebote abgeleitet, Lieder bringen ihre Themen selbst mit
  const THEMEN = [
    { id: "tiere", name: "Tiere", muster: /\btier(e|en|laute?|stimmen|namen|figuren|karten)?\b|\bhund|\bkatze|\bvogel|\bvögel|schnecke|regenwurm|würmer|\bhase|\bbär|\bente|insekt|\bbiene|\bkäfer|\bkuh\b|\bmaus\b|\bigel/ },
    { id: "wasser", name: "Wasser", muster: /\bwasser|pfütze|schwimm|plitsch/ },
    { id: "wetter", name: "Wetter", muster: /\bwetter|\bwind\b|\bregen|\bsonne\b|\bschnee|gewitter|\beis\b|\beisblock/ },
    { id: "farben", name: "Farben", muster: /\bfarbe|\bfarben|farbton|fingerfarbe/ },
    { id: "gefuehle", name: "Gefühle", muster: /gefühl|\bwut\b|wütend|traurig|\btrost|tröst|\bsorge|\bangst/ },
    { id: "familie", name: "Familie", muster: /\bfamilie|\beltern|\bmama\b|\bpapa\b/ },
    { id: "essen", name: "Essen und Trinken", muster: /\bessen\b|frühstück|\bobst|\bbacken|\bquark|\bapfel|lebensmittel|\btrinken|\bgemüse|\bkräuter/ },
    { id: "bewegung", name: "Bewegung und Tanz", muster: /\bklettern|\bhüpf|balancier|\btanz|\brennen\b|\bparcours/, kategorie: "Bewegungsspiele" },
    { id: "musik", name: "Musik und Singen", muster: /\bmusik|\blied|\bsingen|\bsingt\b|\bklang|\bklänge|rhythm|\btrommel/, kategorie: "Spiellieder" },
    { id: "geschichten", name: "Bücher und Geschichten", muster: /geschichte|bilderbuch|\bbuch\b|märchen|\berzählt\b/, kategorie: "Lügengeschichten" },
    { id: "zahlen", name: "Zahlen und Mengen", muster: /\bzähl|\bzahl|\bmenge/ },
    { id: "natur", name: "Natur und Garten", muster: /\bgarten|\bbeet|pflanz|\bblatt\b|\bblätter|\bbaum|\bwald|\bsand\b|\berde\b|\bherbst|\bfrühling/ },
    { id: "bauen", name: "Bauen und Konstruieren", muster: /\bbauen\b|\bbaut\b|\bbaustein|\bkarton|\bturm\b|\btürme/ },
    { id: "kreativ", name: "Malen und Basteln", muster: /\bmalen\b|\bmalt\b|\bpapier|\bschere|\bklebe|\bknete|\bton\b/, kategorie: "Gestalten" },
    { id: "medien", name: "Technik und Medien", muster: /\btablet|\bkamera|\bfoto|\btechnik|\bstrom|\bmagnet|\bfilm/ },
    { id: "ruhe", name: "Ruhe und Entspannung", muster: /\bentspann|\bschlaf|\bkuschel|\bruhe\b|\bruhig/ },
    { id: "gemeinschaft", name: "Gemeinschaft und Freunde", muster: /\bbegrüß|\bfreund|\bgemeinschaft|\bzusammenarbeit/, kategorie: "Kennenlernspiele" },
    { id: "koerper", name: "Körper und Pflege", muster: /\bkörper|\bzähne|\bhände\b|\bhaut\b|\bfüße|\bpflege|\bwasch/ }
  ];
  const ALTER = { "0-3": "0–3 Jahre (Krippe)", "3-6": "3–6 Jahre (Elementar)" };
  const KATEGORIEN = [
    "Kennenlernspiele", "Wahrnehmungsspiele", "Reaktionsspiele", "Gedächtnisspiele", "Sprachspiele",
    "Ratespiele", "Lügengeschichten", "Spiellieder", "Darstellende Spiele im Kreis", "Szenisches Spiel",
    "Spiele mit Papier und Stift", "Bewegungsspiele", "Experimente", "Gestalten", "Rituale und Alltag"
  ];
  const JAHRESZEITEN = { fruehling: "Frühling", sommer: "Sommer", herbst: "Herbst", winter: "Winter", ganzjaehrig: "Ganzjährig" };
  const GRUPPEN = { einzel: "Einzelkind", klein: "Kleingruppe", gross: "Gesamtgruppe" };
  const ORTE = { drinnen: "Drinnen", draussen: "Draußen" };
  const MATERIAL = { ohne: "Ohne Material", alltag: "Alltagsmaterial", besonders: "Besonderes Material" };
  const PHASEN = { einstieg: "Einstieg", hauptteil: "Hauptteil", schluss: "Schluss" };
  const SPALTEN = { inhalt: "Inhalt", kommentar: "Didaktischer Kommentar", sozialform: "Sozialform", material: "Material" };
  const DAUER = { 10: "bis 10 Min.", 20: "bis 20 Min.", 30: "bis 30 Min." };
  const VORBEREITUNG = { 0: "Keine", 5: "bis 5 Min.", 15: "bis 15 Min." };

  const KEY_EIGENE = "kita-angebote.eigene";
  const KEY_MERKLISTE = "kita-angebote.merkliste";
  const KEY_ALTER = "kita-angebote.alter";
  const KEY_DRUCK = "kita-angebote.druckauswahl";
  const KEY_ZUSATZ = "kita-angebote.zusatz";
  const IMPORT_MAX_BYTES = 200 * 1024 * 1024;
  const BILD_MAX_PIXEL = 1280;
  const TAG_MAX_ZEICHEN = 30;
  const DRUCK_ICON = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9V3h12v6"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v7H6z"/></svg>`;

  const leereFilter = () => ({ suche: "", jahreszeit: "", kategorie: "", dauer: "", vorbereitung: "", gruppe: "", ort: "", material: "", thema: "", tag: "" });

  const state = {
    // "alle", "merkliste", "druck", "eigene", "rubrik:<id>", "bereich:<id>" oder "unter:<bereich>:<unterkategorie>"
    ansicht: "alle",
    offen: new Set(),
    alter: lese(KEY_ALTER, ""),
    filter: leereFilter(),
    eigene: lese(KEY_EIGENE, []),
    merkliste: lese(KEY_MERKLISTE, []),
    druckauswahl: lese(KEY_DRUCK, []),
    // Pro Angebot oder Lied: eigene Tags und Liedtext. Bilder liegen wegen ihrer Größe in der IndexedDB.
    zusatz: lese(KEY_ZUSATZ, {}),
    speicherOk: true,
    formDirty: false
  };

  const sidebar = document.getElementById("sidebar");
  const view = document.getElementById("view");
  const toastEl = document.getElementById("toast");
  const importFile = document.getElementById("importFile");
  const druckEl = document.getElementById("druck");
  const themenCache = new WeakMap();

  function lese(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch (e) {
      return fallback;
    }
  }

  function speichere(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      state.speicherOk = true;
    } catch (e) {
      state.speicherOk = false;
      toast("Speichern im Browser ist nicht möglich. Bitte exportiere deine Angebote als Datei.");
    }
  }

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  function toast(text) {
    toastEl.textContent = text;
    toastEl.classList.add("show");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => toastEl.classList.remove("show"), 3500);
  }

  function alleAngebote() {
    return window.ANGEBOTE.concat(state.eigene);
  }

  function finde(id) {
    return alleAngebote().concat(window.LIEDER).find((a) => a.id === id);
  }

  function istLied(a) {
    return a.typ === "lied";
  }

  function zusatzVon(id) {
    return state.zusatz[id] || {};
  }

  function tagsVon(a) {
    return zusatzVon(a.id).tags || [];
  }

  function liedtextVon(a) {
    return zusatzVon(a.id).liedtext || "";
  }

  function setzeZusatz(id, aenderung) {
    state.zusatz[id] = Object.assign({}, zusatzVon(id), aenderung);
    speichere(KEY_ZUSATZ, state.zusatz);
  }

  function alleTags() {
    const tags = new Set();
    Object.values(state.zusatz).forEach((z) => (z.tags || []).forEach((t) => tags.add(t)));
    return Array.from(tags).sort((x, y) => x.localeCompare(y, "de"));
  }

  function themenVon(a) {
    if (a.themen) return a.themen;
    if (!themenCache.has(a)) {
      const text = normalize([a.titel, a.kurz, a.grobziel, a.feinziele.join(" "), a.phasen.hauptteil.inhalt].join(" "));
      themenCache.set(a, THEMEN.filter((t) => t.muster.test(text) || t.kategorie === a.kategorie).map((t) => t.id));
    }
    return themenCache.get(a);
  }

  function liedVorschlaege(a) {
    const themen = themenVon(a);
    return window.LIEDER
      .filter((l) => l.alter === "alle" || l.alter === a.alter)
      .map((l) => ({
        lied: l,
        punkte: l.themen.filter((t) => themen.includes(t)).length + (a.jahreszeiten.includes(l.unterbereich) ? 2 : 0)
      }))
      .filter((x) => x.punkte > 0)
      .sort((x, y) => y.punkte - x.punkte)
      .slice(0, 3)
      .map((x) => x.lied);
  }

  function istLiedAnsicht() {
    const [typ, x] = state.ansicht.split(":");
    if (typ === "rubrik") return x === "lieder";
    return (typ === "bereich" || typ === "unter") && LIED_BEREICHE.some((b) => b.id === x);
  }

  function istEigen(angebot) {
    return String(angebot.id).startsWith("eigen-");
  }

  function bereichVon(id) {
    return ALLE_BEREICHE.find((x) => x.id === id);
  }

  function bereichName(id) {
    const b = bereichVon(id);
    return b ? b.name : "";
  }

  function unterName(bereichId, unterId) {
    const b = bereichVon(bereichId);
    return (b && b.unter && b.unter[unterId]) || "";
  }

  function herkunft(a) {
    const unter = unterName(a.bereich, a.unterbereich);
    return bereichName(a.bereich) + (unter ? " · " + unter : "");
  }

  function passtAnsicht(a, ansicht) {
    const [typ, x, y] = ansicht.split(":");
    if (typ === "rubrik") return RUBRIKEN[x].bereiche.some((b) => b.id === a.bereich);
    if (typ === "bereich") return a.bereich === x;
    if (typ === "unter") return a.bereich === x && a.unterbereich === y;
    return true;
  }

  function vorbereitungText(min) {
    return min === 0 ? "keine Vorbereitung" : min + " Min. Vorbereitung";
  }

  function normalize(text) {
    return String(text).toLowerCase();
  }

  function suchtext(a) {
    const zusatz = tagsVon(a).concat(liedtextVon(a)).join(" ");
    if (istLied(a)) return normalize([a.titel, a.kurz, herkunft(a), zusatz].join(" "));
    const phasen = Object.values(a.phasen).map((p) => [p.inhalt, p.material].join(" ")).join(" ");
    return normalize([a.titel, a.kurz, a.kategorie, herkunft(a), a.grobziel, phasen, zusatz].join(" "));
  }

  function passtFilter(a, f) {
    if (state.alter && a.alter !== state.alter && a.alter !== "alle") return false;
    if (f.suche && !normalize(f.suche).split(/\s+/).filter(Boolean).every((w) => suchtext(a).includes(w))) return false;
    if (f.thema && !themenVon(a).includes(f.thema)) return false;
    if (f.tag && !tagsVon(a).includes(f.tag)) return false;
    // Dauer, Ort und Co. gibt es bei Liedern nicht
    if (istLied(a)) return true;
    if (f.jahreszeit && !a.jahreszeiten.includes(f.jahreszeit) && !a.jahreszeiten.includes("ganzjaehrig")) return false;
    if (f.kategorie && a.kategorie !== f.kategorie) return false;
    if (f.dauer && a.dauer > Number(f.dauer)) return false;
    if (f.vorbereitung !== "" && a.vorbereitung > Number(f.vorbereitung)) return false;
    if (f.gruppe && !a.gruppe.includes(f.gruppe)) return false;
    if (f.ort && !a.ort.includes(f.ort)) return false;
    if (f.material && a.materialTyp !== f.material) return false;
    return true;
  }

  function treffer() {
    const f = state.filter;
    if (state.ansicht === "merkliste") return state.merkliste.map(finde).filter(Boolean);
    if (state.ansicht === "druck") return state.druckauswahl.map(finde).filter(Boolean);
    if (state.ansicht === "eigene") return state.eigene.filter((a) => passtFilter(a, f));
    const quelle = istLiedAnsicht() ? window.LIEDER : alleAngebote();
    return quelle.filter((a) => passtFilter(a, f) && passtAnsicht(a, state.ansicht));
  }

  /* ---------- Seitenleiste ---------- */

  function renderSidebar() {
    const basis = alleAngebote().filter((a) => passtFilter(a, state.filter));
    const mitLiedern = basis.concat(window.LIEDER.filter((l) => passtFilter(l, state.filter)));
    const anzahl = (ansicht) => mitLiedern.filter((a) => passtAnsicht(a, ansicht)).length;
    const item = (id, name, count, dot) => `
      <li><button class="nav-item" data-nav="${id}" aria-current="${state.ansicht === id}">
        ${dot ? `<span class="dot dot-${dot}"></span>` : ""}<span>${esc(name)}</span><span class="count">${count}</span>
      </button></li>`;
    const gruppe = (id, name, kinder, dot) => {
      const offen = state.offen.has(id);
      return `
      <li><button class="nav-item nav-group" data-nav="${id}" data-gruppe="1" aria-expanded="${offen}" aria-current="${state.ansicht === id}">
        <span class="chevron" aria-hidden="true">›</span>${dot ? `<span class="dot dot-${dot}"></span>` : ""}<span>${esc(name)}</span><span class="count">${anzahl(id)}</span>
      </button>
      ${offen ? `<ul class="nav-list nav-sub">${kinder}</ul>` : ""}</li>`;
    };
    const bereichEintrag = (b) => {
      const id = "bereich:" + b.id;
      if (!b.unter) return item(id, b.name, anzahl(id), b.id);
      const kinder = Object.entries(b.unter).map(([k, v]) => {
        const uid = `unter:${b.id}:${k}`;
        return item(uid, v, anzahl(uid));
      }).join("");
      return gruppe(id, b.name, kinder, b.id);
    };
    sidebar.innerHTML = `
      <div class="brand">
        <h1>Kita-Angebote</h1>
        <p>Bildungsangebote für den Alltag</p>
      </div>
      <nav aria-label="Angebote nach Bereich">
        <ul class="nav-list nav-main">
          ${item("alle", "Alle Angebote", basis.length)}
          ${Object.entries(RUBRIKEN).map(([id, r]) => gruppe("rubrik:" + id, r.name, r.bereiche.map(bereichEintrag).join(""))).join("")}
          ${item("merkliste", "Merkliste", state.merkliste.filter(finde).length)}
          ${item("druck", "Druckauswahl", state.druckauswahl.filter(finde).length)}
          ${item("eigene", "Meine Angebote", state.eigene.length)}
        </ul>
      </nav>
      <div class="side-actions">
        <button class="btn btn-primary" data-action="neu">+ Neues Angebot</button>
        <div class="row">
          <button class="btn" data-action="export">Exportieren</button>
          <button class="btn" data-action="import">Importieren</button>
        </div>
      </div>`;
  }

  /* ---------- Übersicht ---------- */

  function options(map, value, leer) {
    const opts = Object.entries(map).map(([k, v]) => `<option value="${esc(k)}"${String(value) === k ? " selected" : ""}>${esc(v)}</option>`);
    return `<option value="">${esc(leer)}</option>` + opts.join("");
  }

  function filterSelect(name, label, map, leer) {
    const value = state.filter[name];
    return `<label class="filter">${label}
      <select data-filter="${name}" class="${value !== "" ? "is-set" : ""}">${options(map, value, leer)}</select>
    </label>`;
  }

  function renderListe() {
    state.formDirty = false;
    const merk = state.ansicht === "merkliste" || state.ansicht === "druck";
    const nurLieder = istLiedAnsicht();
    const kat = Object.fromEntries(KATEGORIEN.map((k) => [k, k]));
    const jz = Object.fromEntries(Object.entries(JAHRESZEITEN).filter(([k]) => k !== "ganzjaehrig"));
    const themen = Object.fromEntries(THEMEN.map((t) => [t.id, t.name]));
    const tags = Object.fromEntries(alleTags().map((t) => [t, t]));
    view.innerHTML = `
      <div class="page">
        ${merk ? "" : `
        <div class="topbar">
          <div class="segmented" role="group" aria-label="Zielgruppe">
            ${[["", "Alle"], ["0-3", "0–3 Krippe"], ["3-6", "3–6 Elementar"]].map(([v, t]) =>
              `<button data-alter="${v}" aria-pressed="${state.alter === v}">${t}</button>`).join("")}
          </div>
          <input class="search" id="suche" type="search" value="${esc(state.filter.suche)}"
            placeholder="Suchen, z. B. Tücher oder Kastanien" aria-label="Angebote durchsuchen">
        </div>
        <div class="filters">
          ${nurLieder ? "" : `
          ${filterSelect("dauer", "Dauer", DAUER, "Beliebig")}
          ${filterSelect("vorbereitung", "Vorbereitung", VORBEREITUNG, "Beliebig")}
          ${filterSelect("gruppe", "Gruppengröße", GRUPPEN, "Beliebig")}
          ${filterSelect("ort", "Ort", ORTE, "Beliebig")}
          ${filterSelect("material", "Material", MATERIAL, "Beliebig")}
          ${filterSelect("jahreszeit", "Jahreszeit", jz, "Beliebig")}
          ${filterSelect("kategorie", "Spielkategorie", kat, "Alle")}`}
          ${filterSelect("thema", "Thema", themen, "Alle")}
          ${Object.keys(tags).length ? filterSelect("tag", "Mein Tag", tags, "Alle") : ""}
        </div>`}
        <div id="ergebnis" aria-live="polite"></div>
      </div>`;
    renderErgebnis();
  }

  function ansichtTitel() {
    if (state.ansicht === "alle") return "Alle Angebote";
    if (state.ansicht === "merkliste") return "Merkliste";
    if (state.ansicht === "druck") return "Druckauswahl";
    if (state.ansicht === "eigene") return "Meine Angebote";
    const [typ, x, y] = state.ansicht.split(":");
    if (typ === "rubrik") return RUBRIKEN[x].name;
    if (typ === "unter") return unterName(x, y);
    return bereichName(x);
  }

  function filterAktiv() {
    return Object.values(state.filter).some((v) => v !== "");
  }

  function renderErgebnis() {
    const box = document.getElementById("ergebnis");
    if (!box) return;
    const liste = treffer();
    const lieder = istLiedAnsicht();
    const einheit = lieder ? ["Lied", "Lieder"] : state.ansicht === "merkliste" || state.ansicht === "druck" ? ["Eintrag", "Einträge"] : ["Angebot", "Angebote"];
    const anzahl = liste.length + " " + (liste.length === 1 ? einheit[0] : einheit[1]);
    const ohneFilter = state.ansicht === "merkliste" || state.ansicht === "druck";
    box.innerHTML = `
      <div class="result-head">
        <div><h2>${esc(ansichtTitel())}</h2><div class="sub">${anzahl}</div></div>
        ${filterAktiv() && !ohneFilter ? `<button class="btn-link" data-action="reset">Filter zurücksetzen</button>` : ""}
        ${state.ansicht === "druck" && liste.length ? `<div class="actions">
          <button class="btn btn-primary" data-action="druck-alle">Alles drucken</button>
          <button class="btn" data-action="druck-leeren">Auswahl leeren</button>
        </div>` : ""}
      </div>
      ${liste.length ? `<div class="cards">${liste.map(karte).join("")}</div>` : leerText()}`;
  }

  function leerText() {
    if (state.ansicht === "merkliste") return `<div class="empty">Noch nichts gemerkt. Tippe bei einem Angebot auf den Stern.</div>`;
    if (state.ansicht === "druck") return `<div class="empty">Noch nichts ausgewählt. Tippe bei Angeboten oder Liedern auf das Druckersymbol.</div>`;
    if (state.ansicht === "eigene" && !state.eigene.length) return `<div class="empty">Du hast noch keine eigenen Angebote angelegt.</div>`;
    return `<div class="empty">Kein Angebot passt zu diesen Filtern. Lockere einen Filter oder setze sie zurück.</div>`;
  }

  function sterne(a) {
    const an = state.merkliste.includes(a.id);
    return `<button class="star" data-merken="${esc(a.id)}" aria-pressed="${an}"
      aria-label="${an ? "Von der Merkliste entfernen" : "Auf die Merkliste"}: ${esc(a.titel)}">${an ? "★" : "☆"}</button>`;
  }

  function druckKnopf(a) {
    const an = state.druckauswahl.includes(a.id);
    return `<button class="star pick" data-druckwahl="${esc(a.id)}" aria-pressed="${an}"
      aria-label="${an ? "Aus der Druckauswahl entfernen" : "Zur Druckauswahl hinzufügen"}: ${esc(a.titel)}">${DRUCK_ICON}</button>`;
  }

  function alterKurz(a) {
    return a.alter === "alle" ? "0–6 J." : a.alter.replace("-", "–") + " J.";
  }

  function tagPills(a) {
    return tagsVon(a).map((t) => `<span class="pill pill-own">#${esc(t)}</span>`).join("");
  }

  function karte(a) {
    return `
      <article class="card">
        ${sterne(a)}
        ${druckKnopf(a)}
        <div class="area"><span class="dot dot-${esc(a.bereich)}"></span>${esc(herkunft(a))}</div>
        <h3><a href="#/angebot/${encodeURIComponent(a.id)}">${esc(a.titel)}</a></h3>
        <p class="desc">${esc(a.kurz)}</p>
        <div class="pills">
          <span class="pill">${esc(alterKurz(a))}</span>
          ${istLied(a) ? `<span class="pill">${liedtextVon(a) ? "Text eingetragen" : "Text fehlt noch"}</span>` : `
          <span class="pill">${esc(a.dauer)} Min.</span>
          <span class="pill">${esc(vorbereitungText(a.vorbereitung))}</span>
          <span class="pill">${a.gruppe.map((g) => esc(GRUPPEN[g])).join(", ")}</span>`}
          ${istEigen(a) ? `<span class="pill pill-own">Eigenes Angebot</span>` : ""}
          ${tagPills(a)}
        </div>
      </article>`;
  }

  /* ---------- Bilder ---------- */

  let dbVersprechen;

  function bildDb() {
    if (!dbVersprechen) {
      dbVersprechen = new Promise((resolve, reject) => {
        const anfrage = indexedDB.open("kita-angebote", 1);
        anfrage.onupgradeneeded = () => {
          const speicher = anfrage.result.createObjectStore("bilder", { keyPath: "id", autoIncrement: true });
          speicher.createIndex("angebot", "angebotId");
        };
        anfrage.onsuccess = () => resolve(anfrage.result);
        anfrage.onerror = () => reject(anfrage.error);
      });
    }
    return dbVersprechen;
  }

  async function bildAufruf(modus, aktion) {
    const db = await bildDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction("bilder", modus);
      const anfrage = aktion(tx.objectStore("bilder"));
      tx.oncomplete = () => resolve(anfrage.result);
      tx.onerror = () => reject(tx.error);
      tx.onabort = () => reject(tx.error);
    });
  }

  const bilderVon = (id) => bildAufruf("readonly", (s) => s.index("angebot").getAll(id));
  const alleBilder = () => bildAufruf("readonly", (s) => s.getAll());
  const bildHinzu = (angebotId, daten) => bildAufruf("readwrite", (s) => s.add({ angebotId, daten }));
  const bildWeg = (id) => bildAufruf("readwrite", (s) => s.delete(id));

  // Bilder werden verkleinert, damit der Gerätespeicher und der Export klein bleiben
  async function verkleinere(datei) {
    const url = URL.createObjectURL(datei);
    try {
      const img = new Image();
      img.src = url;
      await img.decode();
      const faktor = Math.min(1, BILD_MAX_PIXEL / Math.max(img.naturalWidth, img.naturalHeight));
      const leinwand = document.createElement("canvas");
      leinwand.width = Math.round(img.naturalWidth * faktor);
      leinwand.height = Math.round(img.naturalHeight * faktor);
      leinwand.getContext("2d").drawImage(img, 0, 0, leinwand.width, leinwand.height);
      return leinwand.toDataURL("image/jpeg", 0.8);
    } finally {
      URL.revokeObjectURL(url);
    }
  }

  async function ladeBilder(id) {
    const box = document.getElementById("bilder");
    if (!box) return;
    try {
      const bilder = await bilderVon(id);
      box.innerHTML = bilder.map((b) => `
        <figure class="bild">
          <img src="${esc(b.daten)}" alt="Hochgeladenes Bild">
          <button class="star" data-bild-weg="${b.id}" aria-label="Bild entfernen">✕</button>
        </figure>`).join("");
    } catch (e) {
      box.innerHTML = `<p class="hint">Bilder können in diesem Browser nicht geladen werden.</p>`;
    }
  }

  async function bilderHochladen(id, dateien) {
    let fehler = 0;
    for (const datei of dateien) {
      try {
        await bildHinzu(id, await verkleinere(datei));
      } catch (e) {
        fehler += 1;
      }
    }
    if (fehler) toast(fehler === 1 ? "Ein Bild konnte nicht gespeichert werden." : fehler + " Bilder konnten nicht gespeichert werden.");
    ladeBilder(id);
  }

  /* ---------- Bilder und Tags in der Detailansicht ---------- */

  function zusatzBloecke(a) {
    return `
      <section class="section">
        <h3>Meine Tags</h3>
        <div class="pills" id="tags">
          ${tagsVon(a).map((t) => `<span class="pill pill-own tag">#${esc(t)}
            <button class="tag-weg" data-tag-weg="${esc(t)}" aria-label="Tag ${esc(t)} entfernen">✕</button></span>`).join("")}
        </div>
        <form class="tag-form" id="tagform" data-id="${esc(a.id)}">
          <input class="input" name="tag" maxlength="${TAG_MAX_ZEICHEN}" placeholder="Zum Beispiel Lieblingsspiel oder Regentag" aria-label="Neuer Tag">
          <button class="btn" type="submit">Hinzufügen</button>
        </form>
      </section>
      <section class="section">
        <h3>Bilder</h3>
        <p class="hint">Bilder bleiben nur auf diesem Gerät. Fotos von Kindern nur mit Einwilligung der Eltern verwenden.</p>
        <div class="bilder" id="bilder"></div>
        <div class="actions">
          <label class="btn btn-primary datei-knopf">Foto aufnehmen
            <input type="file" class="bild-upload" data-id="${esc(a.id)}" accept="image/*" capture="environment">
          </label>
          <label class="btn datei-knopf">Bilder auswählen
            <input type="file" class="bild-upload" data-id="${esc(a.id)}" accept="image/*" multiple>
          </label>
        </div>
      </section>`;
  }

  function aktionKnoepfe(a) {
    const gemerkt = state.merkliste.includes(a.id);
    const gewaehlt = state.druckauswahl.includes(a.id);
    return `
      <button class="btn ${gemerkt ? "btn-saved" : ""}" data-merken="${esc(a.id)}" aria-pressed="${gemerkt}">${gemerkt ? "★ Gemerkt" : "☆ Merken"}</button>
      <button class="btn ${gewaehlt ? "btn-saved" : ""}" data-druckwahl="${esc(a.id)}" aria-pressed="${gewaehlt}">${gewaehlt ? "In Druckauswahl ✓" : "Zur Druckauswahl"}</button>
      <button class="btn" data-drucken="${esc(a.id)}">Drucken</button>`;
  }

  function renderLied(a) {
    view.innerHTML = `
      <div class="page">
        <div class="detail-head">
          <a class="btn-link" href="#/">← Zur Übersicht</a>
          <div class="actions">${aktionKnoepfe(a)}</div>
        </div>
        <div class="detail-title">
          <div class="area"><span class="dot dot-${esc(a.bereich)}"></span>${esc(herkunft(a))}</div>
          <h2>${esc(a.titel)}</h2>
          <p class="desc">${esc(a.kurz)}</p>
          <div class="pills"><span class="pill">${esc(alterKurz(a))}</span></div>
          <div class="actions">
            <a class="btn btn-primary" href="${esc(a.link)}" target="_blank" rel="noopener noreferrer">Lied auf YouTube öffnen</a>
            ${a.textSeite ? `<a class="btn" href="${esc(a.textSeite)}" target="_blank" rel="noopener noreferrer">Liedtext nachschlagen</a>` : ""}
          </div>
        </div>
        <section class="section">
          <h3>Liedtext</h3>
          <p class="hint">Trage hier deinen Text ein. Er wird automatisch auf diesem Gerät gespeichert und mitgedruckt.</p>
          <div class="field"><textarea id="liedtext" class="liedtext" data-id="${esc(a.id)}" aria-label="Liedtext">${esc(liedtextVon(a))}</textarea></div>
        </section>
        ${zusatzBloecke(a)}
      </div>`;
    zumInhalt();
    ladeBilder(a.id);
  }

  /* ---------- Detailansicht (Verlaufsplan wie in der Skizze) ---------- */

  // Auf schmalen Bildschirmen beginnt der Inhalt erst unter der Navigation
  function istSchmal() {
    return window.matchMedia("(max-width: 900px)").matches;
  }

  function zumInhalt() {
    if (istSchmal()) view.scrollIntoView();
    else window.scrollTo(0, 0);
  }

  function renderDetail(id) {
    state.formDirty = false;
    const a = finde(id);
    if (!a) {
      view.innerHTML = `<div class="page"><div class="empty">Dieses Angebot gibt es nicht mehr.<br><a class="btn-link" href="#/">Zur Übersicht</a></div></div>`;
      return;
    }
    if (istLied(a)) return renderLied(a);
    const vorschlaege = liedVorschlaege(a);
    const pills = [
      ALTER[a.alter], a.kategorie, a.dauer + " Min.", vorbereitungText(a.vorbereitung),
      a.gruppe.map((g) => GRUPPEN[g]).join(", "), a.ort.map((o) => ORTE[o]).join(" / "),
      MATERIAL[a.materialTyp], a.jahreszeiten.map((j) => JAHRESZEITEN[j]).join(", ")
    ];
    view.innerHTML = `
      <div class="page">
        <div class="detail-head">
          <a class="btn-link" href="#/">← Zur Übersicht</a>
          <div class="actions">
            ${aktionKnoepfe(a)}
            ${istEigen(a)
              ? `<a class="btn" href="#/bearbeiten/${encodeURIComponent(a.id)}">Bearbeiten</a>
                 <button class="btn btn-danger" data-loeschen="${esc(a.id)}">Löschen</button>`
              : `<a class="btn" href="#/kopie/${encodeURIComponent(a.id)}">Als Kopie bearbeiten</a>`}
          </div>
        </div>
        <div class="detail-title">
          <div class="area"><span class="dot dot-${esc(a.bereich)}"></span>${esc(herkunft(a))}</div>
          <h2>${esc(a.titel)}</h2>
          <p class="desc">${esc(a.kurz)}</p>
          <div class="pills">${pills.map((p) => `<span class="pill">${esc(p)}</span>`).join("")}${themenVon(a).map((t) => `<span class="pill">${esc(THEMEN.find((x) => x.id === t).name)}</span>`).join("")}</div>
        </div>
        ${a.sicherheit ? `<div class="notice"><strong>Sicherheit:</strong> ${esc(a.sicherheit)}</div>` : ""}
        <div class="detail-grid">
          <div class="plan">
            <table>
              <thead><tr>
                <th class="col-phase" scope="col"><span class="sr">Phase</span></th>
                <th scope="col">Inhalt</th>
                <th scope="col">Didaktischer Kommentar</th>
                <th class="col-form" scope="col">Sozialform</th>
                <th class="col-mat" scope="col">Material</th>
              </tr></thead>
              <tbody>
                ${Object.entries(PHASEN).map(([key, name]) => {
                  const p = a.phasen[key];
                  return `<tr>
                    <th scope="row">${name}</th>
                    ${Object.entries(SPALTEN).map(([s, label]) => `<td data-label="${label}">${esc(p[s]) || "–"}</td>`).join("")}
                  </tr>`;
                }).join("")}
              </tbody>
            </table>
          </div>
          <div class="goals">
            <section class="goal"><h3>Grobziel</h3><p>${esc(a.grobziel)}</p></section>
            ${a.feinziele.map((f, i) => `<section class="goal"><h3>Feinziel ${i + 1}</h3><p>${esc(f)}</p></section>`).join("")}
          </div>
        </div>
        ${vorschlaege.length ? `
        <section class="section">
          <h3>Passende Lieder</h3>
          <div class="pills">${vorschlaege.map((l) => `<a class="btn" href="#/angebot/${encodeURIComponent(l.id)}">♪ ${esc(l.titel)}</a>`).join("")}</div>
        </section>` : ""}
        ${zusatzBloecke(a)}
      </div>`;
    zumInhalt();
    ladeBilder(a.id);
  }

  /* ---------- Drucken ---------- */

  function druckBilder(bilder) {
    return bilder.length ? `<div class="d-bilder">${bilder.map((b) => `<img src="${esc(b.daten)}" alt="">`).join("")}</div>` : "";
  }

  function druckSeite(a, bilder) {
    const tags = tagsVon(a).length ? `<p class="d-meta">Tags: ${tagsVon(a).map(esc).join(", ")}</p>` : "";
    if (istLied(a)) {
      return `<article class="d-seite">
        <h1>${esc(a.titel)}</h1>
        <p class="d-meta">${esc(herkunft(a))} · ${esc(alterKurz(a))} · ${esc(a.kurz)}</p>
        <p class="d-meta">Lied: ${esc(a.link)}</p>
        <div class="d-text">${esc(liedtextVon(a)) || "Noch kein Liedtext eingetragen."}</div>
        ${tags}${druckBilder(bilder)}
      </article>`;
    }
    return `<article class="d-seite">
      <h1>${esc(a.titel)}</h1>
      <p class="d-meta">${esc(herkunft(a))} · ${esc(ALTER[a.alter])} · ${esc(a.kategorie)}</p>
      <p class="d-meta">${esc(a.dauer)} Min. · ${esc(vorbereitungText(a.vorbereitung))} · ${a.gruppe.map((g) => esc(GRUPPEN[g])).join(", ")} · ${a.ort.map((o) => esc(ORTE[o])).join(" / ")}</p>
      ${a.sicherheit ? `<p class="d-sicher"><strong>Sicherheit:</strong> ${esc(a.sicherheit)}</p>` : ""}
      <p><strong>Grobziel:</strong> ${esc(a.grobziel)}</p>
      ${a.feinziele.map((f, i) => `<p><strong>Feinziel ${i + 1}:</strong> ${esc(f)}</p>`).join("")}
      <table>
        <thead><tr><th>Phase</th>${Object.values(SPALTEN).map((s) => `<th>${s}</th>`).join("")}</tr></thead>
        <tbody>${Object.entries(PHASEN).map(([key, name]) => `<tr><th>${name}</th>${Object.keys(SPALTEN).map((s) => `<td>${esc(a.phasen[key][s]) || "–"}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
      ${tags}${druckBilder(bilder)}
    </article>`;
  }

  async function drucke(ids) {
    const liste = ids.map(finde).filter(Boolean);
    if (!liste.length) return;
    const seiten = await Promise.all(liste.map(async (a) => druckSeite(a, await bilderVon(a.id).catch(() => []))));
    druckEl.innerHTML = seiten.join("");
    await Promise.all(Array.from(druckEl.querySelectorAll("img")).map((img) => img.decode().catch(() => {})));
    window.print();
  }

  /* ---------- Konfigurator ---------- */

  function leeresAngebot() {
    const phase = () => ({ inhalt: "", kommentar: "", sozialform: "", material: "" });
    const [typ, x, y] = state.ansicht.split(":");
    const vorwahl = (typ === "bereich" || typ === "unter") && !istLiedAnsicht();
    return {
      id: "", titel: "", kurz: "",
      bereich: vorwahl ? x : "",
      unterbereich: vorwahl && typ === "unter" ? y : "", alter: state.alter || "", kategorie: "",
      jahreszeiten: ["ganzjaehrig"], dauer: 15, vorbereitung: 0, gruppe: [], ort: [], materialTyp: "",
      grobziel: "", feinziele: ["", ""], sicherheit: "",
      phasen: { einstieg: phase(), hauptteil: phase(), schluss: phase() }
    };
  }

  function feinzielZeile(wert, nr) {
    return `<div class="feinziel-row">
      <input class="input" name="feinziel" value="${esc(wert)}" aria-label="Feinziel ${nr}"
        placeholder="Die Kinder üben …, indem sie …">
      <button type="button" class="btn" data-action="feinziel-weg" aria-label="Feinziel entfernen">✕</button>
    </div>`;
  }

  function checks(name, map, gewaehlt) {
    return `<div class="checks">${Object.entries(map).map(([k, v]) => `
      <label class="check"><input type="checkbox" name="${name}" value="${esc(k)}"${gewaehlt.includes(k) ? " checked" : ""}>${esc(v)}</label>`).join("")}</div>`;
  }

  function bereichOptionen(gewaehlt) {
    const gruppen = [RUBRIKEN.bildung, RUBRIKEN.beduerfnisse].map((r) => `<optgroup label="${esc(r.name)}">${r.bereiche.map((b) =>
      `<option value="${b.id}"${b.id === gewaehlt ? " selected" : ""}>${esc(b.name)}</option>`).join("")}</optgroup>`);
    return `<option value="">Bitte wählen</option>` + gruppen.join("");
  }

  function unterOptionen(bereichId, gewaehlt) {
    const b = bereichVon(bereichId);
    if (!b || !b.unter) return `<option value="">Keine</option>`;
    return options(b.unter, gewaehlt || "", b.pflicht ? "Bitte wählen" : "Keine");
  }

  function renderForm(vorlage, modus) {
    const a = vorlage;
    const titel = modus === "bearbeiten" ? "Angebot bearbeiten" : modus === "kopie" ? "Kopie bearbeiten" : "Neues Angebot anlegen";
    const katMap = Object.fromEntries(KATEGORIEN.map((k) => [k, k]));
    view.innerHTML = `
      <div class="page">
        <div class="result-head"><h2>${titel}</h2></div>
        <form class="form" id="form" novalidate data-id="${esc(modus === "bearbeiten" ? a.id : "")}">
          <div id="fehler"></div>
          <section class="section">
            <h3>Grunddaten</h3>
            <div class="fields">
              <label class="field wide">Titel <span class="req">(Pflicht)</span><input class="input" name="titel" value="${esc(a.titel)}"></label>
              <label class="field wide">Kurzbeschreibung<input class="input" name="kurz" value="${esc(a.kurz)}" placeholder="Ein Satz für die Übersicht"></label>
              <label class="field">Bereich <span class="req">(Pflicht)</span><select name="bereich">${bereichOptionen(a.bereich)}</select></label>
              <label class="field">Unterkategorie (bei Kinderbedürfnissen Pflicht)<select name="unterbereich">${unterOptionen(a.bereich, a.unterbereich)}</select></label>
              <label class="field">Zielgruppe <span class="req">(Pflicht)</span><select name="alter">${options(ALTER, a.alter, "Bitte wählen")}</select></label>
              <label class="field">Spielkategorie <span class="req">(Pflicht)</span><select name="kategorie">${options(katMap, a.kategorie, "Bitte wählen")}</select></label>
              <label class="field">Dauer in Minuten<input class="input" type="number" min="1" max="240" name="dauer" value="${esc(a.dauer)}"></label>
              <label class="field">Vorbereitung in Minuten<input class="input" type="number" min="0" max="240" name="vorbereitung" value="${esc(a.vorbereitung)}"></label>
              <label class="field">Material <span class="req">(Pflicht)</span><select name="materialTyp">${options(MATERIAL, a.materialTyp, "Bitte wählen")}</select></label>
            </div>
            <fieldset class="field"><legend>Jahreszeit</legend>${checks("jahreszeiten", JAHRESZEITEN, a.jahreszeiten)}</fieldset>
            <fieldset class="field"><legend>Gruppengröße <span class="req">(Pflicht)</span></legend>${checks("gruppe", GRUPPEN, a.gruppe)}</fieldset>
            <fieldset class="field"><legend>Ort <span class="req">(Pflicht)</span></legend>${checks("ort", ORTE, a.ort)}</fieldset>
          </section>
          <section class="section">
            <h3>Ziele</h3>
            <label class="field">Grobziel <span class="req">(Pflicht)</span><input class="input" name="grobziel" value="${esc(a.grobziel)}"></label>
            <div class="field">Feinziele <span class="req">(mindestens eines)</span>
              <div class="fields" id="feinziele" style="grid-template-columns:minmax(0,1fr)">
                ${a.feinziele.map((f, i) => feinzielZeile(f, i + 1)).join("")}
              </div>
              <div><button type="button" class="btn-link" data-action="feinziel-neu">+ Feinziel hinzufügen</button></div>
            </div>
          </section>
          ${Object.entries(PHASEN).map(([key, name]) => `
          <section class="section">
            <h3>${name}</h3>
            <div class="fields">
              <label class="field wide">Inhalt${key === "hauptteil" ? ` <span class="req">(Pflicht)</span>` : ""}<textarea name="${key}.inhalt">${esc(a.phasen[key].inhalt)}</textarea></label>
              <label class="field wide">Didaktischer Kommentar<textarea name="${key}.kommentar">${esc(a.phasen[key].kommentar)}</textarea></label>
              <label class="field">Sozialform<input class="input" name="${key}.sozialform" value="${esc(a.phasen[key].sozialform)}"></label>
              <label class="field">Material<input class="input" name="${key}.material" value="${esc(a.phasen[key].material)}"></label>
            </div>
          </section>`).join("")}
          <section class="section">
            <h3>Sicherheit</h3>
            <label class="field">Sicherheitshinweis<textarea name="sicherheit" placeholder="Zum Beispiel Verschluckungsgefahr, Aufsicht, Allergien">${esc(a.sicherheit)}</textarea></label>
          </section>
          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Speichern</button>
            <button type="button" class="btn" data-action="abbrechen">Abbrechen</button>
          </div>
        </form>
      </div>`;
    state.formDirty = false;
    zumInhalt();
  }

  function ausFormular(form) {
    const d = new FormData(form);
    const text = (name) => String(d.get(name) || "").trim();
    const phase = (key) => ({
      inhalt: text(key + ".inhalt"), kommentar: text(key + ".kommentar"),
      sozialform: text(key + ".sozialform"), material: text(key + ".material")
    });
    const jahreszeiten = d.getAll("jahreszeiten");
    return {
      id: form.dataset.id || "eigen-" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
      titel: text("titel"), kurz: text("kurz"), bereich: text("bereich"),
      unterbereich: text("unterbereich"),
      alter: text("alter"), kategorie: text("kategorie"),
      jahreszeiten: jahreszeiten.length ? jahreszeiten : ["ganzjaehrig"],
      dauer: Number(text("dauer")), vorbereitung: Number(text("vorbereitung")),
      gruppe: d.getAll("gruppe"), ort: d.getAll("ort"), materialTyp: text("materialTyp"),
      grobziel: text("grobziel"),
      feinziele: d.getAll("feinziel").map((f) => String(f).trim()).filter(Boolean),
      sicherheit: text("sicherheit"),
      phasen: { einstieg: phase("einstieg"), hauptteil: phase("hauptteil"), schluss: phase("schluss") }
    };
  }

  // Gilt für Formular und Import gleichermaßen
  function pruefe(a) {
    const fehler = [];
    if (!a.titel) fehler.push("Titel fehlt.");
    const bereich = ANGEBOT_BEREICHE.find((b) => b.id === a.bereich);
    if (!bereich) fehler.push("Bereich fehlt.");
    else if (a.unterbereich ? !unterName(a.bereich, a.unterbereich) : bereich.pflicht) fehler.push("Unterkategorie fehlt.");
    if (!ALTER[a.alter]) fehler.push("Zielgruppe fehlt.");
    if (!KATEGORIEN.includes(a.kategorie)) fehler.push("Spielkategorie fehlt.");
    if (!MATERIAL[a.materialTyp]) fehler.push("Material fehlt.");
    if (!a.gruppe.length) fehler.push("Gruppengröße fehlt.");
    if (!a.ort.length) fehler.push("Ort fehlt.");
    if (!(a.dauer >= 1 && a.dauer <= 240)) fehler.push("Dauer muss zwischen 1 und 240 Minuten liegen.");
    if (!(a.vorbereitung >= 0 && a.vorbereitung <= 240)) fehler.push("Vorbereitung muss zwischen 0 und 240 Minuten liegen.");
    if (!a.grobziel) fehler.push("Grobziel fehlt.");
    if (!a.feinziele.length) fehler.push("Mindestens ein Feinziel fehlt.");
    if (!a.phasen.hauptteil.inhalt) fehler.push("Inhalt des Hauptteils fehlt.");
    return fehler;
  }

  function speichereAngebot(form) {
    const a = ausFormular(form);
    const fehler = pruefe(a);
    const box = document.getElementById("fehler");
    if (fehler.length) {
      box.innerHTML = `<div class="errors" role="alert">Bitte ergänzen:<ul>${fehler.map((f) => `<li>${esc(f)}</li>`).join("")}</ul></div>`;
      box.scrollIntoView({ block: "center" });
      return;
    }
    const i = state.eigene.findIndex((x) => x.id === a.id);
    if (i >= 0) state.eigene[i] = a; else state.eigene.push(a);
    speichere(KEY_EIGENE, state.eigene);
    state.formDirty = false;
    toast("Gespeichert. Das Angebot liegt nur auf diesem Gerät, solange du es nicht exportierst.");
    location.hash = "#/angebot/" + encodeURIComponent(a.id);
  }

  /* ---------- Merkliste, Löschen ---------- */

  function merken(id) {
    const i = state.merkliste.indexOf(id);
    if (i >= 0) state.merkliste.splice(i, 1); else state.merkliste.push(id);
    speichere(KEY_MERKLISTE, state.merkliste);
    neuZeichnen();
  }

  function druckwahl(id) {
    const i = state.druckauswahl.indexOf(id);
    if (i >= 0) state.druckauswahl.splice(i, 1); else state.druckauswahl.push(id);
    speichere(KEY_DRUCK, state.druckauswahl);
    neuZeichnen();
  }

  // Zeichnet die aktuelle Ansicht neu, ohne dass die Seite an den Anfang springt
  function neuZeichnen() {
    const y = window.scrollY;
    renderSidebar();
    route();
    window.scrollTo(0, y);
  }

  function tagHinzu(id, roh) {
    const tag = roh.trim().slice(0, TAG_MAX_ZEICHEN);
    if (!tag) return;
    const tags = zusatzVon(id).tags || [];
    if (tags.some((t) => t.toLowerCase() === tag.toLowerCase())) {
      toast("Diesen Tag gibt es hier schon.");
      return;
    }
    setzeZusatz(id, { tags: tags.concat(tag) });
    neuZeichnen();
  }

  function tagWeg(id, tag) {
    setzeZusatz(id, { tags: (zusatzVon(id).tags || []).filter((t) => t !== tag) });
    if (state.filter.tag === tag && !alleTags().includes(tag)) state.filter.tag = "";
    neuZeichnen();
  }

  async function loeschen(id) {
    const a = finde(id);
    if (!a || !istEigen(a) || !confirm(`„${a.titel}“ wirklich löschen? Das lässt sich nicht rückgängig machen.`)) return;
    state.eigene = state.eigene.filter((x) => x.id !== id);
    state.merkliste = state.merkliste.filter((x) => x !== id);
    state.druckauswahl = state.druckauswahl.filter((x) => x !== id);
    delete state.zusatz[id];
    speichere(KEY_EIGENE, state.eigene);
    speichere(KEY_MERKLISTE, state.merkliste);
    speichere(KEY_DRUCK, state.druckauswahl);
    speichere(KEY_ZUSATZ, state.zusatz);
    const bilder = await bilderVon(id).catch(() => []);
    await Promise.all(bilder.map((b) => bildWeg(b.id).catch(() => {})));
    renderSidebar();
    toast("Angebot gelöscht.");
    location.hash = "#/";
  }

  /* ---------- Export und Import ---------- */

  async function exportieren() {
    const bilder = await alleBilder().catch(() => []);
    const hatZusatz = Object.keys(state.zusatz).length > 0;
    if (!state.eigene.length && !hatZusatz && !bilder.length) {
      toast("Es gibt noch nichts Eigenes zum Exportieren.");
      return;
    }
    const inhalt = JSON.stringify({
      format: "kita-angebote", version: 2, angebote: state.eigene, zusatz: state.zusatz,
      bilder: bilder.map((b) => ({ angebotId: b.angebotId, daten: b.daten }))
    }, null, 2);
    const url = URL.createObjectURL(new Blob([inhalt], { type: "application/json" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "kita-angebote-" + new Date().toISOString().slice(0, 10) + ".json";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    toast("Exportiert: " + state.eigene.length + " eigene Angebote, " + bilder.length + " Bilder, dazu Tags und Liedtexte.");
  }

  function bereinigeZusatz(roh) {
    const sauber = {};
    if (!roh || typeof roh !== "object") return sauber;
    Object.entries(roh).forEach(([id, z]) => {
      if (!z || typeof z !== "object") return;
      const tags = Array.isArray(z.tags) ? z.tags.filter((t) => typeof t === "string" && t.trim()).map((t) => t.trim().slice(0, TAG_MAX_ZEICHEN)) : [];
      const liedtext = typeof z.liedtext === "string" ? z.liedtext : "";
      if (tags.length || liedtext) sauber[id] = { tags, liedtext };
    });
    return sauber;
  }

  function bereinigeBilder(roh) {
    if (!Array.isArray(roh)) return [];
    // Nur Rasterbilder annehmen: SVG könnte Skripte enthalten
    return roh.filter((b) => b && typeof b.angebotId === "string" && typeof b.daten === "string" && /^data:image\/(jpeg|png|webp);base64,/.test(b.daten));
  }

  function bereinige(roh) {
    const text = (v) => (typeof v === "string" ? v.trim() : "");
    const liste = (v, erlaubt) => (Array.isArray(v) ? v.filter((x) => Object.prototype.hasOwnProperty.call(erlaubt, x)) : []);
    const phase = (p) => {
      p = p && typeof p === "object" ? p : {};
      return { inhalt: text(p.inhalt), kommentar: text(p.kommentar), sozialform: text(p.sozialform), material: text(p.material) };
    };
    const phasen = roh.phasen && typeof roh.phasen === "object" ? roh.phasen : {};
    const jahreszeiten = liste(roh.jahreszeiten, JAHRESZEITEN);
    const id = text(roh.id);
    return {
      id: /^eigen-[a-z0-9-]+$/i.test(id) ? id : "eigen-" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
      titel: text(roh.titel), kurz: text(roh.kurz), bereich: text(roh.bereich),
      unterbereich: text(roh.unterbereich),
      alter: text(roh.alter), kategorie: text(roh.kategorie),
      jahreszeiten: jahreszeiten.length ? jahreszeiten : ["ganzjaehrig"],
      dauer: Number(roh.dauer), vorbereitung: Number(roh.vorbereitung),
      gruppe: liste(roh.gruppe, GRUPPEN), ort: liste(roh.ort, ORTE), materialTyp: text(roh.materialTyp),
      grobziel: text(roh.grobziel),
      feinziele: Array.isArray(roh.feinziele) ? roh.feinziele.map(text).filter(Boolean) : [],
      sicherheit: text(roh.sicherheit),
      phasen: { einstieg: phase(phasen.einstieg), hauptteil: phase(phasen.hauptteil), schluss: phase(phasen.schluss) }
    };
  }

  async function importieren(datei) {
    if (datei.size > IMPORT_MAX_BYTES) {
      toast("Die Datei ist zu groß für einen Import.");
      return;
    }
    let daten;
    try {
      daten = JSON.parse(await datei.text());
    } catch (e) {
      toast("Die Datei konnte nicht gelesen werden.");
      return;
    }
    if (!daten || daten.format !== "kita-angebote" || !Array.isArray(daten.angebote)) {
      toast("Das ist keine Export-Datei dieses Tools.");
      return;
    }
    const gueltig = daten.angebote.filter((r) => r && typeof r === "object").map(bereinige).filter((a) => !pruefe(a).length);
    const verworfen = daten.angebote.length - gueltig.length;
    const zusatz = bereinigeZusatz(daten.zusatz);
    const bestehend = await alleBilder().catch(() => []);
    const bilder = bereinigeBilder(daten.bilder).filter((b) => !bestehend.some((x) => x.angebotId === b.angebotId && x.daten === b.daten));
    if (!gueltig.length && !Object.keys(zusatz).length && !bilder.length) {
      toast("In der Datei wurde nichts Importierbares gefunden.");
      return;
    }
    const vorhanden = gueltig.filter((a) => state.eigene.some((x) => x.id === a.id)).length;
    const frage = `${gueltig.length - vorhanden} neue Angebote importieren` +
      (vorhanden ? ` und ${vorhanden} vorhandene überschreiben` : "") +
      `, dazu ${bilder.length} Bilder und Tags oder Liedtexte zu ${Object.keys(zusatz).length} Einträgen` +
      (verworfen ? `? ${verworfen} ungültige Angebote werden übersprungen.` : "?");
    if (!confirm(frage)) return;
    gueltig.forEach((a) => {
      const i = state.eigene.findIndex((x) => x.id === a.id);
      if (i >= 0) state.eigene[i] = a; else state.eigene.push(a);
    });
    speichere(KEY_EIGENE, state.eigene);
    Object.entries(zusatz).forEach(([id, z]) => setzeZusatz(id, z));
    let bildFehler = 0;
    for (const b of bilder) {
      await bildHinzu(b.angebotId, b.daten).catch(() => { bildFehler += 1; });
    }
    state.ansicht = gueltig.length ? "eigene" : "alle";
    toast(bildFehler ? `Import fertig, aber ${bildFehler} Bilder konnten nicht gespeichert werden.` : "Import abgeschlossen.");
    location.hash = "#/";
    renderSidebar();
    route();
  }

  /* ---------- Navigation ---------- */

  function route() {
    const teile = location.hash.replace(/^#\/?/, "").split("/");
    const id = teile[1] ? decodeURIComponent(teile[1]) : "";
    if (teile[0] === "angebot") return renderDetail(id);
    if (teile[0] === "neu") return renderForm(leeresAngebot(), "neu");
    if (teile[0] === "bearbeiten" || teile[0] === "kopie") {
      const a = finde(id);
      if (!a || (teile[0] === "bearbeiten" && !istEigen(a))) return renderDetail(id);
      const vorlage = JSON.parse(JSON.stringify(a));
      if (teile[0] === "kopie") vorlage.titel += " (Kopie)";
      return renderForm(vorlage, teile[0]);
    }
    renderListe();
  }

  function zurListe() {
    if (location.hash && location.hash !== "#/") location.hash = "#/";
    else route();
  }

  function darfVerlassen() {
    return !state.formDirty || confirm("Deine Eingaben sind noch nicht gespeichert. Trotzdem verlassen?");
  }

  let letzterHash = location.hash;
  window.addEventListener("hashchange", () => {
    if (state.formDirty && !darfVerlassen()) {
      history.replaceState(null, "", letzterHash || "#/");
      return;
    }
    letzterHash = location.hash;
    state.formDirty = false;
    route();
  });

  window.addEventListener("beforeunload", (e) => {
    if (state.formDirty) e.preventDefault();
  });

  document.addEventListener("click", (e) => {
    const nav = e.target.closest("[data-nav]");
    if (nav) {
      if (!darfVerlassen()) return;
      state.formDirty = false;
      const id = nav.dataset.nav;
      // Zu: aufklappen und anzeigen. Offen und angezeigt: zuklappen. Offen, aber woanders: nur anzeigen.
      if (nav.dataset.gruppe) {
        if (!state.offen.has(id)) state.offen.add(id);
        else if (state.ansicht === id) state.offen.delete(id);
      }
      state.ansicht = id;
      // Auf schmalen Bildschirmen liegt die Navigation über den Ergebnissen und darf sie nicht wegschieben
      const fertigGewaehlt = istSchmal() && !nav.dataset.gruppe;
      if (fertigGewaehlt) state.offen.clear();
      renderSidebar();
      const neu = sidebar.querySelector(`[data-nav="${id}"]`);
      if (neu) neu.focus({ preventScroll: true });
      zurListe();
      if (fertigGewaehlt) view.scrollIntoView();
      return;
    }
    const merk = e.target.closest("[data-merken]");
    if (merk) return merken(merk.dataset.merken);
    const wahl = e.target.closest("[data-druckwahl]");
    if (wahl) return druckwahl(wahl.dataset.druckwahl);
    const druck = e.target.closest("[data-drucken]");
    if (druck) return drucke([druck.dataset.drucken]);
    const bild = e.target.closest("[data-bild-weg]");
    if (bild) {
      const id = location.hash.split("/")[2];
      bildWeg(Number(bild.dataset.bildWeg)).then(() => ladeBilder(decodeURIComponent(id))).catch(() => toast("Das Bild konnte nicht entfernt werden."));
      return;
    }
    const tag = e.target.closest("[data-tag-weg]");
    if (tag) return tagWeg(document.getElementById("tagform").dataset.id, tag.dataset.tagWeg);
    const del = e.target.closest("[data-loeschen]");
    if (del) return loeschen(del.dataset.loeschen);
    const alter = e.target.closest("[data-alter]");
    if (alter) {
      state.alter = alter.dataset.alter;
      speichere(KEY_ALTER, state.alter);
      renderSidebar();
      renderListe();
      return;
    }
    const action = e.target.closest("[data-action]");
    if (!action) return;
    switch (action.dataset.action) {
      case "neu": location.hash = "#/neu"; break;
      case "export": exportieren(); break;
      case "import": importFile.click(); break;
      case "druck-alle": drucke(state.druckauswahl); break;
      case "druck-leeren":
        if (confirm("Druckauswahl wirklich leeren?")) {
          state.druckauswahl = [];
          speichere(KEY_DRUCK, state.druckauswahl);
          neuZeichnen();
        }
        break;
      case "reset":
        state.filter = leereFilter();
        renderSidebar();
        renderListe();
        break;
      case "abbrechen":
        if (darfVerlassen()) {
          state.formDirty = false;
          history.length > 1 ? history.back() : zurListe();
        }
        break;
      case "feinziel-neu": {
        const box = document.getElementById("feinziele");
        box.insertAdjacentHTML("beforeend", feinzielZeile("", box.children.length + 1));
        box.lastElementChild.querySelector("input").focus();
        break;
      }
      case "feinziel-weg":
        action.closest(".feinziel-row").remove();
        state.formDirty = true;
        break;
    }
  });

  document.addEventListener("input", (e) => {
    if (e.target.closest("#form")) state.formDirty = true;
    if (e.target.id === "liedtext") setzeZusatz(e.target.dataset.id, { liedtext: e.target.value });
    if (e.target.id === "suche") {
      state.filter.suche = e.target.value;
      renderSidebar();
      renderErgebnis();
    }
  });

  document.addEventListener("change", (e) => {
    if (e.target.name === "bereich" && e.target.closest("#form")) {
      e.target.form.elements.unterbereich.innerHTML = unterOptionen(e.target.value, "");
      return;
    }
    if (e.target.classList.contains("bild-upload")) {
      const dateien = Array.from(e.target.files);
      e.target.value = "";
      bilderHochladen(e.target.dataset.id, dateien);
      return;
    }
    const name = e.target.dataset.filter;
    if (!name) return;
    state.filter[name] = e.target.value;
    e.target.classList.toggle("is-set", e.target.value !== "");
    renderSidebar();
    renderErgebnis();
  });

  document.addEventListener("submit", (e) => {
    if (e.target.id === "tagform") {
      e.preventDefault();
      tagHinzu(e.target.dataset.id, e.target.elements.tag.value);
      return;
    }
    if (e.target.id !== "form") return;
    e.preventDefault();
    speichereAngebot(e.target);
  });

  importFile.addEventListener("change", () => {
    const datei = importFile.files[0];
    importFile.value = "";
    if (datei) importieren(datei);
  });

  // Angebote stehen nach Bereich und Alter sortiert, unabhängig von der Reihenfolge der Datendateien
  const rang = (a) => ALLE_BEREICHE.findIndex((b) => b.id === a.bereich) * 2 + (a.alter === "3-6" ? 1 : 0);
  window.ANGEBOTE.sort((x, y) => rang(x) - rang(y));

  renderSidebar();
  route();
})();

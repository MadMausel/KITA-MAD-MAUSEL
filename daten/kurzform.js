// Kurzschreibweise für die Datendateien in diesem Ordner.
// e, h, sc = Einstieg, Hauptteil, Schluss, jeweils [Inhalt, didaktischer Kommentar, Sozialform, Material].
window.fuegeHinzu = function (bereich, unterbereich, alter, liste) {
  const phase = (p) => ({ inhalt: p[0], kommentar: p[1], sozialform: p[2], material: p[3] });
  liste.forEach((x) => {
    window.ANGEBOTE.push({
      id: x.id, titel: x.t, kurz: x.k, bereich: bereich, unterbereich: x.u || unterbereich,
      alter: alter, kategorie: x.kat, jahreszeiten: x.jz || ["ganzjaehrig"],
      dauer: x.d, vorbereitung: x.v, gruppe: x.g, ort: x.o, materialTyp: x.m,
      grobziel: x.gz, feinziele: x.fz, sicherheit: x.s || "",
      phasen: { einstieg: phase(x.e), hauptteil: phase(x.h), schluss: phase(x.sc) }
    });
  });
};

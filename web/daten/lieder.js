// Kinderlieder: nur Titel und Links, alle Videos wurden auf Erreichbarkeit geprüft. Liedtexte tragen die Nutzer in der App selbst ein.
// textSeite = Seite, auf der der Liedtext nachgelesen werden kann (falls gefunden).
(function () {
  const yt = (id) => "https://www.youtube.com/watch?v=" + id;
  const archiv = (s) => "https://www.volksliederarchiv.de/" + s + "/";
  const lied = (id, bereich, unterbereich, alter, titel, quelle, video, textSeite, themen) => ({
    typ: "lied", id: "lied-" + id, bereich, unterbereich, alter, titel,
    kurz: "Aufnahme: " + quelle, link: yt(video), textSeite: textSeite ? archiv(textSeite) : "", themen
  });
  window.LIEDER = [
    lied("hunger", "essen", "", "alle", "Wir haben Hunger, Hunger, Hunger", "Sing Kinderlieder", "FuzQraV8d1Q", "wir-haben-hunger", ["essen"]),
    lied("piep", "essen", "", "alle", "Piep, piep, piep, wir haben uns alle lieb", "Andrea Jung und die Hasenkinder", "pOAkH263hn4", "", ["essen", "gemeinschaft"]),
    lied("morgen", "begruessung", "", "alle", "Guten Morgen, guten Morgen", "LooLoo Kinderlieder", "7Ubq_GyRhH8", "", ["gemeinschaft"]),
    lied("kreis", "begruessung", "", "alle", "Guten Morgen, wir sitzen im Kreis", "Kinderlieder zum Mitsingen und Bewegen", "ngq2smvobXo", "", ["gemeinschaft", "bewegung"]),
    lied("wiedersehen", "abschied", "", "3-6", "Wir sagen auf Wiedersehen", "Abenteuer mit Kess", "_3OSYnALK6c", "", ["gemeinschaft"]),
    lied("ciao", "abschied", "", "3-6", "Wir sagen ciao, Goodbye, auf Wiedersehen", "Simone Sommerland", "q1xgkmq406g", "", ["gemeinschaft"]),
    lied("aufraeumzeit", "ueberleitung", "", "alle", "Es ist Aufräumzeit", "Floh im Ohr TV", "K1IQ7VDljRE", "", ["gemeinschaft"]),
    lied("aufraeumblitz", "ueberleitung", "", "3-6", "Aufräumblitz", "Hurra Kinderlieder", "8SoO8rbyUgw", "", ["gemeinschaft"]),
    lied("voegel", "jahreszeiten", "fruehling", "alle", "Alle Vögel sind schon da", "Sing Kinderlieder", "VnrtKbZhiqw", "alle-voegel-sind-schon-da", ["tiere", "natur"]),
    lied("trarira", "jahreszeiten", "sommer", "alle", "Trarira, der Sommer, der ist da", "Sing Kinderlieder", "D5tpR-LQ19c", "", ["natur"]),
    lied("waelder", "jahreszeiten", "herbst", "3-6", "Bunt sind schon die Wälder", "Sing Kinderlieder", "9vGqP7_21Tk", "bunt-sind-schon-die-waelder", ["natur", "farben"]),
    lied("schnee", "jahreszeiten", "winter", "alle", "Schneeflöckchen, Weißröckchen", "Sing Kinderlieder", "d2e1CuFttLo", "schneefloeckchen-weissroeckchen", ["wetter", "natur"]),
    lied("froehlich", "freude", "", "alle", "Wenn du fröhlich bist", "Sing Kinderlieder", "ie7n24MWzuc", "", ["gefuehle", "bewegung"]),
    lied("froehlich-fischer", "freude", "", "alle", "Wenn du fröhlich bist (Helene Fischer)", "Helene Fischer", "KkW1Ll-K1iM", "", ["gefuehle", "bewegung"]),
    lied("ringel", "freude", "", "alle", "Ringel, Ringel, Reihe", "Sing Kinderlieder", "xcrv0F7HoJ4", "ringel-ringel-reihe", ["gemeinschaft", "bewegung"]),
    lied("geboren", "geburtstag", "", "alle", "Wie schön, dass du geboren bist", "Rolf Zuckowski und seine Freunde", "BiJo94N7kTI", "", ["gemeinschaft", "gefuehle"]),
    lied("heile", "aua", "", "alle", "Heile, heile Segen", "Sing Song Kinderlieder", "BTUDlblQJmQ", "heile-heile-segen", ["gefuehle", "koerper"]),
    lied("aua", "aua", "", "alle", "Mama, ich habe ein Aua", "Little Angel Deutsch", "vDkcM7hkGhc", "", ["gefuehle", "koerper", "familie"]),
    lied("kopf", "sprachbildung", "", "alle", "Kopf, Schulter, Knie und Fuß", "HeyKids Kinderlieder TV", "iCqA7E36bs0", "", ["koerper", "bewegung"]),
    lied("zappel", "zahlen", "", "alle", "Zehn kleine Zappelmänner", "Sing Kinderlieder", "ui-9DgkerWI", "", ["zahlen", "koerper"]),
    lied("danke-mama", "eltern", "", "alle", "Danke Mama", "Kinderlieder zum Mitsingen und Bewegen", "ZSE8zCGdU70", "", ["familie", "gefuehle"]),
    lied("papa", "eltern", "", "alle", "Unser Papa ist der Beste", "Simone Sommerland", "iv-Yssnab3w", "", ["familie", "gefuehle"]),
    lied("tuff", "reihe", "", "alle", "Tuff, tuff, tuff, die Eisenbahn", "Kindergarten Marienau Werneck", "bcE46L6p4j8", "", ["bewegung", "gemeinschaft"]),
    lied("spazieren", "reihe", "", "alle", "Wir wolln einmal spazieren gehn", "Simone Sommerland", "uB3tZ0_NUJE", "", ["bewegung", "natur"]),
    lied("joerg", "tiere", "", "alle", "Onkel Jörg hat einen Bauernhof", "Erikas Weltentdecker", "46V2ahh9GaA", "", ["tiere"]),
    lied("kikeriki", "tiere", "", "alle", "Kikeriki (Auf unsrem schönen Bauernhof)", "alenaae", "3wjsSH_yfVE", "", ["tiere"]),
    lied("entchen", "tiere", "", "alle", "Alle meine Entchen", "Sing Kinderlieder", "TBT6edKlNj4", "alle-meine-entchen", ["tiere", "wasser"]),
    lied("regnet", "wetter", "", "alle", "Es regnet, es regnet", "Lilli singt Kinderlieder", "epMG6frUSHA", "es-regnet-es-regnet", ["wetter", "wasser"]),
    lied("kindlein", "einschlafen", "", "alle", "Schlaf, Kindlein, schlaf", "Sing Kinderlieder", "b6K3a_ug9JE", "schlaf-kindlein-schlaf", ["ruhe"]),
    lied("mond", "einschlafen", "", "alle", "Der Mond ist aufgegangen", "Muenchenmedia", "R14eCTUl2AE", "der-mond-ist-aufgegangen", ["ruhe"]),
    lied("jakob", "aufwachen", "", "alle", "Bruder Jakob", "Sing Kinderlieder", "TzF0C6Wc1bw", "bruder-jakob", ["ruhe", "gemeinschaft"]),
    lied("sonnenschein", "aufwachen", "", "alle", "Guten Morgen Sonnenschein", "KiPaMu Kinderparadies Musik", "0_e-ew4c_pg", "", ["gemeinschaft", "wetter"])
  ];
})();

// Mitgelieferte Bildungsangebote: je eines pro Bereich und Altersgruppe. Alle Texte sind Eigenformulierungen.
// Die übrigen Angebote stehen im Ordner daten/ (Ziel: 168 Bildungsangebote und 76 zu Kinderbedürfnissen).
window.ANGEBOTE = [
  {
    id: "koe-u3-kissenberg",
    titel: "Expedition zum Kissenberg",
    kurz: "Die Kinder klettern, krabbeln und rollen über eine Landschaft aus Kissen und Matten.",
    bereich: "koerper", alter: "0-3", kategorie: "Bewegungsspiele",
    jahreszeiten: ["ganzjaehrig"], dauer: 20, vorbereitung: 5,
    gruppe: ["klein"], ort: ["drinnen"], materialTyp: "alltag",
    grobziel: "Die Kinder erkunden ihren Körper und erweitern ihre Bewegungssicherheit.",
    feinziele: [
      "Die Kinder erproben ihr Gleichgewicht, indem sie über unterschiedlich weiche Untergründe krabbeln oder gehen.",
      "Die Kinder erleben Selbstwirksamkeit, indem sie den Kissenberg auf ihrem eigenen Weg überwinden."
    ],
    sicherheit: "Weichen Untergrund und freie Sturzräume sicherstellen. Keine Kissen stapeln, die kippen oder das Gesicht bedecken können. Die Fachkraft bleibt in Griffnähe.",
    phasen: {
      einstieg: {
        inhalt: "Die Fachkraft krabbelt selbst zum Kissenberg und lädt mit Worten und Blicken ein: „Schau mal, wer kommt mit auf den Berg?“",
        kommentar: "Das Vormachen gibt Sicherheit und weckt Neugier. Die Einladung lässt jedem Kind die Wahl, ob und wann es sich beteiligt.",
        sozialform: "Kleingruppe am Boden",
        material: "Matten, Kissen, Decken"
      },
      hauptteil: {
        inhalt: "Die Kinder erkunden den Berg frei: hochkrabbeln, herunterrollen, sich hineinfallen lassen. Die Fachkraft benennt die Bewegungen („Du krabbelst ganz hoch!“) und verändert die Landschaft nach den Ideen der Kinder.",
        kommentar: "Kinder bauen ihr Körperbild über eigene Bewegung auf. Das Benennen verbindet die Bewegung mit Sprache, ohne einen Ablauf vorzugeben, denn jedes Kind wählt sein eigenes Tempo.",
        sozialform: "Freie Bewegung, begleitet",
        material: "Matten, Kissen, Decken"
      },
      schluss: {
        inhalt: "Alle legen sich auf die Kissen und „ruhen sich auf dem Berg aus“. Die Fachkraft summt leise und streicht auf Wunsch über Arme oder Rücken.",
        kommentar: "Der Wechsel von Anstrengung und Entspannung ist selbst eine Gesundheitserfahrung. Berührung nur anbieten, wenn das Kind sie möchte.",
        sozialform: "Kleingruppe, ruhend",
        material: "Kissen"
      }
    }
  },
  {
    id: "koe-e-herbststurm",
    titel: "Windstille, Wind und Sturm",
    kurz: "Die Kinder bewegen sich als Herbstblätter und reagieren auf drei Signale der Fachkraft.",
    bereich: "koerper", alter: "3-6", kategorie: "Bewegungsspiele",
    jahreszeiten: ["herbst"], dauer: 20, vorbereitung: 5,
    gruppe: ["gross"], ort: ["drinnen", "draussen"], materialTyp: "alltag",
    grobziel: "Die Kinder erweitern ihre Bewegungsfähigkeit und ihre Körperbeherrschung.",
    feinziele: [
      "Die Kinder üben, ihr Tempo zu steuern, indem sie auf die Signale für Wind, Sturm und Windstille reagieren.",
      "Die Kinder nehmen Anstrengung und Erholung wahr, indem sie zwischen schnellen Läufen und völliger Ruhe wechseln."
    ],
    sicherheit: "Freie Lauffläche ohne Stolperkanten schaffen. Vorab die Regel „Wir weichen einander aus“ besprechen.",
    phasen: {
      einstieg: {
        inhalt: "Die Kinder erzählen, was der Wind im Herbst mit den Blättern macht. Jedes Kind sucht sich ein Tuch aus und ist nun ein Blatt am Baum.",
        kommentar: "Die Anknüpfung an eigene Beobachtungen macht das Thema bedeutsam. Das Tuch hilft, in die Rolle zu finden, und macht die Bewegung sichtbar.",
        sozialform: "Sitzkreis",
        material: "Ein Chiffontuch pro Kind"
      },
      hauptteil: {
        inhalt: "Handtrommel leise: Die Blätter schweben langsam. Handtrommel schnell: Der Sturm wirbelt sie durch den Raum. Trommelstille: Alle Blätter liegen auf dem Boden. Später dürfen Kinder selbst trommeln und das Wetter bestimmen.",
        kommentar: "Das Reagieren auf Signale schult Aufmerksamkeit und Impulskontrolle. Wenn Kinder das Trommeln übernehmen, erleben sie Beteiligung und Wirksamkeit in der Gruppe.",
        sozialform: "Gesamtgruppe in Bewegung",
        material: "Handtrommel oder Topf, Tücher"
      },
      schluss: {
        inhalt: "Der Wind legt sich. Alle liegen als Blätter am Boden und spüren dem Herzschlag nach. Die Fachkraft sammelt die „Blätter“ einzeln ein, indem sie ein Tuch sanft über die Hand des Kindes zieht.",
        kommentar: "Die Ruhephase führt die Erregung zurück und lenkt den Blick auf den eigenen Körper. Der ruhige Ablauf erleichtert den Übergang in die nächste Tagessituation.",
        sozialform: "Gesamtgruppe, ruhend",
        material: "Tücher"
      }
    }
  },
  {
    id: "soz-u3-tuch",
    titel: "Wer ist unter dem Tuch?",
    kurz: "Ein Versteckspiel im Kreis, bei dem jedes Kind freudig begrüßt wird, wenn es wieder auftaucht.",
    bereich: "sozio", alter: "0-3", kategorie: "Kennenlernspiele",
    jahreszeiten: ["ganzjaehrig"], dauer: 10, vorbereitung: 0,
    gruppe: ["klein"], ort: ["drinnen"], materialTyp: "alltag",
    grobziel: "Die Kinder erleben sich als wertgeschätzten Teil der Gruppe.",
    feinziele: [
      "Die Kinder lernen die Namen der anderen Kinder kennen, indem sie gemeinsam beim Auftauchen begrüßt werden.",
      "Die Kinder bauen Vertrauen auf, indem sie erleben, dass Verschwundenes zuverlässig wiederkommt."
    ],
    sicherheit: "Nur ein leichtes, luftdurchlässiges Tuch verwenden. Kein Kind wird gegen seinen Willen abgedeckt, und das Tuch bleibt nie unbeaufsichtigt über dem Gesicht.",
    phasen: {
      einstieg: {
        inhalt: "Die Fachkraft versteckt sich selbst unter dem Tuch und fragt: „Wo bin ich?“ Dann zieht sie es herunter: „Da bin ich!“",
        kommentar: "Das Vormachen nimmt die Unsicherheit. Das Kuckuck-Prinzip ist Kindern dieser Altersgruppe vertraut und spricht ihr Interesse an Verschwinden und Wiederfinden an.",
        sozialform: "Kleingruppe im Kreis",
        material: "Leichtes Tuch"
      },
      hauptteil: {
        inhalt: "Reihum darf sich jedes Kind verstecken, das möchte. Alle fragen: „Wo ist Mila?“ Beim Auftauchen winken alle und rufen: „Hallo Mila!“ Wer sich nicht verstecken möchte, kann einen Teddy verstecken.",
        kommentar: "Die wiederkehrende Begrüßung vermittelt: Ich werde gesehen und vermisst. Die Alternative mit dem Teddy achtet Grenzen und sichert allen Kindern die Teilhabe.",
        sozialform: "Kleingruppe im Kreis",
        material: "Tuch, Kuscheltier"
      },
      schluss: {
        inhalt: "Alle Kinder kommen gemeinsam unter das große Tuch, das die Fachkraft kurz hochhebt und wie einen Fallschirm sinken lässt. Zum Abschied winken alle einander zu.",
        kommentar: "Das gemeinsame Erlebnis stärkt das Wir-Gefühl. Das immer gleiche Abschlussritual gibt Orientierung und macht das Spielende nachvollziehbar.",
        sozialform: "Kleingruppe",
        material: "Großes Tuch"
      }
    }
  },
  {
    id: "soz-e-hallo",
    titel: "Hallo in unseren Sprachen",
    kurz: "Die Gruppe sammelt Begrüßungen aus den Familien und nutzt sie im Morgenkreis.",
    bereich: "sozio", alter: "3-6", kategorie: "Kennenlernspiele",
    jahreszeiten: ["ganzjaehrig"], dauer: 15, vorbereitung: 0,
    gruppe: ["gross"], ort: ["drinnen", "draussen"], materialTyp: "ohne",
    grobziel: "Die Kinder erleben die Vielfalt ihrer Gruppe als wertvoll und selbstverständlich.",
    feinziele: [
      "Die Kinder lernen Begrüßungen aus den Familien kennen, indem sie diese gemeinsam ausprobieren.",
      "Die Kinder erfahren Wertschätzung, indem ihre eigene Art zu grüßen von der Gruppe übernommen wird."
    ],
    sicherheit: "Kein Kind wird aufgefordert, für eine Sprache oder Herkunft zu sprechen. Auch Gebärden, Winken und ausgedachte Begrüßungen gelten gleichwertig.",
    phasen: {
      einstieg: {
        inhalt: "Die Fachkraft fragt: „Wie sagt ihr bei euch zu Hause Hallo? Und wie begrüßt ihr eure beste Freundin oder euren besten Freund?“",
        kommentar: "Die offene Frage holt das Wissen aus den Familien in die Kita und schafft eine Verbindung zwischen den Lebenswelten der Kinder.",
        sozialform: "Stuhl- oder Sitzkreis",
        material: "Keines"
      },
      hauptteil: {
        inhalt: "Jedes Kind, das möchte, zeigt eine Begrüßung mit Wort oder Geste. Die Gruppe spricht oder macht sie nach. Danach geht ein Gruß reihum: Jedes Kind wählt einen aus und begrüßt damit sein Nachbarkind.",
        kommentar: "Mehrsprachigkeit wird als Stärke sichtbar. Dass auch Gesten zählen, öffnet das Spiel für alle sprachlichen Voraussetzungen, und das Weitergeben stärkt den direkten Kontakt.",
        sozialform: "Sitzkreis",
        material: "Keines"
      },
      schluss: {
        inhalt: "Die Gruppe stimmt ab, welcher Gruß morgen den Morgenkreis eröffnet. Auf Wunsch werden Familien eingeladen, weitere Begrüßungen beizusteuern.",
        kommentar: "Die Abstimmung ist eine einfache Form demokratischer Beteiligung. Die Einladung an die Familien führt das Thema über das Angebot hinaus weiter.",
        sozialform: "Sitzkreis",
        material: "Keines"
      }
    }
  },
  {
    id: "spr-u3-saeckchen",
    titel: "Was steckt im Säckchen?",
    kurz: "Vertraute Dinge kommen nacheinander aus einem Beutel und werden gefühlt, benannt und ausprobiert.",
    bereich: "sprache", alter: "0-3", kategorie: "Sprachspiele",
    jahreszeiten: ["ganzjaehrig"], dauer: 10, vorbereitung: 5,
    gruppe: ["einzel", "klein"], ort: ["drinnen"], materialTyp: "alltag",
    grobziel: "Die Kinder erweitern ihren Wortschatz im handelnden Umgang mit Gegenständen.",
    feinziele: [
      "Die Kinder lernen Alltagswörter kennen, indem sie Gegenstände aus dem Beutel holen und benannt bekommen.",
      "Die Kinder drücken sich aus, indem sie mit Lauten, Gesten oder Wörtern auf die Gegenstände reagieren."
    ],
    sicherheit: "Nur Gegenstände ohne Kleinteile verwenden, die nicht in den Mund passen und nicht verschluckt werden können. Keine Schnüre am Beutel.",
    phasen: {
      einstieg: {
        inhalt: "Die Fachkraft schüttelt den Beutel, lauscht daran und fragt gespannt: „Was ist da wohl drin?“",
        kommentar: "Das Geheimnisvolle bündelt die gemeinsame Aufmerksamkeit, eine wichtige Grundlage für den Spracherwerb in diesem Alter.",
        sozialform: "Einzeln oder Kleingruppe am Boden",
        material: "Stoffbeutel"
      },
      hauptteil: {
        inhalt: "Ein Kind greift hinein und holt z. B. Löffel, Schuh, Ball oder Becher heraus. Die Fachkraft benennt den Gegenstand, zeigt seine Funktion und greift die Äußerungen des Kindes auf: Kind: „Ball!“ Fachkraft: „Ja, ein roter Ball. Der rollt!“",
        kommentar: "Wörter verknüpfen sich mit Sinneseindruck und Handlung. Das Aufgreifen und Erweitern gibt dem Kind ein Sprachvorbild, ohne es zu verbessern.",
        sozialform: "Dialog, Kleingruppe",
        material: "Stoffbeutel, 4 bis 5 große Alltagsgegenstände"
      },
      schluss: {
        inhalt: "Alle Dinge werden zurück in den Beutel gepackt. Die Fachkraft benennt jeden noch einmal, dann verabschieden sich alle: „Tschüss, Löffel!“",
        kommentar: "Die Wiederholung festigt die Wörter. Das Abschiedsritual macht das Ende des Spiels verständlich und erleichtert den Übergang.",
        sozialform: "Kleingruppe",
        material: "Stoffbeutel"
      }
    }
  },
  {
    id: "spr-e-luegen",
    titel: "Stopp, das stimmt doch nicht!",
    kurz: "Die Fachkraft erzählt eine Geschichte voller Fehler, und die Kinder entlarven sie.",
    bereich: "sprache", alter: "3-6", kategorie: "Lügengeschichten",
    jahreszeiten: ["ganzjaehrig"], dauer: 15, vorbereitung: 0,
    gruppe: ["klein", "gross"], ort: ["drinnen", "draussen"], materialTyp: "ohne",
    grobziel: "Die Kinder entwickeln ihr Sprachverständnis und ihre Freude am Erzählen.",
    feinziele: [
      "Die Kinder üben genaues Zuhören, indem sie falsche Aussagen in einer Geschichte erkennen.",
      "Die Kinder formulieren eigene Sätze, indem sie die Fehler berichtigen und eigene Lügengeschichten erfinden."
    ],
    sicherheit: "",
    phasen: {
      einstieg: {
        inhalt: "Die Fachkraft kündigt an: „Heute erzähle ich euch etwas, aber ich schwindle! Wer es merkt, ruft: Stopp, das stimmt doch nicht!“ Ein Probelauf: „Heute früh bin ich auf meinem Kühlschrank in die Kita geritten.“",
        kommentar: "Die klare Regel und das Rufen laden auch zurückhaltende Kinder zum Mitmachen ein. Der Probelauf sichert, dass alle das Spiel verstanden haben.",
        sozialform: "Sitzkreis",
        material: "Keines"
      },
      hauptteil: {
        inhalt: "Die Fachkraft erzählt frei von einem Tag, an dem z. B. die Katze bellt, es Suppe zum Anziehen gibt und die Sonne nachts scheint. Bei jedem Stopp erklären die Kinder, wie es richtig wäre. Danach erfinden sie selbst Schwindelsätze.",
        kommentar: "Das Erkennen von Unsinn setzt Weltwissen und Sprachverständnis voraus, und das Begründen fördert das Bilden vollständiger Sätze. Das Erfinden macht die Kinder von Zuhörenden zu Erzählenden.",
        sozialform: "Sitzkreis oder Kleingruppe",
        material: "Keines"
      },
      schluss: {
        inhalt: "Die Gruppe wählt den lustigsten Schwindelsatz. Gemeinsam wird eine ausgedachte Schlussgeschichte daraus, die die Fachkraft auf Wunsch aufschreibt.",
        kommentar: "Das Aufschreiben zeigt den Kindern, dass gesprochene Worte festgehalten werden können, und ist so eine erste Begegnung mit Schriftkultur.",
        sozialform: "Sitzkreis",
        material: "Optional Papier und Stift"
      }
    }
  },
  {
    id: "aes-u3-topfkonzert",
    titel: "Das Topf-Konzert",
    kurz: "Küchenutensilien werden zu Instrumenten, und die Kinder entdecken laut und leise, schnell und langsam.",
    bereich: "aesthetik", unterbereich: "musik", alter: "0-3", kategorie: "Spiellieder",
    jahreszeiten: ["ganzjaehrig"], dauer: 15, vorbereitung: 5,
    gruppe: ["klein"], ort: ["drinnen", "draussen"], materialTyp: "alltag",
    grobziel: "Die Kinder entdecken Klänge und drücken sich musikalisch aus.",
    feinziele: [
      "Die Kinder erfahren Ursache und Wirkung, indem sie durch eigenes Schlagen verschiedene Klänge erzeugen.",
      "Die Kinder nehmen Gegensätze wahr, indem sie gemeinsam laut und leise musizieren."
    ],
    sicherheit: "Keine scharfkantigen oder sehr schweren Töpfe verwenden. Für geräuschempfindliche Kinder einen Platz mit mehr Abstand oder weiche Schlägel anbieten.",
    phasen: {
      einstieg: {
        inhalt: "Die Fachkraft schlägt leise auf einen Topf, lauscht übertrieben und fragt: „Wie klingt das bei dir?“ Die Töpfe stehen frei zugänglich auf dem Boden.",
        kommentar: "Die Kinder dürfen selbst entscheiden, womit sie beginnen. Die offene Einladung regt ihre Eigenaktivität an, ohne ein Ergebnis zu erwarten.",
        sozialform: "Kleingruppe am Boden",
        material: "Töpfe, Schüsseln, Holzlöffel"
      },
      hauptteil: {
        inhalt: "Die Kinder probieren frei aus. Dann singt die Fachkraft ein vertrautes Lied, und alle begleiten es. Sie wechselt dabei die Lautstärke: flüstern und ganz leise tippen, dann kräftig singen und trommeln.",
        kommentar: "Klänge selbst zu erzeugen ist eine starke Erfahrung von Selbstwirksamkeit. Das gemeinsame Lied schafft Rhythmus und Gemeinschaft, und die Gegensätze laut und leise sind in diesem Alter gut erfassbar.",
        sozialform: "Kleingruppe",
        material: "Töpfe, Schüsseln, Holzlöffel"
      },
      schluss: {
        inhalt: "Die Musik wird immer leiser, bis alle Löffel „schlafen“. Gemeinsam lauschen alle der Stille, dann räumen die Kinder die Instrumente in einen Korb.",
        kommentar: "Die Stille nach dem Lärm macht den Klang erst bewusst. Das gemeinsame Aufräumen beendet das Angebot verständlich und bezieht die Kinder ein.",
        sozialform: "Kleingruppe",
        material: "Korb"
      }
    }
  },
  {
    id: "aes-e-schneeflocken",
    titel: "Jede Flocke ist anders",
    kurz: "Die Kinder falten und schneiden Schneeflocken und vergleichen die entstandenen Muster.",
    bereich: "aesthetik", unterbereich: "gestalten", alter: "3-6", kategorie: "Spiele mit Papier und Stift",
    jahreszeiten: ["winter"], dauer: 25, vorbereitung: 5,
    gruppe: ["klein"], ort: ["drinnen"], materialTyp: "besonders",
    grobziel: "Die Kinder gestalten mit Papier und entdecken ihre eigene Ausdrucksweise.",
    feinziele: [
      "Die Kinder üben den Umgang mit der Schere, indem sie Formen in gefaltetes Papier schneiden.",
      "Die Kinder erfahren, dass jedes Werk eigen ist, indem sie ihre Schneeflocken vergleichen."
    ],
    sicherheit: "Kinderscheren mit abgerundeter Spitze verwenden. Regeln zum Umgang besprechen: Mit der Schere bleiben wir am Platz. Jüngeren Kindern beim Falten helfen.",
    phasen: {
      einstieg: {
        inhalt: "Die Kinder erzählen, was sie über Schnee wissen. Die Fachkraft faltet ein Papier, schneidet zwei kleine Ecken heraus und öffnet es überraschend vor den Kindern.",
        kommentar: "Der Überraschungseffekt weckt Neugier, ohne ein festes Vorbild vorzugeben. Das Wissen der Kinder wird zum Ausgangspunkt.",
        sozialform: "Kleingruppe am Tisch",
        material: "Dünnes Papier, Schere"
      },
      hauptteil: {
        inhalt: "Jedes Kind faltet ein Papier mehrfach und schneidet Ecken und Kanten ein. Dann wird die Flocke behutsam geöffnet. Die Kinder probieren aus: Was passiert bei größeren Schnitten, was bei mehr Falten?",
        kommentar: "Das Ergebnis lässt sich nicht genau vorhersehen, und genau das regt zum Experimentieren an. Es gibt kein Richtig oder Falsch, so bleibt der gestalterische Prozess wichtiger als das Produkt.",
        sozialform: "Einzelarbeit in der Kleingruppe",
        material: "Dünnes Papier, Kinderscheren"
      },
      schluss: {
        inhalt: "Alle Flocken werden auf dunklem Papier oder am Fenster ausgestellt. Die Kinder zeigen, was ihnen an ihrer Flocke gefällt, und suchen zwei gleiche. Gibt es die überhaupt?",
        kommentar: "Das Ausstellen würdigt die Arbeit der Kinder. Der Vergleich schult das genaue Hinsehen und macht Vielfalt erlebbar. Die Auswahl, was gezeigt wird, bleibt beim Kind.",
        sozialform: "Kleingruppe",
        material: "Dunkles Papier oder Fensterfläche, Klebestreifen"
      }
    }
  },
  {
    id: "med-u3-fotosuche",
    titel: "Wo ist das auf dem Foto?",
    kurz: "Die Kinder sehen Fotos von vertrauten Dingen aus dem Gruppenraum und suchen sie im echten Raum.",
    bereich: "medien", alter: "0-3", kategorie: "Ratespiele",
    jahreszeiten: ["ganzjaehrig"], dauer: 10, vorbereitung: 5,
    gruppe: ["klein"], ort: ["drinnen"], materialTyp: "besonders",
    grobziel: "Die Kinder machen im Dialog erste Erfahrungen mit digitalen Bildern.",
    feinziele: [
      "Die Kinder verbinden Bild und Wirklichkeit, indem sie abgebildete Gegenstände im Raum wiederfinden.",
      "Die Kinder erleben ein Gerät als Werkzeug, indem sie es gemeinsam mit der Fachkraft zum Betrachten nutzen."
    ],
    sicherheit: "Bildschirmzeit kurz halten und Gerät nie allein überlassen. Nur Dinge fotografieren, keine Kinder. Das Angebot geht auch mit ausgedruckten Fotos.",
    phasen: {
      einstieg: {
        inhalt: "Die Fachkraft zeigt ein Foto vom Lieblingsspielzeug der Gruppe und fragt: „Kennst du das?“ Die Kinder schauen gemeinsam auf das Tablet.",
        kommentar: "Vertraute Motive knüpfen an die Lebenswelt an. Das gemeinsame Betrachten ist wichtiger als das Gerät, denn der Dialog hilft den Kindern, Bilder zu verstehen.",
        sozialform: "Kleingruppe auf dem Teppich",
        material: "Tablet mit 3 bis 5 Fotos"
      },
      hauptteil: {
        inhalt: "„Wo ist der Teddy im Zimmer?“ Die Kinder krabbeln oder laufen los und bringen den Gegenstand zur Fachkraft oder zeigen darauf. Dann halten alle ihn neben das Foto: „Da ist er, und hier auch!“",
        kommentar: "Der Wechsel zwischen Bild und echtem Gegenstand macht den Unterschied erfahrbar. Die Bewegung sorgt dafür, dass das Angebot nicht beim Schauen auf den Bildschirm bleibt.",
        sozialform: "Kleingruppe in Bewegung",
        material: "Tablet, abgebildete Gegenstände"
      },
      schluss: {
        inhalt: "Die Fachkraft schaltet das Tablet sichtbar aus: „Jetzt schläft es.“ Die Kinder spielen danach mit den gefundenen Dingen weiter.",
        kommentar: "Das bewusste Ausschalten zeigt, dass Geräte einen Anfang und ein Ende haben. Der Übergang ins freie Spiel gibt dem Erlebten Raum.",
        sozialform: "Freies Spiel",
        material: "Gefundene Gegenstände"
      }
    }
  },
  {
    id: "med-e-fotodetektive",
    titel: "Foto-Detektive im Frühling",
    kurz: "Die Kinder fotografieren Frühlingsdetails draußen, und die anderen raten, was zu sehen ist.",
    bereich: "medien", alter: "3-6", kategorie: "Ratespiele",
    jahreszeiten: ["fruehling"], dauer: 30, vorbereitung: 5,
    gruppe: ["klein"], ort: ["drinnen", "draussen"], materialTyp: "besonders",
    grobziel: "Die Kinder nutzen digitale Medien aktiv und gestaltend.",
    feinziele: [
      "Die Kinder lernen den Umgang mit der Kamera, indem sie eigene Nahaufnahmen machen.",
      "Die Kinder hinterfragen Bilder, indem sie herausfinden, wie ein Ausschnitt die Wirkung eines Motivs verändert."
    ],
    sicherheit: "Keine Personen fotografieren. Fotos auf dem Kita-Gerät lassen und nach dem Angebot löschen, keine Cloud-Dienste. Gerät mit Schutzhülle oder Tragegurt nutzen.",
    phasen: {
      einstieg: {
        inhalt: "Die Fachkraft zeigt ein stark vergrößertes Foto, z. B. von einer Baumrinde, und lässt raten. Dann erklärt sie den Auftrag: Findet draußen Geheimnisse des Frühlings und fotografiert sie ganz nah.",
        kommentar: "Das Rätsel führt in die Idee des Ausschnitts ein. Der Auftrag verbindet Medienbildung mit dem genauen Beobachten der Natur.",
        sozialform: "Kleingruppe",
        material: "Tablet oder kindertaugliche Kamera"
      },
      hauptteil: {
        inhalt: "Zu zweit ziehen die Kinder durch Garten oder Umgebung und fotografieren Knospen, Käfer oder Blüten. Die Fachkraft zeigt, wie man scharfstellt, und fragt: „Was möchtest du zeigen?“",
        kommentar: "Kinder werden von Konsumierenden zu Gestaltenden. Die Partnerarbeit fordert Absprachen über das Motiv, und die Technik wird nur so weit erklärt, wie die Kinder sie gerade benötigen.",
        sozialform: "Partnerarbeit",
        material: "Tablet oder Kamera"
      },
      schluss: {
        inhalt: "Drinnen werden die Fotos gezeigt. Die anderen raten, und das Fotografen-Team löst auf. Anschließend wählt die Gruppe gemeinsam aus, was ausgedruckt und was gelöscht wird.",
        kommentar: "Das Rätselraten würdigt den Blick der Kinder. Die Auswahl und das gemeinsame Löschen vermitteln, dass man über Bilder entscheiden kann, eine Grundlage für den bewussten Umgang mit Medien.",
        sozialform: "Kleingruppe",
        material: "Tablet oder Bildschirm"
      }
    }
  },
  {
    id: "mat-u3-baelle",
    titel: "Rein und raus: die Bälle-Reise",
    kurz: "Die Kinder füllen Bälle von einem Korb in den anderen und erleben dabei voll, leer und mehr.",
    bereich: "mathe", alter: "0-3", kategorie: "Wahrnehmungsspiele",
    jahreszeiten: ["ganzjaehrig"], dauer: 15, vorbereitung: 5,
    gruppe: ["einzel", "klein"], ort: ["drinnen", "draussen"], materialTyp: "alltag",
    grobziel: "Die Kinder sammeln erste Erfahrungen mit Mengen und Vergleichen.",
    feinziele: [
      "Die Kinder erfahren Mengen, indem sie Bälle in Gefäße ein- und wieder ausräumen.",
      "Die Kinder hören Zahlwörter im Handeln, indem die Fachkraft die Bälle bis drei mitzählt."
    ],
    sicherheit: "Nur Bälle verwenden, die nicht in den Mund passen, etwa ab Tennisballgröße. Kastanien, Perlen und andere Kleinteile sind für diese Altersgruppe nicht geeignet.",
    phasen: {
      einstieg: {
        inhalt: "Ein voller Korb Bälle steht auf dem Boden, daneben leere Gefäße. Die Fachkraft kippt ihn um und lässt die Bälle rollen: „Oh, alle sind weg!“",
        kommentar: "Das Ein- und Umfüllen ist ein typisches Spielschema junger Kinder. Das Angebot knüpft daran an, statt eine neue Aufgabe vorzugeben.",
        sozialform: "Kleingruppe am Boden",
        material: "Korb, etwa 10 Bälle, 2 bis 3 Gefäße"
      },
      hauptteil: {
        inhalt: "Die Kinder sammeln die Bälle, füllen sie um, kippen sie wieder aus. Die Fachkraft begleitet sprachlich: „Eins, zwei, drei Bälle im Korb.“ „Dein Eimer ist ganz voll, meiner ist leer.“",
        kommentar: "Mathematische Begriffe entstehen im eigenen Handeln. Sie werden nicht abgefragt, sondern begleitend angeboten. Wiederholung ist erwünscht, denn daraus lernen die Kinder.",
        sozialform: "Freies Spiel, begleitet",
        material: "Korb, Bälle, Gefäße"
      },
      schluss: {
        inhalt: "Alle Bälle reisen zurück in den großen Korb. Die Kinder werfen sie einzeln hinein und die Fachkraft ruft: „Noch einer! Und noch einer! Jetzt ist er voll.“",
        kommentar: "Das Aufräumen wird zum Teil des Spiels. Es macht „mehr werden“ und „voll“ noch einmal direkt erlebbar.",
        sozialform: "Kleingruppe",
        material: "Korb, Bälle"
      }
    }
  },
  {
    id: "mat-e-kastanien",
    titel: "Wie viele fehlen?",
    kurz: "Die Kinder zählen Kastanien bis fünf, legen sie an und finden heraus, wie viele heimlich verschwunden sind.",
    bereich: "mathe", alter: "3-6", kategorie: "Gedächtnisspiele",
    jahreszeiten: ["herbst"], dauer: 20, vorbereitung: 5,
    gruppe: ["klein"], ort: ["drinnen", "draussen"], materialTyp: "alltag",
    grobziel: "Die Kinder erwerben mathematische Grundlagen im Umgang mit Zahlen und Mengen.",
    feinziele: [
      "Die Kinder üben, von 1 bis 5 zu zählen, indem sie Kastanien richtig anordnen.",
      "Die Kinder erfassen Mengen, indem sie herausfinden, wie viele Kastanien entfernt wurden."
    ],
    sicherheit: "Kastanien sind Kleinteile. Das Angebot nicht mit Kindern unter 3 Jahren oder mit Kindern durchführen, die Dinge noch in den Mund nehmen. Rosskastanien sind nicht zum Essen geeignet.",
    phasen: {
      einstieg: {
        inhalt: "Die Fachkraft bringt einen Beutel voller Kastanien mit. Jedes Kind nimmt eine Handvoll und zählt, wie viele es hat. Die Kinder vergleichen: Wer hat mehr, wer weniger?",
        kommentar: "Kastanien sind aus dem Herbstalltag bekannt und gut zu greifen. Das Vergleichen erlaubt jedem Kind einen Einstieg auf dem eigenen Stand.",
        sozialform: "Kleingruppe am Tisch oder Boden",
        material: "Beutel mit Kastanien"
      },
      hauptteil: {
        inhalt: "Die Kinder legen eine Reihe aus fünf Kastanien und zählen gemeinsam. Alle schließen die Augen, ein Kind nimmt heimlich welche weg. Alle öffnen die Augen: Wie viele fehlen? Die Kinder prüfen durch Nachzählen und tauschen die Rollen.",
        kommentar: "Das Zählen wird durch die Eins-zu-eins-Zuordnung zur Reihe anschaulich. Das Herausfinden der Differenz ist eine erste Vorerfahrung mit dem Rechnen, und das Nachprüfen ermöglicht Selbstkontrolle ohne Bewertung durch Erwachsene.",
        sozialform: "Kleingruppe, Rollenwechsel",
        material: "Kastanien, optional Zahlenkarten 1 bis 5"
      },
      schluss: {
        inhalt: "Die Kinder legen aus allen Kastanien gemeinsam ein Muster oder eine lange Schlange und zählen so weit, wie sie kommen. Die Kastanien bleiben zum freien Spiel in der Mathe-Ecke.",
        kommentar: "Das offene Legen verbindet Mathematik mit Gestaltung. Dass Kinder unterschiedlich weit zählen, ist in Ordnung. Das bleibende Material lädt zum Weiterforschen ein.",
        sozialform: "Kleingruppe",
        material: "Kastanien"
      }
    }
  },
  {
    id: "nat-u3-plitsch",
    titel: "Plitsch, platsch im Wasser",
    kurz: "Die Kinder erkunden Wasser mit Schöpfgefäßen und beobachten, was darin passiert.",
    bereich: "natur", alter: "0-3", kategorie: "Experimente",
    jahreszeiten: ["sommer"], dauer: 20, vorbereitung: 5,
    gruppe: ["klein"], ort: ["draussen"], materialTyp: "alltag",
    grobziel: "Die Kinder erforschen mit allen Sinnen das Naturelement Wasser.",
    feinziele: [
      "Die Kinder nehmen Eigenschaften von Wasser wahr, indem sie es schöpfen, gießen und fühlen.",
      "Die Kinder beobachten Wirkungen, indem sie ausprobieren, was mit Gegenständen im Wasser geschieht."
    ],
    sicherheit: "Kinder am Wasser nie unbeaufsichtigt lassen, auch nicht bei flachen Wannen. Wasser danach sofort ausgießen. Auf Sonnenschutz und rutschfesten Boden achten, keine Kleinteile verwenden.",
    phasen: {
      einstieg: {
        inhalt: "Eine flache Wanne mit wenig Wasser steht im Schatten. Die Fachkraft taucht ihre Hand hinein, lässt es tropfen und sagt: „Plitsch, platsch. Das ist nass und kühl!“",
        kommentar: "Das Vormachen lädt ein, und die Lautmalerei lässt sich leicht nachahmen. So verbinden sich Sinneseindruck und Sprache.",
        sozialform: "Kleingruppe im Freien",
        material: "Flache Wanne, Wasser"
      },
      hauptteil: {
        inhalt: "Die Kinder schöpfen, gießen und matschen mit Bechern und Schwämmen. Die Fachkraft legt auch einen Korken und einen großen Stein ins Wasser und staunt mit: „Der Korken bleibt oben!“ Sie stellt offene Fragen, ohne Erklärungen zu erwarten.",
        kommentar: "Junge Kinder lernen durch Wiederholung und eigenes Tun, was Gegenstände im Wasser tun. Die begleitende Sprache hilft beim Ordnen, ohne dass physikalische Erklärungen nötig wären.",
        sozialform: "Freies Forschen, begleitet",
        material: "Becher, Schwämme, großer Stein, großer Korken"
      },
      schluss: {
        inhalt: "Die Kinder gießen das Wasser gemeinsam auf eine Pflanze oder ins Beet: „Die Blume hat auch Durst.“ Danach trocknen alle einander die Hände ab.",
        kommentar: "Das Gießen zeigt einen ersten Zusammenhang von Wasser und Leben und einen achtsamen Umgang damit. Das Abtrocknen schließt das Angebot als vertraute Pflegehandlung ab.",
        sozialform: "Kleingruppe",
        material: "Gießkanne, Handtücher"
      }
    }
  },
  {
    id: "nat-e-taschentuch",
    titel: "Das trockene Taschentuch",
    kurz: "Ein Taschentuch im Becher taucht unter Wasser und bleibt trocken. Warum nur?",
    bereich: "natur", alter: "3-6", kategorie: "Experimente",
    jahreszeiten: ["ganzjaehrig"], dauer: 20, vorbereitung: 5,
    gruppe: ["klein"], ort: ["drinnen", "draussen"], materialTyp: "alltag",
    grobziel: "Die Kinder erleben forschendes Lernen und entdecken, dass Luft Raum einnimmt.",
    feinziele: [
      "Die Kinder stellen Vermutungen an, indem sie vorhersagen, was mit dem Taschentuch geschieht.",
      "Die Kinder überprüfen ihre Vermutungen, indem sie das Experiment selbst durchführen und beschreiben."
    ],
    sicherheit: "Durchsichtige Kunststoffbecher statt Glas verwenden. Wasser, das auf den Boden gelangt, sofort aufwischen.",
    phasen: {
      einstieg: {
        inhalt: "Die Fachkraft zeigt Taschentuch, Becher und Wasserschüssel und fragt: „Was passiert, wenn ich das Taschentuch im Becher unter Wasser drücke? Wird es nass?“ Die Kinder stimmen ab und begründen ihre Vermutung.",
        kommentar: "Das Formulieren einer Vermutung ist der erste Schritt forschenden Lernens. Alle Antworten werden ernst genommen, denn nicht das richtige Ergebnis zählt, sondern das eigene Nachdenken.",
        sozialform: "Kleingruppe am Tisch",
        material: "Taschentücher, Becher, Schüssel mit Wasser"
      },
      hauptteil: {
        inhalt: "Jedes Kind stopft ein Taschentuch fest in den Becherboden und drückt den Becher mit der Öffnung gerade nach unten ins Wasser. Es hebt ihn gerade wieder heraus und fühlt: trocken! Danach kippen die Kinder den Becher unter Wasser, sehen die Luftblasen, und das Tuch wird nass.",
        kommentar: "Das eigene Tun macht aus einem Trick eine Erkenntnis. Die Luftblasen machen unsichtbare Luft sichtbar. Das Kippen als zweiter Versuch regt an, Ursachen und Wirkungen zu vergleichen.",
        sozialform: "Einzelversuche in der Kleingruppe",
        material: "Taschentücher, durchsichtige Becher, Schüssel"
      },
      schluss: {
        inhalt: "Die Kinder erzählen, was sie gesehen haben, und erklären es mit eigenen Worten. Die Fachkraft fasst zusammen: Im Becher war Luft, und die hat das Wasser nicht hineingelassen. Gemeinsam überlegen alle, was sie noch ausprobieren möchten.",
        kommentar: "Das Versprachlichen sichert die Erfahrung. Eigene Theorien der Kinder dürfen stehen bleiben und werden durch die einfache Erklärung ergänzt. Neue Fragen führen das Forschen weiter.",
        sozialform: "Kleingruppe",
        material: "Keines"
      }
    }
  }
];

# Praxiswebsite · Kai Läpple

Responsive, mehrseitige statische Website für die Gemeinschaftspraxis Läpple in Waiblingen. Es gibt keinen Build-Schritt und keine extern eingebundenen Schriftdateien, Skripte oder Karten.

## Vorschau und Bearbeitung

`index.html` im Browser öffnen. `impressum.html` und `datenschutz.html` sind eigenständige Seiten. `sitemap.xml` und `robots.txt` liegen für GitHub Pages bei.

## Schriftarten

Die Website lädt keine Google Fonts. `styles.css` nutzt die Systemschriftstapel `system-ui`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Arial` sowie `Georgia`/`Times New Roman`. Damit werden Schriften lokal aus dem Betriebssystem gewählt und es ist kein Download von WOFF2-Dateien erforderlich.

Wenn später bewusst Webfonts verwendet werden sollen:
1. Die gewünschten Schriftfamilien und Schriftschnitte auswählen und die Lizenz prüfen.
2. Die WOFF2-Dateien mit einem Webfont-Konverter wie google-webfonts-helper erzeugen bzw. beziehen.
3. Die Dateien in einen Ordner `fonts/` im Projekt legen.
4. Für jeden Schriftschnitt passende `@font-face`-Regeln mit `font-display: swap` in `styles.css` ergänzen.
5. Die CSS-Variablen `--sans`, `--display` und `--serif` auf die neuen Familien umstellen und prüfen, dass keine Google-Fonts-Links übrig sind.

## Verbleibende Angaben vor dem echten Praxisbetrieb

- Konkrete Altersgrenze wurde nicht angegeben und wird daher nicht behauptet.
- Konkrete Sprechstundenzeiten und Barrierefreiheit/Anfahrt außer dem OpenStreetMap-Link wurden nicht mitgeteilt.
- Abrechnungsweg und Kostenübernahme müssen im Einzelfall vor Behandlungsbeginn geklärt werden.
- Beschäftigungs- bzw. Zulassungsstatus innerhalb der Gemeinschaftspraxis wurde nicht angegeben und wird nicht behauptet.
- In den Datenschutzhinweisen ist die konkrete Speicherfrist der GitHub-Pages-Verbindungsdaten nicht verlässlich angegeben; Drittlandübermittlungen und Rechtsgrundlagen sollten vor Veröffentlichung rechtlich geprüft werden.
- Impressum und Datenschutz sollten vor dem tatsächlichen Praxisbetrieb rechtlich geprüft werden.
- Google-Unternehmensprofil sowie Einträge in KV- und DPtV-Suchdiensten erst anlegen, wenn die Praxisdaten bestätigt und die Einträge möglich sind.

Der Anmeldebogen-Link ist im HTML auskommentiert und die PDF-Datei wird nicht mit der öffentlichen Website ausgeliefert, bis Rückgabeweg und Datenschutz festgelegt sind.

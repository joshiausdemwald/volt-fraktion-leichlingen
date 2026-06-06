# Volt Fraktion Leichlingen - Website

Dies ist die offizielle Website der Volt Fraktion im Stadtrat Leichlingen. Das Projekt basiert auf **Astro v4** (statisch generiert) und nutzt **Content Collections** für eine typsichere Inhaltsverwaltung über Markdown-Dateien.

---

## 🛠️ Lokale Installation & Entwicklung

### Voraussetzungen
Stellen Sie sicher, dass **Node.js** (Empfohlen: Version v20 oder höher) installiert ist.

### 1. Abhängigkeiten installieren
```bash
npm install
```

### 2. Entwicklungs-Server starten
Startet den lokalen Server für die Live-Vorschau der Website:
```bash
npm run dev
```
Rufen Sie anschließend [http://localhost:4321](http://localhost:4321) in Ihrem Browser auf.

### 3. Statischen Build erzeugen
Generiert die fertigen HTML-, CSS- und JS-Dateien im Ordner `dist/`:
```bash
npm run build
```

### 4. Build lokal testen
Startet einen lokalen Webserver zur Vorschau des erzeugten `dist/`-Ordners:
```bash
npm run preview
```

---

## 📂 Projektstruktur

Das Projekt folgt einer sauberen und standardisierten Astro-Struktur:

```
volt/
├── .github/workflows/deploy.yml # GitHub Actions Deployment Pipeline
├── src/
│   ├── components/         # Wiederverwendbare UI-Komponenten (Karten, Badges)
│   ├── content/            # Inhaltssammlungen (Markdown-Dateien)
│   │   ├── config.ts       # Typ-Definitionen (Zod-Schemas) für alle Inhalte
│   │   ├── news/           # Pressemitteilungen
│   │   ├── members/        # Fraktionsmitglieder
│   │   ├── topics/         # Themenschwerpunkte
│   │   └── motions/        # Anträge
│   ├── layouts/
│   │   └── Layout.astro    # Globales Layout (Kopfzeile, Fußzeile, SEO)
│   ├── pages/              # Routing & Seitenstruktur
│   └── styles/
│       └── global.css      # Zentrales CSS (Themenfarben, Light & Dark Mode)
├── astro.config.mjs        # Astro Konfiguration (Sitemap, Domain, Pfad)
└── package.json            # Projektabhängigkeiten & npm-Skripte
```

---

## 📝 Inhalte verwalten

Alle Inhalte werden über Markdown-Dateien im Verzeichnis `src/content/` gepflegt. Jede Datei enthält einen Metadaten-Block (Frontmatter) am Anfang und den Textinhalt als Standard-Markdown darunter.

*Beispiel für einen neuen Antrag in `src/content/motions/mein-neuer-antrag.md`:*
```markdown
---
title: Ausbau von E-Ladesäulen im Innenstadtbereich
date: 2026-06-04
status: eingereicht
motionId: AN-045/2026
summary: Wir fordern die Errichtung von 10 neuen Schnellladesäulen im Kernbereich der Stadt.
documentUrl: "#"
---
### Problembeschreibung
Hier steht der detaillierte Text...
```

> ⚠️ **Wichtig**: Bei Feldern wie `documentUrl` muss der Platzhalter `#` zwingend in Anführungszeichen gesetzt werden (`"#"`), da er sonst im YAML-Frontmatter als Kommentar interpretiert wird.

---

## 🚀 Deployment auf GitHub Pages

Die Website wird automatisch mittels GitHub Actions gebaut und auf GitHub Pages gehostet, sobald ein Push auf den `main`-Branch erfolgt.

### Einrichtung in 3 Schritten:

#### 1. Domain-Konfiguration (`astro.config.mjs`)
Öffnen Sie die Datei `astro.config.mjs` und passen Sie die Werte an:
*   **Mit eigener Domain (z.B. `volt-neustadt.de`):**
    ```javascript
    site: 'https://volt-neustadt.de',
    base: '/',
    ```
*   **Ohne eigene Domain (Standard GitHub-Unterpfad):**
    ```javascript
    site: 'https://<username>.github.io',
    base: '/<repository-name>/',
    ```
    *Ersetzen Sie `<username>` durch Ihren GitHub-Nutzernamen und `<repository-name>` durch den Namen des GitHub-Repositorys.*

#### 2. Berechtigungen in GitHub einstellen
1. Navigieren Sie in Ihrem GitHub-Repository zu: **Settings** -> **Actions** -> **General**.
2. Scrollen Sie nach unten zu **Workflow permissions** und stellen Sie sicher, dass **Read and write permissions** aktiviert ist.

#### 3. GitHub Pages aktivieren
1. Navigieren Sie in Ihrem GitHub-Repository zu: **Settings** -> **Pages**.
2. Wählen Sie unter **Build and deployment** -> **Source** die Option **GitHub Actions** aus.

Sobald Sie Ihren Code in den `main`-Branch pushen, startet der Build automatisch unter dem Tab **Actions** und die Seite wird innerhalb weniger Minuten veröffentlicht.

# 🚀 Portfolio Website

Jouw persoonlijke portfolio gebouwd met **React** + **Vite** + **Tailwind CSS**.

## 📦 Installatie

```bash
# 1. Ga naar de map
cd portfolio

# 2. Installeer dependencies
npm install

# 3. Start de dev-server
npm run dev
```

Open dan `http://localhost:5173` in je browser.

## 🏗️ Projectstructuur

```
portfolio/
├── public/
│   └── cv.pdf              ← Zet hier jouw CV
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      ← Navigatiebalk
│   │   ├── Hero.jsx        ← Hero sectie + socials
│   │   ├── About.jsx       ← Over mij pagina
│   │   ├── Skills.jsx      ← Skills & vaardigheden
│   │   ├── Projects.jsx    ← Projecten grid
│   │   ├── Contact.jsx     ← Contactformulier
│   │   └── Footer.jsx      ← Footer
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## ✏️ Aanpassen

### Jouw naam & info
- Zoek naar `Jouw Naam` in alle bestanden en vervang door jouw echte naam.
- Pas de bio-tekst aan in `About.jsx`.

### Socials
- Vervang de LinkedIn/GitHub/Instagram links in `Hero.jsx` en `About.jsx`.

### Projecten
- Bewerk het `projects` array in `Projects.jsx`.
- Voeg jouw eigen projecten toe met een echte URL en GitHub-link.

### Skills
- Bewerk het `categories` array in `Skills.jsx`.

### Contactformulier
- Koppel [Formspree](https://formspree.io) of [EmailJS](https://emailjs.com) in `Contact.jsx`.
- Of gebruik Netlify Forms als je daar host.

### Foto
- Vervang de 👤 emoji in `About.jsx` door een `<img>` tag met jouw foto.

## 🚀 Deployen

```bash
# Bouw voor productie
npm run build

# De output staat in de /dist map
# Upload naar: Netlify, Vercel, GitHub Pages, etc.
```

## 🎨 Kleuren aanpassen

In `tailwind.config.js` kun je de accentkleur aanpassen:

```js
accent: {
  DEFAULT: '#6c63ff',  // ← verander naar jouw kleur
  light: '#8b85ff',
  dark: '#4f46e5',
},
```

---

Veel succes! 🎉

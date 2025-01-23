# Nieuwste producten-caroussel

Deze component is bedoeld voor mijn personal project. Het is een Nieuwste producten-caroussel waarbij de gebruiker kan kiezen tussen verschillende prodcuten met een vertical caroussel. Deze component wordt gebruikt in mijn Shopify webshop, dus moet hij omgezet worden van een React-component naar een simpele javascript bestand, omdat Shopify geen react kan lezen

## 🚀 Functionaliteiten

- Vloeiende verticale carousel-animaties
- Responsief ontwerp
- Dynamische productweergave met titel en beschrijving
- Interactieve navigatieknoppen
- Voortgangsindicatoren met productspecifieke kleuren

## 💻 Technische Stack

- **Framework:** Next.js
- **Styling:** Tailwind CSS
- **Animaties:** Framer Motion
- **Lettertypen:** 
  - Kalam (voor productkoppen)
  - Geist (voor algemene tekst)

## 🛠️ Installatie

1. Clone de repository:

```bash
git clone https://github.com/Yusuf013/personalproject_componentpoc2
cd speel-slim-productcarousel
```

2. Installeer de afhankelijkheden:

```bash
npm install
```

3. Start de ontwikkelingsserver:

```bash
npm run dev
```


4. Open de ontwikkelingsserver in je browser:

```bash
http://localhost:3000
```

## 🎨 Styling

Het project maakt gebruik van een combinatie van:
- Tailwind CSS voor responsive styling
- Custom kleuren voor productvarianten
- Geoptimaliseerde lettertypen via Google Fonts
- Framer Motion voor vloeiende animaties

## 🔧 Configuratie

De carousel kan worden aangepast door het `items` array in `VerticalCaroussel.tsx` te wijzigen. Elk item bevat:
- `id`: Unieke identifier
- `title`: Producttitel
- `description`: Productbeschrijving
- `color`: Achtergrondkleur (Tailwind klasse)
- `indicatorColor`: Kleur voor de voortgangsindicator




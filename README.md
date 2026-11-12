# SmartFarm — Modern Agri-Tech Platform for Andhra Pradesh 🌾

A high-performance, modern, and mobile-responsive agricultural guidance web platform crafted specifically for farmers across Andhra Pradesh. Built with semantic HTML5, modern CSS3 design tokens, and modular vanilla JavaScript.

---

## 🚀 Live Vercel Deployment

This project is 100% static frontend and **ready for instant deployment on Vercel**:

### Option 1: Deploy via GitHub (Recommended)
1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete modern SmartFarm redesign ready for Vercel"
   git push origin main
   ```
2. Log into [Vercel](https://vercel.com).
3. Click **"Add New Project"** and import your repository.
4. Leave framework preset as **Other** (Static HTML).
5. Click **"Deploy"**!

### Option 2: Deploy via Vercel CLI
```bash
npx vercel
```

---

## 📁 Structured Project Architecture

```
projects/
├── index.html              # Main Landing page (Hero, Approach, Seasons, Preview, Simulators)
├── about.html              # About SmartFarm, Mission & Principles
├── crops.html              # Interactive Crop Library with live search, filters & modals
├── seasons.html            # Andhra Pradesh Growing Cycles (Kharif, Rabi, Summer/Zaid)
├── cultivation.html        # 6-Stage Field Handbook (Soil to Post-Harvest Storage)
├── tools.html              # Interactive Farm Calculators & Agronomy Simulators
├── contact.html            # Kisan Help, Inquiry Form & AP District KVK Directory
├── vercel.json             # Vercel routing rules & security cache headers
├── package.json            # Project manifest
└── assets/
    ├── css/
    │   ├── main.css        # Design tokens, typography, navbar, footer & animations
    │   └── components.css  # Cards, badges, modals, tool calculators & forms
    └── js/
        ├── app.js          # Mobile navigation drawer, scroll effects & modals
        ├── crops.js        # Crop dataset, real-time search & detail view
        └── tools.js        # Interactive Crop Advisor, Weather & Profit calculators
```

---

## ✨ Features & Highlights

- **Mobile First & Ultra-Responsive**: Designed with clean typography (`Plus Jakarta Sans`), fluid flexbox and grid layouts, and touch-friendly mobile drawer menus.
- **The SmartFarm Approach**: Concrete guidance on irrigation efficiency, soil health, and financial resilience.
- **Dynamic Crop Library**: Real-time filtering and modal views for major Andhra Pradesh crops (Paddy, Groundnut, Cotton, Red Chilli, Bengal Gram, Maize, Watermelon, Green Gram).
- **Interactive Ag-Tools Suite**:
  1. **Crop Matchmaker**: Suggests crops based on soil, season, and AP district.
  2. **Market & Weather Simulator**: Live simulated Mandi prices (e.g. Guntur Mirchi Yard, Kurnool Groundnut Hub) and weather indicators.
  3. **Farm Return & Profitability Calculator**: Real-time calculation of gross revenue, operational expenses, and net surplus.
  4. **Seed Rate & Spacing Guide**: Verified agronomical metrics for major crops.
- **District KVK Directory & Helplines**: Toll-free Kisan Call Center, Rythu Bharosa Kendras (RBK), and verified research station contacts.


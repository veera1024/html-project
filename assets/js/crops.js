/**
 * SMARTFARM - Crop Library Database & Filter Logic
 * Enterprise agritech dataset with clean UI rendering
 */

const CROPS_DATA = [
  {
    id: 'paddy',
    name: 'Paddy (Rice)',
    season: 'kharif',
    seasonLabel: 'Kharif / Irrigated Rabi',
    soil: 'Clay loam & heavy delta soils',
    water: 'High (1,200 - 1,400 mm)',
    duration: '115 - 145 Days',
    image: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=700&q=80',
    summary: 'A staple grain crop across Coastal Andhra and Godavari/Krishna deltas. Requires thorough puddle preparation, level fields, and timely water regulation.',
    details: `
      <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--slate-900); margin-bottom: 0.75rem;">Paddy Cultivation Blueprint</h3>
      <p style="margin-bottom: 0.5rem;"><strong>Recommended Varieties:</strong> BPT 5204 (Samba Mahsuri), MTU 1010, MTU 1061, Swarna, NLR 34449.</p>
      <p style="margin-bottom: 0.5rem;"><strong>Nursery & Transplanting:</strong> Sow June-July for Kharif. Transplant 20-25 day old seedlings (2-3 per hill) at 15 x 15 cm spacing. Maintain 2-3 cm standing water during tillering.</p>
      <p style="margin-bottom: 0.5rem;"><strong>Integrated Pest Management:</strong> Scout regularly for stem borer and Brown Planthopper (BPH). Avoid excess nitrogen; provide alternate wetting and drying (AWD) cycles.</p>
      <p><strong>Harvest & Storage:</strong> Harvest when 85% panicles turn golden yellow. Sun-dry grain to 12-14% moisture before storage in clean gunny bags.</p>
    `
  },
  {
    id: 'groundnut',
    name: 'Groundnut (Peanut)',
    season: 'kharif',
    seasonLabel: 'Kharif / Rabi Irrigated',
    soil: 'Sandy loam & red sandy soils',
    water: 'Moderate (450 - 600 mm)',
    duration: '100 - 125 Days',
    image: 'https://images.unsplash.com/photo-1599763261765-a8ea8d88e7be?auto=format&fit=crop&w=700&q=80',
    summary: 'Essential oilseed crop across Rayalaseema (Anantapur, Kurnool). Thrives in well-drained soils; requires calcium and sulfur via gypsum during pegging.',
    details: `
      <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--slate-900); margin-bottom: 0.75rem;">Groundnut Cultivation Blueprint</h3>
      <p style="margin-bottom: 0.5rem;"><strong>Recommended Varieties:</strong> Kadiri-6, Kadiri-9, TMV-2, Dharani, Narayani.</p>
      <p style="margin-bottom: 0.5rem;"><strong>Seed Rate & Treatment:</strong> 60-70 kg kernel/acre. Treat seed with Trichoderma viride or mancozeb to prevent collar rot.</p>
      <p style="margin-bottom: 0.5rem;"><strong>Nutrient Strategy:</strong> Apply Gypsum @ 200 kg/acre at 40-45 days during pegging stage to stimulate solid pod formation.</p>
      <p><strong>Harvest Indicator:</strong> Pull sample plants; maturity is confirmed when inner shell develops dark brown/black veins.</p>
    `
  },
  {
    id: 'cotton',
    name: 'Cotton (Commercial Fibre)',
    season: 'kharif',
    seasonLabel: 'Primarily Kharif',
    soil: 'Deep Black Cotton Soils',
    water: 'Moderate to High (650 - 900 mm)',
    duration: '150 - 180+ Days',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=700&q=80',
    summary: 'Major cash crop grown across Guntur, Kurnool, and Prakasam districts. Requires vigilant sucking pest monitoring and balanced spacing.',
    details: `
      <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--slate-900); margin-bottom: 0.75rem;">Cotton Management Blueprint</h3>
      <p style="margin-bottom: 0.5rem;"><strong>Hybrids & Sowing:</strong> Certified Bt cotton hybrids suited to your specific district agro-zone. Sowing June-July after 60mm soaking rain.</p>
      <p style="margin-bottom: 0.5rem;"><strong>Plant Geometry:</strong> 90 x 60 cm or 120 x 45 cm. Avoid overly dense planting to reduce micro-humidity and pest shelter.</p>
      <p style="margin-bottom: 0.5rem;"><strong>IPM Protocols:</strong> Install yellow sticky traps (10/acre) and pheromone traps for pink bollworm early in the season.</p>
      <p><strong>Picking:</strong> Pick fully opened bolls in the morning after dew evaporates; keep free from bract trash for higher grading.</p>
    `
  },
  {
    id: 'redchilli',
    name: 'Red Chilli (Mirchi)',
    season: 'kharif',
    seasonLabel: 'Kharif / Rabi Schedule',
    soil: 'Well-drained loam & black soils',
    water: 'Regular Drip Fertigation',
    duration: '150 - 210 Days',
    image: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=700&q=80',
    summary: 'High-value spice crop centered around Guntur and Prakasam. Proper nursery raising, virus management, and clean shade-drying ensure export grade.',
    details: `
      <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--slate-900); margin-bottom: 0.75rem;">Red Chilli Production Guide</h3>
      <p style="margin-bottom: 0.5rem;"><strong>Key Varieties:</strong> Teja, LCA 334, Byadgi, Armoor, US 341.</p>
      <p style="margin-bottom: 0.5rem;"><strong>Nursery Raising:</strong> Raise seedlings on raised nursery beds protected by 50% shade nets to prevent early vector infestation.</p>
      <p style="margin-bottom: 0.5rem;"><strong>Vector & Thrip Control:</strong> Plant 3-4 rows of barrier crops (maize or sorghum) around field boundaries. Use blue sticky traps for thrips.</p>
      <p><strong>Drying & Curing:</strong> Dry pods on clean tarpaulins under open shade until reaching 10% moisture to retain deep red luster.</p>
    `
  },
  {
    id: 'maize',
    name: 'Maize (Corn)',
    season: 'rabi',
    seasonLabel: 'Kharif & Rabi Seasons',
    soil: 'Fertile well-drained loam',
    water: 'Moderate (500 - 650 mm)',
    duration: '95 - 110 Days',
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=700&q=80',
    summary: 'High-yielding grain and fodder crop with excellent performance during winter/rabi under assured irrigation.',
    details: `
      <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--slate-900); margin-bottom: 0.75rem;">Maize Production Guide</h3>
      <p style="margin-bottom: 0.5rem;"><strong>Rabi Sowing:</strong> October-November sowing gives higher test weight and fewer pest issues than monsoon crops.</p>
      <p style="margin-bottom: 0.5rem;"><strong>Nutrient Schedule:</strong> High nitrogen requirement. Apply N in 3 splits (basal, knee-high, and pre-tasseling stage).</p>
      <p><strong>Fall Armyworm (FAW) Management:</strong> Scout whorls from day 10. Apply bio-agents or recommended whorl-directed treatments early if damage occurs.</p>
    `
  },
  {
    id: 'bengalgram',
    name: 'Bengal Gram (Chickpea)',
    season: 'rabi',
    seasonLabel: 'Post-Monsoon Rabi',
    soil: 'Deep Black & Loam Soils',
    water: 'Low (Residual moisture)',
    duration: '90 - 105 Days',
    image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=700&q=80',
    summary: 'Premier pulse crop requiring minimal supplementary irrigation. Naturally restores soil fertility through biological nitrogen fixation.',
    details: `
      <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--slate-900); margin-bottom: 0.75rem;">Bengal Gram Agronomy</h3>
      <p style="margin-bottom: 0.5rem;"><strong>Varieties:</strong> JG 11, KAK 2, NBeG 3, JAKI 9218.</p>
      <p style="margin-bottom: 0.5rem;"><strong>Sowing:</strong> Mid-October to November into conserved post-monsoon sub-surface moisture. Treat seed with Rhizobium culture.</p>
      <p><strong>Pod Borer Watch:</strong> Helicoverpa armigera. Erect T-shaped bird perches (20/acre) to encourage predatory birds.</p>
    `
  },
  {
    id: 'watermelon',
    name: 'Watermelon & Melons',
    season: 'summer',
    seasonLabel: 'Summer Short-Duration',
    soil: 'Warm Sandy Loam',
    water: 'Drip Micro-Irrigation',
    duration: '70 - 85 Days',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=700&q=80',
    summary: 'Fast turnaround summer commercial fruit crop. High returns when managed with silver-black plastic mulch and drip fertigation.',
    details: `
      <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--slate-900); margin-bottom: 0.75rem;">Summer Melon Agronomy</h3>
      <p style="margin-bottom: 0.5rem;"><strong>Bed Setup:</strong> Raised beds covered with plastic mulch conserve moisture and prevent fruit contact with damp soil.</p>
      <p style="margin-bottom: 0.5rem;"><strong>Pollination Protection:</strong> Melons require bee visits for fruit setting. Never spray chemicals in the morning hours.</p>
      <p><strong>Harvesting:</strong> Ready when tendril nearest to the fruit attachment withers completely and bottom turns yellow-cream.</p>
    `
  },
  {
    id: 'greengram',
    name: 'Green Gram (Moong)',
    season: 'summer',
    seasonLabel: 'Summer / Rice Fallow Catch Crop',
    soil: 'Alluvium & Red Loam Soils',
    water: 'Low (1 - 2 light irrigations)',
    duration: '60 - 70 Days',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=700&q=80',
    summary: 'Shortest duration pulse crop widely cultivated in Krishna and Godavari rice fallows to utilize residual winter soil moisture.',
    details: `
      <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--slate-900); margin-bottom: 0.75rem;">Rice Fallow Pulse Technology</h3>
      <p style="margin-bottom: 0.5rem;"><strong>Relay Broadcast:</strong> Broadcast seed into standing paddy 2-3 days before harvesting when soil is pliable.</p>
      <p style="margin-bottom: 0.5rem;"><strong>Foliar Nutrition:</strong> Spray 2% DAP or pulse wonder solution at flowering to boost pod filling by over 20%.</p>
      <p><strong>Harvest:</strong> Synchronized maturing varieties allow single-pass manual pod picking or combine harvesting.</p>
    `
  }
];

document.addEventListener('DOMContentLoaded', () => {
  renderCropsGrid(CROPS_DATA);
  initCropFilters();
});

function renderCropsGrid(crops) {
  const container = document.getElementById('cropsContainer');
  if (!container) return;

  if (crops.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3.5rem 1rem; background: white; border: 1px solid var(--slate-200); border-radius: var(--radius-lg);">
        <p style="font-size: 1.1rem; font-weight: 700; color: var(--slate-800);">No crop records matched your filter.</p>
        <p style="color: var(--slate-500); font-size: 0.9rem; margin-top: 0.35rem;">Try modifying your keyword search or selecting "All Seasons".</p>
      </div>
    `;
    return;
  }

  container.innerHTML = crops.map(crop => `
    <article class="crop-card" data-crop-id="${crop.id}">
      <div class="crop-img-wrap">
        <img src="${crop.image}" alt="${crop.name}" loading="lazy">
        <span class="crop-badge-overlay">${crop.season}</span>
      </div>
      <div class="crop-body">
        <span class="crop-season-sub">${crop.seasonLabel}</span>
        <h3 class="crop-title">${crop.name}</h3>
        <div class="crop-meta-list">
          <div class="crop-meta-item">
            <span><strong>Soil:</strong> ${crop.soil}</span>
          </div>
          <div class="crop-meta-item">
            <span><strong>Water:</strong> ${crop.water}</span>
          </div>
          <div class="crop-meta-item">
            <span><strong>Duration:</strong> ${crop.duration}</span>
          </div>
        </div>
        <p class="crop-desc">${crop.summary}</p>
        <div class="crop-footer">
          <button class="btn-crop-detail" onclick="viewCropDetails('${crop.id}')">
            <span>View Complete Advisory</span>
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

function initCropFilters() {
  const searchInput = document.getElementById('cropSearchInput');
  const filterButtons = document.querySelectorAll('.filter-btn');

  let currentSeason = 'all';
  let searchTerm = '';

  function applyFilters() {
    const filtered = CROPS_DATA.filter(crop => {
      const matchesSeason = currentSeason === 'all' || crop.season === currentSeason;
      const matchesSearch = crop.name.toLowerCase().includes(searchTerm) ||
                            crop.soil.toLowerCase().includes(searchTerm) ||
                            crop.summary.toLowerCase().includes(searchTerm);
      return matchesSeason && matchesSearch;
    });

    renderCropsGrid(filtered);
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentSeason = btn.dataset.season || 'all';
      applyFilters();
    });
  });
}

function viewCropDetails(cropId) {
  const crop = CROPS_DATA.find(c => c.id === cropId);
  if (!crop) return;

  const content = `
    <div style="margin-bottom: 1.25rem;">
      <span class="section-tag">${crop.seasonLabel}</span>
      <h2 style="font-size: 1.65rem; font-weight: 800; color: var(--slate-900); margin-top: 0.35rem;">${crop.name}</h2>
    </div>
    <div style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: 1.25rem; max-height: 220px; border: 1px solid var(--slate-200);">
      <img src="${crop.image}" alt="${crop.name}" style="width: 100%; height: 220px; object-fit: cover;">
    </div>
    <div style="background: var(--slate-50); border: 1px solid var(--slate-200); border-radius: var(--radius-md); padding: 0.85rem 1rem; margin-bottom: 1.25rem;">
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; font-size: 0.8125rem;">
        <div><strong style="color: var(--slate-900);">Soil Type:</strong><br><span style="color: var(--slate-600);">${crop.soil}</span></div>
        <div><strong style="color: var(--slate-900);">Water Need:</strong><br><span style="color: var(--slate-600);">${crop.water}</span></div>
        <div><strong style="color: var(--slate-900);">Duration:</strong><br><span style="color: var(--slate-600);">${crop.duration}</span></div>
      </div>
    </div>
    <div style="line-height: 1.65; color: var(--slate-700); font-size: 0.875rem;">
      ${crop.details}
    </div>
    <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid var(--slate-200); display: flex; justify-content: space-between; align-items: center;">
      <span style="font-size: 0.75rem; color: var(--slate-500);">Confirm variety suitability with your local KVK / DAO.</span>
      <button class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.8125rem;" onclick="closeModal()">Close</button>
    </div>
  `;

  if (typeof openModal === 'function') {
    openModal(content);
  }
}

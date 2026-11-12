/**
 * SMARTFARM - Interactive Farming Tools & Simulators
 * 1. Crop Matchmaker & District Advisor
 * 2. Mandi Price & Weather Conditions
 * 3. Profit & Return Estimator
 */

document.addEventListener('DOMContentLoaded', () => {
  initCropAdvisorTool();
  initWeatherMandiTool();
  initProfitCalculatorTool();
});

// Tool 1: Interactive Crop Advisor
function initCropAdvisorTool() {
  const soilSelect = document.getElementById('advisorSoil');
  const seasonSelect = document.getElementById('advisorSeason');
  const districtSelect = document.getElementById('advisorDistrict');
  const resultTitle = document.getElementById('advisorResultCrop');
  const resultDuration = document.getElementById('advisorResultDuration');
  const resultAdvice = document.getElementById('advisorResultAdvice');

  if (!soilSelect || !seasonSelect || !districtSelect) return;

  function updateRecommendation() {
    const soil = soilSelect.value;
    const season = seasonSelect.value;
    const district = districtSelect.value;

    let crop = 'Groundnut';
    let duration = '100 - 120 Days';
    let advice = 'Well suited for sandy loam soils with moderate rainfall.';

    if (soil === 'clay' && season === 'kharif') {
      crop = 'Paddy (Rice)';
      duration = '120 - 145 Days';
      advice = 'Clay loam holds required standing water. Monitor stem borer in early tillering.';
    } else if (soil === 'black' && season === 'kharif') {
      crop = 'Cotton (Kapas)';
      duration = '150 - 180 Days';
      advice = 'Excellent for deep black soils in Rayalaseema & Guntur belts. Manage sucking pests responsibly.';
    } else if (district === 'guntur' && (soil === 'black' || soil === 'clay')) {
      crop = 'Red Chilli (Mirchi)';
      duration = '150 - 210 Days';
      advice = 'Ideal for Guntur & Prakasam. Ensure proper nursery raising and drip fertigation.';
    } else if (season === 'rabi') {
      crop = 'Bengal Gram (Chickpea)';
      duration = '90 - 105 Days';
      advice = 'Grows well on residual soil moisture in post-monsoon black/loam soils.';
    } else if (season === 'summer') {
      crop = 'Watermelon / Greengram';
      duration = '65 - 85 Days';
      advice = 'Short-duration catch crop. Ensure dependable borewell or drip irrigation.';
    }

    if (resultTitle) resultTitle.textContent = crop;
    if (resultDuration) resultDuration.textContent = duration;
    if (resultAdvice) resultAdvice.textContent = `${advice} Recommended for ${district.toUpperCase()} conditions.`;
  }

  soilSelect.addEventListener('change', updateRecommendation);
  seasonSelect.addEventListener('change', updateRecommendation);
  districtSelect.addEventListener('change', updateRecommendation);
}

// Tool 2: Weather & Mandi Simulator
function initWeatherMandiTool() {
  const districtSelect = document.getElementById('weatherDistrictSelect');
  const tempDisplay = document.getElementById('simTemp');
  const rainDisplay = document.getElementById('simRain');
  const commodityDisplay = document.getElementById('simCommodity');
  const priceDisplay = document.getElementById('simPrice');
  const trendDisplay = document.getElementById('simTrend');

  if (!districtSelect) return;

  const districtData = {
    guntur: { temp: "31°C", rain: "8 mm", crop: "Red Chilli (Teja)", price: "₹18,500 / Quintal", trend: "Steady Demand" },
    kurnool: { temp: "33°C", rain: "4 mm", crop: "Groundnut (Pod)", price: "₹6,850 / Quintal", trend: "Bullish Trend" },
    anantapur: { temp: "32°C", rain: "2 mm", crop: "Groundnut (TMV-2)", price: "₹6,600 / Quintal", trend: "Stable" },
    krishna: { temp: "30°C", rain: "14 mm", crop: "Paddy (BPT 5204)", price: "₹2,320 / Quintal", trend: "MSP Procured" },
    godavari: { temp: "29°C", rain: "18 mm", crop: "Paddy (Swarna)", price: "₹2,280 / Quintal", trend: "High Arrivals" }
  };

  districtSelect.addEventListener('change', () => {
    const data = districtData[districtSelect.value] || districtData.guntur;
    if (tempDisplay) tempDisplay.textContent = data.temp;
    if (rainDisplay) rainDisplay.textContent = data.rain;
    if (commodityDisplay) commodityDisplay.textContent = data.crop;
    if (priceDisplay) priceDisplay.textContent = data.price;
    if (trendDisplay) trendDisplay.textContent = data.trend;
  });
}

// Tool 3: Profit & Return Estimator
function initProfitCalculatorTool() {
  const yieldInput = document.getElementById('calcYield');
  const rateInput = document.getElementById('calcRate');
  const expenseInput = document.getElementById('calcExpenses');
  const acresInput = document.getElementById('calcAcres');
  
  const revenueDisplay = document.getElementById('calcRevenue');
  const expensesDisplay = document.getElementById('calcTotalExpenses');
  const surplusDisplay = document.getElementById('calcSurplus');

  if (!yieldInput || !rateInput || !expenseInput) return;

  function calculateReturns() {
    const acres = parseFloat(acresInput ? acresInput.value : 1) || 1;
    const yieldPerAcre = parseFloat(yieldInput.value) || 0;
    const ratePerKg = parseFloat(rateInput.value) || 0;
    const expensePerAcre = parseFloat(expenseInput.value) || 0;

    const totalYield = yieldPerAcre * acres;
    const grossRevenue = Math.round(totalYield * ratePerKg);
    const totalExpenses = Math.round(expensePerAcre * acres);
    const netSurplus = grossRevenue - totalExpenses;

    if (revenueDisplay) {
      revenueDisplay.textContent = `₹${grossRevenue.toLocaleString('en-IN')}`;
    }
    if (expensesDisplay) {
      expensesDisplay.textContent = `₹${totalExpenses.toLocaleString('en-IN')}`;
    }
    if (surplusDisplay) {
      surplusDisplay.textContent = `₹${netSurplus.toLocaleString('en-IN')} ${netSurplus >= 0 ? 'Surplus' : 'Deficit'}`;
      surplusDisplay.style.color = netSurplus >= 0 ? '#4ade80' : '#f87171';
    }
  }

  [yieldInput, rateInput, expenseInput, acresInput].forEach(elem => {
    if (elem) {
      elem.addEventListener('input', calculateReturns);
    }
  });

  calculateReturns();
}


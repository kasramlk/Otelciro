/* OtelCiro Investor Dashboard (static)
   - Data: provided CSV-like tables in prompt (embedded here)
   - Charts: Chart.js
   - Additions: ABC stacked bar, Occ heatmap
   - KPI cards: values + short definitions only (no YoY, no commentary)
*/

const MONTH_ORDER_TR = [
  'ocak','subat','mart','nisan','mayis','haziran','temmuz','agustos','eylul','ekim','kasim','aralik'
];

const MONTH_LABEL_TR = {
  ocak: 'Ocak', subat:'Şubat', mart:'Mart', nisan:'Nisan', mayis:'Mayıs', haziran:'Haziran',
  temmuz:'Temmuz', agustos:'Ağustos', eylul:'Eylül', ekim:'Ekim', kasim:'Kasım', aralik:'Aralık'
};

const HOTELS = [
  { key: 'bodrum_eskicesme', name: 'Bodrum Eskicesme' },
  { key: 'bodrum_gumbet', name: 'Bodrum Gumbet' },
  { key: 'bodrum_gundogan', name: 'Bodrum Gundogan' }
];

// Data model
// revenue = gross revenue (EUR)
// aRevenue, bRevenue, cRevenue (EUR)
// occ = percentage number (0-100)
// soldNights = number
// adr = EUR

const DATA = [
  // Gundogan
  { hotel:'bodrum_gundogan', month:'subat', aRevenue:null, bRevenue:null, cRevenue:null, revenue:6468.00, occ:35, soldNights:215.6, adr:30.00 },
  { hotel:'bodrum_gundogan', month:'mart', aRevenue:null, bRevenue:null, cRevenue:null, revenue:10741.50, occ:45, soldNights:306.9, adr:35.00 },
  { hotel:'bodrum_gundogan', month:'nisan', aRevenue:9450.00, bRevenue:10395.00, cRevenue:10602.90, revenue:30447.90, occ:40, soldNights:420, adr:72.50 },
  { hotel:'bodrum_gundogan', month:'mayis', aRevenue:19041.75, bRevenue:20945.93, cRevenue:21364.84, revenue:61352.52, occ:60, soldNights:651, adr:94.24 },
  { hotel:'bodrum_gundogan', month:'haziran', aRevenue:28113.75, bRevenue:30925.13, cRevenue:31543.63, revenue:90582.50, occ:70, soldNights:735, adr:123.24 },
  { hotel:'bodrum_gundogan', month:'temmuz', aRevenue:39060.00, bRevenue:46872.00, cRevenue:47809.44, revenue:133741.44, occ:80, soldNights:868, adr:154.08 },
  { hotel:'bodrum_gundogan', month:'agustos', aRevenue:47457.90, bRevenue:56949.48, cRevenue:58088.47, revenue:162495.85, occ:90, soldNights:976.5, adr:166.41 },
  { hotel:'bodrum_gundogan', month:'eylul', aRevenue:24806.25, bRevenue:29767.50, cRevenue:30362.85, revenue:84936.60, occ:70, soldNights:735, adr:115.56 },
  { hotel:'bodrum_gundogan', month:'ekim', aRevenue:14281.31, bRevenue:15709.44, cRevenue:16023.63, revenue:46014.39, occ:45, soldNights:488.25, adr:94.24 },
  { hotel:'bodrum_gundogan', month:'kasim', aRevenue:9450.00, bRevenue:10395.00, cRevenue:10602.90, revenue:30447.90, occ:40, soldNights:420, adr:72.50 },
  { hotel:'bodrum_gundogan', month:'aralik', aRevenue:9374.40, bRevenue:11249.28, cRevenue:11474.27, revenue:32097.95, occ:40, soldNights:434, adr:73.96 },

  // Eskicesme
  { hotel:'bodrum_eskicesme', month:'subat', aRevenue:2328.48, bRevenue:2561.33, cRevenue:2689.39, revenue:7579.20, occ:35, soldNights:215.6, adr:35.15 },
  { hotel:'bodrum_eskicesme', month:'mart', aRevenue:3866.94, bRevenue:4640.33, cRevenue:4872.34, revenue:13379.61, occ:45, soldNights:306.9, adr:43.60 },
  { hotel:'bodrum_eskicesme', month:'nisan', aRevenue:3706.56, bRevenue:4447.87, cRevenue:4670.27, revenue:12824.70, occ:40, soldNights:264, adr:48.58 },
  { hotel:'bodrum_eskicesme', month:'mayis', aRevenue:9374.40, bRevenue:11249.28, cRevenue:11811.74, revenue:32435.42, occ:50, soldNights:434, adr:74.74 },
  { hotel:'bodrum_eskicesme', month:'haziran', aRevenue:12757.50, bRevenue:15309.00, cRevenue:16839.90, revenue:44906.40, occ:75, soldNights:630, adr:71.28 },
  { hotel:'bodrum_eskicesme', month:'temmuz', aRevenue:18123.84, bRevenue:21748.61, cRevenue:23923.47, revenue:63795.92, occ:80, soldNights:694.4, adr:91.87 },
  { hotel:'bodrum_eskicesme', month:'agustos', aRevenue:18748.80, bRevenue:22498.56, cRevenue:26998.27, revenue:68245.63, occ:80, soldNights:694.4, adr:98.28 },
  { hotel:'bodrum_eskicesme', month:'eylul', aRevenue:14458.50, bRevenue:17350.20, cRevenue:20820.24, revenue:52628.94, occ:85, soldNights:714, adr:73.71 },
  { hotel:'bodrum_eskicesme', month:'ekim', aRevenue:7812.00, bRevenue:9374.40, cRevenue:11249.28, revenue:28435.68, occ:50, soldNights:434, adr:65.52 },
  { hotel:'bodrum_eskicesme', month:'kasim', aRevenue:5953.50, bRevenue:7144.20, cRevenue:8573.04, revenue:21670.74, occ:45, soldNights:378, adr:57.33 },
  { hotel:'bodrum_eskicesme', month:'aralik', aRevenue:4143.15, bRevenue:4971.78, cRevenue:5966.14, revenue:15081.07, occ:45, soldNights:306.9, adr:49.14 },

  // Gumbet
  { hotel:'bodrum_gumbet', month:'subat', aRevenue:1905.12, bRevenue:2095.63, cRevenue:2200.41, revenue:6201.17, occ:35, soldNights:176.4, adr:35.15 },
  { hotel:'bodrum_gumbet', month:'mart', aRevenue:3163.86, bRevenue:3796.63, cRevenue:3986.46, revenue:10946.96, occ:45, soldNights:251.1, adr:43.60 },
  { hotel:'bodrum_gumbet', month:'nisan', aRevenue:3032.64, bRevenue:3639.17, cRevenue:3821.13, revenue:10492.93, occ:40, soldNights:216, adr:48.58 },
  { hotel:'bodrum_gumbet', month:'mayis', aRevenue:11718.00, bRevenue:14061.60, cRevenue:14764.68, revenue:40544.28, occ:50, soldNights:542.5, adr:74.74 },
  { hotel:'bodrum_gumbet', month:'haziran', aRevenue:18427.50, bRevenue:20270.25, cRevenue:22297.28, revenue:60995.03, occ:75, soldNights:787.5, adr:77.45 },
  { hotel:'bodrum_gumbet', month:'temmuz', aRevenue:24070.73, bRevenue:26477.80, cRevenue:29125.58, revenue:79674.10, occ:85, soldNights:922.25, adr:86.39 },
  { hotel:'bodrum_gumbet', month:'agustos', aRevenue:25779.60, bRevenue:28357.56, cRevenue:31193.32, revenue:85330.48, occ:88, soldNights:954.8, adr:89.37 },
  { hotel:'bodrum_gumbet', month:'eylul', aRevenue:14883.75, bRevenue:16372.13, cRevenue:18009.34, revenue:49265.21, occ:70, soldNights:735, adr:67.03 },
  { hotel:'bodrum_gumbet', month:'ekim', aRevenue:9765.00, bRevenue:10741.50, cRevenue:11815.65, revenue:32322.15, occ:50, soldNights:542.5, adr:59.58 },
  { hotel:'bodrum_gumbet', month:'kasim', aRevenue:7441.88, bRevenue:8186.06, cRevenue:9004.67, revenue:24632.61, occ:45, soldNights:472.5, adr:52.13 },
  { hotel:'bodrum_gumbet', month:'aralik', aRevenue:6591.38, bRevenue:7250.51, cRevenue:7975.56, revenue:21817.45, occ:45, soldNights:488.25, adr:44.69 },
];

// ---------- Utilities
const fmtEUR = (v) => {
  if (v === null || v === undefined || Number.isNaN(v)) return '—';
  return new Intl.NumberFormat('de-DE', { style:'currency', currency:'EUR', maximumFractionDigits:0 }).format(v);
};
const fmtEUR2 = (v) => {
  if (v === null || v === undefined || Number.isNaN(v)) return '—';
  return new Intl.NumberFormat('de-DE', { style:'currency', currency:'EUR', minimumFractionDigits:2, maximumFractionDigits:2 }).format(v);
};
const fmtNum = (v, digits=0) => {
  if (v === null || v === undefined || Number.isNaN(v)) return '—';
  return new Intl.NumberFormat('en-US', { maximumFractionDigits:digits }).format(v);
};
const fmtPct = (v) => {
  if (v === null || v === undefined || Number.isNaN(v)) return '—';
  return `${v.toFixed(0)}%`;
};

function monthIndex(m){
  return MONTH_ORDER_TR.indexOf(m);
}

function uniq(arr){
  return Array.from(new Set(arr));
}

function clamp(n, a, b){
  return Math.max(a, Math.min(b, n));
}

function el(id){return document.getElementById(id)}

// ---------- State
const state = {
  selectedHotels: new Set(HOTELS.map(h=>h.key)),
  metric: 'revenue',
  startMonth: 'subat',
  endMonth: 'aralik',
  normalizeTrend: false,
  tableSearch: '',
  tableSort: 'month'
};

// ---------- DOM Init
function initFilters(){
  const hotelSelect = el('hotelSelect');
  hotelSelect.innerHTML = '';
  HOTELS.forEach(h => {
    const opt = document.createElement('option');
    opt.value = h.key;
    opt.textContent = h.name;
    opt.selected = true;
    hotelSelect.appendChild(opt);
  });

  const monthsInData = uniq(DATA.map(d=>d.month)).sort((a,b)=>monthIndex(a)-monthIndex(b));
  const startSel = el('startMonth');
  const endSel = el('endMonth');
  [startSel, endSel].forEach(sel => sel.innerHTML='');
  monthsInData.forEach(m => {
    const o1 = document.createElement('option');
    o1.value = m; o1.textContent = MONTH_LABEL_TR[m] || m;
    startSel.appendChild(o1);
    const o2 = document.createElement('option');
    o2.value = m; o2.textContent = MONTH_LABEL_TR[m] || m;
    endSel.appendChild(o2);
  });
  startSel.value = state.startMonth;
  endSel.value = state.endMonth;

  hotelSelect.addEventListener('change', () => {
    state.selectedHotels = new Set(Array.from(hotelSelect.selectedOptions).map(o=>o.value));
    if (state.selectedHotels.size === 0){
      // Keep at least one selection
      hotelSelect.options[0].selected = true;
      state.selectedHotels = new Set([hotelSelect.options[0].value]);
    }
    renderAll();
  });

  el('metricSelect').addEventListener('change', (e)=>{ state.metric = e.target.value; renderAll(); });
  startSel.addEventListener('change', (e)=>{ state.startMonth = e.target.value; ensureRange(); renderAll(); });
  endSel.addEventListener('change', (e)=>{ state.endMonth = e.target.value; ensureRange(); renderAll(); });
  el('toggleNormalize').addEventListener('change', (e)=>{ state.normalizeTrend = !!e.target.checked; renderAll(); });

  el('tableSearch').addEventListener('input', (e)=>{ state.tableSearch = e.target.value.trim().toLowerCase(); renderTable(); });
  el('tableSort').addEventListener('change', (e)=>{ state.tableSort = e.target.value; renderTable(); });

  el('btnExportCsv').addEventListener('click', exportTableCsv);
  el('btnExportTrendPng').addEventListener('click', exportTrendPng);

  el('yearNow').textContent = new Date().getFullYear();
}

function ensureRange(){
  const s = monthIndex(state.startMonth);
  const e = monthIndex(state.endMonth);
  if (s > e){
    // swap
    const tmp = state.startMonth;
    state.startMonth = state.endMonth;
    state.endMonth = tmp;
    el('startMonth').value = state.startMonth;
    el('endMonth').value = state.endMonth;
  }
}

function inRange(month){
  const i = monthIndex(month);
  return i >= monthIndex(state.startMonth) && i <= monthIndex(state.endMonth);
}

function getFilteredRows(){
  return DATA
    .filter(d => state.selectedHotels.has(d.hotel))
    .filter(d => inRange(d.month));
}

// ---------- Charts
let trendChart, shareChart, abcChart;

function buildTrendChart(rows){
  const ctx = el('trendChart');

  const months = uniq(rows.map(r=>r.month)).sort((a,b)=>monthIndex(a)-monthIndex(b));
  const labels = months.map(m => MONTH_LABEL_TR[m] || m);

  // group by hotel
  const datasets = HOTELS
    .filter(h=>state.selectedHotels.has(h.key))
    .map((h, idx) => {
      const color = hotelColor(idx);
      const values = months.map(m => {
        const r = rows.find(x => x.hotel===h.key && x.month===m);
        return r ? metricValue(r, state.metric) : null;
      });
      const data = state.normalizeTrend ? normalize(values) : values;
      return {
        label: h.name,
        data,
        borderColor: color,
        backgroundColor: color,
        borderWidth: 2,
        pointRadius: 2,
        tension: .35
      };
    });

  const config = {
    type:'line',
    data:{ labels, datasets },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      plugins:{
        legend:{ labels:{ color:'rgba(11,31,59,.80)', boxWidth:12, boxHeight:12 } },
        tooltip:{
          backgroundColor:'rgba(255,255,255,.98)',
          titleColor:'rgba(11,31,59,.92)',
          bodyColor:'rgba(11,31,59,.90)',
          borderColor:'rgba(11,31,59,.14)',
          borderWidth:1,
          callbacks:{
            label: (ctx) => {
              const v = ctx.parsed.y;
              return `${ctx.dataset.label}: ${formatMetric(v, state.metric, true)}`;
            }
          }
        }
      },
      scales:{
        x:{ ticks:{ color:'rgba(11,31,59,.70)' }, grid:{ color:'rgba(11,31,59,.06)' } },
        y:{ ticks:{ color:'rgba(11,31,59,.70)' }, grid:{ color:'rgba(11,31,59,.06)' } }
      }
    }
  };

  if (trendChart) trendChart.destroy();
  trendChart = new Chart(ctx, config);

  el('trendChip').textContent = state.normalizeTrend ? 'Normalize' : metricLabel(state.metric);
}

function buildShareChart(rows){
  const ctx = el('hotelShareChart');
  const byHotel = HOTELS
    .filter(h=>state.selectedHotels.has(h.key))
    .map((h)=>{
      const sum = rows.filter(r=>r.hotel===h.key).reduce((a,b)=>a+(b.revenue||0),0);
      return { name:h.name, value:sum };
    });

  const labels = byHotel.map(x=>x.name);
  const data = byHotel.map(x=>x.value);
  const colors = byHotel.map((_,i)=>hotelColor(i));

  if (shareChart) shareChart.destroy();
  shareChart = new Chart(ctx, {
    type:'doughnut',
    data:{ labels, datasets:[{ data, backgroundColor: colors, borderColor:'rgba(255,255,255,.10)', borderWidth:1 }] },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      plugins:{
        legend:{ position:'bottom', labels:{ color:'rgba(11,31,59,.78)' } },
        tooltip:{
          backgroundColor:'rgba(255,255,255,.98)',
          titleColor:'rgba(11,31,59,.92)',
          bodyColor:'rgba(11,31,59,.90)',
          borderColor:'rgba(11,31,59,.14)',
          borderWidth:1,
          callbacks:{ label:(c)=> `${c.label}: ${fmtEUR(c.parsed)}` }
        }
      },
      cutout:'62%'
    }
  });
}

function buildABCStacked(rows){
  const ctx = el('abcStackedChart');
  const months = uniq(rows.map(r=>r.month)).sort((a,b)=>monthIndex(a)-monthIndex(b));
  const labels = months.map(m => MONTH_LABEL_TR[m] || m);

  // sum across selected hotels for each month
  const sumByMonth = (field) => months.map(m => rows.filter(r=>r.month===m).reduce((acc,x)=>acc+(x[field]||0),0));

  const dataA = sumByMonth('aRevenue');
  const dataB = sumByMonth('bRevenue');
  const dataC = sumByMonth('cRevenue');

  if (abcChart) abcChart.destroy();
  abcChart = new Chart(ctx, {
    type:'bar',
    data:{
      labels,
      datasets:[
        { label:'A Geliri', data:dataA, backgroundColor:'rgba(0,53,128,.75)', borderColor:'rgba(0,53,128,.95)', borderWidth:1, stack:'stack1' },
        { label:'B Geliri', data:dataB, backgroundColor:'rgba(0,87,184,.68)', borderColor:'rgba(0,87,184,.95)', borderWidth:1, stack:'stack1' },
        { label:'C Geliri', data:dataC, backgroundColor:'rgba(255,183,0,.70)', borderColor:'rgba(255,183,0,.95)', borderWidth:1, stack:'stack1' },
      ]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      plugins:{
        legend:{ position:'bottom', labels:{ color:'rgba(11,31,59,.78)' } },
        tooltip:{
          backgroundColor:'rgba(255,255,255,.98)',
          titleColor:'rgba(11,31,59,.92)',
          bodyColor:'rgba(11,31,59,.90)',
          borderColor:'rgba(11,31,59,.14)',
          borderWidth:1,
          callbacks:{ label:(c)=> `${c.dataset.label}: ${fmtEUR(c.parsed.y)}` }
        }
      },
      scales:{
        x:{ stacked:true, ticks:{ color:'rgba(11,31,59,.70)' }, grid:{ color:'rgba(11,31,59,.06)' } },
        y:{ stacked:true, ticks:{ color:'rgba(11,31,59,.70)', callback:(v)=> new Intl.NumberFormat('en-US',{notation:'compact'}).format(v) }, grid:{ color:'rgba(11,31,59,.06)' } }
      }
    }
  });
}

// ---------- Heatmap (Hotel x Month)
function renderOccHeatmap(rows){
  const container = el('occHeatmap');
  container.innerHTML = '';

  const hotels = HOTELS.filter(h=>state.selectedHotels.has(h.key));
  const months = uniq(rows.map(r=>r.month)).sort((a,b)=>monthIndex(a)-monthIndex(b));

  // header row + grid
  const grid = document.createElement('div');
  grid.className = 'heatmap__grid';
  grid.style.gridTemplateColumns = `minmax(180px, 220px) repeat(${months.length}, minmax(90px, 1fr))`;

  // Header
  grid.appendChild(cell('Otel / Ay', true));
  months.forEach(m => grid.appendChild(cell(MONTH_LABEL_TR[m] || m, true)));

  // values
  hotels.forEach(h => {
    grid.appendChild(cell(h.name, true, true));
    months.forEach(m => {
      const r = rows.find(x=>x.hotel===h.key && x.month===m);
      const occ = r ? r.occ : null;
      const c = cell(occ===null? '—' : fmtPct(occ), false);
      if (occ !== null){
        c.style.background = heatColor(occ);
        c.style.borderColor = 'rgba(255,255,255,.12)';
      } else {
        c.style.background = 'rgba(255,255,255,.03)';
      }
      c.title = `${h.name} • ${MONTH_LABEL_TR[m] || m}: ${occ===null?'—':fmtPct(occ)}`;
      grid.appendChild(c);
    });
  });

  container.appendChild(grid);
}

function cell(text, header=false, isHotel=false){
  const d = document.createElement('div');
  d.className = 'heatmap__cell' + (header ? ' heatmap__cell--header' : '');
  if (isHotel) d.classList.add('heatmap__hotel');
  const strong = document.createElement('strong');
  strong.textContent = text;
  d.appendChild(strong);
  return d;
}

function heatColor(occ){
  // map 0..100 to 5 buckets
  const b = clamp(Math.floor(occ/20)+1, 1, 5);
  return getComputedStyle(document.documentElement).getPropertyValue(`--heat-${b}`).trim();
}

// ---------- KPI + Table
function renderKPIs(rows){
  const totalRevenue = rows.reduce((a,b)=>a+(b.revenue||0),0);
  const avgOcc = average(rows.map(r=>r.occ));
  const totalSold = rows.reduce((a,b)=>a+(b.soldNights||0),0);
  const avgAdr = average(rows.map(r=>r.adr));

  el('kpiRevenue').textContent = fmtEUR(totalRevenue);
  el('kpiOcc').textContent = avgOcc===null ? '—' : fmtPct(avgOcc);
  el('kpiSold').textContent = fmtNum(totalSold, 1);
  el('kpiAdr').textContent = avgAdr===null ? '—' : fmtEUR2(avgAdr);
}

function renderTable(){
  const body = el('tableBody');
  body.innerHTML = '';

  let rows = getFilteredRows().slice();

  // search
  if (state.tableSearch){
    rows = rows.filter(r => {
      const hotelName = HOTELS.find(h=>h.key===r.hotel)?.name || r.hotel;
      const monthName = (MONTH_LABEL_TR[r.month] || r.month).toLowerCase();
      return hotelName.toLowerCase().includes(state.tableSearch) || monthName.includes(state.tableSearch);
    });
  }

  // sort
  rows.sort((a,b)=>{
    switch(state.tableSort){
      case 'hotel': return (a.hotel>b.hotel)-(a.hotel<b.hotel);
      case 'revenue_desc': return (b.revenue||0)-(a.revenue||0);
      case 'revenue_asc': return (a.revenue||0)-(b.revenue||0);
      case 'occ_desc': return (b.occ||0)-(a.occ||0);
      case 'occ_asc': return (a.occ||0)-(b.occ||0);
      default: return monthIndex(a.month)-monthIndex(b.month);
    }
  });

  rows.forEach(r => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${MONTH_LABEL_TR[r.month] || r.month}</td>
      <td>${HOTELS.find(h=>h.key===r.hotel)?.name || r.hotel}</td>
      <td class="right">${fmtEUR(r.revenue)}</td>
      <td class="right">${fmtPct(r.occ)}</td>
      <td class="right">${fmtNum(r.soldNights, 1)}</td>
      <td class="right">${fmtEUR2(r.adr)}</td>
      <td class="right">${fmtEUR(r.aRevenue)}</td>
      <td class="right">${fmtEUR(r.bRevenue)}</td>
      <td class="right">${fmtEUR(r.cRevenue)}</td>
    `;
    body.appendChild(tr);
  });
}

// ---------- Helpers
function average(arr){
  const valid = arr.filter(v => v!==null && v!==undefined && !Number.isNaN(v));
  if (!valid.length) return null;
  return valid.reduce((a,b)=>a+b,0)/valid.length;
}

function metricValue(row, metric){
  if (!row) return null;
  if (metric==='revenue') return row.revenue;
  if (metric==='occ') return row.occ;
  if (metric==='soldNights') return row.soldNights;
  if (metric==='adr') return row.adr;
  return null;
}

function metricLabel(metric){
  return ({ revenue:'Ciro (EUR)', occ:'Occ (%)', soldNights:'Sold Nights', adr:'ADR (EUR)' })[metric] || metric;
}

function formatMetric(v, metric, tooltip=false){
  if (v===null || v===undefined || Number.isNaN(v)) return '—';
  if (state.normalizeTrend && !tooltip) return fmtNum(v, 3);
  if (metric==='revenue') return fmtEUR(v);
  if (metric==='occ') return fmtPct(v);
  if (metric==='soldNights') return fmtNum(v, 1);
  if (metric==='adr') return fmtEUR2(v);
  return String(v);
}

function normalize(values){
  const valid = values.filter(v=>v!==null && v!==undefined && !Number.isNaN(v));
  if (!valid.length) return values;
  const min = Math.min(...valid);
  const max = Math.max(...valid);
  const denom = (max-min) || 1;
  return values.map(v => (v===null||v===undefined) ? null : (v-min)/denom);
}

function hotelColor(i){
  // Booking.com-like enterprise palette
  const palette = [
    'rgba(0,53,128,.95)',   // Booking blue
    'rgba(0,87,184,.92)',   // bright blue
    'rgba(255,183,0,.92)'   // booking yellow
  ];
  return palette[i % palette.length];
}

// ---------- Exports
function exportTableCsv(){
  const rows = getFilteredRows();
  const header = ['month','hotel','revenue_eur','occ_pct','sold_nights','adr_eur','a_eur','b_eur','c_eur'];
  const lines = [header.join(',')];
  rows
    .sort((a,b)=> monthIndex(a.month)-monthIndex(b.month))
    .forEach(r => {
      const hotelName = HOTELS.find(h=>h.key===r.hotel)?.name || r.hotel;
      lines.push([
        MONTH_LABEL_TR[r.month] || r.month,
        hotelName,
        r.revenue ?? '',
        r.occ ?? '',
        r.soldNights ?? '',
        r.adr ?? '',
        r.aRevenue ?? '',
        r.bRevenue ?? '',
        r.cRevenue ?? ''
      ].join(','));
    });

  const blob = new Blob([lines.join('\n')], { type:'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `otelciro_2026_dashboard_${state.startMonth}-${state.endMonth}.csv`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function exportTrendPng(){
  if (!trendChart) return;
  const a = document.createElement('a');
  a.href = trendChart.toBase64Image();
  a.download = `otelciro_trend_${state.metric}_${state.startMonth}-${state.endMonth}.png`;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

// ---------- Render
function renderAll(){
  const rows = getFilteredRows();
  renderKPIs(rows);
  buildTrendChart(rows);
  buildShareChart(rows);
  buildABCStacked(rows);
  renderOccHeatmap(rows);
  renderTable();
}

(function main(){
  initFilters();
  renderAll();
})();

import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell,
  LabelList
} from 'recharts';
import { 
  Building2, 
  TrendingUp, 
  Target, 
  Users, 
  Calendar, 
  ArrowDownRight,
  Wallet,
  Filter
} from 'lucide-react';

// Advanced Professional Palette - Booking.com Evolution
const THEME = {
  brand: {
    primary: '#003580',    // Deep Blue
    accent: '#006CE4',     // Bright Blue
    light: '#E5F0FD',      // Soft Blue bg
  },
  status: {
    success: '#059669',    // Emerald 600
    successBg: '#ECFDF5',  // Emerald 50
    danger: '#DC2626',     // Red 600
    dangerBg: '#FEF2F2',   // Red 50
  },
  surface: {
    glass: 'rgba(255, 255, 255, 0.7)',
    card: '#ffffff',
    text: '#0F172A',       // Slate 900
    subtext: '#64748B',    // Slate 500
  }
};

const DATA = [
  {
    id: 1,
    name: "Taksim Nis Hotel",
    currency: "€",
    revenue: 24173.02,
    occupancy: 80.98,
    adr: 58.53,
    lastYear: 19329,
    target: 21542,
    location: "İstanbul, Beyoğlu",
    imageGradient: "from-blue-600 to-indigo-700"
  },
  {
    id: 2,
    name: "Petrion Balat Hotel",
    currency: "€",
    revenue: 29082.68,
    occupancy: 68.24,
    adr: 81.56,
    lastYear: 22002,
    target: 22950,
    location: "İstanbul, Fatih",
    imageGradient: "from-cyan-600 to-blue-700"
  },
  {
    id: 3,
    name: "Eskiciler Konağı Isparta",
    currency: "TL",
    revenue: 566638.41,
    occupancy: 40.70,
    adr: 2400.25,
    lastYear: 190513.09,
    target: 698000,
    location: "Isparta, Merkez",
    imageGradient: "from-indigo-600 to-purple-700"
  }
];

const formatCurrency = (value, currency) => {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: currency === 'TL' ? 'TRY' : 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const formatNumber = (num) => {
  return new Intl.NumberFormat('tr-TR', { maximumFractionDigits: 2 }).format(num);
};

// Ultra-modern Tooltip - Mobile Optimized
const CustomTooltip = ({ active, payload, label, currency }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900/95 text-white text-xs py-2 px-3 rounded-lg shadow-2xl border border-slate-700/50 backdrop-blur-md z-50 pointer-events-none">
        <p className="font-medium text-slate-300 mb-0.5">{label}</p>
        <p className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
          {formatCurrency(payload[0].value, currency)}
        </p>
      </div>
    );
  }
  return null;
};

const HotelCard = ({ hotel }) => {
  const achievementRate = (hotel.revenue / hotel.target) * 100;
  const growthRate = ((hotel.revenue - hotel.lastYear) / hotel.lastYear) * 100;
  const diff = hotel.revenue - hotel.lastYear;
  
  const chartData = [
    { name: '2024', value: hotel.lastYear },
    { name: '2025', value: hotel.revenue, diff: diff },
  ];

  const renderCustomizedLabel = (props) => {
    const { x, y, width, index, value } = props;
    
    // 2024 (Index 0): Show the plain value
    if (index === 0) {
      return (
        <text 
          x={x + width / 2} 
          y={y - 12} 
          fill="#94a3b8" 
          textAnchor="middle" 
          dominantBaseline="middle" 
          fontSize="11" 
          fontWeight="600"
        >
          {new Intl.NumberFormat('tr-TR', { notation: "compact", maximumFractionDigits: 1 }).format(value)}
        </text>
      );
    }

    // 2025 (Index 1): Show the difference pill
    const dataItem = chartData[index];
    const currentDiff = dataItem?.diff || 0;
    const isPos = currentDiff >= 0;
    const sign = isPos ? '+' : '';
    
    return (
      <g>
        <foreignObject x={x + width / 2 - 50} y={y - 50} width="100" height="40">
          <div className="flex justify-center items-center h-full">
            <div className={`px-2.5 py-1 rounded-lg text-[11px] font-bold shadow-sm border backdrop-blur-sm flex items-center justify-center gap-0.5 w-auto min-w-[60px] text-center ${isPos ? 'bg-emerald-50/95 text-emerald-700 border-emerald-200' : 'bg-red-50/95 text-red-700 border-red-200'}`}>
              {sign}{new Intl.NumberFormat('tr-TR', { notation: "compact", maximumFractionDigits: 1 }).format(currentDiff)}
            </div>
          </div>
        </foreignObject>
      </g>
    );
  };

  return (
    <div className="group relative bg-white rounded-3xl border border-slate-100 shadow-[0_2px_20px_rgb(0,0,0,0.04)] active:scale-[0.98] transition-all duration-300 overflow-hidden flex flex-col h-full touch-manipulation">
      
      {/* Header Section */}
      <div className="relative p-6 pb-4">
        <div className="flex justify-between items-start">
          <div className="flex gap-3 items-center overflow-hidden">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${hotel.imageGradient} flex items-center justify-center text-white shadow-lg shadow-blue-900/10 shrink-0`}>
              <Building2 className="w-6 h-6" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-bold text-slate-900 leading-tight truncate">{hotel.name}</h3>
              <p className="text-xs font-medium text-slate-400 mt-1 flex items-center gap-1 truncate">
                {hotel.location}
              </p>
            </div>
          </div>
          
          <div className={`flex items-center px-2.5 py-1.5 rounded-full text-xs font-bold border shrink-0 ml-2 ${growthRate >= 0 ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-rose-50 text-rose-700 border-rose-100'}`}>
            {growthRate >= 0 ? <TrendingUp className="w-3.5 h-3.5 mr-1" /> : <ArrowDownRight className="w-3.5 h-3.5 mr-1" />}
            %{formatNumber(growthRate)}
          </div>
        </div>
      </div>

      {/* Stats Body */}
      <div className="px-6 flex-1 flex flex-col relative z-10">
        <div className="mt-2 mb-6">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-black text-slate-900 tracking-tight">
              {formatCurrency(hotel.revenue, hotel.currency)}
            </span>
          </div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Toplam Ciro</p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="p-3 bg-slate-50/80 rounded-2xl border border-slate-100 active:bg-slate-100 transition-colors">
             <div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
               <Users className="w-3.5 h-3.5" /> Doluluk
             </div>
             <div className="text-xl font-bold text-slate-700">%{formatNumber(hotel.occupancy)}</div>
          </div>
          <div className="p-3 bg-slate-50/80 rounded-2xl border border-slate-100 active:bg-slate-100 transition-colors">
             <div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
               <Wallet className="w-3.5 h-3.5" /> ADR
             </div>
             <div className="text-xl font-bold text-slate-700">{formatCurrency(hotel.adr, hotel.currency)}</div>
          </div>
        </div>

        {/* Target Slider */}
        <div className="mb-5">
          <div className="flex justify-between text-xs mb-2">
            <span className="font-bold text-slate-400">HEDEF</span>
            <span className="font-bold text-slate-700">{formatCurrency(hotel.target, hotel.currency)}</span>
          </div>
          <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
             <div 
                className={`h-full rounded-full shadow-sm ${achievementRate >= 100 ? 'bg-emerald-500' : 'bg-blue-600'}`} 
                style={{ width: `${Math.min(achievementRate, 100)}%` }}
             ></div>
          </div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="mt-auto h-44 w-full relative">
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none z-10" />
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 40, right: -10, left: -20, bottom: -5 }}>
            <defs>
              <linearGradient id={`grad-${hotel.id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={THEME.brand.accent} stopOpacity={1}/>
                <stop offset="100%" stopColor={THEME.brand.primary} stopOpacity={0.8}/>
              </linearGradient>
            </defs>
            <Tooltip 
              content={<CustomTooltip currency={hotel.currency} />} 
              cursor={{ fill: '#f8fafc', opacity: 0.8 }} 
              trigger="hover"
            />
            <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={48} cursor="pointer" isAnimationActive={false}>
              {chartData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={index === 0 ? '#cbd5e1' : `url(#grad-${hotel.id})`} 
                />
              ))}
              <LabelList dataKey="value" content={renderCustomizedLabel} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 selection:bg-blue-100 relative overflow-x-hidden">
      
      {/* Mesh Gradient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
         <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[50%] rounded-full bg-blue-400/20 blur-[100px]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[50%] rounded-full bg-indigo-400/20 blur-[100px]" />
      </div>

      {/* Super Clean Navbar - Logo Only */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02)] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center items-center h-16">
            
            {/* Centered Brand */}
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 flex items-center justify-center">
                 <div className="relative w-full h-full bg-gradient-to-br from-blue-700 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                   <span className="font-extrabold text-lg">N</span>
                 </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-black text-slate-900 tracking-tight leading-none">NIS GROUP</h1>
              </div>
            </div>

          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-12 relative z-10">
        
        {/* Header - Date & Title */}
        <div className="flex flex-col gap-4 mb-8 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                 <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
                   <Calendar className="w-3 h-3 mr-1" />
                   Kasım 2025
                 </span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Performans</h2>
            </div>
            {/* Filter Button */}
            <button className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm text-slate-600 active:bg-slate-50 transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DATA.map((hotel, index) => (
            <div 
              key={hotel.id} 
              className="opacity-0 animate-[slideUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <HotelCard hotel={hotel} />
            </div>
          ))}
        </div>

      </main>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

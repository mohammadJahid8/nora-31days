import {
  Calendar,
  ChevronRight,
  Fingerprint,
  TrendingDown,
  TrendingUp,
} from 'lucide-react';
import GlassPanel from '../../glass-panel';
import { MASTER_PROTOCOL_DATA } from '../../../utils/data';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';

const CanvasTab = ({
  institutionalDelta,
  protocol,
  profile,
  setActiveTab,
  trajectoryData,
}) => {
  return (
    <div className='space-y-6 md:space-y-12 lg:space-y-16 animate-in fade-in'>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6'>
        <GlassPanel title='Baseline Delta'>
          <h3 className='text-4xl md:text-5xl lg:text-6xl font-thin font-mono text-[#D4AF37] leading-none'>
            {institutionalDelta}%
          </h3>
        </GlassPanel>
        <GlassPanel title='Velocity Score'>
          <h3 className='text-4xl md:text-5xl lg:text-6xl font-thin font-mono text-white leading-none'>
            {protocol.velocityScore}
          </h3>
        </GlassPanel>
        <GlassPanel title='Target Horizon'>
          <h3 className='text-sm md:text-lg font-light uppercase text-white tracking-wider leading-tight'>
            {profile.goal || '---'}
          </h3>
        </GlassPanel>
        <GlassPanel title='Sync Status'>
          <h3 className='text-sm md:text-base font-bold uppercase text-green-500 tracking-wider'>
            OPTIMAL
          </h3>
        </GlassPanel>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8'>
        <GlassPanel title='Active Protocol Mandate' icon={Calendar}>
          <div className='flex justify-between items-center gap-4'>
            <div className='min-w-0'>
              <p className='text-xs md:text-sm font-bold text-[#D4AF37] uppercase tracking-wider mb-2'>
                31-Day OS Link
              </p>
              <h4 className='text-xl md:text-2xl lg:text-3xl font-extralight uppercase leading-tight truncate'>
                {MASTER_PROTOCOL_DATA[protocol.currentDay]?.title ||
                  'Awaiting Signal'}
              </h4>
            </div>
            <button
              onClick={() => setActiveTab('protocol')}
              className='w-12 h-12 md:w-14 md:h-14 bg-[#D4AF37]/10 rounded-full flex items-center justify-center border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0D1642] transition-all shadow-xl shrink-0'
            >
              <ChevronRight size={20} className='md:w-6 md:h-6' />
            </button>
          </div>
        </GlassPanel>
        <GlassPanel title='Institutional DNA' icon={Fingerprint}>
          <div className='grid grid-cols-2 gap-4 md:gap-8'>
            <div>
              <p className='text-xs md:text-sm font-bold text-white/40 uppercase tracking-wider mb-1'>
                Accord Node
              </p>
              <p className='text-sm md:text-base font-bold uppercase tracking-wider text-[#D4AF37] truncate'>
                {profile.accord || 'PENDING'}
              </p>
            </div>
            <div>
              <p className='text-xs md:text-sm font-bold text-white/40 uppercase tracking-wider mb-1'>
                Blueprint
              </p>
              <p className='text-sm md:text-base font-bold uppercase tracking-wider text-[#D4AF37] truncate'>
                {profile.blueprint || 'PENDING'}
              </p>
            </div>
          </div>
        </GlassPanel>
      </div>
      {/* VISUAL TRAJECTORY CHARTS */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8'>
        <GlassPanel
          title='Net Worth Trajectory'
          icon={TrendingUp}
        >
          <div className='h-48 md:h-64 w-full'>
            <ResponsiveContainer width='100%' height='100%'>
              <AreaChart data={trajectoryData}>
                <defs>
                  <linearGradient
                    id='colorWorth'
                    x1='0'
                    y1='0'
                    x2='0'
                    y2='1'
                  >
                    <stop
                      offset='5%'
                      stopColor='#D4AF37'
                      stopOpacity={0.3}
                    />
                    <stop
                      offset='95%'
                      stopColor='#D4AF37'
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray='3 3'
                  stroke='rgba(255,255,255,0.05)'
                />
                <XAxis
                  dataKey='month'
                  stroke='rgba(255,255,255,0.3)'
                  fontSize={11}
                />
                <YAxis stroke='rgba(255,255,255,0.3)' fontSize={11} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0D1642',
                    borderColor: '#D4AF37',
                    fontSize: '12px',
                  }}
                />
                <Area
                  type='monotone'
                  dataKey='NetWorth'
                  stroke='#D4AF37'
                  fillOpacity={1}
                  fill='url(#colorWorth)'
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassPanel>
        <GlassPanel title='Debt Decay Projection' icon={TrendingDown}>
          <div className='h-48 md:h-64 w-full'>
            <ResponsiveContainer width='100%' height='100%'>
              <LineChart data={trajectoryData}>
                <CartesianGrid
                  strokeDasharray='3 3'
                  stroke='rgba(255,255,255,0.05)'
                />
                <XAxis
                  dataKey='month'
                  stroke='rgba(255,255,255,0.3)'
                  fontSize={11}
                />
                <YAxis stroke='rgba(255,255,255,0.3)' fontSize={11} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0D1642',
                    borderColor: '#D4AF37',
                    fontSize: '12px',
                  }}
                />
                <Line
                  type='monotone'
                  dataKey='Debt'
                  stroke='#EF4444'
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </GlassPanel>
      </div>
    </div>
  );
};

export default CanvasTab;


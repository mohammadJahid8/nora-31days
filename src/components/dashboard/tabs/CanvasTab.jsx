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
    <div className='space-y-20 animate-in fade-in'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
        <GlassPanel title='Baseline Delta'>
          <h3 className='text-7xl font-thin font-mono text-[#D4AF37] leading-none'>
            {institutionalDelta}%
          </h3>
        </GlassPanel>
        <GlassPanel title='Velocity Score'>
          <h3 className='text-7xl font-thin font-mono text-white leading-none'>
            {protocol.velocityScore}
          </h3>
        </GlassPanel>
        <GlassPanel title='Target Horizon'>
          <h3 className='text-lg font-extralight uppercase text-white tracking-widest leading-tight'>
            {profile.goal || '---'}
          </h3>
        </GlassPanel>
        <GlassPanel title='Sync Status'>
          <h3 className='text-[0.7rem] font-black uppercase text-green-500 tracking-[0.4em]'>
            OPTIMAL
          </h3>
        </GlassPanel>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
        <GlassPanel title='Active Protocol Mandate' icon={Calendar}>
          <div className='flex justify-between items-center h-full'>
            <div>
              <p className='text-[0.5rem] font-black text-[#D4AF37] uppercase tracking-widest mb-2'>
                31-Day OS Link
              </p>
              <h4 className='text-3xl font-extralight uppercase leading-tight'>
                {MASTER_PROTOCOL_DATA[protocol.currentDay]?.title ||
                  'Awaiting Signal'}
              </h4>
            </div>
            <button
              onClick={() => setActiveTab('protocol')}
              className='w-14 h-14 bg-[#D4AF37]/10 rounded-full flex items-center justify-center border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0D1642] transition-all shadow-xl'
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </GlassPanel>
        <GlassPanel title='Institutional DNA' icon={Fingerprint}>
          <div className='grid grid-cols-2 gap-8 h-full items-center'>
            <div>
              <p className='text-[0.5rem] font-black text-white/30 uppercase tracking-widest mb-1'>
                Accord Node
              </p>
              <p className='text-xs font-black uppercase tracking-widest text-[#D4AF37]'>
                {profile.accord || 'PENDING'}
              </p>
            </div>
            <div>
              <p className='text-[0.5rem] font-black text-white/30 uppercase tracking-widest mb-1'>
                Blueprint
              </p>
              <p className='text-xs font-black uppercase tracking-widest text-[#D4AF37]'>
                {profile.blueprint || 'PENDING'}
              </p>
            </div>
          </div>
        </GlassPanel>
      </div>
      {/* VISUAL TRAJECTORY CHARTS */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
        <GlassPanel
          title='Net Worth Trajectory (90 Days)'
          icon={TrendingUp}
        >
          <div className='h-64 w-full'>
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
                  stroke='rgba(255,255,255,0.2)'
                  fontSize={10}
                />
                <YAxis stroke='rgba(255,255,255,0.2)' fontSize={10} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0D1642',
                    borderColor: '#D4AF37',
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
          <div className='h-64 w-full'>
            <ResponsiveContainer width='100%' height='100%'>
              <LineChart data={trajectoryData}>
                <CartesianGrid
                  strokeDasharray='3 3'
                  stroke='rgba(255,255,255,0.05)'
                />
                <XAxis
                  dataKey='month'
                  stroke='rgba(255,255,255,0.2)'
                  fontSize={10}
                />
                <YAxis stroke='rgba(255,255,255,0.2)' fontSize={10} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0D1642',
                    borderColor: '#D4AF37',
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


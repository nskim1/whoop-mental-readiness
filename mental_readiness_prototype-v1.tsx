import React, { useState } from 'react';
import { ChevronRight, Check } from 'lucide-react';

export default function MentalReadinessPrototype() {
  const [currentView, setCurrentView] = useState('home');
  const [actions, setActions] = useState([
    { id: 1, text: 'Commit to 10:00pm bedtime tonight', completed: true },
    { id: 2, text: 'Get 5,000 steps today', completed: false },
    { id: 3, text: 'Spend 15 min outside', completed: false }
  ]);

  const toggleAction = (id) => {
    setActions(actions.map(action => 
      action.id === id ? { ...action, completed: !action.completed } : action
    ));
  };

  const metrics = [
    { name: 'SLEEP CONSISTENCY', status: 'poor', value: '87%' },
    { name: 'RECOVERY VOLATILITY', status: 'poor', value: '66%' },
    { name: 'HRV TREND', status: 'poor', value: '87' },
    { name: 'STEPS', status: 'poor', value: '1,200', subtext: '2,000' },
    { name: 'CYCLE PHASE', status: 'neutral', value: 'Luteal' }
  ];

  const StatusBars = ({ status }) => {
    if (status === 'neutral') return null;
    return (
      <div className="flex gap-0.5 mr-2">
        <div className={`h-1 w-6 rounded-full ${status === 'poor' ? 'bg-orange-500' : status === 'optimal' ? 'bg-emerald-500' : 'bg-gray-500'}`}></div>
        <div className={`h-1 w-6 rounded-full ${status === 'optimal' || status === 'sufficient' ? (status === 'optimal' ? 'bg-emerald-500' : 'bg-gray-500') : 'bg-gray-700'}`}></div>
        <div className={`h-1 w-6 rounded-full ${status === 'optimal' ? 'bg-emerald-500' : 'bg-gray-700'}`}></div>
      </div>
    );
  };

  const SleepBarChart = () => {
    const data = [65, 72, 68, 85, 88, 75, 87];
    const days = ['S', 'S', 'M', 'T', 'W', 'T', 'F'];
    return (
      <div className="h-32 flex items-end justify-between gap-1 px-4 pb-2">
        {data.map((value, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div className="w-full bg-blue-400 rounded-t" style={{ height: `${value}%` }}></div>
            <span className="text-[10px] text-gray-500">{days[i]}</span>
          </div>
        ))}
      </div>
    );
  };

  const StepsBarChart = () => {
    const data = [3200, 5800, 4200, 8500, 9200, 6800, 1200];
    const days = ['S', 'S', 'M', 'T', 'W', 'T', 'F'];
    const max = Math.max(...data);
    return (
      <div className="h-32 flex items-end justify-between gap-1 px-4 pb-2">
        {data.map((value, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div className="w-full bg-blue-400 rounded-t" style={{ height: `${(value/max) * 100}%` }}></div>
            <span className="text-[10px] text-gray-500">{days[i]}</span>
          </div>
        ))}
      </div>
    );
  };

  const LineChart = ({ data, showValues = false }) => {
    const days = ['S', 'S', 'M', 'T', 'W', 'T', 'F'];
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min;
    
    const points = data.map((value, i) => {
      const x = (i / (data.length - 1)) * 100;
      const y = 100 - ((value - min) / range) * 80;
      return { x, y, value };
    });

    const pathD = points.map((p, i) => 
      `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`
    ).join(' ');

    return (
      <div className="h-32 relative px-4">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d={pathD} fill="none" stroke="#3b82f6" strokeWidth="2" />
          {points.map((p, i) => (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r="3" fill="#3b82f6" />
              {showValues && (
                <text x={p.x} y={p.y - 8} fontSize="4" fill="#9ca3af" textAnchor="middle">
                  {p.value}
                </text>
              )}
            </g>
          ))}
        </svg>
        <div className="flex justify-between mt-1">
          {days.map((day, i) => (
            <span key={i} className="text-[10px] text-gray-500">{day}</span>
          ))}
        </div>
      </div>
    );
  };

  // HOME CARD VIEW
  if (currentView === 'home') {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#1E1E1E', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '448px' }}>
          <div 
            onClick={() => setCurrentView('detail')}
            style={{ 
              backgroundColor: '#2A2A2A', 
              borderRadius: '24px', 
              padding: '24px', 
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '11px', fontWeight: '600', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Mental Readiness
              </h2>
              <ChevronRight style={{ width: '20px', height: '20px', color: '#6B7280' }} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                borderRadius: '50%', 
                border: '6px solid #F97316', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#F97316' }}>HIGH</div>
              </div>
              <div style={{ fontSize: '14px', color: '#9CA3AF' }}>
                3+ signals impacted
              </div>
            </div>

            <button style={{ 
              width: '100%', 
              backgroundColor: '#333333', 
              color: 'white', 
              padding: '14px', 
              borderRadius: '12px', 
              fontWeight: '500', 
              fontSize: '14px', 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em',
              border: 'none',
              cursor: 'pointer'
            }}>
              Today's Actions
            </button>
          </div>
        </div>
      </div>
    );
  }

  // DETAIL PAGE VIEW
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#1E1E1E' }}>
      <div style={{ maxWidth: '448px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid #374151' }}>
          <button 
            onClick={() => setCurrentView('home')}
            style={{ color: '#9CA3AF', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}
          >
            ←
          </button>
          <h1 style={{ fontSize: '14px', fontWeight: '600', color: 'white', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Mental Readiness</h1>
        </div>

        {/* Scrollable Content */}
        <div style={{ padding: '16px', paddingBottom: '80px' }}>
          {/* Risk Badge */}
          <div style={{ display: 'flex', justifyContent: 'center', padding: '24px 0' }}>
            <div style={{ 
              width: '144px', 
              height: '144px', 
              borderRadius: '50%', 
              border: '8px solid #F97316', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '12px', color: '#9CA3AF', fontWeight: '500', marginBottom: '4px' }}>WHOOP</div>
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#F97316' }}>HIGH</div>
                <div style={{ fontSize: '12px', color: '#9CA3AF', marginTop: '4px' }}>RISK</div>
              </div>
            </div>
          </div>

          {/* Today's Actions */}
          <div style={{ marginBottom: '16px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', marginBottom: '12px' }}>Today's Actions</h2>
            <div style={{ backgroundColor: '#2A2A2A', borderRadius: '16px', padding: '16px' }}>
              {actions.map(action => (
                <div 
                  key={action.id}
                  onClick={() => toggleAction(action.id)}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px', cursor: 'pointer' }}
                >
                  <div style={{ 
                    width: '24px', 
                    height: '24px', 
                    borderRadius: '6px', 
                    border: `2px solid ${action.completed ? '#3B82F6' : '#4B5563'}`,
                    backgroundColor: action.completed ? '#3B82F6' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    {action.completed && <Check style={{ width: '16px', height: '16px', color: 'white' }} />}
                  </div>
                  <span style={{ fontSize: '14px', color: action.completed ? '#6B7280' : 'white', textDecoration: action.completed ? 'line-through' : 'none' }}>
                    {action.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Your 7-Day Metrics */}
          <div style={{ marginBottom: '16px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', marginBottom: '12px' }}>Your 7-Day Metrics</h2>
            <div style={{ backgroundColor: '#2A2A2A', borderRadius: '16px', padding: '16px' }}>
              {metrics.map((metric, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ fontSize: '12px', fontWeight: '500', color: '#9CA3AF', letterSpacing: '0.05em', flex: 1 }}>
                    {metric.name}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <StatusBars status={metric.status} />
                    <div style={{ textAlign: 'right', minWidth: '50px' }}>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: 'white' }}>{metric.value}</div>
                      {metric.subtext && (
                        <div style={{ fontSize: '12px', color: '#6B7280' }}>{metric.subtext}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div style={{ display: 'flex', gap: '16px', marginTop: '12px', paddingLeft: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '12px', height: '4px', borderRadius: '2px', backgroundColor: '#F97316' }}></div>
                <span style={{ fontSize: '10px', color: '#6B7280', textTransform: 'uppercase' }}>Poor</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '12px', height: '4px', borderRadius: '2px', backgroundColor: '#6B7280' }}></div>
                <span style={{ fontSize: '10px', color: '#6B7280', textTransform: 'uppercase' }}>Sufficient</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '12px', height: '4px', borderRadius: '2px', backgroundColor: '#10B981' }}></div>
                <span style={{ fontSize: '10px', color: '#6B7280', textTransform: 'uppercase' }}>Optimal</span>
              </div>
            </div>
          </div>

          {/* Weekly Trends */}
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', marginBottom: '12px' }}>Weekly Trends</h2>
            
            {/* Sleep Consistency */}
            <div style={{ backgroundColor: '#2A2A2A', borderRadius: '16px', padding: '16px', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '12px', fontWeight: '500', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Sleep Consistency</span>
                <ChevronRight style={{ width: '20px', height: '20px', color: '#6B7280' }} />
              </div>
              <SleepBarChart />
            </div>

            {/* Recovery Volatility */}
            <div style={{ backgroundColor: '#2A2A2A', borderRadius: '16px', padding: '16px', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '12px', fontWeight: '500', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Recovery Volatility</span>
                <ChevronRight style={{ width: '20px', height: '20px', color: '#6B7280' }} />
              </div>
              <LineChart data={[45, 52, 48, 65, 72, 58, 42]} showValues={true} />
            </div>

            {/* HRV Trend */}
            <div style={{ backgroundColor: '#2A2A2A', borderRadius: '16px', padding: '16px', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '12px', fontWeight: '500', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.05em' }}>HRV Trend</span>
                <ChevronRight style={{ width: '20px', height: '20px', color: '#6B7280' }} />
              </div>
              <LineChart data={[95, 102, 98, 110, 115, 105, 87]} showValues={true} />
            </div>

            {/* Steps */}
            <div style={{ backgroundColor: '#2A2A2A', borderRadius: '16px', padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '12px', fontWeight: '500', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Steps</span>
                <ChevronRight style={{ width: '20px', height: '20px', color: '#6B7280' }} />
              </div>
              <StepsBarChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
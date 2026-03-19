import React, { useState } from 'react';
import { ChevronRight, Check, CheckSquare, Brain, TrendingDown, TrendingUp } from 'lucide-react';

export default function MentalReadinessEnhanced() {
  const [currentView, setCurrentView] = useState('home');
  const [actions, setActions] = useState([
    { id: 1, text: 'Commit to 10:00pm bedtime tonight', completed: true, type: 'commitment' },
    { id: 2, text: 'Get 5,000 steps today', completed: false, type: 'activity', progress: 1200, target: 5000 },
    { id: 3, text: 'Spend 15 min outside', completed: false, type: 'manual' }
  ]);

  const toggleAction = (id) => {
    const newActions = actions.map(action => {
      if (action.id === id) {
        return { ...action, completed: !action.completed };
      }
      return action;
    });
    setActions(newActions);
  };

  const metrics = [
    { 
      name: 'SLEEP CONSISTENCY', 
      status: 'poor', 
      value: '87%',
      showBars: true,
      data: [65, 72, 68, 85, 88, 75, 87],
      chartType: 'bar'
    },
    { 
      name: 'RECOVERY VOLATILITY', 
      status: 'poor', 
      value: '66%',
      showBars: true,
      data: [45, 52, 48, 65, 72, 58, 42],
      chartType: 'bar'
    },
    { 
      name: 'HRV TREND', 
      status: 'poor', 
      value: '87',
      subtext: '104',
      showBars: false,
      showIndicator: true,
      trend: 'down',
      data: [95, 102, 98, 110, 115, 105, 87],
      chartType: 'bar'
    },
    { 
      name: 'STEPS', 
      status: 'poor', 
      value: '1,200', 
      subtext: '2,000',
      showBars: false,
      showIndicator: true,
      trend: 'down',
      data: [3200, 5800, 4200, 8500, 9200, 6800, 1200],
      chartType: 'bar'
    },
    { 
      name: 'CYCLE PHASE', 
      status: 'neutral', 
      value: 'Luteal',
      info: 'Day 22 of cycle'
    }
  ];

  const StatusBars = ({ status }) => {
    if (status === 'neutral') return null;
    const colors = {
      poor: '#F97316',
      sufficient: '#6B7280',
      optimal: '#10B981'
    };
    return (
      <div style={{ display: 'flex', gap: '2px', marginRight: '8px' }}>
        <div style={{ height: '4px', width: '24px', borderRadius: '2px', backgroundColor: status === 'poor' ? colors.poor : status === 'optimal' ? colors.optimal : colors.sufficient }}></div>
        <div style={{ height: '4px', width: '24px', borderRadius: '2px', backgroundColor: status === 'optimal' || status === 'sufficient' ? (status === 'optimal' ? colors.optimal : colors.sufficient) : '#374151' }}></div>
        <div style={{ height: '4px', width: '24px', borderRadius: '2px', backgroundColor: status === 'optimal' ? colors.optimal : '#374151' }}></div>
      </div>
    );
  };

  const TrendIndicator = ({ trend, status }) => {
    if (status === 'neutral') return null;
    
    const getColor = () => {
      if (trend === 'down') return '#F97316'; // poor - orange
      if (trend === 'neutral') return '#6B7280'; // sufficient - gray
      if (trend === 'up') return '#10B981'; // optimal - green
    };

    const getIcon = () => {
      if (trend === 'down') {
        // Orange downward triangle
        return (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 9L2 3L10 3L6 9Z" fill={getColor()} />
          </svg>
        );
      }
      if (trend === 'neutral') {
        // Gray circle/dot
        return <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: getColor() }} />;
      }
      if (trend === 'up') {
        // Green upward triangle
        return (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 3L10 9L2 9L6 3Z" fill={getColor()} />
          </svg>
        );
      }
    };

    return (
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: '6px' }}>
        {getIcon()}
      </div>
    );
  };

  const BarChart = ({ data, color = '#0093E7' }) => {
    const days = ['S', 'S', 'M', 'T', 'W', 'T', 'F'];
    const max = Math.max(...data);
    return (
      <div style={{ width: '100%', padding: '0 16px' }}>
        <div style={{ width: '100%', height: '100px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '4px' }}>
          {data.map((value, i) => (
            <div key={i} style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'flex-end' }}>
              <div style={{ 
                width: '100%', 
                backgroundColor: color, 
                borderRadius: '4px 4px 0 0',
                height: `${(value/max) * 100}%`,
                minHeight: '2px'
              }}></div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
          {days.map((day, i) => (
            <div key={i} style={{ flex: 1, textAlign: 'center' }}>
              <span style={{ fontSize: '11px', color: '#9CA3AF', fontWeight: '500', letterSpacing: '0.05em', fontFamily: 'Proxima Nova, sans-serif' }}>{day}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const LineChart = ({ data, showValues = false, color = '#0093E7' }) => {
    const days = ['S', 'S', 'M', 'T', 'W', 'T', 'F'];
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min;
    
    // Calculate points - x positions spread across full width, y based on data values
    const points = data.map((value, i) => {
      const segmentWidth = 100 / 7;
      const x = (i * segmentWidth) + (segmentWidth / 2);
      // Y position based on value - higher values = lower y coordinate
      const y = 15 + (70 - ((value - min) / range) * 60);
      return { x, y, value };
    });

    const pathD = points.map((p, i) => 
      `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`
    ).join(' ');

    return (
      <div style={{ width: '100%', padding: '0 16px' }}>
        <div style={{ width: '100%', height: '100px', position: 'relative' }}>
          <svg viewBox="0 0 100 50" preserveAspectRatio="none" style={{ width: '100%', height: '100%', display: 'block' }}>
            <path d={pathD} fill="none" stroke={color} strokeWidth="0.8" vectorEffect="non-scaling-stroke" />
            {points.map((p, i) => (
              <g key={i}>
                <circle cx={p.x} cy={p.y} r="2" fill="none" stroke={color} strokeWidth="1" vectorEffect="non-scaling-stroke" />
                {showValues && (
                  <text x={p.x} y={p.y - 4} fontSize="4" fill="#9ca3af" textAnchor="middle" fontWeight="600" fontFamily="DINPro, sans-serif">
                    {p.value}
                  </text>
                )}
              </g>
            ))}
          </svg>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
          {days.map((day, i) => (
            <div key={i} style={{ flex: 1, textAlign: 'center' }}>
              <span style={{ fontSize: '11px', color: '#9CA3AF', fontWeight: '500', letterSpacing: '0.05em', fontFamily: 'Proxima Nova, sans-serif' }}>{day}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const RiskBadge = ({ size = 'large', showLabel = true, inline = false }) => {
    const dimensions = size === 'large' ? { outer: 144, fontSize: 32 } : { outer: 80, fontSize: 20 };
    
    if (inline) {
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ 
            width: `${dimensions.outer}px`, 
            height: `${dimensions.outer}px`, 
            borderRadius: '50%', 
            border: '6px solid #F97316', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center'
          }}>
            <Brain style={{ width: '48px', height: '48px', color: '#F97316', strokeWidth: 1.5 }} />
          </div>
          <div>
            <div style={{ 
              fontSize: `${dimensions.fontSize}px`, 
              fontWeight: '700', 
              color: 'white',
              fontFamily: 'Proxima Nova, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}>HIGH</div>
            <div style={{ fontSize: '12px', color: '#9CA3AF', marginTop: '4px' }}>
              3+ signals impacted
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <div style={{ 
        width: `${dimensions.outer}px`, 
        height: `${dimensions.outer}px`, 
        borderRadius: '50%', 
        border: '8px solid #F97316', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        position: 'relative'
      }}>
        <div style={{ textAlign: 'center' }}>
          {showLabel && (
            <div style={{ 
              fontSize: '12px', 
              fontWeight: '700',
              color: '#9CA3AF', 
              marginBottom: '4px',
              fontFamily: 'Proxima Nova, sans-serif',
              letterSpacing: '0.05em'
            }}>
              WHOOP®
            </div>
          )}
          <div style={{ 
            fontSize: `${dimensions.fontSize}px`, 
            fontWeight: '700', 
            color: 'white',
            fontFamily: 'Proxima Nova, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '0.15em'
          }}>HIGH</div>
          {showLabel && (
            <div style={{ 
              fontSize: '12px', 
              color: '#9CA3AF', 
              marginTop: '4px',
              fontFamily: 'Proxima Nova, sans-serif',
              letterSpacing: '0.05em'
            }}>RISK</div>
          )}
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
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
              <h2 style={{ 
                fontSize: '11px', 
                fontWeight: '600', 
                color: '#9CA3AF', 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em',
                fontFamily: 'Proxima Nova, sans-serif'
              }}>
                Mental Readiness
              </h2>
              <ChevronRight style={{ width: '20px', height: '20px', color: '#6B7280' }} />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <RiskBadge size="small" showLabel={false} inline={true} />
            </div>

            <div style={{ 
              width: '100%', 
              backgroundColor: '#00F19F', 
              color: '#1E1E1E', 
              padding: '14px', 
              borderRadius: '12px', 
              fontWeight: '600', 
              fontSize: '12px', 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              fontFamily: 'Proxima Nova, sans-serif'
            }}>
              <CheckSquare style={{ width: '16px', height: '16px', color: '#1E1E1E' }} />
              <span>Today's Actions</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // DETAIL PAGE VIEW
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#1E1E1E' }}>
      <div style={{ maxWidth: '448px', margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div style={{ padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #374151', position: 'sticky', top: 0, backgroundColor: '#1E1E1E', zIndex: 10 }}>
          <button 
            onClick={() => setCurrentView('home')}
            style={{ 
              color: '#9CA3AF', 
              background: 'none', 
              border: 'none', 
              fontSize: '24px', 
              cursor: 'pointer', 
              padding: '0', 
              display: 'flex', 
              alignItems: 'center',
              position: 'absolute',
              left: '16px'
            }}
          >
            ←
          </button>
          <h1 style={{ 
            fontSize: '14px', 
            fontWeight: '600', 
            color: 'white', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em',
            fontFamily: 'Proxima Nova, sans-serif'
          }}>Mental Readiness</h1>
        </div>

        {/* Scrollable Content */}
        <div style={{ padding: '16px', paddingBottom: '80px' }}>
          {/* Risk Badge */}
          <div style={{ display: 'flex', justifyContent: 'center', padding: '24px 0' }}>
            <RiskBadge />
          </div>

          {/* Alert Banner */}
          <div style={{ 
            backgroundColor: '#2A2A2A',
            borderRadius: '12px', 
            padding: '20px', 
            marginBottom: '24px',
            borderLeft: '4px solid transparent',
            backgroundImage: 'linear-gradient(#2A2A2A, #2A2A2A), linear-gradient(180deg, #7C3AED 0%, #4F46E5 100%)',
            backgroundOrigin: 'padding-box, border-box',
            backgroundClip: 'padding-box, border-box'
          }}>
            <div style={{ marginBottom: '12px' }}>
              <div style={{ 
                fontSize: '14px', 
                fontWeight: '500', 
                color: 'white', 
                lineHeight: '1.5',
                fontFamily: 'Proxima Nova, sans-serif'
              }}>
                Sleep consistency down 20%, movement below baseline, and your recovery volatility could use some attention
              </div>
            </div>
            <div style={{ 
              fontSize: '13px', 
              fontWeight: '600', 
              color: '#C4B5FD',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'Proxima Nova, sans-serif',
              cursor: 'pointer'
            }}>
              Explore your Insights
              <span style={{ fontSize: '16px' }}>→</span>
            </div>
          </div>

          {/* Today's Actions */}
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ 
              fontSize: '20px', 
              fontWeight: '700', 
              color: 'white', 
              marginBottom: '12px',
              fontFamily: 'Proxima Nova, sans-serif'
            }}>Today's Actions</h2>
            <div style={{ backgroundColor: '#2A2A2A', borderRadius: '16px', padding: '16px' }}>
              {actions.map((action, idx) => (
                <div 
                  key={action.id}
                  onClick={() => toggleAction(action.id)}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px', 
                    marginBottom: idx < actions.length - 1 ? '16px' : '0', 
                    cursor: 'pointer',
                    padding: '8px',
                    borderRadius: '8px'
                  }}
                >
                  <div style={{ 
                    width: '24px', 
                    height: '24px', 
                    borderRadius: '6px', 
                    border: `2px solid ${action.completed ? '#00F19F' : '#4B5563'}`,
                    backgroundColor: action.completed ? '#00F19F' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {action.completed && <Check style={{ width: '16px', height: '16px', color: '#1E1E1E' }} />}
                  </div>
                  <div style={{ flex: 1 }}>
                    <span style={{ 
                      fontSize: '14px', 
                      color: action.completed ? '#6B7280' : 'white', 
                      textDecoration: action.completed ? 'line-through' : 'none',
                      display: 'block',
                      marginBottom: action.progress ? '8px' : '0',
                      fontFamily: 'Proxima Nova, sans-serif',
                      fontWeight: '500'
                    }}>
                      {action.text}
                    </span>
                    {action.progress && !action.completed && (
                      <div style={{ marginTop: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                          <span style={{ fontSize: '11px', color: '#9CA3AF', fontFamily: 'DINPro, sans-serif', fontWeight: '700' }}>
                            {action.progress.toLocaleString()} / {action.target.toLocaleString()}
                          </span>
                          <span style={{ fontSize: '11px', color: '#9CA3AF', fontFamily: 'DINPro, sans-serif', fontWeight: '700' }}>
                            {Math.round((action.progress / action.target) * 100)}%
                          </span>
                        </div>
                        <div style={{ width: '100%', height: '6px', backgroundColor: '#374151', borderRadius: '3px', overflow: 'hidden' }}>
                          <div style={{ 
                            width: `${(action.progress / action.target) * 100}%`, 
                            height: '100%', 
                            backgroundColor: '#0093E7'
                          }}></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Your 7-Day Metrics Summary */}
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ 
              fontSize: '20px', 
              fontWeight: '700', 
              color: 'white', 
              marginBottom: '12px',
              fontFamily: 'Proxima Nova, sans-serif'
            }}>Your 7-Day Metrics</h2>
            <div style={{ backgroundColor: '#2A2A2A', borderRadius: '16px', padding: '16px' }}>
              {metrics.map((metric, idx) => (
                <div key={idx} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  marginBottom: idx < metrics.length - 1 ? '16px' : '0',
                  paddingBottom: idx < metrics.length - 1 ? '16px' : '0',
                  borderBottom: idx < metrics.length - 1 ? '1px solid #374151' : 'none',
                  minHeight: '48px'
                }}>
                  <div style={{ 
                    fontSize: '11px', 
                    fontWeight: '600', 
                    color: '#9CA3AF', 
                    letterSpacing: '0.1em', 
                    flex: 1,
                    fontFamily: 'Proxima Nova, sans-serif'
                  }}>
                    {metric.name}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {metric.showBars && <StatusBars status={metric.status} />}
                    <div style={{ textAlign: 'right', minWidth: '60px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px' }}>
                      <div>
                        <div style={{ 
                          fontSize: '16px', 
                          fontWeight: '700', 
                          color: 'white',
                          fontFamily: 'DINPro, sans-serif'
                        }}>{metric.value}</div>
                        {metric.subtext && (
                          <div style={{ 
                            fontSize: '12px', 
                            color: '#6B7280', 
                            marginTop: '2px',
                            fontFamily: 'DINPro, sans-serif',
                            fontWeight: '700'
                          }}>{metric.subtext}</div>
                        )}
                      </div>
                      {metric.showIndicator && <TrendIndicator trend={metric.trend} status={metric.status} />}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div style={{ display: 'flex', gap: '20px', marginTop: '12px', paddingLeft: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '16px', height: '4px', borderRadius: '2px', backgroundColor: '#F97316' }}></div>
                <span style={{ 
                  fontSize: '10px', 
                  color: '#6B7280', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.05em',
                  fontFamily: 'Proxima Nova, sans-serif',
                  fontWeight: '600'
                }}>Poor</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '16px', height: '4px', borderRadius: '2px', backgroundColor: '#6B7280' }}></div>
                <span style={{ 
                  fontSize: '10px', 
                  color: '#6B7280', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.05em',
                  fontFamily: 'Proxima Nova, sans-serif',
                  fontWeight: '600'
                }}>Sufficient</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '16px', height: '4px', borderRadius: '2px', backgroundColor: '#10B981' }}></div>
                <span style={{ 
                  fontSize: '10px', 
                  color: '#6B7280', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.05em',
                  fontFamily: 'Proxima Nova, sans-serif',
                  fontWeight: '600'
                }}>Optimal</span>
              </div>
            </div>
          </div>

          {/* Weekly Trends */}
          <div>
            <h2 style={{ 
              fontSize: '20px', 
              fontWeight: '700', 
              color: 'white', 
              marginBottom: '12px',
              fontFamily: 'Proxima Nova, sans-serif'
            }}>Weekly Trends</h2>
            
            {metrics.filter(m => m.chartType).map((metric, idx) => (
              <div 
                key={idx} 
                style={{ 
                  backgroundColor: '#2A2A2A', 
                  borderRadius: '16px', 
                  padding: '16px', 
                  marginBottom: '12px',
                  cursor: 'pointer'
                }}
                onClick={() => {/* Link to WHOOP trends page */}}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span style={{ 
                    fontSize: '12px', 
                    fontWeight: '600', 
                    color: '#9CA3AF', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.1em',
                    fontFamily: 'Proxima Nova, sans-serif'
                  }}>
                    {metric.name}
                  </span>
                  <ChevronRight style={{ width: '20px', height: '20px', color: '#6B7280' }} />
                </div>
                <BarChart data={metric.data} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
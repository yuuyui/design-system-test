import React from 'react';
import './KpiCard.css';

/**
 * KPI Card Component
 * Displays metric label, large number, and growth badge
 */
export const KpiCard = ({
  label,
  value,
  percentage,
  isPositive = true,
  suffix = '',
  prefix = '',
  icon = null,
}) => {
  const badgeClass = isPositive ? 'kpi-badge--positive' : 'kpi-badge--negative';
  const percentText = percentage && `${isPositive ? '+' : ''}${percentage}%`;
  
  return (
    <div className="kpi-card">
      <div className="kpi-label">{label}</div>
      
      <div className="kpi-content">
        <div className="kpi-value">
          {prefix && <span className="kpi-prefix">{prefix}</span>}
          {value}
          {suffix && <span className="kpi-suffix">{suffix}</span>}
        </div>
        
        {percentage && (
          <div className={`kpi-badge ${badgeClass}`}>
            <span className="kpi-badge-arrow">
              {isPositive ? '↑' : '↓'}
            </span>
            <span className="kpi-badge-text">{percentText}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default KpiCard;

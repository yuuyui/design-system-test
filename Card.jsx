import React from 'react';
import './Card.css';

/**
 * Card Component
 * Base container with glass-morphic styling
 */
export const Card = ({
  children,
  className = '',
  title,
  action,
  bordered = false,
  ...props
}) => {
  return (
    <div className={`card ${bordered ? 'card--bordered' : ''} ${className}`} {...props}>
      {title && (
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
          {action && <div className="card-action">{action}</div>}
        </div>
      )}
      
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};

export default Card;

import React from 'react';
import './PropertyListItem.css';

/**
 * Property List Item Component
 * Displays property with thumbnail, details, and price
 */
export const PropertyListItem = ({
  image,
  name,
  price,
  secondaryPrice,
  change,
  isPositive = true,
}) => {
  const changeClass = isPositive ? 'property-change--positive' : 'property-change--negative';
  const changeSymbol = isPositive ? '+' : '';
  
  return (
    <div className="property-item">
      {image && (
        <img 
          src={image} 
          alt={name} 
          className="property-image"
        />
      )}
      
      <div className="property-info">
        <div className="property-name">{name}</div>
        {secondaryPrice && (
          <div className="property-secondary">{secondaryPrice}</div>
        )}
      </div>
      
      <div className="property-right">
        {change && (
          <div className={`property-change ${changeClass}`}>
            {changeSymbol}{change}%
          </div>
        )}
        
        <div className="property-price">{price}</div>
      </div>
    </div>
  );
};

export default PropertyListItem;

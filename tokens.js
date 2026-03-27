/**
 * Design System Tokens
 * Horizon Homes - Grass Dark Theme
 */

export const tokens = {
  // Colors
  colors: {
    // Primary backgrounds
    bgPrimary: '#1A1A2E',
    bgCard: '#2A2A3C',
    bgCardAlt: 'rgba(30, 30, 40, 0.85)',
    
    // Accents
    green: '#34C759',      // Positive, growth
    orange: '#FF9500',     // Highlight, attention
    red: '#FF3B30',        // Negative, warning
    darkRed: '#8B0000',    // Chart segment
    
    // Text
    textPrimary: '#FFFFFF',
    textSecondary: '#8E8E93',
    textTertiary: '#6B6B76',
    
    // Borders & dividers
    border: 'rgba(255, 255, 255, 0.1)',
    divider: 'rgba(255, 255, 255, 0.05)',
  },
  
  // Spacing (8px grid)
  spacing: {
    xs: '4px',     // 0.5 unit
    sm: '8px',     // 1 unit
    md: '12px',    // 1.5 units
    lg: '16px',    // 2 units
    xl: '20px',    // 2.5 units
    xxl: '24px',   // 3 units
    xxxl: '32px',  // 4 units
  },
  
  // Border radius
  radius: {
    sm: '4px',
    md: '12px',
    lg: '16px',
    full: '20px',  // Pills, buttons
    round: '50%',
  },
  
  // Typography
  typography: {
    fontFamily: {
      base: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    fontSize: {
      xs: '10px',
      sm: '11px',
      base: '13px',
      md: '14px',
      lg: '16px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '28px',
      '4xl': '32px',
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  
  // Shadows
  shadow: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
    md: '0 4px 8px rgba(0, 0, 0, 0.15)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.2)',
    xl: '0 12px 24px rgba(0, 0, 0, 0.25)',
  },
  
  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  // Opacity
  opacity: {
    0: '0',
    10: '0.1',
    20: '0.2',
    30: '0.3',
    50: '0.5',
    70: '0.7',
    100: '1',
  },
};

export default tokens;

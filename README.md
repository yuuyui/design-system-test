# Design System - Horizon Homes (Grass Dark Theme)

A comprehensive, production-ready design system for building modern dashboards with a grass dark glassmorphic aesthetic.

## 🎨 Design Principles

- **Dark First**: Optimized for reduced eye strain and modern aesthetics
- **Glassmorphism**: Semi-transparent backgrounds with backdrop blur
- **Card-Based**: Every section is a contained, rounded card
- **Color as Information**: Green (positive), Orange (highlight), Red (negative)
- **Dense but Clear**: High information density with proper spacing
- **Responsive**: Mobile-first, adapts to all screen sizes
- **Auto Dark/Light Mode**: Respects system color scheme preference

## 📦 Components

### Button
```jsx
import { Button } from './Button';

<Button variant="primary" size="md">Click me</Button>
<Button variant="pill">Add Property</Button>
<Button variant="secondary" disabled>Disabled</Button>
<Button variant="outline">Outline</Button>
```

**Variants**: `primary`, `secondary`, `pill`, `outline`  
**Sizes**: `sm`, `md`, `lg`

### KPI Card
```jsx
import { KpiCard } from './KpiCard';

<KpiCard
  label="Total Properties"
  value="721"
  percentage={11.01}
  isPositive={true}
  suffix="K"
/>
```

### Card
```jsx
import { Card } from './Card';

<Card title="Mortgage Payment" bordered action={<button>...</button>}>
  {/* Chart or content here */}
</Card>
```

### Tabs
```jsx
import { Tabs } from './Tabs';

const tabsData = [
  { label: 'My Cabinet', value: 'cabinet', content: <div>Content 1</div> },
  { label: 'Portfolio', value: 'portfolio', content: <div>Content 2</div> },
];

<Tabs tabs={tabsData} onChange={(idx, val) => console.log(val)} />
```

### Property List Item
```jsx
import { PropertyListItem } from './PropertyListItem';

<PropertyListItem
  image="/property.jpg"
  name="Downtown Loft"
  price="$450,000"
  secondaryPrice="2,500 sqft"
  change={5.2}
  isPositive={true}
/>
```

## 🎯 Design Tokens

### Colors
- **Primary BG**: `#1A1A2E`
- **Card BG**: `#2A2A3C`
- **Green (positive)**: `#34C759`
- **Orange (highlight)**: `#FF9500`
- **Red (negative)**: `#FF3B30`
- **Text Primary**: `#FFFFFF`
- **Text Secondary**: `#8E8E93`

### Spacing (8px Grid)
- `--spacing-xs`: 4px
- `--spacing-sm`: 8px
- `--spacing-md`: 12px
- `--spacing-lg`: 16px
- `--spacing-xl`: 20px
- `--spacing-xxl`: 24px
- `--spacing-xxxl`: 32px

### Border Radius
- `--radius-sm`: 4px
- `--radius-md`: 12px (cards)
- `--radius-lg`: 16px
- `--radius-full`: 20px (pills, buttons)

### Typography
- **Font Family**: System fonts (SF Pro, Segoe UI, Roboto)
- **Sizes**: xs (10px) → 4xl (32px)
- **Weights**: regular, medium (500), semibold (600), bold (700)

## 🌙 Dark/Light Mode

The design system automatically respects the user's system color scheme preference:

```css
@media (prefers-color-scheme: light) {
  /* Light mode tokens */
}

@media (prefers-color-scheme: dark) {
  /* Dark mode tokens (default) */
}
```

## 📱 Responsive Breakpoints

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## 🚀 Getting Started

1. **Import the global styles** in your main app:
   ```jsx
   import './globals.css';
   ```

2. **Import and use components**:
   ```jsx
   import { Button, Card, KpiCard } from './index';
   ```

3. **Use CSS variables** for custom styling:
   ```css
   .my-element {
     background-color: var(--color-bg-card);
     padding: var(--spacing-lg);
     border-radius: var(--radius-md);
   }
   ```

## 📄 File Structure

```
├── tokens.js              # Design token exports
├── globals.css            # CSS variables & base styles
├── Button.jsx/css         # Button component
├── KpiCard.jsx/css        # KPI card component
├── Card.jsx/css           # Base card container
├── Tabs.jsx/css           # Tab component
├── PropertyListItem.jsx/css # Property list item
└── README.md              # This file
```

## 🎨 Usage Examples

### Full Dashboard Layout
```jsx
import { Button, Card, KpiCard, Tabs, PropertyListItem } from './';

export function Dashboard() {
  return (
    <div className="p-xl">
      {/* KPI Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--spacing-lg)' }}>
        <KpiCard label="Total Visits" value="721" percentage={11.01} />
        <KpiCard label="Revenue" value="$1.2M" percentage={8.5} />
        <KpiCard label="Active Properties" value="24" percentage={3.2} />
        <KpiCard label="Growth Rate" value="15%" percentage={5} />
      </div>

      {/* Charts */}
      <Card title="Mortgage Payment" bordered>
        {/* Your chart library here */}
      </Card>

      {/* Properties List */}
      <Card title="My Properties">
        <PropertyListItem name="Downtown Loft" price="$450K" change={5.2} />
        <PropertyListItem name="Suburban Home" price="$320K" change={-2.1} isPositive={false} />
      </Card>
    </div>
  );
}
```

## 🔧 Customization

Override tokens via CSS variables or create a theme variant:

```css
:root {
  /* Override specific color */
  --color-green: #00ff88;
  
  /* Or override spacing scale */
  --spacing-lg: 20px;
}
```

## 📊 Accessibility

- Semantic HTML (`<button>`, `<section>`, etc.)
- Proper color contrast ratios
- Focus states on interactive elements
- Responsive text sizing
- ARIA labels where needed

## 📝 License

MIT

---

**Built with 🐾 by Paw paw Design System**

---
name: CSS
description: Modern CSS patterns and layout techniques
keywords: [css, flexbox, grid, responsive, variables, animations]
---

# CSS Quick Reference

## CSS Variables
```css
:root {
  --primary: #4CAF50;
  --secondary: #2196F3;
  --bg: #f5f5f5;
  --text: #333;
  --spacing: 1rem;
  --radius: 8px;
}
```

## Flexbox Layout
```css
.container {
  display: flex;
  justify-content: space-between; /* main axis */
  align-items: center; /* cross axis */
  gap: 1rem;
  flex-wrap: wrap;
}
.item { flex: 1; } /* grow equally */
```

## Grid Layout
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}
```

## Card Component
```css
.card {
  background: white;
  border-radius: var(--radius);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: var(--spacing);
  transition: transform 0.2s, box-shadow 0.2s;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}
```

## Button
```css
.btn {
  background: var(--primary);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius);
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
}
.btn:hover { background: #45a049; }
```

## Responsive
```css
@media (max-width: 768px) {
  .container { flex-direction: column; }
}
```

## Reset
```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: system-ui, sans-serif; line-height: 1.6; }
img { max-width: 100%; display: block; }
```

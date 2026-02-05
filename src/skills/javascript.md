---
name: JavaScript
description: Modern JavaScript patterns and DOM manipulation
keywords: [javascript, js, es6, dom, events, async]
---

# JavaScript Quick Reference

## DOM Selection
```javascript
const el = document.querySelector('.class');
const all = document.querySelectorAll('.items');
```

## Event Handling
```javascript
btn.addEventListener('click', (e) => {
  e.preventDefault();
  // handle click
});

// Event delegation
list.addEventListener('click', (e) => {
  if (e.target.matches('.item')) {
    console.log(e.target.textContent);
  }
});
```

## DOM Manipulation
```javascript
// Create and append
const div = document.createElement('div');
div.className = 'card';
div.innerHTML = `<h2>${title}</h2><p>${desc}</p>`;
container.appendChild(div);

// Modify
el.classList.add('active');
el.classList.toggle('visible');
el.setAttribute('data-id', '123');
```

## Template Literals
```javascript
const html = `
  <article class="product">
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>$${product.price.toFixed(2)}</p>
  </article>
`;
```

## Array Methods
```javascript
const filtered = items.filter(item => item.active);
const mapped = items.map(item => item.name);
const found = items.find(item => item.id === id);
```

## Async/Fetch
```javascript
async function loadData() {
  try {
    const res = await fetch('/api/products');
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
```

## DOMContentLoaded
```javascript
document.addEventListener('DOMContentLoaded', () => {
  // Initialize app
});
```

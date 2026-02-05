---
name: HTML
description: HTML5 semantic structure and best practices
keywords: [html, html5, semantic, accessibility, forms, structure]
---

# HTML5 Quick Reference

## Semantic Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <nav><ul><li><a href="#">Link</a></li></ul></nav>
  </header>
  <main>
    <section><article><h1>Title</h1><p>Content</p></article></section>
  </main>
  <footer><p>&copy; 2024</p></footer>
  <script src="script.js"></script>
</body>
</html>
```

## Key Elements
- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>` - Semantic containers
- `<figure>` + `<figcaption>` - Images with captions
- `<picture>` + `<source>` - Responsive images
- `<button>`, `<a>` - Interactive elements (use button for actions, a for navigation)

## Forms
```html
<form action="/submit" method="POST">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  <button type="submit">Submit</button>
</form>
```

## Accessibility
- Always use `alt` on images
- Use `aria-label` for icons/buttons without text
- Ensure proper heading hierarchy (h1 → h2 → h3)
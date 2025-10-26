# Liquid-Gooey-Effect
Learning how to create website liquid/gooey effect

## Overview
This project demonstrates how to create smooth, fluid liquid/gooey effects for website page transitions and interactions. The effect is achieved using SVG filters combined with CSS animations and JavaScript interactivity.

## Features
- **Gooey Navigation**: Interactive navigation menu with liquid blob effects
- **Gooey Button**: Animated button with bubble effects on hover
- **Gooey Loader**: Animated loading indicator with bouncing dots
- **Page Transitions**: Smooth liquid transition overlay between pages
- **Interactive Blobs**: Mouse-responsive blob animations

## How to Use
1. Open `index.html` in a web browser
2. Interact with the different components:
   - Click navigation items to see page transitions
   - Hover over the "Click Me" button to see bubble animations
   - Click "Trigger Page Transition" to see the full-screen liquid transition
   - Hover over the interactive blobs to see them move

## Technical Details
The gooey effect is created using SVG filters with:
- `feGaussianBlur`: Blurs the elements
- `feColorMatrix`: Increases contrast to create the "blob merge" effect
- CSS animations: Provides smooth transitions and movements
- JavaScript: Handles user interactions and page state

## Files
- `index.html`: Main HTML structure with SVG filter definition
- `style.css`: All styling and animations
- `script.js`: Interactive functionality and page navigation logic

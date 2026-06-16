# Animated Course Progress Tracker

A premium, interactive, self-contained educational dashboard component built with pure **HTML and CSS**. This component is designed to track and display a user's course progress, featuring animated completion percentages, lesson statuses, achievement badges, and learning statistics.

## Features

- **Dynamic Loading Animations**: Smooth `@keyframes`-driven progress bar and glowing indicator animations that execute on initial load.
- **Pure CSS Interactivity**: Accordion modules built using native HTML `<details>` and `<summary>` elements with styled visual states, eliminating the need for JavaScript.
- **Three Unique Lesson States**:
  - **Completed**: Indicated with a green check icon, faint background highlight, and text strikethrough.
  - **Current (Active)**: Glow outline, pulsing icon animation, and visible "Resume" button.
  - **Locked**: Reduced opacity with a padlock icon, preventing mouse interaction.
- **Interactive Achievement Gallery**: Visual grid of earned and locked badges with hover-driven 3D transforms, glows, and custom SVG shine gradients.
- **Fully Responsive Layout**: Built with CSS Grid and Flexbox, scaling seamlessly from 1200px widescreen monitors to small 320px mobile viewports.
- **Glassmorphism Design**: High-fidelity dashboard design using border colors, background saturations, and CSS filters (`backdrop-filter: blur()`).

## Folder Structure

```text
submissions/examples/animated-course-progress-tracker/
├── demo.html    # Layout structure, inline custom SVGs, and component markup
├── style.css    # Typography, styling tokens, hover interactions, keyframes
└── README.md    # Documentation and usage guide
```

## Key Class Naming Convention

This component uses a BEM-inspired, human-readable naming structure:
- `.tracker-container`: The root dashboard glassmorphic wrapper.
- `.tracker-header`: Main title, metadata indicators, and global actions.
- `.tracker-grid`: Standard grid layout split into main content and sidebar.
- `.progress-card` / `.progress-bar-container`: Controls the metrics and animated loading progress tracking.
- `.tracker-module`: Represents details-summary accordion blocks.
- `.lesson-item`: Lesson listing blocks inside the module:
  - `.lesson-item--completed`: Completed state styling modifier.
  - `.lesson-item--current`: Active/in-progress state styling modifier.
  - `.lesson-item--locked`: Locked/inactive state styling modifier.
- `.badge-gallery` / `.badge-item`: Interactive trophies, streaks, and achievements representation:
  - `.badge-item--active`: Earned badge styling.
  - `.badge-item--locked`: Locked/unearned badge styling.
- `.cert-card`: Visual display of certificate lock/preview.

## How to View the Demo

1. Clone or download this directory to your local machine.
2. Double-click the `demo.html` file to open it directly in any modern web browser (Chrome, Firefox, Safari, Edge).
3. Resize the browser window to see the responsive adjustments across desktop, tablet, and mobile layouts.

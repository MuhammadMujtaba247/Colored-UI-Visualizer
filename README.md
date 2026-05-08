# 🎨 Color Visualizer

A real-time color picker tool that instantly updates UI components to preview how colors look in different contexts. Built with vanilla JavaScript.

**[Live Demo](https://colored-ui-visualizer.vercel.app/)**

## 🎯 Features

- **Dual input sync** — Use the color picker OR type a hex code directly; both stay in sync
- **Real-time preview** — Changes apply instantly as you pick or type
- **Hex validation** — Only valid 6-digit hex codes (#FF5733) trigger updates
- **Multiple component previews** — See your color on:
  - Outlined button (border + text)
  - Filled button (background)
  - Paragraph with border + colored text
  - Outlined card
  - Filled card
  - SVG icon

## 🛠️ Technologies

- HTML5, CSS3, JavaScript (ES6)
- Regex validation for hex codes
- CSS custom properties

## 🚀 Local Setup

- git clone https://github.com/MuhammadMujtaba247/color-visualizer.git
- cd color-visualizer
- open index.html

## 📁 Project Structure
color-visualizer/
- ├── index.html      # Main page
- ├── style.css       # Component styling
- ├── app.js          # Color sync + validation logic
- └── README.md       # This file
## 🔧 What I Learned
- Real-time DOM updates with event listeners

- Regex pattern matching for input validation

- Syncing two different input types (text + color picker)

- Managing multiple UI elements with a single state

Built by Muhammad Mujtaba — O Level student, aspiring developer

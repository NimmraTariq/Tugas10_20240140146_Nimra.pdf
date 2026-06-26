# My Portfolio — React + Vite + Tailwind CSS

Simple personal portfolio page built for the Web Design Development frontend assignment.

Nama:Nimra Tariq
NIM: 20240140146

<img width="1919" height="1027" alt="image" src="https://github.com/user-attachments/assets/f24dbdab-f2c4-458c-a543-98d2cb369f56" />

<img width="469" height="297" alt="image" src="https://github.com/user-attachments/assets/db702516-a62e-4543-8cdf-9f1d711afdd8" />


## Tech Stack
- React (with Vite as the build tool)
- Tailwind CSS for styling
- No backend — project data is stored as a simple array/object in `src/data/projects.js`

## Project Structure
```
src/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Projects.jsx
    ProjectCard.jsx
    Contact.jsx
    Footer.jsx
  data/
    projects.js
  App.jsx
  main.jsx
  index.css
```

## Features
- Responsive navbar with a mobile menu (uses `useState`)
- Hero section with intro
- About section with a skills list
- Projects section rendered from an array of objects, passed down as props to a reusable `ProjectCard` component
- Contact form with controlled inputs (`useState`) — no backend, just shows a thank-you message on submit
- Mobile-friendly layout using Tailwind's responsive utility classes

## Running Locally
```bash
npm install
npm run dev
```
Then open the local URL shown in the terminal (usually `http://localhost:5173`).

## Build
```bash
npm run build
```

## Screenshot
<!-- Replace this with your own screenshot after running the app -->
![Screenshot](screenshot.png)



# 🚀 Tailwind CSS Setup with Vite (Using @tailwindcss/vite Plugin)

![Vite Badge](https://img.shields.io/badge/Built%20With-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS Badge](https://img.shields.io/badge/Styled%20With-TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)

This guide explains how to install and set up **Tailwind CSS** with **Vite** using the new **official `@tailwindcss/vite` plugin**.

---

## 📦 1. Install Tailwind CSS

Install `tailwindcss` and the Tailwind Vite plugin:

```bash
npm install tailwindcss @tailwindcss/vite

## ⚙️ 2. Configure the Vite Plugin

// vite.config.ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})


## 🎨 3. Import Tailwind CSS
@import "tailwindcss";



## 🛠️ 4. Start Your Development Server
npm run dev


📌 Notes
A tailwind.config.js file is optional. You only need it if you want to customize your Tailwind configuration.

With @tailwindcss/vite, default settings are good enough to get started quickly.

Works smoothly with React, Vue, Svelte, SolidJS, or Vanilla projects.

📸 Preview
Here’s a basic Tailwind-styled component you can now create:

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-pink-500">
      <h1 className="text-5xl font-bold text-white">Hello, Tailwind + Vite!</h1>
    </div>
  );
}

# Vite + React Project Setup

## 🚀 Getting Started
This guide will help you initialize a React project using **Vite**, a fast build tool for modern web applications.

### 📌 Prerequisites
Ensure you have the following installed:
- **Node.js** (>= 16.x) – [Download here](https://nodejs.org/)
- **npm** or **yarn** (Comes with Node.js)

---

## 🔧 Installation & Setup

### 1️⃣ Create a Vite + React App
Run the following command in your terminal:
```sh
# Using npm
npm create vite@latest my-vite-app --template react

# Using yarn
yarn create vite@latest my-vite-app --template react

# Using pnpm
pnpm create vite@latest my-vite-app --template react
```

### 2️⃣ Navigate to the Project Folder
```sh
cd my-vite-app
```

### 3️⃣ Install Dependencies
```sh
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

### 4️⃣ Start the Development Server
```sh
npm run dev
```
The development server should now be running on **`http://localhost:5173/`**.

---

## 🛠 Available Scripts

| Command            | Description |
|-------------------|-------------|
| `npm run dev`     | Starts the development server |
| `npm run build`   | Builds the project for production |
| `npm run preview` | Previews the production build |
| `npm run lint`    | Lints the code (if ESLint is configured) |

---

## 📂 Project Structure
```
my-vite-app/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js
```

---

## 🔥 Features of Vite
✅ **Lightning-fast builds** with esbuild  
✅ **Hot Module Replacement (HMR)** for instant updates  
✅ **Optimized production build** with rollup  
✅ **Zero-config TypeScript support**  
✅ **Easier environment variable management**  

---

## 📜 Additional Resources
- 📖 Vite Documentation: [https://vitejs.dev/](https://vitejs.dev/)
- ⚛️ React Documentation: [https://react.dev/](https://react.dev/)

---

### 🎉 Happy Coding! 🚀


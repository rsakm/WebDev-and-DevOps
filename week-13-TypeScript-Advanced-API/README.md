# TypeScript Project Starter
<div align="center">
  <img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" alt="TypeScript Logo" width="150"/>
</div>


A simple boilerplate to start a TypeScript project that compiles `.ts` files from the `src/` folder into JavaScript in the `dist/` folder.

## 📁 Project Structure

```
my-typescript-project/
├── src/
│   └── index.ts
├── dist/
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone or Create Project Folder

```bash
mkdir my-typescript-project
cd my-typescript-project
```

---

### 2. Initialize the Project

```bash
npm init -y
```

---

### 3. Install TypeScript

```bash
npm install typescript --save-dev
```

---

### 4. Create `tsconfig.json`

```bash
npx tsc --init
```

Update the generated `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

---

### 5. Create Source File

```bash
mkdir src
touch src/index.ts
```

**src/index.ts**
```ts
const sayHello = (name: string): string => {
  return `Hello, ${name}!`;
};

console.log(sayHello("Rajshree"));
```

---

### 6. Compile TypeScript to JavaScript

```bash
npx tsc
```

Output will be in the `dist/` folder.

---

### 7. Run the Compiled Code

```bash
node dist/index.js
```

Expected output:
```
Hello, Rajshree!
```

---

### 🛠 Add Scripts to `package.json`

```json
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js"
}
```

Now you can use:

```bash
npm run build
npm start
```

---

## ✅ Done!

You now have a clean TypeScript setup with source files in `src/` and compiled output in `dist/`. 🎉

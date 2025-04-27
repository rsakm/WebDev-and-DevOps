# TypeScript Installation and Setup Guide

<div align="center">
  <img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" alt="TypeScript Logo" width="150"/>
</div>

---

## 📌 What is TypeScript?

TypeScript is an open-source programming language developed and maintained by Microsoft.  
It is a strict syntactical superset of JavaScript and adds optional static typing to the language.

With TypeScript, you can:
- Catch errors early through a type system
- Write more maintainable code
- Enhance development experience with better tooling
- Scale JavaScript projects more effectively

---

## 🛠 Prerequisites

Before installing TypeScript, ensure you have:
- Node.js (version 12 or later recommended)
- npm (comes with Node.js) or yarn

**Verify installation:**

```bash
node -v
npm -v

⚙️ TypeScript Installation
1. Install TypeScript Globally
To install TypeScript globally using npm:

npm install -g typescript
This installs the TypeScript compiler (tsc) globally on your system.

2. Verify TypeScript Installation
Check the installed TypeScript version:
tsc -v

🚀 Setting Up a TypeScript Project

Step 1: Create a Project Directory
mkdir my-typescript-project
cd my-typescript-project

Step 2: Initialize npm
npm init -y
This creates a package.json file with default values.

Step 3: Install TypeScript Locally (Recommended)
npm install typescript --save-dev
This installs TypeScript as a development dependency.

Step 4: Create a tsconfig.json File
Initialize a TypeScript configuration file:
tsc --init
This generates a tsconfig.json file with default settings. You can customize it as needed.

📝 Writing and Compiling TypeScript Code
1. Create a new file, e.g., index.ts

2. Add TypeScript code:
const greet = (name: string): void => {
    console.log(`Hello, ${name}!`);
}

greet('Raj');

3. Compile the TypeScript file:
tsc index.ts
This generates a corresponding index.js file.

4. Run the JavaScript file:
node index.js

🔄 Watch Mode (Auto-Compile)
To automatically compile TypeScript files when changes are detected:
tsc --watch

## ❗ Common Errors and Troubleshooting

| Issue                      | Solution |
|-----------------------------|----------|
| `tsc: command not found`     | Reinstall TypeScript globally: `npm install -g typescript` |
| Cannot find module errors    | Check module resolution settings in `tsconfig.json` |
| Type errors                  | Verify variable types and TypeScript syntax |
| Compilation errors           | Check your `tsconfig.json` configuration |

📚 Helpful Resources
TypeScript Official Documentation

TypeScript Playground

TypeScript GitHub Repository

<div align="center"> <h3>Made with ❤️ using TypeScript</h3> </div><h2 align="center">✅ You're all set to build amazing projects with TypeScript!</h2> ```




TypeScript Installation and Setup Guide
<div align="center">

</div>
📌 What is TypeScript?
TypeScript is an open-source programming language developed and maintained by Microsoft.
It is a strict syntactical superset of JavaScript and adds optional static typing to the language.

With TypeScript, you can catch errors early through a type system and make development more efficient.

🛠 Prerequisites
Node.js and npm installed.

Check if Node.js and npm are installed:

bash
Copy
Edit
node -v
npm -v
If they are not installed, download and install Node.js from here.

⚙️ TypeScript Installation
1. Install TypeScript Globally

To install TypeScript globally using npm:

npm install -g typescript

This installs the TypeScript compiler (tsc) globally.

2. Verify TypeScript Installation
Check the installed TypeScript version:

tsc -v

If installed correctly, you will see something like:

Version 5.x.x

🚀 Setting Up a TypeScript Project
Follow these steps to set up a simple TypeScript project:

Step 1: Create a Project Directory
bash
mkdir my-typescript-project
cd my-typescript-project

Step 2: Initialize npm
bash
npm init -y

This will create a package.json file.

Step 3: Install TypeScript Locally (Recommended)
bash

npm install typescript --save-dev

This installs TypeScript as a development dependency.

Step 4: Create a tsconfig.json File
Initialize a basic TypeScript configuration file:

bash
tsc --init

This generates a tsconfig.json file with default settings. You can customize it later as per your project's requirements.

📝 Writing and Compiling TypeScript Code
Create a new file, for example:

index.ts

Write some TypeScript code:

typescript

const greet = (name: string): void => {
    console.log(`Hello, ${name}!`);
}

greet('Raj');
Compile the TypeScript file:

bash

tsc index.ts
This will generate a corresponding index.js file.

Run the JavaScript file:

bash

node index.js

🔄 Watch Mode (Auto-Compile)

To automatically compile TypeScript files whenever you make changes:

bash

tsc --watch
❗ Common Errors and Troubleshooting

Issue                    ||               	Solution
tsc:command not found	 ||                 Ensure TypeScript is installed globally. Try reinstalling with npm install -g typescript.
Cannot find module errors||                 Make sure you have proper module resolution settings in tsconfig.json.
Type errors	             ||                 Check your variable types and ensure your TypeScript syntax is correct.

📚 Helpful Resources
TypeScript Official Documentation

Playground - Try TypeScript Online

TypeScript GitHub Repository

<div align="center">
Made with ❤️ using TypeScript

</div>
✅ You're all set to build amazing projects with TypeScript!
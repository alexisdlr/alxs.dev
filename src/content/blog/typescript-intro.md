---
title: 'Introduction to TypeScript'
description: 'Discover the basic concepts and advantages of TypeScript, a superset of Javascript'
pubDate: 'Jan 11 2025'
heroImage: "/logos/typescript.webp"
category: 'typescript'
minRead: '7' 

---

<h1 class='text-4xl font-black mt-20 mb-10 text-slate-700 dark:text-darkText/90'>Intro</h1>

<p class='text-slate-700 dark:text-slate-100 mb-10 text-lg'><span class='font-italic text-navy/90 dark:text-iris font-semibold'>TypeScript</span> es un lenguaje de programación de código abierto desarrollado por Microsoft que se basa en <span class='font-italic text-yellow-700 dark:text-yellow-400 font-semibold'>JavaScript</span>. Se describe a menudo como un "superset" de <span class='font-italic text-yellow-700 dark:text-yellow-400 font-semibold'>JavaScript</span>, ya que añade características adicionales y está diseñado para ayudar en el desarrollo de aplicaciones más grandes y mantenibles. En este post, exploraremos los conceptos básicos de TypeScript y por qué puede ser beneficioso en tus proyectos.</p>

<h2 class='text-3xl font-bold mt-12 mb-4 text-slate-700 dark:text-darkText'>What is TypeScript?</h2>

<p class='text-slate-700 dark:text-slate-100 mb-10 text-lg'><span class='font-italic text-navy/90 dark:text-iris font-semibold'>TypeScript</span> adds static types to <span class='font-italic text-yellow-700 dark:text-yellow-400 font-semibold'>JavaScript</span>, meaning you can define data types for your variables, function parameters, and more. These types help catch errors at compile time, making it easier to detect potential problems in your code early.</p>

<h2 class='text-3xl font-bold mt-12 mb-4 text-slate-700 dark:text-darkText'>Key Features</h2>

<h3 class='text-2xl px-6 font-bold mt-12 mb-4 text-sky-900/90 dark:text-iris/90'>1. Static Typing</h3>

<p class='text-slate-700 dark:text-slate-100 mb-10 text-lg px-8'>Instead of relying solely on type inference at runtime, TypeScript allows you to explicitly define the types of your variables, parameters, and functions, thus providing static typing.</p>

<h3 class='text-2xl px-6 font-bold mt-12 mb-4 text-sky-900/90 dark:text-iris/90'>2. Interfaces and Advanced Types</h3>

<p class='text-slate-700 dark:text-slate-100 mb-10 text-lg px-8' >TypeScript offers features such as interfaces and advanced types that make it easier to create cleaner, more maintainable code.</p>


```typescript
 interface Persona {
  nombre: string;
  edad: number;
}

const usuario: Persona = { nombre: 'Juan', edad: 30 };
```

<h3 class='text-2xl px-6 font-bold mt-12 mb-4 text-sky-900/90 dark:text-iris/90'>3. Compilation to JavaScript</h3>

<p class='text-slate-700 dark:text-slate-100 mb-10 text-lg px-8'>TypeScript code compiles to standard JavaScript, meaning you can use TypeScript features during development and still generate code that will run in any browser or environment that supports JavaScript.
</p>

<h2 class='text-3xl font-bold mt-16 mb-10 text-slate-700 dark:text-darkText'>How to start?</h2>

<h3 class='text-sky-900/90 font-semibold dark:text-iris mb-3 text-lg'>1. Installation:</h3>

<p class='text-slate-700 dark:text-slate-100 mb-8 text-lg'>You can install TypeScript using npm (Node Package Manager). Run the following command in your terminal:</p>   

   ```bash
   npm install -g typescript
   ```

<h3 class='text-sky-900/90 font-semibold dark:text-iris mb-3 mt-10 text-lg'>2. Create your first TypeScript file:</h3>

<p class='text-slate-700 dark:text-slate-100 mb-8 text-lg'>Create a file with the name app.ts and enter the following code:</p>   

```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}

const message: string = greet('World');
console.log(message);

```
<h3 class='text-sky-900/90 font-semibold dark:text-iris mb-3 mt-10 text-lg'>3. Compile your application:</h3>

<p class='text-slate-700 dark:text-slate-100 mb-4 text-lg'>Open your terminal, navigate to the directory where app.ts is located and run the following command:</p>  

```bash
tsc app.ts
```
<p class='text-slate-700 dark:text-slate-100 mb-8 mt-4 text-lg'>This will generate an app.js file that you can run with Node.js.</p>

<h2 class='text-3xl font-bold mt-12 mb-4 text-slate-700 dark:text-darkText'>Conclusion</h2>

<p class='text-slate-700 dark:text-slate-100 mb-8 mt-4 text-lg'>
<span class='font-italic text-navy/90 dark:text-iris font-semibold'>TypeScript</span> provides an additional layer of security and structure to your JavaScript code. While it may have an initial learning curve, the long-term benefits in terms of maintainability and efficient development make it well worth it. Start exploring and improve your development with TypeScript!</p>
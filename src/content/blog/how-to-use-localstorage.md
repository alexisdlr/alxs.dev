---
title: "Using LocalStorage in JavaScript"
description: "Learn how to use localStorage to store data persistently in the browser."
pubDate: "Jan 10 2024"
heroImage: "/logos/JavaScript.webp"
category: "javascript"
minRead: "5"
---

<h2 class='text-4xl font-black my-10 text-navy dark:text-darkText/90'>Intro</h2>

<p class='text-slate-700 dark:text-slate-100 mb-10 text-md md:text-lg'>
  In this post, we will explore how to use localStorage in <span class='font-italic text-navy/90 dark:text-iris font-semibold'>localStorage</span> to store data persistently in the browser. <span class='font-italic text-navy/90 dark:text-iris font-semibold'>localStorage</span> is a simple but powerful API that allows you to store and retrieve key-value data locally in the user's browser.
</p>

<h2 class='text-3xl font-bold mt-10 mb-4 text-navy dark:text-darkText'>What is localStorage?</h2>

<p class='text-slate-700 dark:text-slate-100 my-10 text-md md:text-lg'> 
  <span class='font-italic text-navy/90 dark:text-iris font-semibold'>localStorage</span> is a key-value data storage mechanism that is available in most modern web browsers. Unlike cookies, the data stored in `localStorage` is not sent to the server with each HTTP request, making it an excellent option for storing information locally in the user's browser.
</p>

<h2 class='text-3xl font-bold mt-12 mb-4 text-navy dark:text-darkText'>Basic usage of localStorage</h2>

<p class='text-slate-700 dark:text-slate-100 mt-10 mb-6 text-md md:text-lg'>You can store data in <span class='font-italic text-navy/90 dark:text-iris font-semibold'>localStorage</span> using the <code>setItem(key, value)</code>method. Here is an example: </p>

```javascript
// Storing a data in localStorage
localStorage.setItem("user", "john_doe");

// Fetching stored data
const user = localStorage.getItem("user");
console.log(user); // It will print 'john_doe'

// Deleting data
localStorage.removeItem("user");
```

<h2 class='text-3xl font-bold mt-12 mb-1 text-navy dark:text-darkText'>Practical example</h2>

<p class='text-slate-700 dark:text-slate-100 mt-10 mb-4 text-md md:text-lg'> Suppose we want to remember the user's topic preference: </p>

```javascript
// Get the stored theme preference
const themePreferred = localStorage.getItem("theme");

// Apply the preferred theme when loading the page.
document.body.classList.add(themePreferred);
```

<h2 class='text-3xl font-bold mt-10 mb-4 text-navy dark:text-darkText'>Considerations & Conclusion</h2>

 <ul class='px-6'>
  <li class='text-slate-700 dark:text-slate-100 my-2 text-md md:text-lg'>- Data stored in localStorage persists even after closing and reopening the browser.</li>
  <li class='text-slate-700 dark:text-slate-100 my-2 text-md md:text-lg'>- The maximum allowed size of data in localStorage is variable depending on the browser, but is generally at least 5 MB.</li>
 </ul>

<p class='text-slate-700 dark:text-slate-100 my-6 text-md md:text-lg'>I hope this post has helped you understand how to use localStorage in JavaScript to improve the user experience in your web application!.</p>
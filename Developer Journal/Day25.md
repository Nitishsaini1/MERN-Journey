
---

📅 JavaScript Journey — Day 25

Topic: Promises → Fetch API Introduction

🎯 Goal

Understand why Promises exist and begin making real API requests.


---

✅ What I Learned Today

Promises

resolve() changes a Promise from Pending → Fulfilled.

reject() changes a Promise from Pending → Rejected.

A Promise can be settled only once.

After a Promise is settled, any later resolve() or reject() calls are ignored.

The Promise executor function runs immediately when the Promise is created.

.then() executes only for fulfilled Promises.

.catch() executes only for rejected Promises.



---

Execution Flow

Success Flow:

Promise Created
      ↓
resolve()
      ↓
Fulfilled
      ↓
.then()

Failure Flow:

Promise Created
      ↓
reject()
      ↓
Rejected
      ↓
.catch()


---

Fetch API

I learned that:

fetch(url)

does NOT return the actual data.

Instead it returns a Promise.

const weather = fetch(url);

weather stores a Promise object, not weather data.

When the server responds successfully:

Server
   ↓
Browser
   ↓
Promise Fulfilled
   ↓
.then(response)

If something goes wrong:

Server Error / Network Error
        ↓
Promise Rejected
        ↓
.catch(error)


---

🧠 Biggest Realization

fetch() is not a Promise.

It returns a Promise created by the browser.

Before today I created Promises myself.

Now the browser creates them for me.


---

🖥️ First Real API Attempt

API Used:

https://jsonplaceholder.typicode.com/users/1

Result:

❌ Request failed because of the browser's Content Security Policy (CSP).

This wasn't a JavaScript mistake.

It happened because I executed the request in a page that blocks external network requests.

Even though it failed, I successfully made my first real Fetch API request.


---

💡 Important Mental Models

A Promise is like a receipt while waiting for data.

fetch() immediately returns that receipt.

.then() waits until the Promise becomes fulfilled.

response is not the final data.

response is the server's Response object.

Tomorrow I'll learn how to convert that Response into actual JSON data.



---

🎯 Tomorrow's Goal

Understand response.json()

See actual API data

Read properties like:


user.name
user.email
user.phone

Build my first project using a real API.



---

💬 Personal Note

Today was exciting because I finally reached APIs after waiting through HTML, CSS, JavaScript fundamentals, callbacks, and Promises.

Even though my first request failed due to browser security, I now understand why it failed instead of thinking my JavaScript was wrong.

Today felt like the point where frontend development started becoming real. 🚀
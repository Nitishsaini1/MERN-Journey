What does it do?
What is the browser doing?
When would I use it?

What is Question 1 the browser should ask after the user clicks Login?

there a number of question browser will ask 
1. is user.input empty
   is password.input empty
2. is it valid
3. is it matching with db


Let's label the code:
let age = 24;
let → Variable keyword
age → Variable name
= → Assignment operator
24 → Value

Earlier we learned:
function add(a, b) {
}
function → Function keyword
add → Function name
Now:
let age = 24;
let → Variable keyword
age → Variable name






Absolutely. Following our notebook rule:

> Problem → Mental Model → One Experiment → Memory Diagram → Summary



No long theory.


---

📖 Notebook Entry — Objects

❓ Problem

Suppose we want to store one movie.

Each movie has:

Title

Rating

Year

Watched


Using arrays:

let movieNames = ["Interstellar"];
let ratings = [9.5];
let years = [2014];
let watched = [true];

🚨 Problem

All related information is scattered.

Everything depends on the same index.

If one array changes and another doesn't, the data becomes incorrect.


---

💡 Why Objects Were Invented?

> Objects keep all related information about ONE thing together.



Instead of:

Title  → Array 1
Rating → Array 2
Year   → Array 3

Everything stays in one place.


---

🧠 Mental Model

Object = Folder 📁

📁 Movie

├── Title
├── Rating
├── Year
└── Watched

Everything about one movie stays inside one folder.


---

📝 Syntax

let movie = {
    title: "Interstellar",
    rating: 9.5,
    year: 2014,
    watched: true
};


---

🔍 Reading Data

Mental Model

. means

> Go inside.



Example:

movie.title

Browser Thinking:

movie

↓

Go inside

↓

Find title

↓

Return

"Interstellar"


---

🧪 One Experiment

let movie = {
    title: "Interstellar",
    rating: 9.5,
    year: 2014,
    watched: true
};

console.log(movie.title);
console.log(movie.rating);
console.log(movie.year);
console.log(movie.watched);

Output

Interstellar
9.5
2014
true


---

📖 Notebook Entry — Array of Objects

❓ Problem

One object stores only one movie.

What if Netflix has 1000 movies?

Creating:

movie1
movie2
movie3
...

is difficult to manage and impossible to loop through naturally.


---

💡 Solution

Store many objects inside one array.


---

🧠 Mental Model

Movies Array

│
├── Movie Object
├── Movie Object
├── Movie Object
└── Movie Object

Array

↓

Many things

Object

↓

One thing


---

📝 Syntax

let movies = [
    {
        title: "Interstellar",
        rating: 9.5,
        year: 2014,
        watched: true
    },
    {
        title: "Inception",
        rating: 9.2,
        year: 2010,
        watched: false
    }
];


---

🧪 One Experiment

console.log(movies[0]);

Output

{
    title: "Interstellar",
    rating: 9.5,
    year: 2014,
    watched: true
}

Notice:

movies[0] returns the whole object, not just one value.


---

🔍 Reading a Property from an Array of Objects

console.log(movies[0].title);

Browser Thinking:

movies

↓

Go to index 0

↓

Return object

↓

Go inside (.)

↓

Find title

↓

Return

"Interstellar"

Output

Interstellar


---

🧠 Memory Diagram

movies
│
├── [0]
│      │
│      ├── title ─────► "Interstellar"
│      ├── rating ────► 9.5
│      ├── year ──────► 2014
│      └── watched ───► true
│
├── [1]
│      │
│      ├── title ─────► "Inception"
│      ├── rating ────► 9.2
│      ├── year ──────► 2010
│      └── watched ───► false


---

⚡ 30-Second Summary

Array

> Stores many things.



Example:

let students = ["Raj", "Aman", "Kirti"];


---

Object

> Stores everything about one thing.



Example:

let movie = {
    title: "Interstellar",
    rating: 9.5,
    year: 2014,
    watched: true
};


---

Array of Objects

> Stores many well-described things.



Example:

let movies = [
    {
        title: "Interstellar",
        rating: 9.5,
        year: 2014,
        watched: true
    },
    {
        title: "Inception",
        rating: 9.2,
        year: 2010,
        watched: false
    }
];


---

⭐ One sentence to remember

> An array answers "How do I store many things?" An object answers "How do I describe one thing?" Together, an array of objects lets me store many well-described things.



This notebook entry is enough for tomorrow's projects. We don't need more theory until the projects create a new need.
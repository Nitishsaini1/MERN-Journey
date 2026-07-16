---

📖 Nitish's Journal — Day 13 (16 July 2026)

⏰ Study Progress

Continued working on the To-Do List instead of starting a new project. Today's focus was on improving the design of the application rather than simply adding features.


---

✅ What I Completed

Refactored repeated rendering code into a single display function.

Reduced duplicated code from multiple functions.

Began designing the Edit Task feature.

Completed the algorithm for Edit before writing any code.



---

💡 Biggest Realizations

1. Repeated code has a cost.

While rebuilding my To-Do List from memory, I had to rewrite the same rendering code several times.

That made me realize:

It wastes time.

It increases the chance of mistakes.

Fixing future bugs would require changing multiple places.


That's why one rendering function is better than several copies.


---

2. Good design comes from solving pain.

I didn't understand why developers create helper functions until I experienced the pain of duplicate code myself.

Now refactoring has a clear purpose instead of feeling like another programming rule.


---

3. Designing before coding.

For the Edit feature, I didn't start by thinking about JavaScript.

Instead I designed the user experience first.

Algorithm:

Click Edit

↓

Show input with current title

↓

User edits title

↓

Click Save

↓

Read input value

↓

Update database

↓

Display updated memory

Only after the algorithm is clear will I write code.


---

4. Memory still comes first.

The same pattern keeps appearing.

User Action

↓

Memory Changes

↓

Browser Reads Memory

↓

UI Updates

Every feature in the To-Do List follows this flow.


---

5. Patterns repeat.

I noticed that Edit follows the same structure as Complete and Delete.

Complete:

Button

↓

Index

↓

Change Memory

↓

Display

Delete:

Button

↓

Index

↓

Change Memory

↓

Display

Edit:

Button

↓

Index

↓

Change Memory

↓

Display

The only new part is reading the edited text from the input.


---

🧠 Biggest Breakthrough

Today I connected something I already knew.

Instead of memorizing HTML attributes, I realized:

JavaScript uses:

input.value

So it makes sense that HTML also has:

<input value="...">

That connection felt much more natural than memorizing syntax.


---

🤔 Questions I Explored

Why one display function is better than multiple display functions.

How Edit differs from Complete.

How the browser knows which task is being edited.

Why placeholder isn't suitable for editing existing text.

How the browser gets the new title after the user edits it.



---

📈 Growth Compared to Earlier

A few days ago I mostly thought about syntax.

Today I noticed myself asking questions like:

What changed in memory?

What is the browser trying to display?

Can I reuse an existing pattern?

Does this responsibility belong in another function?


I can feel myself thinking more about the application as a system instead of individual lines of code.


---

🎯 Tomorrow's Mission

Build the Edit Task feature.

Figure out how Save reads the edited input.

Keep using the same process:


Problem

↓

Algorithm

↓

Browser Thinking

↓

Code

↓

Debugging


---

🌟 Personal Reflection

Today I realized something interesting.

When I first started programming, every new feature felt like a completely different problem.

Now I naturally look for patterns from features I've already built.

Instead of inventing a new solution every time, I ask:

> "Have I already solved something similar?"



That makes new problems feel much smaller.


---

💬 Message to Future Me

Keep trusting the process.

Don't rush into code.

Every time I understand the browser's thinking first, writing the JavaScript becomes much easier.

Today's lesson wasn't just about the Edit feature.

It was about recognizing patterns and designing software before implementing it.


---

Day 13 Progress: Strong. The To-Do List is no longer just a JavaScript exercise—it's becoming my first application that I'm improving like a real developer.
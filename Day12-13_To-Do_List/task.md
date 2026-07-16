Good. Let's look at where we are.

You've now built these projects:

* ✅ Greeting App
* ✅ Age Checker
* ✅ Counter
* ✅ Login Validation
* ✅ Movie Library
* ✅ Student Database
* ✅ To-Do List (with Complete, Delete, and refactoring)

According to our constitution:

> **Don't rush into a new project if the current one can still teach something valuable.**

So I think we have **one more day** with the To-Do List before moving on.

---

# 🎯 Day 13 Mission

We're going to make your To-Do List feel like a real application.

## Step 1 (Easy)

Rename:

```javascript
displayMemory()
```

to

```javascript
displayTasks()
```

because that's exactly what it does.

---

## Step 2 (JavaScript)

Make the Complete button work like this:

```text
Pending

↓

Completed

↓

Pending

↓

Completed
```

Instead of only becoming "Completed" forever.

This introduces a very useful idea:

> **A button can behave differently depending on the current state.**

---

## Step 3 (CSS)

Now we'll finally start making it look like something you'd actually want to use.

We'll learn CSS only because **your project needs it**.

Ideas:

* Card layout
* Rounded corners
* Hover effects
* Better spacing
* Green ✔ button
* Red 🗑 button
* Better fonts
* Shadows

---

## Step 4 (Interview Feature)

Show this at the top:

```text
📋 Total Tasks: 5

✅ Completed: 2

⏳ Pending: 3
```

This is a common interview feature because it makes you think about your data.

---

# 🚀 After To-Do List

Then we'll move into the next JavaScript project.

I don't want to tell you the name yet.

I want you to choose.

### Which sounds more interesting?

**A)** Expense Tracker 💰

You'll learn numbers, calculations, totals, and filtering.

---

**B)** Notes App 📝

You'll learn editing, searching, and better CRUD operations.

---

**C)** Quiz App 🎯

You'll learn arrays of objects, scoring, and navigating between questions.

---

My vote is **A — Expense Tracker**.

Why?

Because it introduces a lot of concepts that appear in real business applications:

* Working with numbers
* Income vs expenses
* Totals
* Calculations
* Filtering
* Dashboards

It's a natural step up from the To-Do List.

---

## 👨‍💻 Mentor's Note

We're no longer learning JavaScript topic by topic.

We're learning **application development**.

Notice the progression:

```text
Greeting App
        ↓
Counter
        ↓
Movie Library
        ↓
Student Database
        ↓
To-Do List
        ↓
Expense Tracker
```

Each project reuses what you already know and adds only **one or two new ideas**.

That's exactly how I want to continue. By the time we reach React, these patterns—state (your `database` array), rendering, updating memory, and event handling—will already feel natural because you've built them yourself many times. That's going to make React much easier to understand.

---

📅 Day 19 – JavaScript (Todo App Rebuild)

🎯 Goal

Complete the Todo App rebuild from memory while following the algorithm instead of copying old code.


---

✅ Features Completed

Add Task

Edit Task

Delete Task

Toggle Status

Filter (All / Pending / Complete)

Search by Title

Clear Search

Local Storage



---

🧠 Major Learnings

1. includes() already returns a boolean

Today's biggest breakthrough.

Initially I wrote:

database[i].title == database[i].title.includes(searchText)

Then I realized:

database[i].title → String

includes() → Boolean


I was comparing a string with a boolean, which makes no logical sense.

Correct thinking:

> "includes() already answers the question."



So no comparison is needed.


---

2. Think about return types

Instead of memorizing methods, ask:

> "What value does this expression return?"



This immediately helps determine how the expression should be used.


---

3. Filter + Search architecture

Rendering follows:

Loop
   ↓
Pass Filter?
   ↓
Pass Search?
   ↓
Draw Task

Search never changes the database.

It only changes what gets displayed.


---

4. Code duplication

Discovered that:

saveDatabase();
renderTasks();

didn't belong inside both branches of an if.

If they always execute, move them outside.

Cleaner code.


---

💡 Architecture Improvements

Created saveDatabase() helper.

Maintained a single source of truth (database).

Search, Filter, and Edit all work through renderTasks().

Local Storage updates only after data changes.



---

🐛 Bugs Solved

Fixed Search condition.

Fixed comparison between string and boolean.

Polished UI.

Cleaned small code issues.

Final testing completed.



---

🖥️ Project Status

✅ Todo App completed.

Features:

CRUD

Toggle

Search

Filter

Clear Search

Local Storage

Editing

Task Counter


Project committed and ready to archive.


---

📚 Next Project

Calculator App

Planned learning goals:

CSS Grid

Application State

Multi-digit numbers

Operators

Calculator logic

Algorithm-first development



---
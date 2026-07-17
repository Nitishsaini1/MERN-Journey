Day 14 - Journal

Date: 17 July 2026

🎯 Goal

Implement the Edit (Update) feature of the To-Do List application and understand how the browser handles editing.

✅ What I accomplished

Added the editingIndex variable to remember which task is being edited.

Implemented editTask(index) to switch a task into edit mode.

Modified renderTasks() to show an input field and Save button only for the task being edited.

Learned how to prefill an input using the value attribute.

Created the initial saveTask(index) function.

Updated the task title using:

database[index].title = editInput.value;

Realized that after saving, the app must exit edit mode by resetting editingIndex.

Understood that i is local to the for loop and does not travel between functions; only its value is passed as index.


💡 Biggest realization today

I discovered that I understand programming much better when I:

1. Write the algorithm.


2. Think like the browser.


3. Write the code.


4. Debug and understand why it works.



Trying to understand too much theory before writing code makes it harder for me to build the mental model.

❓What I'm still confused about

How JavaScript jumps from one function to another.

How function calls, local variables, and parameters work together during execution.

I want to rebuild the project from the algorithm so I can explain every line instead of remembering it.


🎯 Plan for the next session

Write the entire To-Do List algorithm from scratch without looking at the existing code, then implement it step by step.


---

 
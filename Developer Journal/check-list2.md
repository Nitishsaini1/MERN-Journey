I think this is one of the most valuable documents we can create. You'll use it throughout your career.

Save it as:

> **`Debugging-Checklist.md`**

---

# 👨‍💻 Senior Developer's Debugging Checklist (Version 1.0)

> **Rule #1**
>
> **Never guess.**
>
> **Collect evidence.**

---

# Step 1 — Connection

## Question

> **Did the browser load everything I need?**

## Check

* Is CSS linked?
* Is JavaScript linked?
* Is the file name correct?
* Is the file path correct?

## Symptoms

* JavaScript doesn't run.
* Button does nothing.
* Styles don't load.

## How to investigate

Ask:

> **Is my browser even reading this file?**

---

# Step 2 — Selection

## Question

> **Did JavaScript find my HTML element?**

Example

```javascript
document.querySelector(".login")
```

## Check

* Class name
* ID
* Typo
* Wrong selector

## Symptoms

* Button doesn't respond.
* Input values are undefined.
* Cannot read properties...

## Ask yourself

> **Am I selecting the correct HTML element?**

---

# Step 3 — Event Registration

## Question

> **Did JavaScript attach the event?**

Example

```javascript
button.addEventListener("click", function () {

})
```

## Symptoms

Nothing happens after clicking.

## Investigation

Place

```javascript
console.log("Button Clicked")
```

as the first line.

If it prints

✅ Event works.

If not

❌ Event never started.

---

# Step 4 — Runtime Error

## Question

> **Did JavaScript stop because of an error?**

## Investigation

Open

```
F12
↓

Console
```

Look for

🔴 Red Error

Read

* Error message
* File
* Line number

## Never panic.

Read the first error only.

---

# Step 5 — Input Data

## Question

> **Did JavaScript receive the data I expected?**

Example

```javascript
console.log(username.value)
```

## Investigation

Ask

> What value is JavaScript actually seeing?

Maybe

```
""
```

Maybe

```
"Nitish"
```

Maybe

```
" "
```

Never assume.

---

# Step 6 — Program Flow

## Question

> **Which path is my program taking?**

Example

```javascript
console.log("1")

if (...)

console.log("2")

else

console.log("3")
```

Now you know

```
1
↓

2
```

or

```
1
↓

3
```

Instead of guessing.

---

# Step 7 — Condition

## Question

> **Is my if asking the correct question?**

Don't read JavaScript.

Read English.

Example

```javascript
if(username.value == "")
```

English

> Is the username empty?

Example

```javascript
if(username.value.length < 5)
```

English

> Is the username shorter than 5?

If the English is wrong

↓

The JavaScript is wrong.

---

# Step 8 — Data Types

Ask

> What am I comparing?

Good

```
Number ↔ Number
```

```
String ↔ String
```

Bad

```
String ↔ Number
```

---

# Step 9 — Properties & Methods

Ask

> Am I using the correct property?

Example

```
textContent
```

NOT

```
textcontent
```

Example

```
includes()
```

NOT

```
include()
```

Remember

JavaScript is

✅ Case Sensitive

---

# Step 10 — Read the Error

Don't say

> It doesn't work.

Instead answer

1.

Which test failed?

2.

What did I expect?

3.

What actually happened?

4.

Where did the program stop?

---

# Golden Rule

Never ask

> What's wrong?

Ask

> Where did the program stop?

---

# The 5 Questions Every Developer Should Ask

When something breaks, ask these in order:

1. **Did the browser load my code?**
2. **Did JavaScript find the correct element?**
3. **Did the event actually fire?**
4. **Which condition did the program reach?**
5. **Why did it choose that path?**

---

# Debugging Flowchart

```
Program not working
        │
        ▼
Files connected?
        │
        ▼
Elements selected?
        │
        ▼
Event fired?
        │
        ▼
Any runtime error?
        │
        ▼
Correct input received?
        │
        ▼
Correct condition?
        │
        ▼
Correct output?
```

---

## 👨‍💻 One addition from your senior developer

Today, **you taught me something too**.

You said:

> **"Don't tell me the bug. Tell me what I should check."**

That is such a valuable habit that I'm making it part of our mentoring process.

From now on:

* If you ask **"What should I check?"**, I'll guide you through this checklist.
* I won't jump straight to the answer.
* Only after we've gathered evidence together will we identify the exact bug.

I think this will make you a much stronger developer because you'll build the skill of investigating problems independently instead of relying on someone else to spot them. This checklist is one we'll keep using as your projects become larger and more complex.

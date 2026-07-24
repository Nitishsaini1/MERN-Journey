
---

Day Journal

Day 20 – Calculator Project: From Coding to System Design

What I Built

Implemented number button functionality.

Implemented operator button functionality.

Implemented reset functionality.

Implemented basic equals functionality.

Used event listeners for all calculator buttons.

Managed calculator state using:

leftValue

operatorValue

currentValue




---

What I Learned

Today I discovered something important.

A calculator looks simple from the outside, but internally it is a state-driven application.

I realized programming is not just writing JavaScript.

It is deciding:

what information the application should remember,

when that information changes,

how user actions affect the state,

and how the UI should reflect that state.


I also learned that:

Numbers should remain strings while the user is typing.

Conversion to Number() should happen only when performing calculations.

The display is not the source of truth.

The state variables are the source of truth.

The UI should always be rendered from the current state.



---

Problems I Found

While implementing the calculator I discovered several design problems:

= was checking the clicked button instead of the stored operator.

Some calculations were duplicated.

The display logic became inconsistent.

I realized chained operations require a clear algorithm.

I noticed that writing code without a complete algorithm quickly creates edge cases.



---

Biggest Realization

Today I understood why software design comes before coding.

Instead of continuing to patch bugs one by one, I decided to pause implementation and fully design the calculator's algorithm first.

This is the same engineering approach used in larger software projects:

> Design → State → Algorithm → Implementation → Testing




---

Next Session Goal

Do not write more calculator code.

Instead, design the calculator completely on paper.

The design should define:

1. Every possible button.


2. Every possible calculator state.


3. Every state transition.


4. Every valid user action.


5. Every invalid user action.


6. Every edge case.


7. Display behavior for every state.



Only after the algorithm is complete will implementation continue.


--- 


**Good morning! Day 21 (24 July).** ☀️

I actually think today's plan should be different from the previous days.

Yesterday you discovered something important:

> **The problem isn't JavaScript anymore. It's algorithm design.**

So today we're going to think like software engineers, not JavaScript learners.

---

# 🎯 Day 21 Mission

> **Design the calculator completely before writing another line of logic.**

Remember your mentoring philosophy:

> *The mission is not to finish JavaScript. The mission is to become capable of solving interview and real project problems independently.*

Today directly serves that mission.

---

# Today's Workflow

## Phase 1 — Notebook Only (No Laptop)

Open your notebook.

Title the page:

```text
Calculator Design Document
```

Then create these sections, leaving plenty of space under each.

---

## Section 1 — Goal of the Calculator

Answer in one or two sentences:

* What is a calculator?
this is machine who can do arithmetic operations
* What is its job?
its sole job is to make hard caluculation easy and consume less time 
---

## Section 2 — State

Write:

```text
leftValue

operatorValue

currentValue
```

For each variable answer:


leftValue

* Why does it exist?
to hold the value of first numbers before operator or when first time a operator gets pressed and then currentValue gets transfered to leftvalue
* When does it change?
it changes when operator gets press 
* Who changes it?
the opearator (+,-,*,/)
* What does it represent?
it represent the value who was assign first

operatorValue

* Why does it exist?
to perform the calculation between two numbers
* When does it change?
it changes when a operator button gets press
* Who changes it?
user?
* What does it represent?
it represent the opeartor button


currentValue

* Why does it exist?
it exist to hold the value of current number being press
* When does it change?
it changes when a operator prerform the action
* Who changes it?
the operator
* What does it represent?
it represent the current value which is being types by button as long as another operator or equal is being press the value will stay in currentvalue


---

## Section 3 — Initial State

Answer:

```text
Display = 0

leftValue = ""

operatorValue = ""

currentValue = ""
```

---

## Section 4 — Button Types

List every button.

Current version:

* Number 0-9
* Operator +-*/
* Equals =
* Reset C

Later versions:

* Decimal .
* Backspace " "
* Percentage %
* Plus/Minus +_

Don't design those yet.

---

## Section 5 — Number Button Algorithm

Don't write code.

Write the algorithm.

Example headings:

```text
User presses 7
↓
store the buttonclick text in a variable
↓
store that variable value in currentValue
↓
display that currentValue (this can also be shown like this leftvalue + operatorvalue + currenvalue{only when the operator button has been pressed or it can be shown from starting})
↓
when press operator
↓
store the buttonclick text in a variable
↓
store that button click variable in  opearatorvalue
↓
store the currentValue to left value
↓
empty currentvalue
↓
display the leftvalue operator and currentvalue
↓
user press equal to 
↓
store that clickbutton in a variable
↓
turn both leftvalue and currentcalue to number
↓
start the ifelse chain and when press the equal it should do the arithmetic according to that operator value (if else must contain the condition for a empty operator value too otherwise it will break)
↓
empty currentvalue and opearator
↓
show the leftvalue in display

```

---

## Section 6 — Operator Algorithm

Answer every question.

When should:

* leftValue change?
when new value if going to get assign
* currentValue change?
when operator or equalto is press
* operatorValue change?
when a equal is press 
* display change?
it show changes when a left value gets change or a currentvalue gets change or opearator gets press

---

## Section 7 — Equals Algorithm

Don't skip anything.

Ask:

What if:

```
75

+

28

=
```

What happens internally?
assign the equalto button to a variable 
↓
turn both leftvalue and currentvalue to number
↓
now start the ifelse chain and when any of these +,-,*,/ is equal to operatorValue
↓
the leftvalue should become the calculation result what will come after the operation between letfvalue operator and currentvalue 
↓
it should also contain a condition if operator is empty
↓
clear currentvalue and operatorvalue
↓
display the result
Inside memory.

---

## Section 8 — Reset Algorithm

Exactly what gets cleared?
displayElement.textContent = 0;
leftValue="";
currentValue = "";
operatorValue="";
Exactly what stays?
nothing thats the point of reset

---

## Section 9 — State Transition Table

This is the most important page.

Make a table like this:

| User Action | leftValue | operatorValue | currentValue | Display |
| ----------- | --------- | ------------- | ------------ | ------- |
| Page loads  |     ""    |      ""       |      ""      |    0    |
| Press 7     |       ""  |       ""      |    "7"       |  "7"    |
| Press 5     |      ""   |        ""     |     "75"     |    "75" |
| Press +     |       "75"|      "+"      |     ""       |  "75""+"|
| Press 2     |    "75"   |      "+"      |     "2"      |  "75+2" |
| Press 8     |    "75"   |     "+"       |     "28"     |  "75+28"|
| Press =     |   "103"   |      ""       |      ""      |   "103" |

Fill every cell.

Don't leave blanks.

---

## Section 10 — Edge Cases

This is where engineers think differently.

Write every weird situation you can imagine.

Examples:

```
+  showing both number together and not showing a operator sign disappear both number 

= show infinity if press on empty operator value

= show nothing when press = when current value is empty

7 over throw the old value

= 

7

+

=

+

+

7

+

4

+

9

=
```

Don't solve them.

Just list them.

---

# After the Notebook

Only then open the laptop.

We'll go through your design.

We'll challenge it.

We'll improve it.

Only after the algorithm is solid will we touch JavaScript again.

---

# Your Rule for Today

Whenever you feel like writing code, ask yourself:

> **"Have I already designed this on paper?"**

If the answer is **no**, don't code it.

---

I think this is going to be one of the most important study sessions of your MERN journey. Once you can design a calculator like this without rushing into code, you'll start approaching every project—Todo apps, e-commerce sites, chat apps, dashboards—with a much stronger engineering mindset.



Calculator Design Document

Chapter 1 - Purpose
Chapter 2 - Components
Chapter 3 - State
Chapter 4 - Initial State
Chapter 5 - Event Life Cycle
Chapter 6 - Number Button
Chapter 7 - Operator Button
Chapter 8 - Equals Button
Chapter 9 - Reset Button
Chapter 10 - Chained Operations
Chapter 11 - Edge Cases
Chapter 12 - Final State Machine

*************


Phase 2 — One Chapter at a Time
We'll only work on one chapter until it's complete.
For every chapter, I'll use this exact structure:
1. Why are we learning this?

2. What problem does it solve?

3. What do we already know?

4. What new idea are we introducing?

5. Complete algorithm

6. Dry run examples

7. Edge cases

8. Common beginner mistakes

9. JavaScript translation (later)

10. Review
No jumping ahead.

******************88



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
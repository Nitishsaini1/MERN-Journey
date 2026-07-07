Debugging Checklist (No Hints)
When a test fails, check in this order:
Connection
Are all required files connected?
Event
Did the expected event happen?
Selection
Did JavaScript find the correct HTML elements?
Data
Did JavaScript receive the correct values?
Question
Is the current if asking the correct question?
Flow
Did the program go to the branch you expected?
Output
Is the correct message being displayed?


///////


Excellent question.

This is exactly what real developers do. They don't immediately think:

> "My code is wrong."



They ask:

> "Which part of my program failed?"



Here's the checklist I want you to follow every time.


---

🔍 Debugging Checklist (Day 4)

Step 1: Did the event happen?

Ask yourself:

> Did the click event run?



If not:

Is the button selected correctly?

Is addEventListener() attached to the right button?

Is the <script> linked correctly?



---

Step 2: Did JavaScript find the HTML element?

Check:

.username-input

.password-input

.login

.response


Do these class names exactly match the HTML?


---

Step 3: Which condition failed?

Don't check all six at once.

Ask:

> Which test case am I running?



Example:

Username: Raj
Password: StrongPassword123

Only the username length condition should fail.

If another message appears, you've found the wrong if.


---

Step 4: Is the condition asking the correct question?

Read it in English.

Example:

userName.value.length < 5

Read:

> "Is the username length less than 5?"



If the English sentence is wrong, the JavaScript will also be wrong.


---

Step 5: Am I comparing the correct things?

Always ask:

> What am I comparing?



Examples:

✅ Number ↔ Number

userName.value.length < 5

✅ String ↔ String

userName.value == ""

🚫 String ↔ Number

userName.value == userName.value.length


---

Step 6: If nothing happens

Open the browser console (F12 → Console).

Read the first red error.

Don't panic if you see one.

Read it slowly.


---

👨‍💻 The Golden Rule

When a test fails, don't rewrite the whole program.

Ask yourself:

> Which question was the browser trying to answer when it failed?



For example:

Test 1 fails → Check the empty username condition.

Test 3 fails → Check the username length condition.

Test 8 fails → Check the password space condition.


Only debug that one question.


---

🎯 Your Day 4 Mission

If a test fails, don't send me the whole project immediately.

Instead, tell me:

1. Which test number failed?


2. What did you expect?


3. What actually happened?



For example:

> Test 6 failed.

Expected: Please enter a valid password

Actual: Welcome



With those three pieces of information, we'll debug it together just like two developers reviewing a bug. That's a skill you'll use throughout your career.
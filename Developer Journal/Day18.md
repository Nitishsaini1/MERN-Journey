---

📖 Day 18 Journal

What I built today

Completed the Search feature.

Combined Search and Filter correctly.

Added the Clear Search (✕) feature.

Tested the Search feature with many different test cases.

Reviewed and improved the code architecture.



---

Biggest things I learned

1. Rendering is about decisions

I learned that rendering is not just drawing HTML.

It first decides:

Does the task pass the filter?

Does the task pass the search?

If yes, draw it.



---

2. Edit mode changes how, not whether

Edit mode does not decide if a task exists.

It only changes how that task is displayed.


---

3. Search and Filter are independent

Instead of treating them as competing else if branches, I combined them into one decision.

That made the rendering logic much cleaner.


---

4. State matters

temporaryTitle represents the current search state.

It should only change when the user changes the search.


---

5. Testing is part of building

Instead of assuming the feature worked, I tested many scenarios.

I even found that one of the proposed test cases was flawed because it didn't match how the UI actually behaves.


---

Feature completed today

✅ Add

✅ Delete

✅ Edit

✅ Toggle Status

✅ Filter

✅ Search

✅ Search + Filter

✅ Clear Search



---

Tomorrow's mission (Day 19)

Topic: Local Storage

Goal:

> Understand why data disappears after refresh and learn how the browser can remember application state between sessions.

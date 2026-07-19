---

Day 16 Journal

Day: (Keep using your current study day label.)

✅ What I built

Implemented task filtering.

Added support for All, Pending, and Complete filters.

Used the existing rendering loop instead of creating another loop.


🧠 Biggest breakthrough

Today I finally understood that the browser doesn't "hide" a card after creating it.

Instead, the browser decides whether to create the card at all.

Loop
↓

Decision

↓

loopRun()

↓

Card exists

If loopRun() isn't called, the card never gets created.

💡 My biggest misunderstanding

I kept trying to make:

"All" == "Pending"

become true.

That was the wrong problem.

The real question was:

> Under what conditions should the browser draw this task?



When I realized that "All" is supposed to allow every task to be drawn, everything clicked.

📚 Lessons learned

Think like the browser.

One loop is enough.

Filtering is a decision, not a second loop.

Sometimes a condition being "always true" is exactly the intended behavior.


🎯 Tomorrow

Test all filter buttons thoroughly.

Continue with the toggle feature using browser thinking before writing code.



--- 
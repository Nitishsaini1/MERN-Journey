Now the plain-English mental model that makes it click:

**The core idea:** Drag and drop is just the browser firing events at specific moments in time. You hook into those moments and run code.

**Think of it like handing off a relay baton:**

1. **`dragstart` — You grab the baton from the stand**
   - This is when the user first presses the mouse down on something draggable
   - At this exact moment, you say: "Okay, I'm dragging this thing" and write down what it is (store its ID, or its content, or whatever data matters)
   - You might also change how it looks (make it semi-transparent, show a copy icon)
   - The baton is now in your hand — you own it until you release

2. **`dragover` — You're running with the baton, passing through zones**
   - As you move the mouse, this event fires **repeatedly** (many times per second)
   - At each moment, you're standing in a different drop zone asking: "Can I drop here?"
   - You check: is this a valid drop zone? (e.g., is it a trash bin? Is it an empty box? Is it another item I can swap with?)
   - If yes, you raise your hand and say "I accept this" (that's what `preventDefault()` does)
   - If no, you do nothing, and the browser assumes "drop not allowed here"
   - You might highlight the current zone to show "yes, you can drop here"

3. **`drop` — You release the baton into a zone**
   - This only fires if the last `dragover` you passed through had someone who raised their hand
   - You grab the baton data (what you wrote down in `dragstart`)
   - You do the actual work: move the item, copy it, delete it, or whatever
   - The thing actually changes in your page

4. **`dragend` — After releasing, cleanup**
   - This fires whether the drop succeeded or not (useful for knowing if you should undo a visual change)
   - You remove any temporary highlights or faded appearances

**The internal state machine:**

The browser is constantly tracking:
- Is a drag currently happening? (true after `dragstart`, false after `drop`/`dragend`)
- What data is attached to this drag? (lives in `dataTransfer`)
- Which element is currently under the mouse? (fires `dragover` on it)

**The critical thing about `preventDefault()`:**

Normally, if you drag an image onto the page, the browser's default behavior is "open this image." You don't want that. So in `dragover`, you call `preventDefault()` to say "I'm taking over, don't do your default thing." This is the *only way* to tell the browser that `drop` is allowed — without calling `preventDefault()` in `dragover`, the `drop` event will never fire, period.

**How the data travels:**

```
dragstart → "I'm dragging item #5" → store it in dataTransfer
dragover → (just deciding if drop is allowed, not touching data)
drop → retrieve "item #5" from dataTransfer → move it
```

The `dataTransfer` object only exists during these drag events. It's like a temporary envelope the browser provides, and once the drag ends, that envelope is thrown away.

**The minimal mental model you need:**

1. Something is draggable (user can press and hold)
2. When held, `dragstart` fires — you remember what's being dragged
3. As the mouse moves, `dragover` fires on every element it passes over
4. If an element allows drops, it calls `preventDefault()` to opt-in
5. When released over an opted-in element, `drop` fires — you move the item
6. Everything else is visual feedback (highlighting, showing cursors, etc.)

That's it. Everything you see in drag-drop libraries is just those five points wrapped in error-checking and animation.

**Write your own version when you're ready by following these steps in order:**
1. On `dragstart`: save what's being dragged (store it somewhere, or in `dataTransfer`)
2. On `dragover` (for each drop zone): call `preventDefault()` if this zone accepts drops
3. On `drop`: get the saved data, move the DOM element from its old parent to the new parent
4. Optionally, on `dragend`: clean up visual feedback

Does this mental model click? Want me to walk through a specific example next, or is this conceptual foundation solid enough for you to try building it?
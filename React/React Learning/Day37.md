# Day 37 — 8 August 2026

## React — State, Lists & Keys

Today I learned and experimented with React state and list rendering.

### Topics covered
- `useState()`
- State value and state setter
- How state causes React to render the component again
- Why changing a normal variable doesn't automatically update the UI
- State belongs to individual component copies
- `map()` for rendering lists
- `key` and component identity
- Why keys need to be unique and stable
- How incorrect/missing keys can cause state to appear attached to the wrong list item
- React Strict Mode causing render logic to run twice in development

### Experiments
- Renamed `count` and `setCount` to custom names to confirm those names are chosen by me.
- Tried changing `useState` itself and confirmed `useState` is React's actual function.
- Put a state setter directly inside the component and discovered the "Too many re-renders" error.
- Used console logs to observe components rendering again after state changes.
- Created independent state inside multiple `UserCard` components.
- Used duplicate keys intentionally and observed React's warning.
- Removed a list item and observed how state can move to the wrong item without proper keys.
- Added stable keys and observed that React can preserve the correct state with the correct user.

### Mental model
State:
> Information a component remembers that can change and cause the UI to update.

Key:
> A stable identity that helps React keep track of which list item is which when the list changes.

### Next
Build a Todo app in React and use state with an array of todo objects.
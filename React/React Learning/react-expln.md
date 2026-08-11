useState
↓
React remembers the current value

todos
↓
gives me the current state value
↓
think: "todos points to the current array"

setTodos(newValue)
↓
tell React:
"Use this new value as the current state"

IMPORTANT:
setTodos does NOT modify the old array.

Instead:

OLD ARRAY
[A, B]
   ↓
create NEW ARRAY
[A, B, C]
   ↓
setTodos(newArray)
   ↓
React remembers NEW ARRAY
   ↓
next render
   ↓
todos → [A, B, C]
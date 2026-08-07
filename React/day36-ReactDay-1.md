Absolutely. Here's your **Day 36** journal in the same style we've been maintaining.

---

# 📒 Full Stack Journey Journal

**Day:** 36
**Date:** 7 August 2026

---

# Topic Covered

## React Fundamentals

Today was focused on understanding **React through JavaScript reasoning** instead of memorizing syntax.

---

## 1. Components

Learned that:

* A React component is simply a **JavaScript function**.
* Components return JSX.
* Components can render other components.

Created multiple components:

* Header
* Main
* Footer

and rendered them inside the `App` component.

---

## 2. JSX

Understood that:

* JSX looks like HTML.
* JSX is actually JavaScript syntax.
* `class` becomes `className`.
* Components must return a single root element (or Fragment).

---

## 3. Reusable Components

Created a reusable component instead of repeating HTML.

Instead of:

```jsx
<header>...</header>
<header>...</header>
<header>...</header>
```

Used:

```jsx
<Header />
<Header />
<Header />
```

Realized React simply calls the same component multiple times.

---

## 4. Props

Discovered props by comparing React with JavaScript functions.

JavaScript:

```javascript
function greet(name) {}
```

React:

```jsx
<Profile name="Raj" />
```

Understood that:

* Components receive data.
* React passes **one object**.
* That object is called `props`.

---

## 5. Objects

Realized props are normal JavaScript objects.

```javascript
props.name
props.age
props.city
```

Nothing magical.

Only object property access.

---

## 6. Destructuring

Connected React with JavaScript destructuring.

Instead of:

```jsx
props.name
props.age
```

Learned:

```jsx
function Profile({ name, age })
```

This is simply JavaScript object destructuring.

---

## 7. Building Reusable Cards

Started creating a reusable `UserCard` component.

Used props such as:

* name
* age
* city
* profession

instead of hardcoding values.

---

## 8. Logical Operators

Revised JavaScript operators through prediction.

### OR (`||`)

Discovered:

* Returns the first truthy value.
* If none are truthy, returns the last value.

Examples understood:

```javascript
name || "Guest"
```

Also learned where this can cause bugs.

---

### AND (`&&`)

Discovered:

* Returns the first falsy value.
* If everything is truthy, returns the last value.

Connected this directly to React conditional rendering.

Example:

```jsx
{isLoggedIn && <Dashboard />}
```

Now understood **why** this works.

---

## 9. Truthy & Falsy

Identified common falsy values through reasoning.

Learned that:

* `""`
* `0`
* `false`

can affect logical operators in unexpected ways.

---

## 10. Edge Case Thinking

Instead of asking:

> "Does this syntax work?"

Started asking:

> "What values are valid in this problem?"

Examples:

* Name → `||` is generally acceptable.
* Age → `||` is unsafe because `0` is valid.
* Salary → `||` is unsafe because `0` is valid.
* City → `||` is acceptable for fallback text.

This introduced thinking about **business logic** instead of only syntax.

---

# CSS Practice
 
Practiced:

* width
* margin
* padding
* border
* border-radius
* background-color

Reasoned about the difference between:

```css
width
```

and

```css
max-width
```

---

## Layout Thinking

Understood why:

```css
margin: 0 auto;
```

centers a fixed-width element.

Reasoned that the remaining width is divided equally between the left and right margins.

---

## Flexbox

Realized an important CSS concept:

**The parent controls the layout of its children.**

Therefore:

```css
display: flex;
```

belongs on the container, not on each child card.

---

# Biggest Mental Shift Today

Instead of asking:

> "What is the syntax?"

Started asking:

* What problem am I solving?
* What do I predict will happen?
* Why do I think that?
* Which JavaScript rule am I using?
* Who is responsible for this layout?

This led to solving React concepts through reasoning rather than memorization.

---

# React Topics Completed

* ✅ JSX
* ✅ Components
* ✅ Component Composition
* ✅ Props
* ✅ Props Object
* ✅ Object Destructuring
* ✅ Truthy/Falsy
* ✅ Logical Operators (`||`, `&&`)
* ✅ Conditional Rendering Basics

---

# Next Study Session (Day 37)

**Topic:** Rendering Lists

Problems to solve:

* Why can't we manually write hundreds of components?
* Arrays
* `map()`
* Rendering multiple components dynamically
* The purpose of `key`

---
 

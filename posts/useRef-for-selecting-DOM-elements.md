---
title: useRef for selecting DOM elements.
subtitle: using use ref to focus an input on page load
author: Sangye Tashi
tags:
  - useRef
  - React
  - Beginner
  - DOM
date: 2024-01-23
---
we have the following starter file containing in input with query and setQuery as its props : 
#### `SearchInput.jsx`
``` jsx

function SearchInput({ query, setQuery }) {
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        className="rounded-lg px-4 py-2 text-black"
      />
    </div>
  );
}

export default SearchInput;

```

## 1. Create a Ref with useRef.

- Import useRef from 'react'

```jsx
import { useRef } from "react";
```

- and initialize and assign the ref to a variable inside the top level of the component. Since we are referencing a DOM element , initialize the ref to null.

```jsx
const inputRef = useRef(null);
```

## 2. Attach the ref to an element.

link the input element to the ref by passing the ref the to ref attribute of the input.

```jsx
	<input
		type="text"
		value={query}
		onChange={(e) => setQuery(e.target.value)}
		placeholder="Search"
		className="rounded-lg px-4 py-2 text-black"
		ref={inputRef}
	/>
```

## 3. Define effects inside an useEffect block.

Since the ref attribute of the input element only exists after the initial render of the component, we need to use useEffect hook to access the element. this is possible as the useEffect is run after every render( i.e the actual DOM render, not Virtual DOM).
Since we don't have any dependency and need the effect to run after the initial render, pass an empty array as the dependency array.

```jsx
useEffect(()=>{
	inputRef.current.focus();
},[])
```

- the current property of the inputRef is the DOM element.

## The final code should look like this.
#### `SearchInput.jsx`

```jsx
import { useRef } from "react";

function SearchInput({ query, setQuery }) {

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        className="rounded-lg px-4 py-2 text-black"
      />
    </div>
  );
}

export default SearchInput;
```

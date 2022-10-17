# Login-App

This is a login app built with React.js. Users can enter first name, last name, and email address. When they are entering the data, alert while changing at the same time.

## Update gh-pages
```
yarn build
```
or

```
npm run build
```

then

```
yarn deploy
```
or
```
npm run deploy
```

## React useState
- allow us to track state(property) in a function
- First need to import useState 
```javascript
import React, { useState } from "react";
```
- initialize useState
`cost[current state, function to update state] = useState(initial value of state)`
```javascript
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
 ```
- When user input change, set the new data by using `setContact`
```javascript
  function handleChange(event) {
    const { name, value } = event.target;

    setContact((preValue) => {
      return {
        // spread operator(...) : allows us to copy existing array/object into another array/object
        ...preValue,
        [name]: value
      };
    });
  }
 ```
## Change the title with user input
### onChange event
- When value changed, call the function `handleChange`.
```
onChange={handleChange}
// when value in html change event(handleChange) occur
```
```javascript
  function handleChange(event) {
    const { name, value } = event.target;

    setContact((preValue) => {
      return {
        // spread operator(...) : allows us to copy existing array/object into another array/object
        ...preValue,
        [name]: value
      };
    });
  }
```

## Change button color when mouse over button and mouse out of button
### onMouseOver/ onMouseOut event
- When mouse over button and moust out of button, call the `event handling function`.
- when isMouse is true, set the background with black, otherwise set the background with white.
```javascript
        <button
          style={{ background: isMouseOver ? "black" : "white" }}
          // html dom event: onMouseOver, onMouseOut
          // event handling: allows javascript handle html event
          onMouseOver={handleMouseOver} // handleMouseOver function will be executed when Mouse over
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
```
- Use `useState` to set the initial value with false
- if mouse over the button, set update state with true
- if mouse out of the button, set update state with false
```javascript
  const [isMouseOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }
```
## Reference
https://stackoverflow.com/questions/52022197/how-do-i-get-my-gh-pages-branch-to-update

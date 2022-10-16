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

## Change the title with user input
### onChange event
- When value changed, call the function `handleChange`.
```HTML
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
### onMouseOver/ onMouseOut event
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
```javascript

## Reference
https://stackoverflow.com/questions/52022197/how-do-i-get-my-gh-pages-branch-to-update

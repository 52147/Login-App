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
- Use onChange to change value when user input
```html
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

## Reference
https://stackoverflow.com/questions/52022197/how-do-i-get-my-gh-pages-branch-to-update

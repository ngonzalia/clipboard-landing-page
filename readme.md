# Frontend Mentor - Clipboard landing page solution

This is a solution to the [Clipboard landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/clipboard-landing-page-5cc9bccd6c4c91111378ecb9). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [My solution](https://www.frontendmentor.io/solutions/clipboard-landing-page-YZpDLdLTBT)
- Live Site URL: [Clipboard](https://clipboard-nachogonzalia.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- SASS - CSS preprocessor
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

```js
  // dinamic button generation with ternary operator
  return (
    <button
      className={`button-text center bold button ${isiOS(props.os) ? 'button--ios' : 'button--mac'}`}>
      Download for {props.os}
    </button>
  );
```

### Continued development

[Huddle landing page with alternating feature blocks](https://www.frontendmentor.io/challenges/huddle-landing-page-with-alternating-feature-blocks-5ca5f5981e82137ec91a5100)

## Author

- Frontend Mentor - [@nachogonzalia](https://www.frontendmentor.io/profile/nachogonzalia)
- CodePen - [@nachogonzalia](https://codepen.io/nachogonzalia)
- FreeCodeCamp - [@nachogonzalia](https://www.freecodecamp.org/nachogonzalia)

## Acknowledgments

[freeCodeCamp](https://www.freecodecamp.org/) made it possible for me to work with these technologies.
your [free course](https://www.youtube.com/watch?v=6Jfk8ic3KVk&t=25919s) on youtube helped me to understand the nature of this amazing js library

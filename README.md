# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Links

- Solution URL: [here](https://github.com/Sbodazo/Frontend-Mentor_Advice-Generator_App)
- Live Site URL: [here](https://sbodazo.github.io/Frontend-Mentor_Advice-Generator_App/src/)

## My process

### Built with

- CSS Grid
- Mobile-first workflow
- [Typescript](https://www.typescriptlang.org/)


### What I learned

In this project I forced myself to use Typescript for the code and Grid for the style. Using them was surely fun in the small scope of this project, I just hope I didn't over-complicate things. I guess I'll learn along the way, when I will become confident enough.

A small animation for the dice when you click it:
```css
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  5% {
    transform: rotate(-10deg);
  }
  20% {
    transform: rotate(-60deg);
  }
  70% {
    transform: rotate(400deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

### Continued development

I surely want to improve myself with CSS Grid. It surely is a powerful layout tool that can help a lot with responsive layouts. I know I can also improve in more standard CSS properties and best-practices.

Another source of improvement is Typescript: I know it's widely use and that can be really useful in much bigger projects. I know that in these types of projects it's definitely overkill, but learning it in small chunks can help me better understand the overall structure and concepts.

## Author

- Frontend Mentor - [@Sbodazo](https://www.frontendmentor.io/profile/Sbodazo)

## Acknowledgments

As always, my motivation: Patpnzina 🦆


/*******************
 * OUR HELPER CODE *
 *******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 *
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
const gridWidth = 10;
let isMouseDown = false;
let count = 0;
let color_selected = "color-2";
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector(".canvas");
  const div = document.createElement("div");
  div.className = "square color-5";
  canvas.appendChild(div);
  count++;
}

// TEST

// You probably should NOT do these in the order below.
// That is, you probably should NOT do all the queries,
// THEN all the functions,
// THEN all the wiring.

// Instead, it'll be easier if you go one action at a time!
// So, add a query for the palette colors.
// THEN add an event listener function for what happens when one is clicked.
// THEN wire those two together, so that when the palette elements are clicked,
// the function runs.
//
// And proceed from there to getting the squares working.
//

// ALSO.
// You do not have to follow the sections below. If you're doing your functions inline, it doesn't make a lot of sense to separate the event listener functions from their wiring!

/***********
 * QUERIES *
 ***********/

// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)

// Get the current brush HTML element
const brush = document.querySelector(".current-brush");

// Get the palette color HTML elements
const paletteColors = document.querySelectorAll(".palette-color");

// Get all squares
const squares = document.querySelectorAll(".square");

/****************************
 * EVENT LISTENER FUNCTIONS *
 ****************************/

// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.

// For each palette color
for (const each of paletteColors) {
  // When the palette color is clicked
  each.addEventListener("click", function (event) {
    const elementIsClicked = event.target;
    // Get the classes of the brush in an array
    paletteClicked(elementIsClicked.className.split(" ")[1]);
  });
}

// For each square
for (const each of squares) {
  // If user clicks down
  each.addEventListener("mousedown", (e) => {
    isMouseDown = true;
  });

  // If user clicks up
  each.addEventListener("mouseup", (e) => {
    if (isMouseDown === true) {
      isMouseDown = false;
    }
  });

  // Add a 'mouseenter' event listener
  // The mouseenter event is fired at an element when a mouse
  // is initially moved so that its hot spot is within the
  // element at which the event was fired.
  each.addEventListener("mouseenter", (e) => {
    // If user clicks down
    if (isMouseDown === true) {
      const elementIsClicked = e.target;
      gridClicked(elementIsClicked);
    }
  });

  function paletteClicked(color) {
    color_selected = color;
    brush.className = "current-brush " + color;
  }

  function gridClicked(element) {
    // Set the square's class to 'square ' + color
    element.className = "square " + color_selected;
  }
}

/**************************
 * WIRING IT ALL TOGETHER *
 **************************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.

// Mariam Barakat - mb10568
function setup() {
  createCanvas(600, 400);
}

function draw() {
  // Transparency creates a motion blur effect as the pink lines move.
  background(20, 0, 10, 30); 
  
  let spacing = 25; // The gap between each element
  
  // Nested loops to create the grid
  for (let x = spacing; x < width; x += spacing) {
    for (let y = spacing; y < height; y += spacing) {
      
      // Calculate the angle from each specific grid point to the mouse
      // atan2 returns the angle in radians
      let angle = atan2(mouseY - y, mouseX - x);
      
      // Calculate how far each point is from the cursor
      let d = dist(mouseX, mouseY, x, y);
      
      // Use the distance (d) to drive the visuals
      // Closer to mouse = brighter color and thicker lines
      let pinkIntensity = map(d, 0, 400, 225, 50);
      let weight = map(d, 0, 400, 5, 1);
      let lineLen = map(d, 0, 400, 35, 10);

      // Set styles
      stroke(255, pinkIntensity, 220); // RGB: Pink variations
      strokeWeight(weight);
      noFill();
      
      push(); // Start a local coordinate transformation
      translate(x, y); // Move the "0,0" point to the current grid intersection
      rotate(angle);   // Rotate the canvas to face the mouse
      
      // Draw the main interactive line
      line(-lineLen, 0, lineLen, 0);
      
      // Draw a small circle at the "head" of the line
      fill(255, pinkIntensity, 220, 150);
      noStroke();
      ellipse(lineLen, 0, 5, 5);
      
      pop(); // Restore the canvas for the next iteration of the loop
    }
  }
}
function setup() {
/* canvas size looks nice on iPhone in portrait mode */
	createCanvas(240, 470);
}

function draw() {
  /* having the background color drawn here rather than in `function setup()` 
  clears the text on every pass rather than placing the text on top of existing text */
  
  background('#ED245E')
  /* mouse coordinates (useful when creating shapes, comment out once shapes are all drawn) */
  textSize(14);
  fill(255);
  text('X: ' + Math.round(mouseX) + '     ' + ' Y: ' + Math.round(mouseY), 10, 14);
	
  /* Top Dice - Square */
	strokeWeight(3);
	stroke('black');
	fill(255);
	rect(20, 20, 200, 200);
	fill('blue');
  
  /* Top Dice - ONE */
  // ellipse(120, 120, 50, 50);

  // Top Dice - SIX 
  ellipse(56, 80 , 50, 50);
  ellipse(120, 80, 50, 50);
  ellipse(186, 80, 50, 50);
  ellipse(56, 155 , 50, 50);
  ellipse(120, 155, 50, 50);
  ellipse(186, 155, 50, 50);
  
  /* Bottom Dice - Square */
	fill(255);
	rect(20, 250, 200, 200);
	fill('blue');
	
  /* Bottom Dice - THREE */
  ellipse(70, 300, 50, 50);
  ellipse(120, 350, 50, 50);
  ellipse(170, 400, 50, 50);
}

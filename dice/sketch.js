function setup() {
	createCanvas(250, 475);
	background('#ED245E');
}

function draw() {
  
  // mouse coordinates (useful when creating shapes, comment out once shapes are all drawn)
  textSize(14);
  fill(255);
  text('X: ' + Math.round(mouseX) + ' Y: ' + Math.round(mouseY), 2, 10);
	
  /* Top Dice - Square */
	strokeWeight(3);
	stroke('black');
	fill(255);
	rect(20, 20, 200, 200);
	fill('blue');
  
  /* Top Dice - ONE */
  /* ellipse(120, 120, 50, 50);*/

   /* Top Dice - SIX */
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

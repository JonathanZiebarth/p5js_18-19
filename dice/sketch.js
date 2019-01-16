function setup() {
	createCanvas(windowWidth/2.4, windowHeight/1.1);
	background('#ED245E');
}

function draw() {
  textSize(14);
  fill(255);
  
  text('X: ' + Math.round(mouseX) + ' Y: ' + Math.round(mouseY), 2, 10);
	
  strokeWeight(3);
	stroke('black');
	fill(255);
	rect(20, 20, 200, 200);
	fill('blue');
  
	/* Roll a one for top dice */
  /* ellipse(120, 120, 50, 50);*/

  /* Roll a six for top dice */
  ellipse(56, 80 , 50, 50);
  ellipse(120, 80, 50, 50);
  ellipse(186, 80, 50, 50);
  ellipse(56, 155 , 50, 50);
  ellipse(120, 155, 50, 50);
  ellipse(186, 155, 50, 50);
  
	fill(255);
	rect(20, 250, 200, 200);
	fill('blue');
	
  /* Roll a three for bottom dice */
  ellipse(70, 300, 50, 50);
	ellipse(120, 350, 50, 50);
	ellipse(170, 400, 50, 50);
}

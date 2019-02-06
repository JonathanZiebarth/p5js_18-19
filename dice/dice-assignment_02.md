## Dice - Assignment #2  

- Declare variables for the **number** buttons (01-16, where `01` is  **TOP 1**, and `16` is **BOTTOM 6**) and set each variable to `false`. See example below:
  
```var isOverRectangle01 = false;```

The above code should be placed **before** the `function setup()`

---

- Write an **if statement** that defines the coordinates of the rectangular space of each of the **number buttons**. Should the mouse cross into this space, this will change the declaration for that particular button from `false` to `true`. The syntax for **Number 1 -TOP** is as follows:

``` 
  if (mouseX >= 228 && mouseX <= 228+58 && mouseY >= 20 && mouseY <= 20+30) 
  {
    isOverRectangle01 = true;
  } else {
    isOverRectangle01 = false;
  }
```
Do this for all variations of the **TOP** and **BOTTOM** dice.

The above code should be placed **after** the `function draw()` opening paragraph with the canvas background settings.

---

- Write an **if statement** that includes an **else if** that draws the dots inside the dice if the `isOverRectangle01 = true` condition (or that of any number) is met.

```
if(isOverRectangle01 == true)
  {
     fill('blue');
     ellipse(120, 120, 50, 50);
    
  }
   
 else if(isOverRectangle02 == true)
  {
     fill('blue');
     ellipse(70, 70, 50, 50);
     ellipse(170, 170, 50, 50);
  }
```
Do this for all variations of the **TOP** and **BOTTOM** dice.

The above code should be placed **after** the `Bottom Dice - Square` section that defines the bottom dice box.

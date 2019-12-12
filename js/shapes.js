window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
    document.getElementById("triangle").onclick = drawTriangle;
    document.getElementById("smile").onclick = drawFace;
    document.getElementById("pyramid").onclick = drawPyramid;
}

/*
 * Exercise 1.
 */

 const sayHello = function() {
   const drawing1 = document.getElementById('student-canvas-1');
   const output1 = drawing1.getContext('2d');

   output1.clearRect(0, 0, drawing1.width, drawing1.height);

     do {
       var message = window.prompt("Message: ")
       if (message == null) {
         break;
       }
       if (message.length > 50) {
         window.alert("Your message is too long. Keep it under 50 characters")
       }
     } while(message.length > 50)
     if (message != null) {
       output1.font = "48px sans-serif";
       output1.strokeText(message, 30, 70, 994);
     }
   };

 /*
  * Exercise 2.
  */

  const drawRectangle = function() {
    const drawing2 = document.getElementById('student-canvas-2');
    const output2 = drawing2.getContext('2d');
    output2.clearRect(0, 0, drawing2.width, drawing2.height);

    var width = 0;
    var height = 0;
    var xcoordinate = 0;
    var ycoordinate = 0;

    do {
      var width = window.prompt("Width: ")
      var height = window.prompt("Height: ")
      var xcoordinate = window.prompt("X: ")
      var ycoordinate = window.prompt("Y: ")

      if (width == null || height == null || xcoordinate == null || ycoordinate == null) {
        break;
      }

      if (width > 1024 || width < 1) {
        window.alert("Your width must be between 1 and 1024.")
      }

      else if (height > 512 || height < 1) {
        window.alert("Your height must be between 1 and 512.")
      }

      else if (xcoordinate < 1 || xcoordinate > 1024) {
        window.alert("Your x-coordinate must be between 1 and 1024.")
      }

      else if (ycoordinate < 1 || ycoordinate > 512) {
        window.alert("Your y-coordinate must be between 1 and 512.")
      }

      else if (isNaN(width) || isNaN(height) || isNaN(xcoordinate) || isNaN(ycoordinate)) {
        window.alert("One of your values is not a number.")
      }

      else if (Number(width) + Number(xcoordinate) > 1024 || Number(height) + Number(ycoordinate) > 512) {
        window.alert("Your rectangle won't fit on the canvas.")
      }

    } while (width > 1024 || width < 1 || height > 512 || height < 1 || xcoordinate < 1 || xcoordinate > 1024 || ycoordinate < 1 || ycoordinate > 512 || isNaN(width) || isNaN(height) || isNaN(xcoordinate) || isNaN(ycoordinate) || Number(width) + Number(xcoordinate) > 1024 || Number(height) + Number(ycoordinate) > 512)

    if (!(width == null) && !(height == null) && !(xcoordinate == null) && !(ycoordinate == null)) {
      output2.beginPath();
      output2.rect(xcoordinate, ycoordinate, width, height);
      output2.closePath();
      output2.stroke();
    }
  };

 /*
  * Exercise 3.
  */

  const drawColoredRectangle = function() {
    const drawing3 = document.getElementById('student-canvas-3');
    const output3 = drawing3.getContext('2d');
    output3.clearRect(0, 0, drawing3.width, drawing3.height);

    do {
      var color = (window.prompt("Color: "))
      if (color == null) {
        break;
      }

      color = String(color)
      var rectangleColor = color.toLowerCase()
      if (rectangleColor != "black" && rectangleColor != "blue" && rectangleColor != "green" && rectangleColor != "orange" && rectangleColor != "purple" && rectangleColor != "red" && rectangleColor != "yellow") {
        window.alert(color + " is not a supported color.")
      }

    } while (rectangleColor != "black" && rectangleColor != "blue" && rectangleColor != "green" && rectangleColor != "orange" && rectangleColor != "purple" && rectangleColor != "red" && rectangleColor != "yellow")

    if (color != null) {
      output3.fillStyle = rectangleColor;
      output3.fillRect(10, 10, 100, 50);
    }
  };

 /*
  * Exercise 4.
  */

    const drawTriangle = function() {
      const drawing4 = document.getElementById('student-canvas-4');
        const output4 = drawing4.getContext('2d');
        output4.clearRect(0, 0, drawing4.width, drawing4.height);

        do {
          var firstSide = Number(window.prompt("Side 1: "));
          var secondSide = Number(window.prompt("Side 2: "));
          var thirdSide = Number(window.prompt("Side 3: "));

          var height = Math.min(firstSide, secondSide, thirdSide)
          var hypotenuse = Math.max(firstSide, secondSide, thirdSide)
          var base = Math.sqrt(hypotenuse*hypotenuse - height*height)

          if (base == 0 && height == 0 && hypotenuse == 0) {
            break;
          }

          if (base*base + height*height != hypotenuse*hypotenuse || base == 0 || height == 0 || hypotenuse == 0  || firstSide+secondSide+thirdSide-hypotenuse-height != base) {
            window.alert("That's not a valid right triangle.")
          }
          else if (isNaN(firstSide) || isNaN(secondSide) || isNaN(thirdSide)) {
            window.alert("One of your sides is not a number.")
          }
          else if (base > 1024 || height > 512 || hypotenuse > 1310720) {
            window.alert("Your triangle won't fit on the canvas.")
          }
        }  while ((Math.floor(base)*Math.floor(base) + height*height != hypotenuse*hypotenuse) || isNaN(firstSide) || isNaN(secondSide) || isNaN(thirdSide) || base > 1024 || height > 512 || hypotenuse > 1144.8664 || base == 0 || height == 0 || hypotenuse == 0)

        if ((base*base + height*height == hypotenuse*hypotenuse) && (base < 1024 && height < 512 && hypotenuse < 1144.8664) && (base != 0 && height != 0 && hypotenuse != 0) && (base != null && height != null && hypotenuse != null)) {
          height = height + 25
          base = base + 25
          output4.beginPath();
          output4.moveTo(25, 25);
          output4.lineTo(25, height);
          output4.lineTo(base, height)
          output4.lineTo(25, 25)
          output4.stroke();
        };
      }

 /*
  * Exercise 5.
  */

  const drawFace = function() {
    const drawing5 = document.getElementById('student-canvas-5');
    const output5 = drawing5.getContext('2d');
    output5.clearRect(0, 0, drawing5.width, drawing5.height);

    do {
      var radius = window.prompt("Radius: ")
      if (radius == null) {
        break;
      }
      if (radius < 32) {
        window.alert("Your radius must be at least 32.")
      }
      else if (isNaN(radius)) {
        window.alert("Your radius is not a number.")
      }
      else if (radius > 256) {
        window.alert("Your smiley face won't fit on the canvas.")
      }
    } while (radius > 256 || isNaN(radius) || radius < 32)

    var radiusOfEyes = 0.15 * radius
    var radiusOfMouth = 0.7 * radius

    output5.beginPath();
    output5.arc(512, 256, radius, 0, 2 * Math.PI);
    output5.stroke();
    output5.closePath();
    output5.beginPath();
    output5.arc(512, 256, radiusOfMouth, 0, Math.PI);
    output5.stroke();
    output5.closePath();
    output5.beginPath();
    output5.arc(512 - (0.4 * radius), 256 - (0.4 * radius), radiusOfEyes, 0, (2 * Math.PI));
    output5.stroke();
    output5.closePath();
    output5.beginPath();
    output5.arc(512 + (0.4 * radius), 256 - (0.4* radius), radiusOfEyes, 0, (2 * Math.PI));
    output5.stroke();
    output5.closePath();
  };

 /*
  * Exercise 6 (extra credit).
  */

  const drawPyramid = function() {
    const drawing6 = document.getElementById('student-canvas-6');
    const output6 = drawing6.getContext('2d');
    output6.clearRect(0, 0, drawing6.width, drawing6.height);
    var distance = 0
    var height = 0
    var changingDistance = 0
    var changingHeight = 0
    var counter = 5
    var side;

    do {
        var side = window.prompt("Side: ")
        if (side == null) {
          break;
        }
        if (side < 1) {
          window.alert("Your block size must be at least 1.")
        }
        else if (side > 100) {
          window.alert("Your pyramid won't fit on the canvas")
        }
        else if (isNaN(side)) {
          window.alert("Your block size is not a number.")
        }
      } while (isNaN(side) || side > 100 || side < 1)
      distance = Number(distance);
      height = Number(height);
      side = Number(side);
      for (i = 5; i > 0; i--) {
      counter = i
      while(counter >= 1) {
        output6.beginPath();
        output6.rect(10 + distance, (502 - side) - height, side,  side);
        output6.stroke();
        output6.closePath();
        distance = distance + side
        counter--
      }
        changingDistance++
        distance = changingDistance * (1/2 * side)
        changingHeight++
        height = changingHeight * side
      }
    };

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

}

/*
 * Exercise 1.
 */

 const sayHello = function() {
   const drawing = document.getElementById('student-canvas-1');
   const output1 = drawing.getContext('2d');
   output1.clearRect(0, 0, drawing.width, drawing.height);

   let message = window.prompt("Message: ");
   while (message.length > 50){
     window.alert("Your message is too long. Please keep your message under 50 characters.");
     message = window.prompt("Message:")
   }
     output1.font = "48px sans-serif";
     output1.strokeText(message, 30, 70, 994);
 };


 /*
  * Exercise 2.
  */

 const drawRectangle = function() {
   const drawing2 = document.getElementById('student-canvas-2');
   const output2 = drawing2.getContext('2d');
   output2.clearRect(0, 0, drawing2.width, drawing2.height);

  var width = window.prompt("Width: ")
  var width = Number(width);
  var height = window.prompt("Height: ")
  var height = Number(height);
  var xcoordinate = window.prompt("X: ")
  var xcoordinate = Number(xcoordinate);
  var ycoordinate = window.prompt("Y: ")
  var ycoordinate = Number(ycoordinate);

    while ((width > 1024) || (width < 1) || (height > 512) || (height < 1) || (xcoordinate > 1024) || (xcoordinate < 1) || (ycoordinate > 512) || (ycoordinate < 1) || (Number.isNaN(width)) || (Number.isNaN(height)) || (Number.isNaN(xcoordinate)) || (Number.isNaN(ycoordinate)) || (xcoordinate + width > 1024) || (ycoordinate + width > 512)) {
    if (width > 1024 || width < 1) {
      alert("Your width must be between 1 and 1024.")
    }
    else if (height > 512 || height < 1) {
      alert("Your height must be between 1 and 512.")
    }
    else if (xcoordinate > 1024 || xcoordinate < 1) {
      alert("Your x-coordinate must be between 1 and 1024.")
    }
    else if (ycoordinate > 512 || ycoordinate < 1) {
      alert("Your y-coordinate must be between 1 and 512.")
    }
    else if (Number.isNaN(width) || Number.isNaN(height) || Number.isNaN(xcoordinate) || Number.isNaN(ycoordinate)) {
      alert("One of your values is not a number.")
    }
    else if (xcoordinate + width > 1024) {
      alert("Your rectangle won't fit on the canvas.")
    }
    else if (ycoordinate + height > 512) {
      alert("Your rectangle won't fit on the canvas.")
    }
    var width = window.prompt("Width: ")
    var width = Number(width);
    var height = window.prompt("Height: ")
    var height = Number(height);
    var xcoordinate = window.prompt("X: ")
    var xcoordinate = Number(xcoordinate);
    var ycoordinate = window.prompt("Y: ")
    var ycoordinate = Number(ycoordinate);
}


output2.strokeRect(xcoordinate, ycoordinate, width, height);
}

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
  // issue with code, mesage appears twice in 50, 1200, 36 scenario
  // issue with sides, should report same, but isn't


  const drawTriangle = function() {
    const drawing4 = document.getElementById('student-canvas-4');
    const output4 = drawing4.getContext('2d');
    output4.clearRect(0, 0, drawing4.width, drawing4.height);

      var height = Number(window.prompt("Side 1: "))
      var width = Number(window.prompt("Side 2: "))
      var hypotenuse = Number(window.prompt("Side 3: "))
      while (((height*height) + (width*width) != hypotenuse*hypotenuse) || isNaN(height) || isNaN(width) || isNaN(hypotenuse) || height > 512 || width > 1024 || hypotenuse > 1144.866804) {

        if ((height*height) + (width*width) != hypotenuse*hypotenuse) {
              alert("That's not a valid right triangle.")
          }
        else if (isNaN(height) || isNaN(width) || isNaN(hypotenuse)) {
              alert("One of your sides is not a number.")
          }
        else if (height > 512 || width > 1024 || hypotenuse > 1144.86684) {
              alert("Your triangle won't fit on the canvas.")
          }
          var height = window.prompt("Side 1: ")
          var height = Number(height);
          var width = window.prompt("Side 2: ")
          var width = Number(width);
          var hypotenuse = window.prompt("Side 3: ")
          var hypotenuse = Number(hypotenuse);
      }

    var height = Math.min(height, width, hypotenuse)
    var hypotenuse = Math.max(height, width, hypotenuse)
    var base = Math.sqrt(hypotenuse*hypotenuse - height*height)

    height = height + 25
    base = base + 25

    output4.beginPath();
    output4.moveTo(25, 25);
    output4.lineTo(25, height);
    output4.lineTo(base, height)
    output4.lineTo(25, 25)
    output4.stroke();
  };

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
        alert("Your radius must be at least 32.")
      }
      if (isNaN(radius)) {
        alert("Your radius is not a number.")
      }
      if (radius > 256) {
        alert("Your smiley face won't fit on the canvas.")
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

 };

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
}

/*
 * Exercise 1.
 */

 const sayHello = function() {
   const drawing = document.getElementById('student-canvas-1');
   const output1 = drawing.getContext('2d');
   output1.clearRect(0, 0, drawing.width, drawing.height);

   let message = window.prompt("Message:");
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

  var width = window.prompt("Width:")
  var width = Number(width);
  var height = window.prompt("Height:")
  var height = Number(height);
  var xcoordinate = window.prompt("X:")
  var xcoordinate = Number(xcoordinate);
  var ycoordinate = window.prompt("Y:")
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
    var width = window.prompt("Width:")
    var width = Number(width);
    var height = window.prompt("Height:")
    var height = Number(height);
    var xcoordinate = window.prompt("X:")
    var xcoordinate = Number(xcoordinate);
    var ycoordinate = window.prompt("Y:")
    var ycoordinate = Number(ycoordinate);
}


output2.strokeRect(xcoordinate, ycoordinate, width, height);
}

 /*
  * Exercise 3.
  */

 const drawColoredRectangle = function() {
     // write your exercise 3 code here
 };

 /*
  * Exercise 4.
  */

 const drawTriangle = function() {
     // write your exercise 4 code here
 };

 /*
  * Exercise 5.
  */

 const drawFace = function() {
     // write your exercise 4 code here
 };

 /*
  * Exercise 6 (extra credit).
  */

 const drawPyramid = function() {
     // write your exercise 5 code here
 };

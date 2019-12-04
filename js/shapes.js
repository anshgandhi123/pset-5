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
   let message = window.prompt("Message:");
   while (message.length > 50){
     window.alert("Your message is too long. Please keep your message under 50 characters.");
     message = window.prompt("Message:")
   }
     const drawing = document.getElementById('student-drawing-1');
     const output1 = drawing.getContext('2d');
     output1.font = '48px sans-serif';
     output1.clearRect(0, 0, drawing.width, drawing.height);
     output1.strokeText(message, 30, 70, 994);
 };

/*
 * Exercise 2.
 */

 const drawRectangle = function() {
     let width = window.prompt("Width:");
     let height = window.prompt("Height:");
     let xCoordinate = window.prompt("X:");
     let yCoordinate = window.prompt("Y:");

     while (width < 1 || width > 1024){
       window.alert("Your width must be between 1 and 1024.");
       width = window.prompt("Width:")
     }
     while (height < 1 || height > 512){
       window.alert("Your height must be between 1 and 512.");
       height = window.prompt("Width:")
     }
     while (xCoordinate < 1 || xCoordinate > 1024){
       window.alert("Your x-coordinate must be between 1 and 1024.");
       height = window.prompt("Width:")
     }
     while (yCoordinate < 1 || yCoordinate > 512){
       window.alert("Your y-coordinate must be between 1 and 512.");
       height = window.prompt("Width:")
     }

   };


}
    // write your exercise 2 code here

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

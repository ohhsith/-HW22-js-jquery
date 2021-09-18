// console.log("------#3")

// console.log("------#3.1")
$('.test').css("color", "red");
// // console.log("------#3.2")
$('h2.test').css("color", "red");
// console.log("------#3.3")
$('p+p').css("color", "red");
// console.log("------#3.4")
$('li.www + li').css("color", "red");
// console.log("------#3.5")
$('h2 i').css("color", "red");
// console.log("------#3.6")
$('h2 > i').css("color", "red");

// console.log("------#4.1")
$('h2:not(.test)').css("color", "red");
// console.log("------#4.2")
$(':header:not(.test)').css("color", "red");
// console.log("------#4.3")
$(':header + :header').css("color", "red");
// console.log("------#4.4")
$('.test:header + .test:header').css("color", "red");
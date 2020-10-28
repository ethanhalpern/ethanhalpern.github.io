function myFunction() {
  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("numb").value;

  // If x is Not a Number or less than one or greater than 10
  if (x==4310) {
    text = "Correct facebook.com";
  } else {
    text = "NO";
  }
  document.getElementById("demo").innerHTML = text;
}
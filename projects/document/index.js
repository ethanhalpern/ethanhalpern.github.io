function myFunction() {
  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("numb").value;

  // If x is Not a Number or less than one or greater than 10
  if (x==4130) {
    text = "Correct please enter bit.ly/mncgallery into a web browser on your computer";
  } else {
    text = "Correct please enter bit.ly/mncgallery into a web browser on your computer";
  }
  document.getElementById("demo").innerHTML = text;
}
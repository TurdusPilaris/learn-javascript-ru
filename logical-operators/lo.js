function getMessage(age) {
    // return age >= 14 && age <= 90;  hw1

   return age < 14 || age > 90;  //hw2

}

document.write(getMessage(20), "<br>");
document.write(getMessage(45), "<br>");
document.write(getMessage(14), "<br>");
document.write(getMessage(1000), "<br>");

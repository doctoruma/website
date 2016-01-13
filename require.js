// JavaScript Document
function valbutton(thisform) {
// place any other field validations that you require here
// validate myradiobuttons
myOption = -1;
for (i=thisform.g1.length-1; i > -1; i--) {
if (thisform.g1[i].checked) {
myOption = i; i = -1;
}
}
if (myOption == -1) {
alert("Please Select an Answer for Question 1");
return false;
}

myOption = -1;
for (i=thisform.g2.length-1; i > -1; i--) {
if (thisform.g2[i].checked) {
myOption = i; i = -1;
}
}
if (myOption == -1) {
alert("Please Select an Answer for Question 2");
return false;
}

myOption = -1;
for (i=thisform.g3.length-1; i > -1; i--) {
if (thisform.g3[i].checked) {
myOption = i; i = -1;
}
}
if (myOption == -1) {
alert("Please Select an Answer for Question 3");
return false;
}

myOption = -1;
for (i=thisform.g4.length-1; i > -1; i--) {
if (thisform.g4[i].checked) {
myOption = i; i = -1;
}
}
if (myOption == -1) {
alert("Please Select an Answer for Question 4");
return false;
}


myOption = -1;
for (i=thisform.g6.length-1; i > -1; i--) {
if (thisform.g6[i].checked) {
myOption = i; i = -1;
}
}
if (myOption == -1) {
alert("Please Select an Answer for Question 5");
return false;
}

myOption = -1;
for (i=thisform.g7.length-1; i > -1; i--) {
if (thisform.g7[i].checked) {
myOption = i; i = -1;
}
}
if (myOption == -1) {
alert("Please Select an Answer for Question 6");
return false;
}

myOption = -1;
for (i=thisform.g8.length-1; i > -1; i--) {
if (thisform.g8[i].checked) {
myOption = i; i = -1;
}
}
if (myOption == -1) {
alert("Please Select an Answer for Question 7");
return false;
}

myOption = -1;
for (i=thisform.g9.length-1; i > -1; i--) {
if (thisform.g9[i].checked) {
myOption = i; i = -1;
}
}
if (myOption == -1) {
alert("Please Select an Answer for Question 8");
return false;
}

myOption = -1;
for (i=thisform.g10.length-1; i > -1; i--) {
if (thisform.g10[i].checked) {
myOption = i; i = -1;
}
}
if (myOption == -1) {
alert("Please Select an Answer for Question 9");
return false;
}

myOption = -1;
for (i=thisform.g12.length-1; i > -1; i--) {
if (thisform.g12[i].checked) {
myOption = i; i = -1;
}
}
if (myOption == -1) {
alert("Please Select an Answer for Question 10");
return false;
}

myOption = -1;
for (i=thisform.g13.length-1; i > -1; i--) {
if (thisform.g13[i].checked) {
myOption = i; i = -1;
}
}
if (myOption == -1) {
alert("Please Select an Answer for Question 11");
return false;
}

alert("Thank you for your input, your opinion is valuable to us as we continue to provide you with the best service prossible.");


thisform.submit();
}

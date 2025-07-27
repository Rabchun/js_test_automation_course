const numb = 9;
if (typeof numb === "number" && numb % 2 == 0 &&  numb > 10) {
    console.log ("Number is even and greater than 10")
}
else
{ console.log ( "Number is odd and/or less than 10")};

for (let i = 1; i < numb; i++) {
    console.log(i);
}
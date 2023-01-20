//Function to validate the payment form
function validateForm() {
  //Get all the input elements from the form
  var cardNumber = document.getElementById("cardNumber").value;
  var expiryMonth = document.getElementById("expiryMonth").value;
  var expiryYear = document.getElementById("expiryYear").value;
  var cvv = document.getElementById("cvv").value;

  //Check if all the fields are filled in
  if (cardNumber == "" || expiryMonth == "" || expiryYear == "" || cvv == "") {
    alert("Please fill in all the fields!");
    return false; //Return false if any of the fields are empty
  }

  //Check if card number is valid
  if (isNaN(cardNumber) || cardNumber.length != 16) {
    //Check if card number is a number and has 16 digits
    alert("Please enter a valid card number!");
    return false; //Return false if card number is invalid
  }

  //Check if expiry month is valid
  if (isNaN(expiryMonth) || expiryMonth < 1 || expiryMonth > 12) {
    //Check if month is a number and between 1-12
    alert("Please enter a valid month!");
    return false; //Return false if month is invalid
  }

  //Check if expiry year is valid
  var currentYear = new Date().getFullYear(); //Get current year from system date

  if (
    isNaN(expiryYear) ||
    expiryYear < currentYear ||
    expiryYear > currentYear + 10
  ) {
    //Check if year is a number and between current year and 10 years from now
    alert("Please enter a valid year!");
    return false; //Return false if year is invalid
  }

  //Check CVV length and type of input entered for CVV field

  if (isNaN(cvv) || cvv.length != 3) {
    //Check that CVV is a number and has 3 digits only

    alert("Please enter a valid CVV!");
    return false; //Return false for invalid CVV value entered by user
  } else {
    return true; //Return true when all validation checks pass successfully!
  }
}

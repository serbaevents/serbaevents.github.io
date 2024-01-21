// import {constantObj} from './formConstants';
//

let userData = {};
let currentForm = 1;
userData.cart = [];
let bill = {};

//Basic Details Submision - Step1
const validateFormStep1 = (e) => {
  // userData storing, validation and calling animation

  // to focus the first empty field
  let toggle = false;
  for (let i = 0; i < e.target.length - 2; i++) {
    if (e.target[i].value == "" || e.target[i].value == " ") {
      if (!toggle) {
        toggle = true;
        e.target[i].focus();
      }
      e.target[i].setAttribute("data-error", "error");
    }
    userData[e.target[i].name] = e.target[i].value;
  }
  if (toggle) return false;
  nextPrevAnimation(1);
  sessionStorage.setItem("userData", JSON.stringify(userData));
};
//Password Change Submision - Step2
const validateFormStep2 = (e) => {
  // userData storing, validating and animation
  let toggle = false;
  for (let i = 0; i < e.target.length - 2; i++) {
    if (e.target[i].value == "" || e.target[i].value == " ") {
      if (!toggle) {
        toggle = true;
        e.target[i].focus();
      }
      e.target[i].setAttribute("data-error", "error");
    }
    userData[e.target[i].name] = e.target[i].value;
  }
  if (toggle) return false;
  if (!conPasswordValidate("currentPass", "conCurrentPass") || !conPasswordValidate("newPass", "conNewPass")) {
    alert("password should match");
    return false;
  }

  nextPrevAnimation(1);
  sessionStorage.setItem("userData", JSON.stringify(userData));
};
// Removing Required error styling
function emptyChecker(e) {
  e.target.removeAttribute("data-error");
}

//My Cart Submision - Step3
const validateFormStep3 = (e) => {
  userData.cart = [];
  for (let i = 0; i < e.target.length - 2; i++) {
    if (e.target[i].name == "itemName" && i != 0) {
      userData.cart.push(bill);
      bill = {};
    }
    e.target[i].value != "" && e.target[i].value != "-" && e.target[i].value != "+" ? (bill[e.target[i].name] = e.target[i].value) : eval("1+2");
  }
  userData.cart.push(bill);
  bill = {};
  sessionStorage.setItem("userData", JSON.stringify(userData));
};
//Cart Total Submision - Step4
const checkOut = () => {
  location.reload();
  let data =
    "\r User ID: " +
    userData.userId +
    " \r\n " +
    "First Name: " +
    userData.fname +
    " \r\n " +
    "Last Name: " +
    userData.lname +
    " \r\n " +
    "Email: " +
    userData.email +
    " \r\n " +
    "Phone Num: " +
    userData.phoneNum +
    "\r\n " +
    "Reference Code: " +
    userData.refCoder +
    "\r\n " +
    "Country: " +
    userData.country +
    " \r\n " +
    "State: " +
    userData.state +
    "\r\n " +
    "City: " +
    userData.city +
    "\r\n " +
    "Item1: Name-" +
    userData.cart[0].itemName +
    " | qty-" +
    userData.cart[0].quantity +
    " | price-" +
    userData.cart[0].totalPrice;

  const textToBLOB = new Blob([data], { type: "text/plain" });
  const sFileName = "formData.txt"; // The file to save the data.

  let newLink = document.createElement("a");
  newLink.download = sFileName;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  } else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }
  newLink.click();
};

//Step 4 Total Calculate
const calculateBill = () => {
  let userD = JSON.parse(sessionStorage.getItem("userData"));
  document.getElementById("subtotal").innerHTML = Number(userD.cart[0].totalPrice.slice(1)) + Number(userD.cart[1].totalPrice.slice(1));
};

//My Cart Quanitty Update
function quantityUpdate(num, buttonNumber, price) {
  if (num == -1 && Number(document.getElementsByClassName("quantity")[buttonNumber].value) == 1) {
    return false;
  }
  document.getElementsByClassName("quantity")[buttonNumber].value = Number(document.getElementsByClassName("quantity")[buttonNumber].value) + Number(num);
  document.getElementsByClassName("totalPrice")[buttonNumber].value = "IDR" + Number(document.getElementsByClassName("quantity")[buttonNumber].value) * Number(price);
}

// NextPrev Animation Function
function nextPrevAnimation(step, toShow) {
  if (currentForm == 4 && step == 1) {
    return false;
  }
  if (step == 1) {
    document.getElementById(`step${currentForm}`).style.animation = "fade-out 1s ease-in-out";
    document.getElementById(`step${currentForm}`).style.display = "none";
    document.getElementById(`step${currentForm}`).style.opacity = "0";
    document.getElementById(`step${currentForm}-img`).src = `images/step-${currentForm}.webp`;
    currentForm++;
    document.getElementById(`step${currentForm}`).style.animation = "fade-in 1s alternate";
    document.getElementById(`step${currentForm}`).style.display = "block";
    document.getElementById(`step${currentForm}`).style.opacity = "1";
    document.getElementById(`step${currentForm}-img`).src = `images/h-step-${currentForm}.webp`;
  } else if (step == 99) {
    document.getElementById(`step${currentForm}`).style.animation = "fade-out 1s ease-in-out";
    document.getElementById(`step${currentForm}`).style.display = "none";
    document.getElementById(`step${currentForm}`).style.opacity = "0";
    document.getElementById(`step${currentForm}-img`).src = `images/step-${currentForm}.webp`;
    currentForm = toShow;
    document.getElementById(`step${toShow}`).style.animation = "fade-in 1s alternate";
    document.getElementById(`step${toShow}`).style.display = "block";
    document.getElementById(`step${toShow}`).style.opacity = "1";
    document.getElementById(`step${toShow}-img`).src = `images/h-step-${currentForm}.webp`;
  } else {
    document.getElementById(`step${currentForm}`).style.animation = "fade-out 1s alternate";
    document.getElementById(`step${currentForm}`).style.display = "none";
    document.getElementById(`step${currentForm}`).style.opacity = "0";
    document.getElementById(`step${currentForm}-img`).src = `images/step-${currentForm}.webp`;
    currentForm--;
    document.getElementById(`step${currentForm}`).style.animation = "fade-in 1s alternate";
    document.getElementById(`step${currentForm}`).style.display = "block";
    document.getElementById(`step${currentForm}`).style.opacity = "1";
    document.getElementById(`step${currentForm}-img`).src = `images/h-step-${currentForm}.webp`;
  }
}

// Show Password Function
const showPassword = (e, elmID) => {
  const elm = document.getElementById(elmID);
  elm.type == "password" ? (elm.type = "text") : (elm.type = "password");
};
// Confirm Password Checker
function conPasswordValidate(password, conPassword) {
  console.log(document.getElementById(password).value, document.getElementById(conPassword).value);
  if (document.getElementById(password).value !== document.getElementById(conPassword).value) {
    document.getElementById(conPassword).setAttribute("data-error", "error");
    return false;
  } else if (document.getElementById(password).value == document.getElementById(conPassword).value) {
    document.getElementById(conPassword).removeAttribute("data-error");
    return true;
  }
}

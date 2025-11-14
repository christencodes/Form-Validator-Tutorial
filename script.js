"use strict";

//get form
const form = document.getElementById("form");

//get inputs
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//get submit button
const submit = form.querySelector('button[type="submit"]');

//function that handles email validation

function isEmailValid(email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase());
}
//show error - remove success
function showError(element) {
  element.parentElement.classList.remove("success");
  element.parentElement.classList.add("error");
  element.parentElement.querySelector(
    "small"
  ).textContent = `${element.id} is not valid`;
}

//show success - remove error
function showSuccess(element) {
  element.parentElement.classList.remove("error");
  element.parentElement.classList.add("success");
}
//create a function that handles all fields
//adds appropriate classes etc.

const inputCheck = function (inputArray) {
  //iterate over array and gather values
  inputArray.forEach((element) => {
    switch (true) {
      case element.id == "email":
        isEmailValid(element.value) ? showSuccess(element) : showError(element);
        break;
      case element.id == "username":
      case element.id == "password":
        element.value.trim() != "" ? showSuccess(element) : showError(element);
        break;
      case element.id == "password2":
        element.value.trim() === password.value && password.value.trim() != ""
          ? showSuccess(element)
          : showError(element);
      default:
        console.log("How did you get to this?");
        break;
    }
  });
};

//attach event listener to button
submit.addEventListener("click", (e) => {
  //prevent reload onclick
  e.preventDefault();
  inputCheck([username, email, password, password2]);
  //check username
});

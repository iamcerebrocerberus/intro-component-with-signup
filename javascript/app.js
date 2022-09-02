import emailValidator from "./emailValidate.js";

const inputs = Array.from(document.querySelectorAll("input"));
const form = document.querySelector("form");
const errorIcons = Array.from(document.querySelectorAll("label img"));
const email = document.querySelector("input[name='Email']");

function errorMessage(event) {
  event.preventDefault();

  let errorText;
  inputs.forEach(function (field) {
    if (
      field.value === null ||
      field.value === undefined ||
      field.value === ""
    ) {
      field.classList.add("input-error");

      errorText = `${field.getAttribute("name")} cannot be empty`;

      field.parentElement.nextElementSibling.classList.add("error-text");
      field.parentElement.nextElementSibling.innerText = errorText;

      errorIcons.forEach(function (icon) {
        if (icon.parentElement === field.parentElement) {
          icon.classList.add("show-error-icon");
        }
      });
    } else {
      field.parentElement.nextElementSibling.innerText = "";
      field.classList.remove("input-error");

      errorIcons.forEach(function (icon) {
        if (icon.parentElement === field.parentElement) {
          icon.classList.remove("show-error-icon");
        }
      });
    }
    if (field.getAttribute("name") === "Email") {
      if (email.value.length > 0 && !emailValidator(email.value)) {
        errorText = "Looks like this is not an email";
        field.parentElement.nextElementSibling.innerText = errorText;
        field.parentElement.nextElementSibling.classList.add("error-text");
        field.classList.add("input-error");
        errorIcons[2].classList.add("show-error-icon");
      }
    }
  });
}

form.addEventListener("submit", errorMessage);

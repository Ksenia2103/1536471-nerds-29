const feedbackLink = document.querySelector(".feedback");
const feedbackWindow = document.querySelector(".modal-feedback");
const close = feedbackWindow.querySelector(".modal-close");
const feedbackForm = feedbackWindow.querySelector(".feedback-form");

const login = feedbackWindow.querySelector("[name=name]");
const email = feedbackWindow.querySelector("[name=email]");
const text = feedbackWindow.querySelector("[name=text]");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
  storage = localStorage.getItem("email");
  storage = localStorage.getItem("text")
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackWindow.classList.add("modal-show");
  login.focus();

  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackWindow.classList.remove("modal-show");
  feedbackWindow.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!login.value || !email.value || !text.value) {
    evt.preventDefault();
    feedbackWindow.classList.remove("modal-error");
    feedbackWindow.offsetWidth = feedbackWindow.offsetWidth;
    feedbackWindow.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
      localStorage.setItem("email", email.value);
      localStorage.setItem("text", text.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackWindow.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackWindow.classList.remove("modal-show");
      feedbackWindow.classList.remove("modal-error");
    }
  }
});



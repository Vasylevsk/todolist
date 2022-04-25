const addBtnEl = document.getElementById("addBtn");
const listEl = document.getElementById("list");
const inputEl = document.getElementById("input");
const errorEl = document.getElementById("error");

let error = null;

addBtnEl.addEventListener("click", onAddBtnClick);
inputEl.addEventListener("input", onValInput);

function onAddBtnClick() {
  if (!error) addToList();
  clearInput();
}

function addToList() {
  const input = getValueInput();
  const el = document.createElement("li");
  el.textContent = input;
  listEl.append(el);
  el.addEventListener("click", () => el.classList.toggle("active"));
}

function onValInput() {
  const input = getValueInput();
  const error = validInput(input);
  if (error) {
    showError(error);
    invalidInput();
  } else {
    clearError();
    validClassInput();
  }
}

function getValueInput() {
  return inputEl.value;
}

function validInput(val) {
  if (val === "") return "Enter word";
  if (val.length < 4) return "The word must have more than 3 letters";
  return null;
}

function showError(err) {
  errorEl.textContent = err;
  error = err;
}

function clearError() {
  errorEl.textContent = "";
  error = null;
}

function clearInput() {
  inputEl.value = "";
}

function invalidInput() {
  inputEl.classList.add("invalid");
  addBtnEl.classList.add("invalid");
}

function validClassInput() {
  inputEl.classList.remove("invalid");
  addBtnEl.classList.remove("invalid");
}

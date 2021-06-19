const firstClassInput = document.getElementById("firstClassInput");
const economyClassInput = document.getElementById("economyClass");
const subtotal = document.getElementById("subtotal");
const vat = document.getElementById("vat");
const total = document.getElementById("total");

let subTotalInitValue = 0;

// Event listener 
function firstClassIncreaseTicket() {
  const toNum = parseInt(firstClassInput.value);
  firstClassInput.value = toNum + 1;
  subTotalInitValue += 1 * 150;
  subtotal.textContent = subTotalInitValue;
  totalVatCount()
}

function firstClassDecreaseTicket() {
  const toNum = parseInt(firstClassInput.value);
  if (toNum === 0) {
    firstClassInput.value = 0;
  } else {
    firstClassInput.value = toNum - 1;
    subTotalInitValue = subTotalInitValue - 150;
    subtotal.textContent = subTotalInitValue;
    totalVatCount()
  }
}

function economyClassIncreaseTicket() {
  const toNum = parseInt(economyClassInput.value);
  economyClassInput.value = toNum + 1;
  subTotalInitValue += 1 * 100;
  subtotal.textContent = subTotalInitValue;
  totalVatCount()
}

function economyClassDecreaseTicket() {
  const toNum = parseInt(economyClassInput.value);
  if (toNum === 0) {
    economyClassInput.value = 0;
  } else {
    economyClassInput.value = toNum - 1;
    subTotalInitValue = subTotalInitValue - 100;
    subtotal.textContent = subTotalInitValue;
    totalVatCount()
  }
}

function totalVatCount() {
  const totalVat = subTotalInitValue / 10;
  vat.textContent = totalVat;
  total.textContent = subTotalInitValue + totalVat;
}

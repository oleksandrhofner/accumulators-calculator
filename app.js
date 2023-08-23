// const of inputs
const wattage = document.querySelector("input.wattage-input");
const hour = document.querySelector("input.hour-input");
const voltage = document.querySelector("input.voltage-input");
const capacityFactor = document.querySelector("input.capacityFactor-input");

// const of results
const resultCapacityText = document.querySelector("h5.resultCapacityText");

// const button
const btnCapacity = document.querySelector("button.btn-capacity");

btnCapacity.addEventListener("click", findCapacity);

// consts of radiobuttons
const radbtn1 = document.querySelector("#flexRadioDefault1");
const radbtn2 = document.querySelector("#flexRadioDefault2");
const radbtn3 = document.querySelector("#flexRadioDefault3");
const radbtn4 = document.querySelector("#flexRadioDefault4");
const radbtn5 = document.querySelector("#flexRadioDefault5");

if (radbtn1.checked) {
  capacityFactor.value = "0.8";
}

// function to find capacity
function findCapacity(){
  let w = wattage.value;
  let h = hour.value;
  let v = voltage.value;
  let k = capacityFactor.value;
  if (typeof w !== "number" && typeof h !== "number" && typeof v !== "number" && typeof k !== "number") {
    resultCapacityText.innerHTML = "Неправильні дані";
    resultCapacityText.style.color = "red";
    wattage.value = "";
    hour.value = "";
    voltage.value = "";
    capacityFactor.value = "";
    wattage.focus();
    setTimeout(()=>{resultCapacityText.innerHTML= "";},4000);
  } else {
    const capacityOfAccumulator = Math.ceil(Number((w * h) / (v * k)));
    console.log("Ah:", Math.ceil(capacityOfAccumulator));
    resultCapacityText.innerHTML = `Необхідна ємність акумулятора: ${capacityOfAccumulator} Ah.`;
  }
}




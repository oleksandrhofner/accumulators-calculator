// const of inputs
const wattage = document.querySelector("input.wattage-input");
const hour = document.querySelector("input.hour-input");
const voltage = document.querySelector("input.voltage-input");
const capacityFactor = document.querySelector("input.capacityFactor-input");
const resultCapacityText = document.querySelector("h5.resultCapacityText");
const btnCapacity = document.querySelector("button.btn-capacity");

btnCapacity.addEventListener("click", findCapacity);

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




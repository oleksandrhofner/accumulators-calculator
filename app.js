// const of inputs
const wattage = document.querySelector("input.wattage-input");
const hour = document.querySelector("input.hour-input");
const voltage = document.querySelector("input.voltage-input");
const capacityFactor = document.querySelector("input.capacityFactor-input");

// function to find capacity
const btnCapacity = document.querySelector("button.btn-capacity");
btnCapacity.addEventListener("click", () => {
  let w = wattage.value;
  let h = hour.value;
  let v = voltage.value;
  let k = capacityFactor.value;
  const capacityOfAccumulator = Number((w * h) / (v * k));
  console.log("Ah:", Math.ceil(capacityOfAccumulator));
});

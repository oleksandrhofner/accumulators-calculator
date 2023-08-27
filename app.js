// section CAPACITY
// const of inputs
const wattage = document.querySelector("input.wattage-input");
const hour = document.querySelector("input.hour-input");
const voltage = document.querySelector("input.voltage-input");
const capacityFactor = document.querySelector("input.capacityFactor-input");

// const of results
const resultCapacityText = document.querySelector("h5.resultCapacityText");

// const button
const btnCapacity = document.querySelector("button.btn-capacity");
const hourClick = document.querySelector("input.hour-input");
btnCapacity.addEventListener("click", findCapacity);

// consts of radiobuttons
const radbtn1 = document.querySelector("#flexRadioDefault1");
const radbtn2 = document.querySelector("#flexRadioDefault2");
const radbtn3 = document.querySelector("#flexRadioDefault3");
const radbtn4 = document.querySelector("#flexRadioDefault4");
const radbtn5 = document.querySelector("#flexRadioDefault5");

radbtn1.addEventListener("click", () => {
  capacityFactor.value = "0.8";
});

radbtn2.addEventListener("click", () => {
  capacityFactor.value = "0.8";
});

radbtn3.addEventListener("click", () => {
  capacityFactor.value = "0.85";
});

radbtn4.addEventListener("click", () => {
  capacityFactor.value = "0.95";
});

radbtn5.addEventListener("click", () => {
  capacityFactor.value = "0.99";
});

// function to find capacity
function findCapacity() {
  if (
    wattage.value == "" ||
    hour.value == "" ||
    voltage.value == "" ||
    capacityFactor.value == ""
  ) {
    resultCapacityText.innerHTML = "Неправильні дані";
    resultCapacityText.style.color = "red";
    wattage.value = "";
    hour.value = "";
    voltage.value = "";
    capacityFactor.value = "";
    wattage.focus();
    setTimeout(() => {
      resultCapacityText.innerHTML = "";
    }, 4000);
  } else {
    const capacityOfAccumulator = Math.ceil(
      Number(
        (wattage.value * hour.value) / (voltage.value * capacityFactor.value)
      )
    );

    if (isNaN(capacityOfAccumulator)) {
      resultCapacityText.style.color = "red";
      resultCapacityText.innerHTML = "Введено помилкові дані";
    } else {
      console.log("Ah:", capacityOfAccumulator);
      resultCapacityText.innerHTML = `Необхідна ємність акумулятора: ${capacityOfAccumulator} Ah.`;
    }
  }
  hourClick.addEventListener("click", () => {
    const capacityOfAccumulator = Math.ceil(
      Number(
        (wattage.value * hour.value) / (voltage.value * capacityFactor.value)
      )
    );
    console.log("Ah:", capacityOfAccumulator);
    resultCapacityText.innerHTML = `Необхідна ємність акумулятора: ${capacityOfAccumulator} Ah.`;
  });
}

// button that opens and closing calculators tab
const btnCalculatorCapacity = document.querySelector(
  "button.btn-calculator-capacity"
);
const btnCalculatorCycle = document.querySelector(
  "button.btn-calculator-cycle"
);

const calculatorSection = document.querySelector("section.calculator-section");
const cycleSection = document.querySelector("section.cycle-section");
btnCalculatorCapacity.addEventListener("click", () => {
  calculatorSection.style.display = "block";
  cycleSection.style.display = "none";
});

btnCalculatorCycle.addEventListener("click", () => {
  calculatorSection.style.display = "none";
  cycleSection.style.display = "block";
  // alert("Увага повний цикл зарядки рахується від 20% залишку ємності до повного заряджання акумулятора");
});

const btnClear = document.querySelector("button.btn-clear");
btnClear.addEventListener("click", () => {
  wattage.value = "";
  hour.value = "";
  voltage.value = "";
  capacityFactor.value = "";
  resultCapacityText.innerHTML = "";
});

// section CYCLE

// consts of radiobuttons
const radbtn6 = document.querySelector("#flexRadioDefault6");
const radbtn7 = document.querySelector("#flexRadioDefault7");
const radbtn8 = document.querySelector("#flexRadioDefault8");
const radbtn9 = document.querySelector("#flexRadioDefault9");
const radbtn10 = document.querySelector("#flexRadioDefault10");

const chargeDay = document.querySelector(".charge-day-input");
const dayAmount = document.querySelector(".day-input");
const btnCycle = document.querySelector(".btn-cycle");
const btnClearCycle = document.querySelector(".btn-clear");
const resultCycleText = document.querySelector("h5.resultCycleText");

btnCycle.addEventListener("click", remainingCycle);

function remainingCycle() {
  const usedCycle = chargeDay.value * dayAmount.value;
  let fullCycle = 0;
  let countCycle = 0;
  if (radbtn6.checked) {
    fullCycle = 1400;
    countCycle = fullCycle - usedCycle;
  } else if (radbtn7.checked) {
    fullCycle = 800;
    countCycle = fullCycle - usedCycle;
  } else if (radbtn8.checked) {
    fullCycle = 1200;
    countCycle = fullCycle - usedCycle;
  } else if (radbtn9.checked) {
    fullCycle = 5000;
    countCycle = fullCycle - usedCycle;
  } else if (radbtn10.checked) {
    fullCycle = 10000;
    countCycle = fullCycle - usedCycle;
  }
  console.log("countCycle", countCycle);
  resultCycleText.innerHTML = `Приблизна кількість залишку циклів зарядки для акумулятора становить ${'\&#8776'} ${countCycle}`;
  resultCycleText.style.textAlign = "center";
}

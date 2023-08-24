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

radbtn1.addEventListener("click", ()=>{
    capacityFactor.value = "0.5";
});

radbtn2.addEventListener("click", ()=>{
  capacityFactor.value = "0.8";
});

radbtn3.addEventListener("click", ()=>{
  capacityFactor.value = "0.8";
});

radbtn4.addEventListener("click", ()=>{
  capacityFactor.value = "0.8";
});

radbtn5.addEventListener("click", ()=>{
  capacityFactor.value = "1";
})

// function to find capacity
function findCapacity(){
  
  if (wattage.value == "" || hour.value == "" || voltage.value == "" || capacityFactor.value == "") {
    resultCapacityText.innerHTML = "Неправильні дані";
    resultCapacityText.style.color = "red";
    wattage.value = "";
    hour.value = "";
    voltage.value = "";
    capacityFactor.value = "";
    wattage.focus();
    setTimeout(()=>{resultCapacityText.innerHTML= "";},4000);
  } else {
    const capacityOfAccumulator = Math.ceil(Number((wattage * hour) / (voltage * capacityFactor)));
    if (isNaN(capacityOfAccumulator)) {
      resultCapacityText.style.color = "red";
      resultCapacityText.innerHTML = "Введено помилкові дані";
    } else {
      console.log("Ah:", Math.ceil(capacityOfAccumulator));
      resultCapacityText.innerHTML = `Необхідна ємність акумулятора: ${capacityOfAccumulator} Ah.`;
    }
  }
    
   

}




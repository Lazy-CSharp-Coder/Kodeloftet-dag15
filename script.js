// H = henter noe
const submitButton = document.querySelector("#submitButton");
console.log(submitButton);

// M = Modifiserer noe
function gatherData() 
{
  console.log("Button click - vi er her!!");

  // H = Hente elementer

    const greetingInput = document.querySelector("#greetingInput");
    const greetingInputValue = greetingInput.value; 
    
    const numberInput = document.querySelector("#numberInput");
    const emailInput = document.querySelector("#emailInput").value;

    console.log(greetingInput);
    console.log(greetingInputValue);
    console.log(numberInput);

    const displayFormInputs = document.querySelector("#displayFormInputs");
    const displayNumberInput = document.querySelector("#displayNumberInput");
    const displayAllInput = document.querySelector("#diplayAllInput");
  
  // Create elements
  const displayGreeting = document.createElement("p");


  // M = Modifisere elementer

    displayFormInputs.textContent = greetingInputValue;
    displayNumberInput.textContent = numberInput.value;
    displayAllInput.textContent = `${greetingInputValue} ${numberInput.value} ${emailInput}`;
    displayGreeting.textContent = greetingInpuValue;
    displayFormInputs.appendChild(displayGreeting);
   

  // S = Sende elementer

}

// Send = sender noe

submitButton.addEventListener("click", gatherData);

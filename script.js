// H = henter noe
const submitButton = document.querySelector("#submitButton");
console.log(submitButton);

// M = Modifiserer noe
function gatherData() 
{
  console.log("Button click - vi er her!!");

  // H = Hente elementer

    const greetingInput = document.querySelector("#greetingInput");
    const nubmerInput = document.querySelector("#numberInput");
    const greetingInputValue = greetingInput.value;
    const numberInputValue = nubmerInput.value;
    
    console.log(greetingInput);
    console.log(greetingInputValue);

    const displayFormInputs = document.querySelector("#displayFormInputs");
    const displayNumberInput = document.querySelector("#numberInput");
    const displayEmailInput = document.querySelector("#emailInput");
  
  // M = Modifisere elementer

    displayFormInputs.textContent = greetingInputValue;
    displayNumberInput.textContent = numberInputValue;
   

  // S = Sende elementer

}

// Send = sender noe

submitButton.addEventListener("click", gatherData);

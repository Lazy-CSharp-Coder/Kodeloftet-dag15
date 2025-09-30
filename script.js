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
    console.log(greetingInput);
    console.log(greetingInputValue);

    const displayFormInputs = document.querySelector("#displayFormInputs");
  
  // M = Modifisere elementer

    displayFormInputs.textContent = greetingInputValue;
   

  // S = Sende elementer

}

// Send = sender noe

submitButton.addEventListener("click", gatherData);

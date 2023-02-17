
// get the generate pin 
function getGeneratePin(){
    const generatePin = Math.round(Math.random()*10000);
    const generatePinString = generatePin.toString();
    return generatePinString;
    
}


// generate pin event and show pin
document.getElementById('pin-generate-btn').addEventListener('click', function(){
    const generatePinString = getGeneratePin();

    if(generatePinString.length === 4){
        
        const generatePinDisplay = document.getElementById('generate-pin-display');
        generatePinDisplay.value = generatePinString;

    }else{
        getGeneratePin();
    }
});


// showing calculate pin

document.getElementById('number-area').addEventListener('click', function(event){
    const getCalNumber = event.target.innerText;
    const calculateDisplay = document.getElementById('calculate-display');
    const prevDisplayValue = calculateDisplay.value;
    
    const newTypeNumber = prevDisplayValue + getCalNumber;
    calculateDisplay.value = newTypeNumber;

})


// matching generate pin and calculate pin

document.getElementById('calculate-submit-btn').addEventListener('click', function(){

    const calculateDisplay = document.getElementById('calculate-display');
    const calDisplayValue = calculateDisplay.value;

    
    const generatePin = document.getElementById('generate-pin-display');
    const getGeneratePin = generatePin.value;


    const successMessage = document.getElementById('success-message');
    const failureMessage = document.getElementById('failure-message');
    if(calDisplayValue === getGeneratePin){
        failureMessage.style.display = 'none';
        successMessage.style.display = 'block';
    }else{
        successMessage.style.display = 'none';
        failureMessage.style.display = 'block';

    }
})
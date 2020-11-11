/*Function expression to Select elements*/
const selectElement = (s) => document.querySelector(s);

/*Open the menu on click*/
selectElement( '.open').addEventListener('click',() => {
  selectElement('.nav-list').classList.add('active');
});

/*Close the menu on click*/
selectElement('.close').addEventListener('click',() => {
 selectElement('.nav-list').classList.remove('active');
});

/*

                                         Calculate BMI

*/
function bmi(){
    const height = parseFloat(document.getElementById("h-BMI").value);
    const weight = parseFloat(document.getElementById("w-BMI").value);
    const bmi= ( weight / (height * height) *10000);
    const userBMI=document.getElementById("bmi_index")
    userBMI.textContent=bmi.toFixed(2);
}



/*

                                        Calculate BMR

*/



document.getElementById('calorie-form').addEventListener('submit', function(e){
    document.getElementById('results').style.display = 'none';

    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateCalories, 2000);

    e.preventDefault();
});

function calculateCalories(e) {

    const age = document.getElementById('age');
    const gender = document.querySelector('input[name="customRadioInline1"]:checked');
    const weight = document.getElementById('weight');
    const height = document.getElementById('height');
    const activity = document.getElementById('list').value;
    const totalCalories = document.getElementById('total-calories');


    if (age.value === '' || weight.value === '' || height.value === '' || 80 < age.value || age.value < 15) {
        errorMessage('Please make sure the values you entered are correct')
    } else if(gender.id === 'male' && activity === "1") {
        totalCalories.value = 1.2 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
    } else if(gender.id === 'male' && activity === "2") {
        totalCalories.value = 1.375 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
    } else if (gender.id === 'male' && activity === "3") {
        totalCalories.value = 1.55 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
    } else if(gender.id === 'male' && activity === "4") {
        totalCalories.value = 1.725 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
    } else if(gender.id === 'male' && activity === "5") {
        totalCalories.value = 1.9 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)))
        ;
    } else if(gender.id === 'female' && activity === "1") {
        totalCalories.value = 1.2 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
    } else if(gender.id === 'female' && activity === "2") {
        totalCalories.value = 1.375 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
    } else if(gender.id === 'female' && activity === "3") {
        totalCalories.value = 1.55 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
    } else if(gender.id === 'female' && activity === "4") {
        totalCalories.value = 1.725* (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
    } else {
        totalCalories.value = 1.9 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
    }

    document.getElementById('results').style.display = 'block';

    document.getElementById('loading').style.display = 'none';
}

function errorMessage(error) {
    document.getElementById('results').style.display = 'none';

    document.getElementById('loading').style.display = 'none';
    const errorDiv = document.createElement('div');
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errorDiv, heading);

    setTimeout(clearError, 4000);
}

function clearError() {
    document.querySelector('.alert').remove();
}



/*


                                     Estimate your body fat



*/

document.getElementById('form').addEventListener('button', function(){
    document.getElementById('results').style.display = 'none';

    document.getElementById('loading').style.display = 'block';

    setTimeout(eybf, 2000);


});


function eybf() {
    const waist = parseFloat(document.getElementById("waist-EYBF").value);
    const weight = parseFloat(document.getElementById("w-EYBF").value);
    const gender = document.querySelector('input[name="customRadioInline1"]:checked');
    const yourEYBF = document.getElementById('your-EYBF');

    if (gender.id === 'male') {
        yourEYBF.value = ((4.15 * waist - weight * 0.082 - 98.42) / weight);
    } else {
        yourEYBF.value = ((4.15 * waist - 0.082 * weight - 76.76) / weight);
    }


}

document.getElementById('results').style.display = 'block';

document.getElementById('loading').style.display = 'none';









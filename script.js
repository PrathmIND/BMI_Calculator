
const form = document.querySelector('form');

form.addEventListener('submit', function (eve) {
    eve.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result');

    if(height <= 0 || height === '' || isNaN(height)){
        result.innerHTML = `Enter invalid heigth`;
    }else if(weight <= 0 || weight === '' || isNaN(weight)){
        result.innerHTML = `Enter invalid weight`;
    }else{  
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if(bmi < 18.5){
            result.innerHTML = `${bmi} You are UNDERWEIGHT`
        }else if(bmi >= 25 && bmi < 29.9){
            result.innerHTML = `${bmi} You are OVERWEIGHT`
        }else{
            result.innerHTML = `${bmi} You are HEALTHY`
        }
    }

   
})



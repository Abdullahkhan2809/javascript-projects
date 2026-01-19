const form=document.querySelector('form')

form.addEventListener("submit", function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('#result');
    if(height<=0 || isNaN(height)){
        result.innerHTML=`Please enter numeric value`;
    }
    else if(weight<=0 || isNaN(weight)){
        result.innerHTML=`Please enter numeric value`;
    }
    else{
        const bmi=(weight/ ((height**2)/10000)).toFixed(2);
        result.innerHTML=`<span>${bmi} BMI</span>`;
    }
});
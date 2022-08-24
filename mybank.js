document.getElementById('deposit-btn').addEventListener('click', function(){
    // input value making
    const depositInput = document.getElementById('deposit-input');
    const inputValue = depositInput.value ;
    const inputValueString = parseFloat(inputValue);

    // showing value 
    const depositShower = document.getElementById('deposit-shower');
    const depositInputValue = depositShower.innerText;
    const depositInputValueString = parseFloat(depositInputValue);
    const depositShowerTotal = inputValueString + depositInputValueString ;
    depositShower.innerText = depositShowerTotal;
    
    depositInput.value = '';
    // balence section 
    const balenceShower = document.getElementById('balence-shower');
    const balenceShowervalue = balenceShower.innerText ;
    const balenceShowerString = parseFloat(balenceShowervalue);
    const balenceShowerTotal = balenceShowerString + inputValueString;
    balenceShower.innerText = balenceShowerTotal ;
});

document.getElementById('widrow-btn').addEventListener('click', function(){
    const widrowInput = document.getElementById('widrow-input');
    const widrowInputValue = widrowInput.value; 
    const widrowInputString = parseFloat(widrowInputValue);

    const widrowShower = document.getElementById('widrow-shower');
    const widrowShowerValue = widrowShower.innerText ;
    const widrowShowerString = parseFloat(widrowShowerValue);
    const widrowShowerTotal = widrowShowerString + widrowInputString ;
    widrowShower.innerText = widrowShowerTotal ;
    widrowInput.value = '' ;

    const widrowBalenceShower = document.getElementById('balence-shower');
    const widrowBalenceShowerValue = widrowBalenceShower.innerText ;
    const widrowBalenceShowerString = parseFloat(widrowBalenceShowerValue);
    const widrowBalenceShowerTotal = widrowBalenceShowerString - widrowInputString;
    widrowBalenceShower.innerText = widrowBalenceShowerTotal ;

})
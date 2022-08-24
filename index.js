document.getElementById('button').addEventListener('click', function(){
    const emailField = document.getElementById('email');
    const emailValue = emailField.value ;
    emailField.value = '';

    const passwordField = document.getElementById('password');
    const passwordvalue = passwordField.value;
    passwordField.value = '';
    if(emailValue === 'mybank@gmail.com' && passwordvalue === '12345'){
        window.location.href = 'mybank.html'
    }
    else(
        alert(' Email: mybank@gmail.com and pass: 12345 ')
    )
})
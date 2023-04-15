let userPassword = document.getElementById('userPassword');
let confirmuUserPassword = document.getElementById('confirmPassword');
let isPasswordCorrect = document.getElementById('message');
function passwordCheck (){
    if(userPassword.value == confirmuUserPassword.value){
        isPasswordCorrect.innerHTML = '';
        isPasswordCorrect.style.color ='green';
        userPassword.style.borderColor = 'green';
        confirmuUserPassword.style.borderColor = 'green';
    }else{
        isPasswordCorrect.innerHTML = '*Passwords do not match';
        isPasswordCorrect.style.color ='red';
        userPassword.style.borderColor = 'red';
        confirmuUserPassword.style.borderColor = 'red';
    }
}
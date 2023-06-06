 const password = document.getElementById("password")
 const progressBar= document.getElementById("progressBar")


//  check a number
const hasNumber =/\d/;


// check a uppercase letter
const hasUpperCase = /[A-Z]/;

//  check a lowercase letter
const hasLowerCase = /[a-z]/;

// check a special character
const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

password.addEventListener("input", function(){
    const value = password.value;
    // console.log(value)
    let strength =Math.min(6, Math.floor(value.length/3))

    strength += value.length > 3 
    ? hasNumber.test(value) + hasUpperCase.test(value)
    +hasLowerCase.test(value)+hasSpecial.test(value)
    :0

    updateBar(strength)
});

function updateBar(strength){
    progressBar.style.width = strength * 10 + '%';

    if(strength > 8){
        progressBar.style.backgroundColor='green'
    }else if(strength > 5){
        progressBar.style.backgroundColor='orange'

    }else{
        progressBar.style.backgroundColor='red'
    }
}


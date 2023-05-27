let password = document.querySelector('#password');
let repassword = document.querySelector('#repassword');
let label = document.querySelector('[for = "repassword"]')
//console.log(label.textContent);

password.addEventListener('input', () => {

    if( password.value !== repassword.value){
        label.classList.add('notsame');
        repassword.classList.add('notsame');
        console.log(repassword.classList)
    }
    else{
        label.classList.remove('notsame');
        repassword.classList.remove('notsame');
        console.log("success!!")
        console.log(repassword.classList)
    }
})



repassword.addEventListener('input', () => {
    console.log(12);
    if( password.value !== repassword.value){
        label.classList.add('notsame');
        repassword.classList.add('notsame');
        console.log(repassword.classList)
    }
    else{
        label.classList.remove('notsame');
        repassword.classList.remove('notsame');
        console.log("success!!")
        console.log(repassword.classList)
    }
})

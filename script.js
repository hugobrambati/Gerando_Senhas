let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerpassword = document.querySelector("#container-password");

let charset = 'abcdefgaijlmnopqrstuvxzwykABCDEFGHIJLMNOPQRSTUVXZWYK1234567890!@#*&';
let novaSenha = '';

    sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;//passando para o sizePassword que toda vez que alterar o valor e para ser mostrado na tela
}

function generatePassword(){
    let pass ="";
    for(let i = 0, n = charset.length; i< sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random()* n));
    }

    console.log(pass)
    containerpassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    alert("Senha copiada com sucesso")
    navigator.clipboard.writeText(novaSenha);
}
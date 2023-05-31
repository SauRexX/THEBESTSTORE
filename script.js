// Esse e o email correto
let emailCorreto = 'rafaelmuniizz@gmail.com'

// Pegando o valor do campo
function verificarLogin(evt) {

    // Evitar de recarregar a pagina
    evt.preventDefault()

    // Pegar o valor que o usuario escreveu dentro do campo de email
    let email = document.querySelector('#e-mail').value

    if(email == emailCorreto) {
        alert ("email correto !!")

    } else {
        alert ("email incorreto !!")

    }
    verificarsenha()
}
 let senhacorreta = 'senha'
function verificarsenha(){
    
    let senha = document.querySelector('#senha').value
    
    if (senha != senhacorreta){
        alert("senha incorreta !!")
    }else {
        alert("senha correta !! ")
        location.href="telaprincipal.html"
    }
                                                             
}
function telacadastro(evt){ 
    evt.preventDefault()
    location.href = "telacadastro.html"
}





// function somar(valor1, valor2) {
//     let soma = valor1 + valor2
//     console.log(soma)
// }

// somar(200, 10)
function cadastrar(evt){
    evt.preventDefault()
    let nome=document.querySelector("#nome").value
    let sobrenome=document.querySelector("#sobrenome").value
    let email=document.querySelector("#email").value
    let telefone=document.querySelector("#telefone").value
    let senha=document.querySelector("#senha").value
    let checkbox = document.querySelector("#checkbox").checked
    if(!checkbox) {
        alert("Concorde com os termos")
        return
    } else if(nome === '') {
        alert("Por favor preencha o nome")
        return
    } 
    else if(sobrenome === '') {
        alert("Por favor preencha o sobrenome")
        return
    } 
    else if(email === '') {
        alert("Por favor preencha o e-mail")
        return
    } 
    else if(senha === '') {
        alert("Por favor preencha o senha")
        return
    } 
        location.href = './telaprincipal.html'
    
}


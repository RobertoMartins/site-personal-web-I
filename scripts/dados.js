
//FUNCÃO DE CADASTRO. VALÍDA O FORMULÁRIO, PEGA OS DADOS E ABRE A NOVA JANELA DE CONFIRMAÇÃO
function cadastrar(){
    if(valida_form()){
        pegaDados();
        window.location.href="checkout.html";
       
    }else{
        alert('Falha ao realizar o cadastro');
    }

}

//FUNCÃO PARA PEGAR OS DADOS DO FORMULARIO
function pegaDados(){
    var nome=document.getElementById("nome").value;
    var email=document.getElementById("email").value;
    var atividades=document.getElementById("atividade");
    var atividade=atividades.options[atividades.selectedIndex].value;
    sexo= function(){
        
            if(document.getElementById("masculino").checked==false){
                return "feminino";
            }else{
            return "masculino"
            }
    }

    //ARMAZENANDO DADOS DO FORMULARIO NO LOCALSTORAGE
    localStorage.setItem("nome",nome);
    localStorage.setItem("email",email);
    localStorage.setItem("atividade",atividade);
    localStorage.setItem("sexo",sexo());
    
}


//FUNÇÃO PARA VALIDAR OS CAMPOS DO FORMULARIO

function valida_form(){
    if(document.getElementById("nome").value.length < 3){
    alert('Por favor, preencha o campo nome');
    document.getElementById("nome").focus();
    return false
    }
    if(document.getElementById("email").value.length < 3){
        alert('Por favor, preencha o campo email');
        document.getElementById("email").focus();
        return false
    }
    if(document.getElementById("masculino").checked==false && document.getElementById("feminino").checked==false){
        alert('Por favor, escolha uma opção do sexo.');
    }
    var atividades = document.getElementById("atividade");
    if(atividades.selectedIndex==0){
        alert('Por favor, escolha uma opção em nivel de atividade.');
        document.getElementById("atividade").focus();
        return false
    }
    if(document.getElementById("telefone").value.length < 9){
        alert('Por favor, preencha o campo telefone com um numero válido.');
        document.getElementById("telefone").focus();
        return false
    }
    if(document.getElementById("termos").checked==false){
        alert('Por favor, aceite termos para continuar')
        return false;
    }
    return true;
}

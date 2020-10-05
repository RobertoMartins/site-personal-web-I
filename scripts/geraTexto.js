//RECUPERANDO DADOS DO LOCALSTORAGE
var nome= localStorage.getItem("nome");
var email = localStorage.getItem("email");
var atividade = localStorage.getItem("atividade");
var sexo = localStorage.getItem("sexo");


//MONTANDO MENSAGEM COM OS DADOS RECUPERADOS
function montarTexto(){
    var conteudo = document.getElementById("concluido");

    conteudo.innerHTML="<h2>Cadastro efetuado com sucesso!</h2><img src='img/concluido.jpg'>"+
    "<p>Parabens <strong>"+nome+"</strong> seu cadastro foi efetuado com sucesso.</p>"+
    "<p>Fique atento no seu email <strong>"+email+"</strong>, você irá receber dicas de treino "+
    "especificas para quem é do sexo <strong>"+sexo+"</strong> e leva uma vida <strong>"+atividade+"</strong>.</p>";
    
}
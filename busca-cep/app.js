function ClicarBotao(){
    let cep = document.getElementById("cep").value
    buscarDados(cep)
}
async function buscarDados(cep){    
    let dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(Response => Response.json());
    dadosTela(dados)
}
function dadosTela(dados){
    document.getElementById("endereco").value = dados.logradouro
    document.getElementById("bairro").value = dados.bairro
    document.getElementById("cidade").value = dados.localidade
    document.getElementById("estado").value = dados.uf
}
function limpar(){
    document.getElementById("cep").value = ""
    document.getElementById("endereco").value = ""
    document.getElementById("bairro").value = ""
    document.getElementById("cidade").value = ""
    document.getElementById("estado").value = ""
}
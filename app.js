function buttonBuscar(){
    let cep = document.getElementById("cep").value
    searchDados(cep)
}

async function searchDados(cep){
    let dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(Response=>Response.json())
    autofillDados(dados)
}

function autofillDados(dados){
    document.getElementById("endereco").value = dados.logradouro
    document.getElementById("bairro").value = dados.bairro
    document.getElementById("cidade").value = dados.localidade
    document.getElementById("estado").value = dados.uf
}

function buttonLimpar(){
    document.getElementById("cep").value = ""
    document.getElementById("endereco").value = ""
    document.getElementById("bairro").value = ""
    document.getElementById("cidade").value = ""
    document.getElementById("estado").value = ""
}
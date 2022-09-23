let url = "https://random-data-api.com/api/v2/credit_cards?size=3"
let generico = []
//cs é um array
const carregarTabela= (itens,id="genericoTabela",idThead="thead",cs) => {
    let tbody = document.querySelector(`#${id}`)
    tbody.innerHTML = '';

    const chaves = Object.keys(cs[0]);

    let thead = document.querySelector(`#${idThead}`)
    thead.innerHTML = '';
    let itensArray = chaves
        .map((key) => `<th>${key}</th>`)
    const itensTag = `<tr>${itensArray.join('')}</tr>`
    thead.innerHTML = itensTag;
    
    let chavesArray = cs.map(
        (item) => `<tr>${chaves.map((chave) => `<td>${item[chave]}</td>`)}</tr>`
    );
    const bodyTag = `<tr>${chavesArray}</tr>`;
    tbody.innerHTML = bodyTag.replaceAll('>,<', '><');
}   
async function carregarGenerico(){
    try{
        let res = await fetch(url)
        generico = await res.json()
        carregarTabela(["ID","UID","Número", "Validade", "Tipo"],'genericoTabela','thead', generico)
    }catch(err){
        document.getElementById("genericoDiv").innerHTML = "Fudeu..."
    }
}
let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", () => carregarGenerico() ) 
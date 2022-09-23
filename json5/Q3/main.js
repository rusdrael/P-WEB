let generico = []
//cs é um array
const carregarTabela= (itens,id="genericoTabela",cs) => {
    let tbody = document.querySelector(`#${id}`)
    tbody.innerHTML = '';
    let thead = document.querySelector(`#${id}`)
    thead.innerHTML = '';
    let itensArray = itens
        .map((item) => `<th>${item}</th>`)
    const itensTag = `<tr>${itensArray.join('')}</tr>`
    thead.innerHTML = itensTag;
    const itensHtml = cs.map((item) => {tbody.innerHTML += `<tr><td>${item['credit_card_number']}</td> <td>${item['credit_card_expiry_date']}</td> <td>${item['credit_card_type']}</td></tr>`}) 
    }
async function carregarGenerico(){
    try{
        let res = await fetch("https://random-data-api.com/api/v2/credit_cards?size=3")
        generico = await res.json()
        carregarTabela(["Número", "Validade", "Tipo"],'genericoTabela', generico)
    }catch(err){
        document.getElementById("genericoDiv").innerHTML = "Fudeu..."
    }
}
let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", () => carregarGenerico() ) 
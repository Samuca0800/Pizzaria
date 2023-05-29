const pedidos = JSON.parse(localStorage.getItem("itens"))
console.log(pedidos)
const carrinho=[]
const tbody = document.querySelector("tbody")
pedidos.forEach(element => {
 var tr = document.createElement("tr")
 tr.innerHTML=`
 <td>${element.id}</td>
 <td>${element.nome}</td>
 <td>${element.descricao}</td>
 <td>R$ ${element.preco}</td>`
 tbody.appendChild(tr)   
 carrinho.push(element)
});

function adicionar(){
    localStorage.clear
localStorage.setItem("pedidos",JSON.stringify(carrinho))
}

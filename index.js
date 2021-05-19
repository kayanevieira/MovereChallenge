let nomeCliente = document.getElementById("nome-cliente");
let valorVenda = document.getElementById("valor-venda");
let dataVenda = document.getElementById("data-venda");
let insere = document.getElementById("botao-insere");
let maiorVenda = document.getElementById("botao-maior-venda")

let clientes = [];

function pegarValor() {
    let nome = nomeCliente.value;
    let data = dataVenda.value;
    let valor = valorVenda.value;
    
    return { nome, data, valor };
  }


insere.addEventListener("click", function () {
  const data = pegarValor();
  clientes.push(data);
  
});



maiorVenda.addEventListener("click", function (){
  const result = clientes.reduce((prev, curr)=>{
    if(prev.valor > curr.valor){
      return prev
    }
    return curr
  })
  console.log(result)
})

console.log(clientes)






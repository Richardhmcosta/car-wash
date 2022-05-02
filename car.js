
//Função responsável por adicionar os valores do usuário
function adicionarItem() {

  //Recebendo dados do usuário
const valorInput = document.getElementById("a").value
const valorInputb = document.getElementById("b").value
const valorInputc = document.getElementById("c").value


//Pegando a nossa tag pelo ID (tag UL)
const minhaTagUl = document.getElementById("lista")

//Criando nossa tag <li> com JavaScript
const tagLi = document.createElement("li")

//Adiconando nosso texto responsável por remover os itens
const tagRemover = `<b class="liberar" onclick='removerItem(event)' > Liberar </b>`

//Mostrando os dados do usário em linha
tagLi.innerHTML = `Veiculo: ${valorInput} | Placa: ${valorInputb} | Dono: ${valorInputc}` + tagRemover

console.log(tagLi)

//Adicionando nossa <li> (tag filha) na <ul> (tag pai)
minhaTagUl.appendChild(tagLi)

}

//Função responsável por remover os dados do usuário
function removerItem(event) {

  //Váriavel responsável por pegar a tag do nosso evento
  const remover = event.target

  //removendo a tag <li>
  const minhaLi = remover.parentElement

  minhaLi.remove()
}

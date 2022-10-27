var num = document.getElementById('fnum');
var lista = document.getElementById('flista');
var res = document.getElementById('res');
var valores = []

function adicionar() {
    valores.push(Number(num.value))
    var item = document.createElement('option');
    item.text = `Valor ${num.value} adicionado`
    lista.appendChild(item)
}

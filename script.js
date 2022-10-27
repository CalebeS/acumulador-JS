var num = document.getElementById("fnum");
var lista = document.getElementById("flista");
var res = document.getElementById("res");
var valores = [];

function adicionar() {
  valores.push(Number(num.value));
  var item = document.createElement("option");
  item.text = `Valor ${num.value} adicionado`;
  lista.appendChild(item);
  res.innerHTML = "";
  num.value = "";
  num.focus();
}

function finalizar() {
  var tot = valores.length;
  var maior = valores[0];
  var menor = valores[0];
  var soma = 0;
  for (var pos in valores) {
    soma += valores[pos];
    if (valores[pos] > maior) maior = valores[pos];
    if (valores[pos] < menor) menor = valores[pos];
  }
  media = soma / tot;
  res.innerHTML = "";
  res.innerHTML += `<p>${tot} Números cadastrados</p>`;
  res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`;
  res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`;
  res.innerHTML += `<p>A soma de todos os numeros é ${soma}</p>`;
  res.innerHTML += `<p>A media dos valores informado foi ${media}</p>`;
}

var eloBoost = [
  {
    liga: "Bronze",
    divisao: "IV",
    valor: 15
  },
  {
    liga: "Bronze",
    divisao: "III",
    valor: 15
  },
  {
    liga: "Bronze",
    divisao: "II",
    valor: 15
  },
  {
    liga: "Bronze",
    divisao: "I",
    valor: 15
  },
  {
    liga: "Prata",
    divisao: "IV",
    valor: 15
  },
  {
    liga: "Prata",
    divisao: "III",
    valor: 19
  },
  {
    liga: "Prata",
    divisao: "II",
    valor: 19
  },
  {
    liga: "Prata",
    divisao: "I",
    valor: 19
  },
  {
    liga: "Ouro",
    divisao: "IV",
    valor: 19
  },
  {
    liga: "Ouro",
    divisao: "III",
    valor: 23
  },
  {
    liga: "Ouro",
    divisao: "II",
    valor: 23
  },
  {
    liga: "Ouro",
    divisao: "I",
    valor: 23
  },
  {
    liga: "Platina",
    divisao: "IV",
    valor: 30
  },
  {
    liga: "Platina",
    divisao: "III",
    valor: 30
  },
  {
    liga: "Platina",
    divisao: "II",
    valor: 30
  },
  {
    liga: "Platina",
    divisao: "I",
    valor: 30
  },
  {
    liga: "Diamante",
    divisao: "IV",
    valor: 30
  },
  {
    liga: "Diamante",
    divisao: "III",
    valor: 60
  },
  {
    liga: "Diamante",
    divisao: "II",
    valor: 75
  },
  {
    liga: "Diamante",
    divisao: "I",
    valor: 90
  },
  {
    liga: "Mestre",
    divisao: "IV",
    valor: 110
  },
  {
    liga: "Mestre",
    divisao: "III",
    valor: 0
  },
  {
    liga: "Mestre",
    divisao: "II",
    valor: 0
  },
  {
    liga: "Mestre",
    divisao: "I",
    valor: 0
  },
]

var ligaAtual = document.getElementById('ligaAtual');
var divisaoAtual = document.getElementById('divisaoAtual');
var ligaDesejada = document.getElementById('ligaDesejada');
var divisaoDesejada = document.getElementById('divisaoDesejada');

function Simular(){
  console.log(`Liga Atual: ${ligaAtual.selectedIndex} Divisão Atual: ${divisaoAtual.selectedIndex} Liga Desejada: ${ligaDesejada.selectedIndex} Divisão desejada: ${divisaoDesejada.selectedIndex}`)
  if(ligaAtual.selectedIndex > ligaDesejada.selectedIndex){
    alert('Erro: A liga desejada deve ser maior que a liga atual');
  }else if(ligaAtual.selectedIndex == ligaDesejada.selectedIndex && divisaoAtual.selectedIndex > divisaoDesejada.selectedIndex){
    alert('Erro: A divisão atual deve ser menor que a divisão desejada');
  }else if(ligaAtual.selectedIndex == ligaDesejada.selectedIndex &&  divisaoAtual.selectedIndex == divisaoDesejada.selectedIndex){
    alert('Erro: A divisão atual deve ser menor que a divisão desejada;');
  }else{
    if(ligaDesejada.value === "Mestre"){
      divisaoDesejada.disabled = true
    }else{
      divisaoDesejada.disabled = false;
    }
    var estadoAtual;
    var estadoDesejado;
    for (let i = 0; i < eloBoost.length; i++) {
        if(eloBoost[i].liga === ligaAtual.value && eloBoost[i].divisao === divisaoAtual.value){
          estadoAtual = i + 1;
        }
        if(eloBoost[i].liga === ligaDesejada.value && eloBoost[i].divisao === divisaoDesejada.value){
          estadoDesejado = i + 1;
          console.log(ligaDesejada.value)
        }
      }
    CalcularSimulacao(estadoAtual, estadoDesejado);
  }
}

function CalcularSimulacao(idAtual, idDesejado){
  var calculo = 0;
  var resultadoH1 = document.getElementById('resultadoSimulacao');
  var valorAntigo = document.getElementById('valorAnterior');
  for (let soma = idAtual; soma < idDesejado; soma++) {
    calculo = calculo + eloBoost[soma].valor
  }
  resultadoH1.innerHTML = 'R$' + calculo;
  valorAntigo.innerHTML = calculo + (calculo * 0,25);
  valorAntigo.innerHTML = 'R$' + valorAntigo.innerHTML
  
}
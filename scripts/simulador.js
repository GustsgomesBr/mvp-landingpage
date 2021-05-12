var eloBoost = [
  {
    liga: "Bronze",
    divisao: "IV",
    valor: 15,
    img: './img/elos/Bronze IV.png'
  },
  {
    liga: "Bronze",
    divisao: "III",
    valor: 15,
    img: './img/elos/Bronze III.png'
  },
  {
    liga: "Bronze",
    divisao: "II",
    valor: 15,
    img: './img/elos/Bronze II.png'
  },
  {
    liga: "Bronze",
    divisao: "I",
    valor: 15,
    img: './img/elos/Bronze I.png'
  },
  {
    liga: "Prata",
    divisao: "IV",
    valor: 15,
    img: './img/elos/Prata IV.png'
  },
  {
    liga: "Prata",
    divisao: "III",
    valor: 19,
    img: './img/elos/Prata III.png'
  },
  {
    liga: "Prata",
    divisao: "II",
    valor: 19,
    img: './img/elos/Prata II.png'
  },
  {
    liga: "Prata",
    divisao: "I",
    valor: 19,
    img: './img/elos/Prata I.png'
  },
  {
    liga: "Ouro",
    divisao: "IV",
    valor: 19,
    img: './img/elos/Ouro IV.png'
  },
  {
    liga: "Ouro",
    divisao: "III",
    valor: 23,
    img: './img/elos/Ouro III.png'
  },
  {
    liga: "Ouro",
    divisao: "II",
    valor: 23,
    img: './img/elos/Ouro II.png'
  },
  {
    liga: "Ouro",
    divisao: "I",
    valor: 23,
    img: './img/elos/Ouro I.png'
  },
  {
    liga: "Platina",
    divisao: "IV",
    valor: 30,
    img: './img/elos/Platina IV.png'
  },
  {
    liga: "Platina",
    divisao: "III",
    valor: 30,
    img: './img/elos/Platina III.png'
  },
  {
    liga: "Platina",
    divisao: "II",
    valor: 30,
    img: './img/elos/Platina II.png'
  },
  {
    liga: "Platina",
    divisao: "I",
    valor: 30,
    img: './img/elos/Platina I.png'
  },
  {
    liga: "Diamante",
    divisao: "IV",
    valor: 30,
    img: './img/elos/Diamante IV.png'
  },
  {
    liga: "Diamante",
    divisao: "III",
    valor: 60,
    img: './img/elos/Diamante III.png'
  },
  {
    liga: "Diamante",
    divisao: "II",
    valor: 75,
    img: './img/elos/Diamante II.png'
  },
  {
    liga: "Diamante",
    divisao: "I",
    valor: 90,
    img: './img/elos/Diamante I.png'
  },
  {
    liga: "Mestre",
    divisao: "IV",
    valor: 110,
    img: './img/elos/Mestre I.png'
  },
  {
    liga: "Mestre",
    divisao: "III",
    valor: 0,
    img: './img/elos/Mestre I.png'
  },
  {
    liga: "Mestre",
    divisao: "II",
    valor: 0,
    img: './img/elos/Mestre I.png'
  },
  {
    liga: "Mestre",
    divisao: "I",
    valor: 0,
    img: './img/elos/Mestre I.png'
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
  var imgAtual = document.getElementById('imgAtual');
  var imgDesejado = document.getElementById('imgDesejado');
  var resultadoH1 = document.getElementById('resultadoSimulacao');
  var valorAntigo = document.getElementById('valorAnterior');
  for (let soma = idAtual; soma < idDesejado; soma++) {
    calculo = calculo + eloBoost[soma].valor
  }
  imgAtual.src = eloBoost[idAtual-1].img;
  imgDesejado.src= eloBoost[idDesejado-1].img;
  resultadoH1.innerHTML = 'R$' + calculo;
  valorAntigo.innerHTML = calculo + (calculo * 0,25);
  valorAntigo.innerHTML = 'R$' + valorAntigo.innerHTML
  
}
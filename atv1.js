let alturas = [];
let sexos = []

alturas.push(1.80); //0
alturas.push(1.60); //1
alturas.push(1.50); //2
alturas.push(1.90); //3
alturas.push(2.90); //3

sexos.push('M'); //0
sexos.push('M'); //1
sexos.push('F'); //2
sexos.push('F'); //3
sexos.push('M'); //1

let maior = alturas[0]; //1.80
let menor = alturas[0]; //1.80
let nrM = 0;
let nrF = 0;
let alturaF = 0;
for(let i=0; i < alturas.length; i++ ){
    //1.1 questao
    if (maior < alturas[i]) 
       maior = alturas[i];

    if (menor > alturas[i])   
       menor = alturas[i];

    //1.2 questao
    if (sexos[i] == 'F'){
        nrF++;
        alturaF += alturas[i];
    }   

    //1.3 questao
    if (sexos[i] == 'M')
      nrM++;
}

 

console.log("Maior Altura: "+maior);
console.log("Menor Altura: "+menor);
console.log("Media Mulheres: "+(alturaF/nrF));
console.log("Numero de Homens: "+nrM);


//Desconsiderar
/*let altura = [
    '1,70' = M,
    '1,71' = F,
    '1,72' = M,
    '1,73' = F,
    '1,74' = M,
    '1,75' = F,
    '1,76' = M,
    '1,77' = F,
    '1,78' = M,
    '1,79' = F,
    '1,80' = M,
    '1,81' = F,
    '1,82' = M,
    '1,83' = F,
    '1,84' = M
  ];
  
  let maiorAltura = altura[0];
  let menorAltura = altura[0];
  
  for (let i = 1; i < altura.length; i++) {
    if (altura[i] > maiorAltura) {
      maiorAltura = altura[i];
    } else if (altura[i] < menorAltura) {
      menorAltura = altura[i];
    }
  }
  
  console.log('Maior altura do grupo:' +maiorAltura);
  console.log('Menor altura do grupo:' +menorAltura);

  let altMulher = 0

for (let x=0; x<altura.length; x++) {
    if (altura[x] == F){
        let qtdeM;
        qtdeM++;
    }

    console.log('Qtde Mulher' +x);
}
*/
/*
if(altura=='F') {
    altMulher++;
    altm
}  

console.log('Maior altura do grupo:' +maiorAltura);
*/
import {dataplanet} from './data.js'

let nombrePlanetas = Array(sol, mercurio, venus, tierra, marte, júpiter, saturno, urano, neptuno)
let distancia = [0, 0.39, 0.72, 1, 1.52, 5.20, 9.54, 19.22, 30.06]
const tamaño = []

console.log(nombrePlanetas)
console.log(distancia)
console.log(tamaño)

let i=0;
while(i <= nombrePlanetas.length -1){
    console.log(i)
    console.log(nombrePlanetas[i]);
    i = i + 1
}
for(const key in distancia){
    if(distancia[key]==  '5'){
        console.log('se encontro la distancia')}
    else{
        console.log('no se encontro la distancia')

    }
}

nombrePlanetas.forEach((value, index, array)=> {
    console.log('planeta',index, value)
});



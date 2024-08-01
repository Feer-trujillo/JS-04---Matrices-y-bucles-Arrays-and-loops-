
//**Suma de resistencias en serie*/
function sumResistance( resistances){ //usamos el metodo reduce para poder sumar todos los valores absolutos de las resistencias
    let total = resistances.reduce((acc, resistances) => acc + Math.abs (resistances), 0);
    //**Devolvemos el resultado */
    return `${total} ohmios`;
}
console.log(sumResistance([-1, 5, 6, 3]));
console.log(sumResistance([14, 3.5,6]));
console.log(sumResistance([8,15,100]));





//**Número dividido en mitades */
function numDiv(number){//Verificar si el numero es par
if (number %2 !== 0 ) {
    throw new Error( "El numero debe de ser par para divirlo en mitades iguales ");    
}
const half = number /2;//* dividir el número entre 2 para tener la mitad.* */
return [half, half];
}
console.log (numDiv(4));
console.log(numDiv(10));




//**Sociedad secreta */
function secretName(members) {//*Obtener la prime letra de cada uno de los nombres y unirlas en una sola cadena* */
    const name = members.map (member => member[0]).join (``); //* el * */ Este método se utiliza para unir todos los elementos de un array en una única cadena de texto.
    return name.toUpperCase(); //**Este método se utiliza para convertir todos los caracteres de una cadena a mayúsculas. */
}
console.log (secretName(["Esperanza", "Franco", "Nia"]));
console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']));
console.log(secretName(['Harry', 'Ron', 'Hermione']));





//** Estado en línea*/
function onlineStatus(users) { 
    const numUsers = users.length;//**obtener la longitud de usuarios en linea */
if (numUsers === 0){ //**Si no hay usuarios en linea, devuelve el mensaje 'Nadie en linea' */
    return ' Nadie en linea';
}
if (numUsers ===1){//**Si hay usuarios en lineadevuelve el emnsaje 'en linea'  */
    return  `${users[0]} en línea`;
}
if (numUsers === 2) {//**Si hay solo dos usuarios en linea, deuvel los nombres  seguido del mensaje 'en linea' */
    return `${users[0]} y ${users[1]} en línea`;
}
const firstUser = users[0];
const secondUser = users[1];
const othersCount = numUsers -2;

return `${firstUser}, ${secondUser} y ${othersCount} más en línea`;//**Devuelve un mensaje que incluye los primeros dos usuarios y la cantidad de usuarios restantes */
}
console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']));
console.log(onlineStatus (['Alice']));
console.log(onlineStatus(['Bob', 'Charlie']));
console.log(onlineStatus(['David', 'Eva', 'Frank', 'Grace']));
console.log(onlineStatus([]));







//**Matriz de multiplos */
function arraysMultiplos(numero, longitud){//** Crear un arreglo vacio para que se almacen los multiplo */
    let multiplos =[]

    for (let i= 1; i<= longitud; i++){ //**Crear un bucle para calcular y agregar los multiplos del array */
        multiplos.push(numero*i);
    }
    return multiplos; //** Regresar el arreglo con los multiplos */
}

console.log (arraysMultiplos(2, 10));
console.log (arraysMultiplos(17, 6));




///** Dominio positivo en Array*/
function positivoDom (arr){ //contar los elemento posivos 
    let positivoCount = arr.filter(num => num > 0).length;//**Usamos .filter para crear un nuevo array que contiene solo los elementos positivos del arr y usamos length para contar el numero de elementos dentro del array, que es la cantidad de los numeros positivos de la matriz */
    
    return positivoCount > arr.length /2; //**Determianr si la mayoria e los elementos son positivos,si la cantidad de números positivos es mayor que la mitad del total de elementos en la matriz. Si no es así, devuelve false. */
}
console.log (positivoDom([-1,-3,-5,4,6767]));
console.log(positivoDom([1, 2, 3, -4, -5]));
console.log(positivoDom([0, 0, 0, 1, 1]));
console.log(positivoDom([-1, -2, -3, -4, 5]));



//**Promedio antípoda */
function processArray(arr) {
    let length = arr.length;
    
    
    if (length % 2 !== 0) {//**// Si el número de elementos es impar, eliminamos el elemento del medio */
        let indiceMedio = Math.floor(length / 2); //** Usamos Math.floor para calcular el índice del elemento del medio en una matriz, especialmente cuando el número de elementos es impar. */
        arr.splice(indiceMedio, 1); //**Usamos splice para eliminar el elemento en el índice medio y ajustamos la longitud */
        length--; 
    }

    let halfLength = length / 2; //**// Dividir la matriz en dos partes iguales */
    let firstPart = arr.slice(0, halfLength);
    let secondPart = arr.slice(halfLength);

    secondPart.reverse();//** // Invertir la segunda parte */

    
    let result = firstPart.map((num, indice) => (num + secondPart[indice]) / 2);//**// Sumar elementos correspondientes y dividir entre 2 */

    return result;
}

console.log(processArray([1, 2, 3, 5, 22, 6]));






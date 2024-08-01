
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
if (numUsers === 0){ 
    return ' Nadie en linea';
}
if (numUsers ===1){
    return  `${users[0]} en línea`;
}
if (numUsers === 2) {
    return `${users[0]} y ${users[1]} en línea`;
}
const firsUser = user[0];
const secondUser = user[1];
const othersCount = numUsers -2;

return `${firstUser}, ${secondUser} y ${othersCount} más en línea`;
}



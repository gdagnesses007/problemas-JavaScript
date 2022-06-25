// 1) Programa una función que cuente el número de caracteres de 
// una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

// 2) Programa una función que te devuelva el texto recortado 
// según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) 
// devolverá "Hola".

// 3) Programa una función que dada una String te devuelva un 
// Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ')
//  devolverá ['hola', 'que', 'tal'].

// 4) Programa una función que repita un texto X 
// veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola
//  Mundo Hola Mundo Hola Mundo.



//problema 1 
function len(str){
    let cont = 0;
    for(let i of str){
       cont+=1
    }
    return cont
}

// 2
function cut(str, long){
    let cut = ''; 
    for(let i = 0; i<=long;i++){
       cut += str[i]
    }
    return cut
}
// 3
function separate(str){
    // ¿Como puedo hacerlo sin split()
    return str.split(' ')

}
// 4
function Repeat(str,rp){
     let rep = ''
     for(let i = 0; i < rp; i++){
        rep += ' ' + str
     }
     return rep
}



// Agrega tus funciones a este objeto e importa el objeto a el archivo imports.js
export const problemas34 = {
  len,
  cut,
  separate,
  Repeat
} 
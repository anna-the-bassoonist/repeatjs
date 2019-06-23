//Napisz funkcję, która pobiera jako parametr stringa (czyli napis) i zwraca ten sam napis tylko napisany wspak.
//
//Następnie wywołaj tą funkcję i odwróć wspak stringa "Akademia108", a wynik działania funkcji wyświetl w konsoli.
//
//Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it
//
//Podpowiedź przed wysłaniem zadania do sprawdzenia:
//- najprościej zadanie zrobić używając funkcji javascript do operacji na tablicach


let napis = 'Akademia 108';
function odwrocString(napis){
    result = napis.split('').reverse().join("");

    return result;
    
}
odwrocString('Akademia 108');
console.log(odwrocString('Akademia 108'));

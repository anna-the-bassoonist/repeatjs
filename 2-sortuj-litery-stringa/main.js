//Napisz funkcję, która pobiera jako parametr stringa (czyli napis) i zwraca ten napis z posortowanymi literami.
//
//Następnie wywołaj funkcję i posortuj stringa "Akademia108", a wynik działania funkcji wyświetl w konsoli.
//
//Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it
//
//Podpowiedź przed wysłaniem zadania do sprawdzenia:
//- najprościej zadanie zrobić używając funkcji javascript do operacji na tablicach

document.addEventListener('DOMContentLoaded',function(){
    function sortujLiteryStringa(napis){
    var result = napis.split('').sort().join("");
    return result;
    };
    
    console.log(sortujLiteryStringa('Akademia 108'));
});

//let napis = 'Akademia 108';
//
//function sortujLiteryStringa(napis) {
//    result = napis.split('').sort().join("");
//    return result
//}
//console.log(sortujLiteryStringa('Akademia 108'));

//Pobierz do zmiennej jsonPracownicy poniższy obiekt:
//
//{
//    "pracownicy":[
//        {"firstName": "Krystian", "lastName": "Dziopa"}, 
//        {"firstName": "Anna", "lastName": "Szapiel"},
//        {"firstName": "Piotr", "lastName": "Żmuda"}
//    ]
//}
//Wyświetl go w konsoli, a następnie za pomocą pętli forEach przeiteruj po każdym pracowniku, oraz wyświetl w konsoli index elementu tablicy oraz imie i nazwisko pracownika.

'use strict';
let jsonPracownicy = {
    "pracownicy" : [
        { "firstName": "Krystian", "lastName":"Dziopa"},
        { "firstName":"Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr","lastName":"Zmuda"}
    ]
};
console.log(jsonPracownicy);
jsonPracownicy.pracownicy.forEach(function(element,index){
     console.log(index+' ' + element.firstName +' ' +element.lastName);
});
   

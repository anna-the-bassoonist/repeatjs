'use strict';
let jsonPracownicy ={
    "pracownicy" : [
        {
            "firstName": "Krystian",
            "lastName": "Dziopa"
        },
        {
            "fistName": "Anna",
            "lastName": "Szapiel"
        },
        {
            "firstName": "Piotr",
            "lastName": "Zmuda"
        }
    ]
}

console.log(jsonPracownicy);

jsonPracownicy.pracownicy.forEach(function(element,index){
    console.log(index+' '+element.firstName + ' '+element.lastName);
})

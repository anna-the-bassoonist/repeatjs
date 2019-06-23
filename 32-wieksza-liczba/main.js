//Stwórz plik "main.js", a w nim dwie zmienne:
//
//var num1 = 2;
//var num2 = 5;
//Następnie napisz funkcję, która pobiera te dwie zmienne jako parametry.
//
//Funkcja zwraca większą liczbę.
//
//Następnie wynik działania funkcji wyświetl w konsoli.
//
//Plik wgraj do repozytorium zdalnego i podeślij link do sprawdzenia.

var num1 = 2;
var num2 = 5;


function myFunction (num1,num2){
    if (num1>num2){
       console.log(num1 +' jest większe niż ' + num2);
    } else {
        console.log(num2+ ' jest większe niż ' + num1)
    }
}
myFunction(num1,num2);
//Napisz funkcję ze zmiennymi lokalnymi, która liczy sumę kwadratów elementów tablicy [0,1,2,3,4,5]. Funkcja przyjmuje jeden parametr - w/w tablicę z liczbami. Funkcja zwraca sumę kwadratow. Wyświetl wynik działania funkcji w konsoli.
//
//Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it
//
//Podpowiedź przed wysłaniem zadania do sprawdzenia:
//- użyj w zadaniu pętli, którą uważasz za słuszną i klasy Math.


document.addEventListener('DOMContentLoaded', function () {
    function sumaKwadratow(arr) {
        let suma = 0;
        for (let i = 0; i < arr.length; i++) {
            suma += Math.pow(arr[i], 2);
        }
        return suma;
    }
    console.log(sumaKwadratow([0, 1, 2, 3, 4, 5]));
});

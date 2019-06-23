//Napisz funkcję, która zwraca wartość n-tego elementu ciągu fibbonaciego. Wynik działań i funkcji wyświetl w konsoli.
//
//Jako parametr funkcja przyjmuje n - czyli n-ty element ciągu fibbonaciego.
//
//Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it
//
//Podpowiedź przed wysłaniem zadania do sprawdzenia:
//- znajdź w internecie opis merytoryczny ciągu fibbonaciego

document.addEventListener('DOMContentLoaded', function () {
    function ciagFibonacciego(n) {
        let wynik = 0;
        if (n == 0) {
            return wynik;
        } else if (n == 1) {
            wynik = 1;
            return wynik;
        } else if (n > 1) {
            wynik = ciagFibonacciego(n - 1) + ciagFibonacciego(n - 2);
            return wynik;
        };
    };
    console.log(ciagFibonacciego(2));
})

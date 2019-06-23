//W pliku html stwórz podstawową strukturę html5, a następnie stwórz folder "js" a w nim plik "main.js".
//
//W pliku main.js zdeklaruj dwie zmienne o nazwie:
//
//1. "liczbaPierwsza" 
//2. "liczbaDruga"
//
//Przypisz do nich dowolne liczby.
//
//Następnie napisz funkcję, która przyjmuje dwa parametry - stworzone przez Ciebie zmienne. 
//Ma ona zwracać (return) sumę tych parametrów.
//
//Podpowiedź: Wewnątrz funkcji zdeklaruj zmienną (np. "suma"), która będzie sumą dwóch przekazywanych parametrów. Następnie zwróć tą zmienną.
//
//Plik wgraj do repozytorium zdalnego i podeślij link do sprawdzenia.



var liczbaPierwsza = 9;
var liczbaDruga = 22;

function mojaSuma (liczbaPierwsza,liczbaDruga){
var suma = liczbaPierwsza + liczbaDruga;
    return suma;
}

console.log(mojaSuma(9,22));
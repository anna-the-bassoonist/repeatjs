//Stwórz plik "main.js".
//
//Zdeklaruj dwie zmienne o dowolnych nazwach, do których przypisz kolejne stringi:
//
//1. "Uwielbiam JavaScript" 
//2. "Jestem świetnym programistą"
//
//Napisz funkcję, która przyjmuje stworzone zmienne jako parametry. Funkcja ma zwracać string, który jest dłuższy. Wynik działania funkcji wyświetl w konsoli.
//
//Plik wgraj do zdalnego repozytorium i podeślij link do sprawdzenia.

let javaScript = 'Uwielbiam JavaScript';
let programista = 'Jestem świetnym programistą';

function programowanie(javaScript, programista) {
    if (javaScript.length > programista.length) {
        let result = javaScript.length;
        console.log(javaScript + ' jest dłuższym stringiem');
        return result;
    } else {
        let result = programista.length;
        console.log(programista + ' jest dłuższym stringiem');
        return result;
    }
}
programowanie(javaScript, programista);

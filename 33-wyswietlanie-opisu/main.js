//W pliku html stwórz podstawową strukturę html5, a następnie stwórz folder "js" a w nim plik "main.js".
//
//W pliku html podepnij Twój skrypt "main.js" oraz dodaj następującą strukturę:
//
//<h1>Produkt</p>
//<button>Wyświetl opis</button>
//<p id="opis"></p>
//W pliku main.js stwórz zmienną o dowolnej nazwie i przypisz do niej paragraf przy użyciu
//
//document.getElementById("nazwa-id");
//
//Następnie stwórz kolejną zmienną i przypisz do niej button (przy użyciu document.querySelector)
//
//Do buttona dodaj zdarzenie onclick, po którym zostanie wywołana funkcja.
//
//Funkcja ma dodać do paragrafu tekst "Akademia 108".
//
//Pliki dodaj do zdalnego repozytorium i podeślij link do sprawdzenia.


let mojaZmienna = document.getElementById('opis');

let buttonZmienna = document.querySelector('button');

buttonZmienna.onclick = function(){
    mojaZmienna.textContent = 'Akademia 108';
}
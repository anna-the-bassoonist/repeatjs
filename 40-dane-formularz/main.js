//W pliku html stwórz podstawową strukturę html5, a następnie stwórz folder "js" a w nim plik "main.js". W pliku html podepnij Twój skrypt.
//
//W html stwórz prosty formularz z następującymi polami:
//1. Imię
//2. Nazwisko 
//3. Numer telefonu
//
//Poniżej formularza stwórz następującą strukturę:
//
//<button>Wyświetl dane</button>
//<div id="container">
//    <p>Dane:</p>
//    <p id="name"></p>
//    <p id="surname"></p>
//    <p id="phone"></p>
//</div>
//Twoim zadaniem jest stworzyć funkcję uruchamianą po kliknięciu buttona.
//
//Funkcja powinna pobierać dane z inputów formularza i wstawiać je do odpowiednich paragrafów. 
//Należy użyć do tego właściwości .value
//
//Przykład:
//
//var nazwa = document.getElementById("nazwa-id");
//console.log(nazwa.value);
//Dodatkowo do projektu dołącz plik css, w którym nadaj dowolny wygląd Twojej stronie.
//
//Pliki dodaj do zdalnego repozytorium i podeślij link do sprawdzenia.
//



document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('button').addEventListener('click', function(){
        var name = document.querySelector('input[name=imie]');
        document.getElementById('name').innerHTML = name.value;
        
        var nazwisko = document.querySelector('input[name=nazwisko]');
        document.getElementById('surname').innerHTML = nazwisko.value;

        var telefon = document.querySelector('input[name=number]');
        document.getElementById('phone').innerHTML = telefon.value;
    });
    console.log('dziala');
});

//'use strict';
//
//
//function wyswietlDane(e) {
//    e.preventDefault();
//    let imieTo = document.getElementById('imie').value;
//    let nazwiskoTo = document.getElementById('nazwisko').value;
//    let telefonTen = document.getElementById('tel').value;
//    
//    document.getElementById('name').innerText= imieTo;
//    document.getElementById('surname').innerText= nazwiskoTo;
//    document.getElementById('phone').innerText = telefonTen;
//
//    
//    
//    console.log('kdk');
//}
//
//let btn = document.getElementById("btn");
//btn.addEventListener("click", wyswietlDane);
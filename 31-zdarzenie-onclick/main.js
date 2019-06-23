//W pliku html stwórz podstawową strukturę html5, a następnie stwórz folder "js" a w nim plik "main.js".
//
//Wewnątrz body dodaj button z napisem "Klik!". Podepnij Twój skrypt main.js.
//
//W pliku main.js stworz zmienną o o nazwie "button" i przypisz do niej stworzony wcześniej przycisk (przy użyciu document.querySelector).
//
//Następnie zaprogramuj event poprzez dodanie atrybutu onclick w buttonie, który po jego kliknięciu będzie wyświetlał alert z napisem "Klik działa!".
//
//Pliki dodaj do zdalnego repozytorium i podeślij link do sprawdzenia.


document.addEventListener("DOMContentLoaded", function () {
    let button = document.querySelector('button');
   button.onclick = function(){
       alert('Klik dziala');
   }
});

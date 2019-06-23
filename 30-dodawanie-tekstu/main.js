//W pliku html stwórz podstawową strukturę html5, a następnie stwórz folder "js" a w nim plik "main.js".
//
//W pliku html wewnątrz body dodaj pusty paragraf oraz podepnij Twój skrypt main.js.
//
//W pliku main.js stworz zmienną o dowolnej nazwie i przypisz do niej stworzony wcześniej paragraf (przy użyciu document.querySelector).
//Następnie dodaj do paragrafu dowolny tekst.
//
//Pliki dodaj do zdalnego repozytorium i podeślij link do sprawdzenia.




document.addEventListener("DOMContentLoaded",function(){
    let mojaZmienna = document.querySelector('p');
mojaZmienna.innerHTML = 'dodałam tekst';
})

//mojaZmienna.textContent = 'dodałam tekst';

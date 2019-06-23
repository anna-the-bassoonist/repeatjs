'use strict';
class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }
    opiszKsiazke() {
        if (this.przeczytana == true) {
            return `książka ma tytuł:${this.tytul},autorem jest ${this.autor} i zostala przeczytana.`;
        } else {
            return `książka ma tytuł:${this.tytul},autorem jest ${this.autor} i nie zostala przeczytana.`;
        }

    }
}
let potter = new Ksiazka('Harry Potter i Kamien Filozoficzny', 'J.Rowling', true);
let sapkowski = new Ksiazka('Wiedzmin', 'Sapkowski', true);
let austin = new Ksiazka('chooba Addisona', 'Austin', false);
potter.opiszKsiazke();
sapkowski.opiszKsiazke();
austin.opiszKsiazke();

let biblioteka = [potter, sapkowski, austin];

function iloscPrzeczytanych(biblioteka) {
    let wynik = 0;
    for (let i = 0 ; i < biblioteka.length; i++) {
        if (biblioteka[i].przeczytana === true) {
            wynik += 1;
        }
        console.log(biblioteka[i].opiszKsiazke());
    }
    console.log(`Ilosc przeczytanych ksiazek to:${wynik}`);
}

iloscPrzeczytanych(biblioteka);

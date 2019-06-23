class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }

    opiszKsiazke() {
        if (this.przeczytana === true) {
            console.log(`Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i została przeczytana.`);
        } else {
            console.log(`Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i nie została przeczytana.`);
        }
    }
}

let potter = new Ksiazka('Harry Potter', 'J. Rowling', true);
let wladca = new Ksiazka('Władca Pierścieni', 'J.R.R. Tolkien', true);
let pirx = new Ksiazka('Przygody Kapitana Pirxa', 'S. Lem', false);

potter.opiszKsiazke();
wladca.opiszKsiazke();
pirx.opiszKsiazke();

let mojaBiblioteka = [potter, wladca, pirx];

function iloscPrzeczytanych(mojaBiblioteka) {
    let suma = 0;
    for (let i = 0; i < mojaBiblioteka.length; i++) {
        if (mojaBiblioteka[i].przeczytana == true) {
            suma += 1;
        }
        mojaBiblioteka[i].opiszKsiazke();
    }
    console.log(`Ilość przeczytanych książek wynosi ${suma}`);
//    return suma;
}
console.log('dziala');
iloscPrzeczytanych(mojaBiblioteka);

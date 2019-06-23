//Stwórz plik "main.js".
//
//Napisz funkcję, która przyjmuje jako parametry dwie liczby, które przekażesz podczas wywoływania funkcji.
//
//Funkcja ma zwracać true, jeśli jedna z liczb jest równa 20 lub jeśli suma tych dwóch liczb jest mniejsza lub równa 20.
//
//Wgraj plik do zdalnego repozytorium i podeślij link do sprawdzenia.

function sprawdzanieDwa(liczba1, liczba2) {
    if (liczba1 == 20 || liczba2 == 20 || (liczba1 + liczba2) <= 20) {
        return true;
    } else {
        return false;
    }
}
console.log(sprawdzanieDwa(55,2));
